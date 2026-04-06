import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Form } from './Form';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const labelRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formCardRef = useRef(null);
  const formFieldsRef = useRef(null);
  const btnRef = useRef(null);

  const [budget, setBudget] = useState('$1000 - $5000');
  const [service, setService] = useState('Consultancy');
  const [submitted, setSubmitted] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.set(labelRef.current, { opacity: 0, y: 20 });
    gsap.set(headingRef.current, { opacity: 0, y: 60, skewY: 3 });
    gsap.set(contactInfoRef.current, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
      .to(
        headingRef.current,
        { opacity: 1, y: 0, skewY: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.2'
      )
      .to(
        contactInfoRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );
  }, []);

  const handleSubmit = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 0.92,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => setSubmitted(true),
      });
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#111111' }}>
      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <div ref={labelRef} className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
            <span className="text-xs tracking-[0.22em] uppercase text-white/50">
              Get In Touch
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-10"
            style={{ letterSpacing: '-0.02em' }}>
            Tell us about
            <br />
            your project
            <span className="block text-white/30">—whether it's a</span>
            <span className="block">
              website, SEO,
              <br />
              or marketing.
            </span>
          </h2>

          <div ref={contactInfoRef} className="grid grid-cols-2 gap-8 mt-4">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/40">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.87 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17z" />
                </svg>
                <span className="text-[11px] tracking-[0.18em] uppercase text-white/40">
                  Talk To Us
                </span>
              </div>
              <p className="text-white/60 text-base leading-relaxed">
                Work and general inquiries
                <br />
                <span className="text-white/80">+123 456 789 00</span>
              </p>
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white/40">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[11px] tracking-[0.18em] uppercase text-white/40">
                  Post Address
                </span>
              </div>
              <p className="text-white/60 text-base leading-relaxed">
                541 Melville Ave, Palo Alto, CA
                <br />
                94301, United States
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <Form
          formCardRef={formCardRef}
          formFieldsRef={formFieldsRef}
          budget={budget}
          setBudget={setBudget}
          service={service}
          setService={setService}
          submitted={submitted}
          btnRef={btnRef}
          handleSubmit={handleSubmit}
          setHovering={setHovering}
          hovering={hovering}
        />
      </div>
    </section>
  );
}
