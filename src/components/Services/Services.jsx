import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { marqueeItems } from './marqueeItems';
import { servicesItems } from './servicesItems';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [activeId, setActiveId] = useState(1);
  const headingRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );
    }
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 85%' },
        }
      );
    }
  }, []);

  return (
    <section
      className="bg-[#0A0A0A] rounded-3xl text-white overflow-hidden"
      style={{
        margin: '16px 32px 0 32px',
      }}>
      {/* Main content */}
      <div className="px-6 md:px-16 py-">
        {/* Heading */}
        <div
          ref={headingRef}
          className="text-center mb-16 "
          style={{ fontFamily: 'Funnel Display, sans-serif' }}>
          <h2
            className=" leading-none"
            style={{
              fontSize: 'clamp(48px, 8vw, 120px)',
            }}>
            Company
          </h2>
          <h2
            className=" leading-none"
            style={{
              fontSize: 'clamp(48px, 8vw, 120px)',
              color: '#FFFFFF4D',
              // WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            }}>
            expertise
          </h2>
        </div>

        {/* Accordion list */}
        <div ref={listRef} className="max-w-7xl mx-auto">
          {servicesItems.map(service => (
            <div key={service.id} className="border-b border-white/10">
              {/* Header row — পুরো row click করলে open হবে */}
              <div
                className="flex items-start gap-38 py-5 cursor-pointer"
                onClick={() => setActiveId(activeId === service.id ? null : service.id)}>
                {/* +/- icon */}
                <div
                  className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 mt-1"
                  style={{
                    borderColor:
                      activeId === service.id ? 'white' : 'rgba(255,255,255,0.3)',
                    background: activeId === service.id ? 'white' : 'transparent',
                  }}>
                  <span
                    className={`text-lg leading-none transition-all duration-300
        ${activeId === service.id ? 'text-black' : 'text-white/60'}`}>
                    {activeId === service.id ? '−' : '+'}
                  </span>
                </div>

                {/* Right side — title + expanded content */}
                <div className="flex-1">
                  <span
                    className={`md:text-lg font-medium tracking-wide transition-colors duration-300
        ${activeId === service.id ? 'text-white' : 'text-white'}`}>
                    {service.title}
                  </span>

                  {/* Expanded content */}
                  <div
                    className={`overflow-hidden transition-all duration-500
        ${activeId === service.id ? 'max-h-96 pb-6 mt-4' : 'max-h-0'}`}>
                    <div
                      className="flex items-start justify-between gap-8"
                      onClick={e => e.stopPropagation()}>
                      {/* Left — desc + tags */}
                      <div className="flex-1">
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                          {service.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map(tag => (
                            <span
                              key={tag}
                              className="text-white text-sm font-medium uppercase rounded-full px-4 py-1 bg-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right — image */}
                      <div className="rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={service.img}
                          alt={service.title}
                          className=" object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Hire us button */}
          <div className="mt-10">
            <a href="#contact" className="flex items-center gap-3 w-fit group">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <span className="text-black text-lg">+</span>
              </div>
              <span className="text-white text-xs uppercase tracking-widest">
                Hire Us Today
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative overflow-hidden pb-24 mt-24">
        {/* Scrolling items */}
        <div className="flex whitespace-nowrap animate-marquee gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 shrink-0">
              <img src={item.img} alt="" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-white text-lg tracking-wide">" {item.text} "</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
