import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;

    // duplicate content for seamless loop
    const totalWidth = el.scrollWidth / 2;

    gsap.to(el, {
      x: `-=${totalWidth}`,
      duration: 30, // 🔥 speed control (lower = faster)
      ease: 'linear',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
      },
    });
  }, []);

  const text = (
    <>
      <span className="mx-10 shrink-0">
        See how our team combines creativity, technology, and strategy
        <span className="mx-10 text-gray-300">✦</span>
      </span>
      <span className="mx-10 shrink-0">
        See how our team combines creativity, technology, and strategy
        <span className="mx-10 text-gray-300">✦</span>
      </span>
      <span className="mx-10 shrink-0">
        See how our team combines creativity, technology, and strategy
        <span className="mx-10 text-gray-300">✦</span>
      </span>
    </>
  );

  return (
    <div
      className="relative mt-16 overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 50%, black 70%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 50%, black 70%, transparent)',
      }}>
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-black font-semibold tracking-widest text-[clamp(40px,6vw,90px)]">
        {/* First copy */}
        {text}
        {/* Duplicate copy */}
        {text}
      </div>
    </div>
  );
};

export default Marquee;
