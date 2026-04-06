import gsap from 'gsap';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export const Form = ({
  formCardRef,
  formFieldsRef,
  budget,
  setBudget,
  service,
  setService,
  submitted,
  btnRef,
  handleSubmit,
  setHovering,
  hovering,
}) => {
useEffect(() => {
  if (!formFieldsRef.current) return;

  gsap.fromTo(
    formFieldsRef.current.children,
    {
      scale: 0.6,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formFieldsRef.current,
        start: 'top 85%',
        once: true,
      },
    }
  );
}, []);
  return (
    <div
      ref={formCardRef}
      className="bg-white rounded-2xl p-8 shadow-2xl"
      style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">
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
          <p className="text-gray-900 font-semibold text-xl">Message sent!</p>
          <p className="text-gray-400 text-base mt-1">We'll get back to you soon.</p>
        </div>
      ) : (
        <div ref={formFieldsRef} className="space-y-5">
          {/* Name */}
          <div className="flex justify-between items-center gap-6">
            <div className="w-full">
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                {/* Your Name */}
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-gray-100"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
                {/* Business Email */}
              </label>
              <input
                type="email"
                placeholder="Business Email"
                className="w-full rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors bg-gray-100"
              />
            </div>
          </div>

          {/* Budget */}
          <div className="flex justify-between items-center gap-6 ">
            <div className="w-full">
              <label className="block text-xs uppercase tracking-widest  mb-2">
                Budget
              </label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={e => setBudget(e.target.value)}
                  className="w-full b rounded-xl px-4 py-3.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition-colors bg-gray-100 appearance-none cursor-pointer">
                  <option>$1000 - $5000</option>
                  <option>$5000 - $15000</option>
                  <option>$15000 - $50000</option>
                  <option>$50000+</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
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

            {/* Service */}
            <div className="w-full">
              <label className="block text-xs uppercase tracking-widest  mb-2">
                Service
              </label>
              <div className="relative">
                <select
                  value={service}
                  onChange={e => setService(e.target.value)}
                  className="w-full  rounded-xl px-4 py-3.5 text-sm text-gray-700 focus:outline-none focus:border-gray-400 transition-colors bg-gray-100 appearance-none cursor-pointer">
                  <option>Consultancy</option>
                  <option>Web Design</option>
                  <option>SEO</option>
                  <option>Marketing</option>
                  <option>Branding</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
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
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">
              {/* Message */}
            </label>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full  rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400 transition-colors resize-none bg-gray-100"
            />
          </div>

          {/* Submit */}
          <button
            ref={btnRef}
            onClick={handleSubmit}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="flex items-center gap-3 mt-2"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}>
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
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
            <span className="text-base font-semibold tracking-widest uppercase text-gray-900">
              Let's Talk
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
