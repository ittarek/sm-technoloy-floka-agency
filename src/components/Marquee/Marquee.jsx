import React from 'react';

const Marquee = () => {
  return (
    <div className="relative mt-16 overflow-hidden">
      {/* Left blur */}
      <div
        className="absolute left-0 top-0 h-full w-32 z-10"
        style={{ background: 'linear-gradient(to right, #f5f5f3, transparent)' }}
      />
      {/* Right blur */}
      <div
        className="absolute right-0 top-0 h-full w-32 z-10"
        style={{ background: 'linear-gradient(to left, #f5f5f3, transparent)' }}
      />

      {/* Scrolling text */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-black font-bold uppercase tracking-widest mx-8 shrink-0"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            See how our team combines creativity, technology, and strategy See how our
            team combines creativity, technology, and strategy See how our team combines
            creativity, technology, and strategy See how our team combines creativity,
            technology, and strategy
            <span className="mx-8 text-gray-300">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
