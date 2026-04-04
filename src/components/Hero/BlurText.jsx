import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

export function BlurText({ text }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.fromTo(ref.current,
      { filter: 'blur(6px)', opacity: 0.4 },
      {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 90%',
          end: 'top 60%',
          scrub: true,
        }
      }
    )
  }, [])

  return (
    <p ref={ref} className="text-white/50 leading-snug mt-1">
      {text}
    </p>
  )
}