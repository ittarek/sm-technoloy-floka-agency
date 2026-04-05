import gsap from 'gsap';
import React from 'react'

export const RightStateCard = () => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col justify-end"
      ref={el => {
        if (!el) return;
        gsap.to(el.querySelector('img'), {
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }}
      style={{ height: '110px' }}>
      {/* Background image — scroll zoom */}
      <img
        src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img7.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ scale: '1', willChange: 'transform' }}
      />

      {/* Black blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[px]" />

      {/* Content */}
      <div className="relative z-10 p-6 flex  gap-1">
        <p className="text-white  uppercase tracking-widest">
          Worldwide base around the world
        </p>
        <p
          className="text-white font-black leading-none"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
          5<span className="text-white/30">+</span>
        </p>
      </div>
    </div>
  );
}
