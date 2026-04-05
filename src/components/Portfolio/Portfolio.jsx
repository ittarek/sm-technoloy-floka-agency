import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PortfolioCard } from './PortfolioCard';
import { projects } from './projects';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const headingRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (labelRef.current) {
      gsap.fromTo(
        labelRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%' },
        }
      );
    }
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );
    }
  }, []);

  return (
    <section className="bg-white px-6 md:px-16 py-20  max-w-350 mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-10 border-b border-gray-200 pb-6">
        <p
          ref={labelRef}
          className="text-gray-800  font-semibold uppercase tracking-widest">
          Portfolio
        </p>
      </div>

      <h2
        ref={headingRef}
        className="text-black animate__animated animate__lightSpeedInRight leading-tight text-left mb-12 text-4xl w-112.5  mx-auto font-semibold ">
        Strategy to build powerful digital solutions.
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <PortfolioCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* more button  */}
      <div className="flex justify-center items-center mt-11 mx-auto">
        <a
          href="#"
          className=" text-black  tracking-widest px-6 py-3 rounded-full transition-all duration-300 whitespace-nowrap font-bold mt-2">
          <button className="w-10 h-10 bg-black text-white rounded-full  mr-3">
            <span className="inline-block transition-transform duration-300 hover:rotate-90">
              +
            </span>
          </button>
          More Works
        </a>
      </div>
    </section>
  );
}
