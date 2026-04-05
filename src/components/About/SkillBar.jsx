import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function SkillBar({ label, value, isActive = false, isLast = false }) {
  const barRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!barRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !triggered.current) {
          triggered.current = true;
          gsap.fromTo(
            barRef.current,
            { width: '0%' },
            { width: `${value}%`, duration: 1.5, ease: 'power3.out' }
          );
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="relative rounded-xl -mb-2">
      <div
        ref={barRef}
        className={`flex items-center justify-between px-4 py-3 rounded-xl
          ${
            isActive
              ? 'bg-black text-white'
              : isLast
                ? 'bg-transparent border border-gray-300 text-gray-400'
                : 'bg-[#F5F5F5] text-black'
          }`}
        style={{ width: '0%', minWidth: 'fit-content' }}>
        <span
          className={`text-sm font-medium whitespace-nowrap
          ${isActive ? 'text-white' : isLast ? 'text-gray-400' : 'text-black'}`}>
          {label}
        </span>
        <span
          className={`text-sm font-bold whitespace-nowrap ml-4
          ${isActive ? 'text-white' : isLast ? 'text-gray-400' : 'text-black'}`}>
          {value}%
        </span>
      </div>
    </div>
  );
}
