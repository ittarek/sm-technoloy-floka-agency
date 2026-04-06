import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FanCard from './FanCard';
import { RightStateCard } from './RightStateCard';
import FunHeroImage from './FunHeroImage';
import { LeftSideSmallCard } from './LeftSideSmallCard';
import { RightSideBigCard } from './RightSideBigCard';
import { LogosSection } from './LogosSection';
import { VIDEOSection } from './VIDEOSection';
import TestimonialSection from './Testimonial/TestimonialSection';

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
      <LogosSection />

      {/* ── VIDEO / PHOTO BANNER ── */}
      <VIDEOSection videoRef={videoRef} />

      {/* ── CTA + TESTIMONIALS ── */}
 <TestimonialSection/>
    </div>
  );
}
