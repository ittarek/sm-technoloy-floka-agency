import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: 1,
    title: 'User Interface & Experience Design',
    desc: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...',
    tags: ['Branding', 'Magazine', 'Product'],
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-accordion-img1-300x250.webp',
  },
  {
    id: 2,
    title: 'Web Development',
    desc: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...',
    tags: ['Branding', 'Module', 'Product', 'UX'],
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-300x250.webp',
  },
  {
    id: 3,
    title: 'Search Engine Optimization',
    desc: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...',
    tags: ['Branding', 'Product', 'UX'],
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-300x250.webp',
  },
  {
    id: 4,
    title: 'Low-Code Development',
    desc: 'From brand strategy to immersive digital experiences, we offer end-to-end creative solutions...',
    tags: ['Branding', 'UX'],
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-300x250.webp',
  },
]

const marqueeItems = [
  { text: 'Super speedy website designer', img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-textslip-img4.webp' },
  { text: 'Great in UI/UX', img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-textslip-img1.webp' },
  { text: 'Best design communicator', img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-textslip-img2.webp' },
  { text: '10/10 well recommended', img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-textslip-img3.webp' },
]

export default function Services() {
  const [activeId, setActiveId] = useState(1)
  const headingRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
    }
    if (listRef.current) {
      gsap.fromTo(listRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: listRef.current, start: 'top 85%' } }
      )
    }
  }, [])

  return (
    <section className="bg-[#0a0a0a] text-white">

      {/* Main content */}
      <div className="px-6 md:px-16 py-24">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="font-bold leading-none" style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}>
            Company
          </h2>
          <h2
            className="font-bold leading-none"
            style={{
              fontSize: 'clamp(48px, 8vw, 120px)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.2)',
            }}
          >
            expertise
          </h2>
        </div>

        {/* Accordion list */}
        <div
          ref={listRef}
          className="max-w-4xl mx-auto"
        >
          {services.map(service => (
            <div
              key={service.id}
              className="border-b border-white/10"
            >
              {/* Header row */}
              <button
                className="w-full flex items-center gap-4 py-5 text-left group"
                onClick={() => setActiveId(activeId === service.id ? null : service.id)}
              >
                {/* +/- icon */}
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300
                  ${activeId === service.id ? 'border-white bg-white' : 'border-white/30'}`}
                >
                  <span className={`text-lg leading-none transition-all duration-300
                    ${activeId === service.id ? 'text-black' : 'text-white/60'}`}
                  >
                    {activeId === service.id ? '−' : '+'}
                  </span>
                </div>

                <span className={`text-base md:text-lg font-medium tracking-wide transition-colors duration-300
                  ${activeId === service.id ? 'text-white' : 'text-white/50 group-hover:text-white'}`}
                >
                  {service.title}
                </span>
              </button>

              {/* Expanded content */}
              <div className={`overflow-hidden transition-all duration-500
                ${activeId === service.id ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <div className="flex items-start justify-between gap-8 pl-12">
                  {/* Left — desc + tags */}
                  <div className="flex-1">
                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map(tag => (
                        <span
                          key={tag}
                          className="border border-white/20 text-white/60 text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — image */}
                  <div className="w-40 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Hire us button */}
          <div className="mt-10">
            <a
              href="#contact"
              className="flex items-center gap-3 w-fit group"
            >
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
      <div className="relative border-t border-white/10 py-5 overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-32 z-10"
          style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-32 z-10"
          style={{ background: 'linear-gradient(to left, #0a0a0a, transparent)' }}
        />

        {/* Scrolling items */}
        <div className="flex whitespace-nowrap animate-marquee gap-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 mx-8 flex-shrink-0">
              <img
                src={item.img}
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-white/60 text-sm tracking-wide">
                " {item.text} "
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}