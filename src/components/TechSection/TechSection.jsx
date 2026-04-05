import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FanCard from './FanCard';
import { RightStateCard } from './RightStateCard';
import FunHeroImage from './FunHeroImage';

gsap.registerPlugin(ScrollTrigger);

// ── Logo placeholder ──────────────────────────────────────────────
const Logo = ({ color = '#000', label = 'Logoipsum', size = 'md' }) => {
  const sizes = { sm: 'text-xs', md: 'text-sm', lg: 'text-base' };
  return (
    <div className="flex items-center gap-1.5">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="7" height="7" rx="1.5" fill={color} />
        <rect x="11" y="2" width="7" height="7" rx="1.5" fill={color} opacity=".5" />
        <rect x="2" y="11" width="7" height="7" rx="1.5" fill={color} opacity=".3" />
        <rect x="11" y="11" width="7" height="7" rx="1.5" fill={color} opacity=".7" />
      </svg>
      <span className={`font-semibold tracking-tight ${sizes[size]}`} style={{ color }}>
        {label}
      </span>
    </div>
  );
};

const logos = [
  { color: '#1a1a1a', label: 'Logoipsum' },
  { color: '#2563eb', label: 'LOGOIPSUM' },
  { color: '#7c3aed', label: 'Logipsum' },
  { color: '#111827', label: 'Logoipsum' },
  { color: '#374151', label: 'logo ipsum' },
  { color: '#dc2626', label: 'Logoipsum' },
  { color: '#ea580c', label: 'Logoipsum' },
];

// ── Star rating ───────────────────────────────────────────────────

const Stars = ({
  count = 5, // মোট star
  filled = 5, // ভরা star
  size = 6, // star size in px
  filledColor = '#f59e0b', // ভরা star color
  emptyColor = '#e5e7eb', // খালি star color
}) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => {
        // fractional fill check
        const isFull = i + 1 <= Math.floor(filled);
        const isHalf = !isFull && i < filled;

        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill={isFull ? filledColor : emptyColor}>
            <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8l-2.78 1.56.53-3.1L1.5 4.27l3.11-.45L6 1z" />
            {isHalf && (
              <path
                d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8l-2.78 1.56.53-3.1L1.5 4.27l3.11-.45L6 1z"
                fill={filledColor}
                style={{ clipPath: 'inset(0 50% 0 0)' }}
              />
            )}
          </svg>
        );
      })}
    </div>
  );
};

// ── Testimonial card ──────────────────────────────────────────────
const TestimonialCard = ({ name, role, text, stars = 4 }) => (
  <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
    <div>
      <p className="font-semibold text-sm text-gray-900">{name}</p>
      <p className="text-xs text-gray-400">{role}</p>
    </div>
    <Stars filled={stars} />
    <p className="text-xs text-gray-600 leading-relaxed">"{text}"</p>
    <p className="text-[10px] text-gray-300 mt-auto">— GMMostrariasDirect</p>
  </div>
);

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
              <div
                className="stats-card flex justify-center items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 gap-2"
                style={{ height: '110px' }}>
                <p className="text-lg text-gray-600 font-semibold leading-tight">
                  Successful projects completed
                </p>
                <p className="text-3xl flex items-center font-semibold text-gray-900 mt-1">
                  2k <span className="text-gray-400">+</span>
                </p>
              </div>

              {/* FanCard — big card */}
              <div style={{ height: '380px' }}>
                <FanCard />
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-3">
              {/* Rating — big card */}
              <div
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
                style={{ height: '380px' }}>
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <Stars filled={5} size={20} />
                  <p className="text-[80px] font-semibold text-gray-900 leading-none mt-2">
                    4.9<span className="text-gray-300">/5</span>
                  </p>
                </div>
                <p className="text-gray-400 text-base font-semibold leading-relaxed flex-1">
                  We offer end-to-end creative solutions that make brands unforgettable.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="flex items-center gap-3 w-fit text-black font-bold tracking-widest hover:opacity-80 transition-opacity duration-300">
                    <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 hover:-rotate-90">
                      +
                    </span>
                    hire us now
                  </a>
                </div>
              </div>

              {/* RightStateCard — small card */}
              <div style={{ height: '160px' }}>
                <RightStateCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS MARQUEE ── */}
      <section
        ref={logosRef}
        className="logos-section py-8 overflow-hidden border-y border-gray-200 bg-white">
        <p className="text-center text-[10px] uppercase tracking-widest text-gray-400 mb-5">
          Trusted by
        </p>
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              className="inline-flex items-center opacity-70 hover:opacity-100 transition-opacity">
              <Logo {...l} />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>

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
