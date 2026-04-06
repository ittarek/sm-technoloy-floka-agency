// hooks/useGlassShatter.js
import { useEffect } from 'react';
import * as THREE from 'three';

const VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const FRAGMENT = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uProgress;

  float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    float cols = 12.0;
    float rows = 14.0;
    vec2 cell = floor(uv * vec2(cols, rows));
    vec2 cellUv = fract(uv * vec2(cols, rows));

    float r1 = rand(cell);
    float r2 = rand(cell + vec2(1.3, 2.7));
    float r3 = rand(cell + vec2(3.1, 0.5));

    vec2 cellCenter = (cell + 0.5) / vec2(cols, rows);
    float dist = distance(cellCenter, uMouse);

    float shatter = smoothstep(0.6, 0.0, dist) * uProgress;

    vec2 dir = normalize(cellCenter - uMouse + vec2(r1 - 0.5, r2 - 0.5) * 0.3);
    float flyDist = shatter * (0.04 + r3 * 0.06);

    float angle = shatter * (r1 - 0.5) * 1.2;
    float s = sin(angle);
    float c = cos(angle);

    vec2 rotUv = cellUv - 0.5;
    rotUv = vec2(c * rotUv.x - s * rotUv.y, s * rotUv.x + c * rotUv.y);
    rotUv += 0.5;

    vec2 finalUv = mix(uv, uv + dir * flyDist, shatter);

    float crackX = step(0.97, cellUv.x) * shatter;
    float crackY = step(0.97, cellUv.y) * shatter;
    float crack = max(crackX, crackY);

    vec4 color = texture2D(uTexture, finalUv);
    color.rgb = mix(color.rgb, vec3(0.0), crack * 0.8);
    color.a = mix(1.0, 0.7, shatter * r2);

    gl_FragColor = color;
  }
`;

/**
 * useGlassShatter
 * @param {React.RefObject} containerRef  — canvas inject হবে এখানে
 * @param {string}          imageSrc      — image path বা URL
 * @param {object}          options
 * @param {number}          options.width         default 400
 * @param {number}          options.height        default 580
 * @param {number}          options.resetDelay    default 3000 (ms)
 */
export function useGlassShatter(containerRef, imageSrc, options = {}) {
  const { width = 400, height = 580, resetDelay = 3000 } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = width;
    const H = height;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(W / -2, W / 2, H / 2, H / -2, 1, 1000);
    camera.position.z = 1;
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTexture: { value: null },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uProgress: { value: 0.0 },
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(W, H);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const loader = new THREE.TextureLoader();
    loader.load(
      imageSrc,
      texture => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.needsUpdate = true;
        uniforms.uTexture.value = texture;
      },
      undefined,
      err => console.error('[useGlassShatter] Texture error:', err)
    );

    const targetMouse = { x: 0.5, y: 0.5 };
    const currentMouse = { x: 0.5, y: 0.5 };
    let targetProgress = 0.0;
    let currentProgress = 0.0;
    let isShattered = false;
    let resetTimer = null;

    const handleMouseMove = e => {
      const rect = container.getBoundingClientRect();
      targetMouse.x = (e.clientX - rect.left) / rect.width;
      targetMouse.y = 1 - (e.clientY - rect.top) / rect.height;
    };

    const handleMouseEnter = () => {
      if (!isShattered) {
        isShattered = true;
        targetProgress = 1.0;
        resetTimer = setTimeout(() => {
          targetProgress = 0.0;
          isShattered = false;
        }, resetDelay);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.06;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.06;
      currentProgress += (targetProgress - currentProgress) * 0.04;
      uniforms.uMouse.value.set(currentMouse.x, currentMouse.y);
      uniforms.uProgress.value = currentProgress;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(resetTimer);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [containerRef, imageSrc, width, height, resetDelay]);
}
