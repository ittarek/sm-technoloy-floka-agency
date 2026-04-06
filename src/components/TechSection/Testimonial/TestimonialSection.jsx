import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { testimonials } from './testimonials';
import { TestimonialColumn } from './TestimonialColumn';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (!headingRef.current) return;

    // Right থেকে lightspeed animation
    gsap.fromTo(
      headingRef.current,
      { x: 200, opacity: 0, skewX: -10 },
      {
        x: 0,
        opacity: 1,
        skewX: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 pb-16 pt-11">
      {/* Top row — label left, heading right */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
        <p className="text-xs uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-4 md:w-48 shrink-0">
          user feedbacks
        </p>

        {/* Heading — right side, lightspeed animation */}
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-xl text-left">
          Accelerating growth, and unlocking new potential.{' '}
          <span className="inline-flex gap-1 align-middle text-2xl">🌑🌒🌓</span> Let's
          build your brand—together.
        </h2>
      </div>

      {/* Testimonial columns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <TestimonialColumn
            key={t.name}
            testimonial={t}
            reverse={i % 2 !== 0}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
