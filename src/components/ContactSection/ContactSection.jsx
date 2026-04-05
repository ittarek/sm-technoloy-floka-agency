import { useEffect, useRef, useState } from 'react';

// GSAP CDN loaded via script tag in index.html
// Make sure to add to your project:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const labelRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formCardRef = useRef(null);
  const btnRef = useRef(null);

  const [budget, setBudget] = useState('$1000 - $5000');
  const [service, setService] = useState('CONSULTANCY');
  const [submitted, setSubmitted] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap) return;

    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(labelRef.current, { opacity: 0, y: 20 });
      gsap.set(headingRef.current, { opacity: 0, y: 60, skewY: 3 });
      gsap.set(contactInfoRef.current, { opacity: 0, y: 40 });
      gsap.set(formCardRef.current, { opacity: 0, x: 60, scale: 0.96 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .to(
          headingRef.current,
          { opacity: 1, y: 0, skewY: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.2'
        )
        .to(
          contactInfoRef.current,
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        )
        .to(
          formCardRef.current,
          { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        );

      // Subtle grain animation
      gsap.to('.grain-overlay', {
        backgroundPosition: '100% 100%',
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = () => {
    const gsap = window.gsap;
    if (gsap && btnRef.current) {
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
      {/* Grain texture overlay */}
      <div
        className="grain-overlay absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
          opacity: 0.5,
        }}
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text & contact info */}
        <div>
          {/* Label */}
          <div ref={labelRef} className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-60" />
            <span
              className="text-xs tracking-[0.22em] uppercase text-white/50"
              style={{ fontFamily: "'DM Mono', monospace" }}>
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h2
            ref={headingRef}
            className="text-5xl xl:text-6xl font-bold text-white leading-[1.08] mb-10"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.02em' }}>
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

          {/* Contact details */}
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
                <span
                  className="text-[10px] tracking-[0.18em] uppercase text-white/40"
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  Talk To Us
                </span>
              </div>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
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
                <span
                  className="text-[10px] tracking-[0.18em] uppercase text-white/40"
                  style={{ fontFamily: "'DM Mono', monospace" }}>
                  Post Address
                </span>
              </div>
              <p
                className="text-white/60 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                541 Melville Ave, Palo Alto, CA
                <br />
                94301, United States
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — Form card */}
        <div
          ref={formCardRef}
          className="bg-white rounded-2xl p-8 shadow-2xl"
          style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
          <h3
            className="text-xl font-semibold text-gray-900 mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}>
            Have a project in mind?
          </h3>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mb-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p
                className="text-gray-900 font-semibold text-lg"
                style={{ fontFamily: "'Syne', sans-serif" }}>
                Message sent!
              </p>
              <p
                className="text-gray-400 text-sm mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}>
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-xs tracking-widest text-gray-500 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-gray-50"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                />
                <input
                  type="email"
                  placeholder="BUSINESS EMAIL"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-xs tracking-widest text-gray-500 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-gray-50"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                />
              </div>

              {/* Budget + Service */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[9px] tracking-[0.15em] text-gray-400 uppercase pointer-events-none"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      top: '10px',
                      transform: 'none',
                    }}>
                    Budget
                  </span>
                  <select
                    value={budget}
                    onChange={e => setBudget(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 pb-2 pt-7 text-xs tracking-wider text-gray-700 focus:outline-none focus:border-gray-400 transition-colors bg-gray-50 appearance-none cursor-pointer"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    <option>$1000 - $5000</option>
                    <option>$5000 - $15000</option>
                    <option>$15000 - $50000</option>
                    <option>$50000+</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>

                <div className="relative">
                  <span
                    className="absolute left-3 text-[9px] tracking-[0.15em] text-gray-400 uppercase pointer-events-none"
                    style={{ fontFamily: "'DM Mono', monospace", top: '10px' }}>
                    Service
                  </span>
                  <select
                    value={service}
                    onChange={e => setService(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 pb-2 pt-7 text-xs tracking-wider text-gray-700 focus:outline-none focus:border-gray-400 transition-colors bg-gray-50 appearance-none cursor-pointer"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    <option>CONSULTANCY</option>
                    <option>WEB DESIGN</option>
                    <option>SEO</option>
                    <option>MARKETING</option>
                    <option>BRANDING</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <textarea
                placeholder="MESSAGE"
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-xs tracking-widest text-gray-500 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none bg-gray-50"
                style={{ fontFamily: "'DM Mono', monospace" }}
              />

              {/* Submit */}
              <button
                ref={btnRef}
                onClick={handleSubmit}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                className="flex items-center gap-3 group transition-all duration-300"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hovering ? '#333' : '#111',
                    transform: hovering
                      ? 'scale(1.1) rotate(45deg)'
                      : 'scale(1) rotate(0deg)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <span
                  className="text-sm font-semibold tracking-widest uppercase text-gray-900 transition-all duration-200"
                  style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '0.12em' }}>
                  Let's Talk
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Google Fonts loader (inject into head in your app) */}
      {/* Add to index.html: */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"> */}
    </section>
  );
}
