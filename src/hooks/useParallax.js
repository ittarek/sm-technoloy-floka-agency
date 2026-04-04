import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useParallax(strength = 20) {
  const containerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    const handleMouseMove = e => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(target, {
        x: x * strength,
        y: y * strength,
        duration: 1.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 1.5,
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
