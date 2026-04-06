import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGlassShatter } from '../../hooks/useGlassShatter';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { title: 'Best Designer Awards', company: 'Awwwards', year: '2025' },
  { title: 'Peaky UI Designer', company: 'Google', year: '2024' },
  { title: 'Great in UX', company: 'Apple', year: '2023' },
  { title: 'Best Website Pick', company: 'Microsoft', year: '2022' },
  { title: 'Nelson UI & UX Designer', company: 'Samsung', year: '2021' },
];

const HEADING =
  'Driven by passion and grounded in expertise, our team turns bold ideas into reality, leading the way in creative innovation.';

function splitIntoLines(text, wordsPerLine = 6) {
  const words = text.split(' ');
  const lines = [];
  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(' '));
  }
  return lines;
}

export const Awards = () => {
  const leftRef = useRef(null);
  const awardsRef = useRef(null);
  const lineRefs = useRef([]);
  // ✅ এক লাইনেই glass shatter effect
  useGlassShatter(leftRef, '/image/heroImage_wave.webp', {
    width: 420,
    height: 420,
    resetDelay: 3000,
  });
  const lines = splitIntoLines(HEADING);

  useEffect(() => {
    // Left image slide-in
    gsap.fromTo(
      leftRef.current,
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 85%' },
      }
    );

    // ✅ Heading: RIGHT থেকে line by line আসবে
    lineRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: '100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 0.75,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      );
    });

    // List stagger
    gsap.fromTo(
      awardsRef.current.children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: awardsRef.current, start: 'top 85%' },
      }
    );
  }, []);

  return (
    <>
      {/* ✅ Hover CSS — inline style দিয়ে করা হয়েছে কারণ GSAP transform override করে */}
      <style>{`
        .award-item {
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.2s, box-shadow 0.2s;
          transform-origin: center;
        }
        .award-item:hover {
          transform: scale(0.95) !important;
          background: #ffffff !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
      `}</style>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Image */}

          <div className="md:w-102 shrink-0">
            <div
              ref={leftRef}
              className="rounded-3xl overflow-hidden"
              style={{ height: '420px' }}
            />
            <p className="text-gray-600 font-medium uppercase mt-6">get rewards</p>
          </div>
          {/* Right Content */}
          <div className="flex-1 overflow-hidden">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full border flex items-center justify-center mb-4">
              🏆
            </div>

            {/* ✅ Heading — overflow hidden wrapper দরকার যাতে slide দেখা যায় */}
            <h2
              className="font-bold leading-snug mb-8"
              style={{ fontSize: 'clamp(24px, 3vw, 42px)' }}>
              {lines.map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <span
                    ref={el => (lineRefs.current[i] = el)}
                    className="block"
                    style={{ opacity: 0, transform: 'translateX(100%)' }}>
                    {line}
                  </span>
                </span>
              ))}
            </h2>

            {/* Award List */}
            <div ref={awardsRef} className="flex flex-col gap-3">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="award-item flex items-center justify-between px-6 py-5 rounded-2xl border border-gray-200 bg-gray-50 cursor-pointer">
                  <span className="text-gray-700 font-semibold">{award.title}</span>
                  <span className="text-gray-400">{award.company}</span>
                  <span className="text-gray-400">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
