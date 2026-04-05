import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fade-up', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      gsap.from('.hero-text', {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: 'power4.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white px-6 md:px-16 pt-24 pb-10 relative overflow-hidden">
      {/* Big Heading */}
      <div className="text-center mb-20 relative">
        <h2 className="hero-text text-5xl md:text-8xl font-semibold leading-none">
          Let’s <br />
          <span className="text-white/80">talk now</span>
        </h2>

        {/* Circle Button */}
        <div className="mt-6 flex justify-center">
          <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center text-xl hover:scale-110 transition">
            →
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Left Image */}
        <div className="fade-up">
          <div className="relative w-full max-w-xs">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              className="rounded-2xl object-cover"
            />
            {/* Logo overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/80">
              F
            </div>
          </div>
        </div>

        {/* Middle Links */}
        <div className="fade-up space-y-4 text-lg">
          <p className="hover:text-gray-400 cursor-pointer">About Us</p>
          <p className="hover:text-gray-400 cursor-pointer">Journal</p>
          <p className="hover:text-gray-400 cursor-pointer">Faq</p>
          <p className="hover:text-gray-400 cursor-pointer">Get In Touch</p>
          <p className="hover:text-gray-400 cursor-pointer">Careers</p>
        </div>

        {/* Right Content */}
        <div className="fade-up text-sm text-gray-400 space-y-6 max-w-sm">
          <p>
            At Floka, we believe furniture should be more than just functional—it should
            tell your story. With a focus on timeless design, sustainable materials, and
            expert craftsmanship, we create pieces that feel personal.
          </p>

          <div className="space-y-2 text-white text-sm">
            <p>info@floka-design.com</p>
            <p>+123 (456 789 00)</p>
            <p>12/A, Boston Tower, NYC</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            {['f', 'x', 'in', 'be'].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition cursor-pointer">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow (optional) */}
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
    </footer>
  );
}
