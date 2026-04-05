import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useParallax(strength = 20) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    // default scale
    gsap.set(target, { scale: 1.2 });

    const handleMouseMove = e => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(target, {
        x: x * strength,
        y: y * strength,
        scale: 1.3, // hover zoom
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(target, {
        x: 0,
        y: 0,
        scale: 1.2, // back to normal
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return { containerRef, targetRef };
}
