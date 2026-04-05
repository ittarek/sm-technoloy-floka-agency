import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export function SkillBar({ label, value }) {
  const barRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: barRef.current,
      start: 'top 90%',
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        gsap.fromTo(
          barRef.current,
          { width: '0%' },
          { width: `${value}%`, duration: 1.5, ease: 'power3.out' }
        );
      },
    });
  }, [value]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-black text-sm font-medium">{label}</span>
        <span className="text-black text-sm font-bold">{value}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div ref={barRef} className="bg-black h-2 rounded-full" style={{ width: '0%' }} />
      </div>
    </div>
  );
}
