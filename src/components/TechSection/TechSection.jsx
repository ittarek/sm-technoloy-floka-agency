import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FanCard from './FanCard';
import { RightStateCard } from './RightStateCard';
import FunHeroImage from './FunHeroImage';
import { Stars } from './Stars';
import { TestimonialCard } from './TestimonialCard';
import { LeftSideSmallCard } from './LeftSideSmallCard';
import { RightSideBigCard } from './RightSideBigCard';
import { LogosSection } from './LogosSection';

gsap.registerPlugin(ScrollTrigger);





// ── Main Section ──────────────────────────────────────────────────
export default function TechSection() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const logosRef = useRef(null);
  const videoRef = useRef(null);
  const ctaRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text
      gsap.from('.hero-tag', { opacity: 0, y: -10, duration: 0.5, ease: 'power2.out' });
      gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1,
      });
      gsap.from('.hero-image', {
        opacity: 0,
        x: -40,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.05,
      });

      // Stats card
      gsap.from('.stats-card', {
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Logos marquee — handled by CSS, but fade in the section
      gsap.from('.logos-section', {
        scrollTrigger: { trigger: logosRef.current, start: 'top 90%' },
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out',
      });

      // Video section
      gsap.from('.video-wrap', {
        scrollTrigger: { trigger: videoRef.current, start: 'top 85%' },
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: 'power3.out',
      });

      // CTA text
      gsap.from('.cta-text', {
        scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' },
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: 'power2.out',
      });

      // Testimonials
      gsap.from('.tcard', {
        scrollTrigger: { trigger: testimonialsRef.current, start: 'top 85%' },
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f5f5f3] min-h-screen font-sans">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: image */}
        <FunHeroImage />

        {/* Right: copy + stats */}
        <div className="flex flex-col gap-6" ref={statsRef}>
          <span className="hero-tag text-[16px] uppercase tracking-widest  font-medium">
            fun facts
          </span>
          <h2
            className="hero-title  text-2xl md:text-[45px] font-semibold text-gray-900 leading-tight"
            style={{ fontFamily: 'funnel display, sens serif' }}>
            Consistently delivering impactful results through a perfect blend of design
            and functionality.
          </h2>

          {/* Stats row */}
          <div
            className="grid gap-3 w-full"
            style={{
              gridTemplateColumns: '1fr 1fr',
              maxWidth: '1040px',
              margin: '0 auto',
            }}>
            {/* Left column */}
            <div className="flex flex-col gap-3">
              {/* 2k — small card */}
              <LeftSideSmallCard />

              {/* FanCard — big card */}
              <div style={{ height: '380px' }}>
                <FanCard />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-3">
              {/* Rating — big card */}
              <RightSideBigCard />

              {/* RightStateCard — small card */}
              <div style={{ height: '160px' }}>
                <RightStateCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS section ── */}
   <LogosSection/>

      {/* ── VIDEO / PHOTO BANNER ── */}
      <section ref={videoRef} className="max-w-4xl mx-auto px-6 py-10">
        <div className="video-wrap relative rounded-3xl overflow-hidden shadow-lg h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80"
            alt="Team at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* Play button */}
          <button className="absolute bottom-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-4 py-2 text-xs font-semibold text-gray-900 shadow hover:bg-white transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <polygon points="3,1 13,7 3,13" />
            </svg>
            Play Video
          </button>
        </div>
      </section>

      {/* ── CTA + TESTIMONIALS ── */}
      <section ref={ctaRef} className="max-w-4xl mx-auto px-6 pb-16">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">
          With Milicious
        </p>
        <h2 className="cta-text text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight max-w-md">
          Accelerating growth, and unlocking new potential.{' '}
          <span className="inline-flex gap-1 align-middle text-xl">🌑🌒🌓</span> Let's
          build your brand—together.
        </h2>

        {/* Testimonial grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="tcard">
            <TestimonialCard
              name="Nicolani Arlington"
              role="3 reviews"
              stars={5}
              text="As we continued to use our tool and found more use cases, our feature requests quickly found their way into their backlog."
            />
          </div>
          <div className="tcard">
            <TestimonialCard
              name="Julian Tilaumont"
              role="2 reviews"
              stars={4}
              text="As we continued to use our tool and found more use cases, our feature requests quickly found their way into their backlog."
            />
          </div>
          <div className="tcard">
            <TestimonialCard
              name="Felpa Li Hoathorne"
              role="3 reviews"
              stars={5}
              text="As we continued to use our tool and found more use cases, our feature requests quickly found their way into their backlog."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
