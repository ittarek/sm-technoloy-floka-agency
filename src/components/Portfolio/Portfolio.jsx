import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: 'Aldan Branding',
    year: '2025',
    category: 'branding, ux',
    size: 'half',
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp',
    icon: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon7.svg',
  },
  {
    id: 2,
    title: 'Aldan Branding',
    year: '2025',
    category: 'branding, ux',
    size: 'half',
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg',
    icon: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon6.svg',
  },
  {
    id: 3,
    title: 'Aldan Branding',
    year: '2025',
    category: 'branding, module, ux',
    size: 'full',
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp',
    icon: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon5.svg',
  },
  {
    id: 4,
    title: 'Aldan Branding',
    year: '2025',
    category: 'branding, product',
    size: 'half',
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp',
    icon: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon4.svg',
  },
  {
    id: 5,
    title: 'Aldan Branding',
    year: '2025',
    category: 'branding, ux',
    size: 'half',
    img: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp',
    icon: 'https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon3.svg',
  },
]

function PortfolioCard({ project, index }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return

    // Entrance animation
    gsap.fromTo(cardRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        delay: (index % 2) * 0.15,
        scrollTrigger: { trigger: cardRef.current, start: 'top 85%' }
      }
    )

    // Hover parallax
    const card = cardRef.current
    const img = imgRef.current

    const onEnter = (e) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(img, { x: x * 15, y: y * 15, duration: 1, ease: 'power2.out' })
    }
    const onLeave = () => {
      gsap.to(img, { x: 0, y: 0, duration: 1, ease: 'power2.out' })
    }

    card.addEventListener('mousemove', onEnter)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onEnter)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`group cursor-pointer overflow-hidden rounded-2xl relative
        ${project.size === 'full' ? 'col-span-2' : 'col-span-1'}`}
      style={{ height: project.size === 'full' ? '340px' : '260px' }}
    >
      {/* Image */}
      <img
        ref={imgRef}
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ scale: '1.1', willChange: 'transform' }}
      />

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

      {/* Top left icon */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
        <img src={project.icon} alt="" className="w-4 h-4" />
        <span className="text-black text-xs font-semibold tracking-wide">Logoipsum</span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between">
        <span className="text-white text-xs uppercase tracking-widest font-medium">
          {project.title}
        </span>
        <span className="text-white/60 text-xs">{project.year}</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const headingRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    if (labelRef.current) {
      gsap.fromTo(labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: labelRef.current, start: 'top 85%' } }
      )
    }
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
      )
    }
  }, [])

  return (
    <section className="bg-white px-6 md:px-16 py-20  max-w-350 mx-auto">
      {/* Header */}
      <div className="flex items-start justify-between mb-10 border-b border-gray-100 pb-6">
        <p ref={labelRef} className="text-gray-400 text-xs uppercase tracking-widest">
          Portfolio
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-12">
        <h2
          ref={headingRef}
          className="text-black font-bold leading-tight"
          style={{ fontSize: 'clamp(24px, 3.5vw, 48px)', maxWidth: '500px' }}>
          Strategy to build powerful digital solutions.
        </h2>

        <a
          href="#"
          className="border border-black text-black text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap mt-2">
          More Works
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <PortfolioCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}