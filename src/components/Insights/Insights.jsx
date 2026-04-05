import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Insights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f3f3f3] py-20 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-xs tracking-[0.2em] text-gray-500 mb-3">INSIGHTS</p>
        <h2 className="text-3xl md:text-5xl font-semibold">Company blog & updates</h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Dark Card */}
          <div className="card bg-black text-white p-6 rounded-2xl">
            <div className="text-xs text-gray-400 flex gap-3 mb-4">
              <span>WEB3</span>
              <span>NOV 07, 2025</span>
            </div>
            <p className="text-lg">Seamless user interfaces, crafted with intent.</p>
          </div>

          {/* Image */}
          <div className="card overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          {/* Image */}
          <div className="card overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Light Caption Card */}
          <div className="card bg-white p-5 rounded-2xl">
            <div className="text-xs text-gray-500 flex gap-3 mb-2">
              <span>WEB3</span>
              <span>NOV 07, 2025</span>
            </div>
            <p className="text-sm">Creative web platforms, designed for growth.</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Dark Card */}
          <div className="card bg-black text-white p-6 rounded-2xl">
            <div className="text-xs text-gray-400 flex gap-3 mb-4">
              <span>WEB3</span>
              <span>NOV 07, 2025</span>
            </div>
            <p className="text-lg">Immersive virtual journeys, built with precision</p>
          </div>

          {/* Image */}
          <div className="card overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
