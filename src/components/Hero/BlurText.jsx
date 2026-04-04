import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BlurText({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    const animation = gsap.fromTo(
      el,
      { filter: 'blur(4px)', opacity: 0.5 }, // start: visible but blur
      {
        filter: 'blur(0px)',
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 95%', // একটু scroll হলেই trigger
          end: 'top 85%', // short distance = fast clean
          scrub: true,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <p ref={ref} className="text-white/70">
      {text}
    </p>
  );
}
