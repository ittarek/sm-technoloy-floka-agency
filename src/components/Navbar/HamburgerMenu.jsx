// HamburgerMenu.jsx
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MobileDropdown } from './MobileDropdown';
import { navItems } from './navItems';

function HamburgerIcon({ isOpen, color = 'black' }) {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  const handleMouseEnter = () => {
    if (isOpen) return;
    [line1, line2, line3].forEach((ref, i) => {
      gsap.fromTo(
        ref.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.35, delay: i * 0.08, ease: 'power3.out' }
      );
    });
  };

  useEffect(() => {
    if (!line1.current) return;
    if (isOpen) {
      gsap.to(line1.current, { rotate: 45, y: 8, duration: 0.35, ease: 'power3.out' });
      gsap.to(line2.current, { opacity: 0, x: -10, duration: 0.2, ease: 'power3.in' });
      gsap.to(line3.current, { rotate: -45, y: -8, duration: 0.35, ease: 'power3.out' });
    } else {
      gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.35, ease: 'power3.out' });
      gsap.to(line2.current, { opacity: 1, x: 0, duration: 0.35, ease: 'power3.out' });
      gsap.to(line3.current, { rotate: 0, y: 0, duration: 0.35, ease: 'power3.out' });
    }
  }, [isOpen]);

  return (
    <div
      className="flex flex-col gap-1.5 cursor-pointer py-1"
      onMouseEnter={handleMouseEnter}
      style={{ color }}
    >
      <span ref={line1} className="block h-[1.5px] w-6 bg-current origin-center" />
      <span ref={line2} className="block h-[1.5px] w-4 bg-current origin-center ml-auto" />
      <span ref={line3} className="block h-[1.5px] w-6 bg-current origin-center" />
    </div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div
      className="flex items-center gap-3 mx-6 mt-5 mb-1 px-4 py-3 rounded-2xl"
      style={{ background: '#f5f5f3', border: '1px solid #e8e8e4' }}
    >
      {/* Search Icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#aaa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="KEYWORDS..."
        style={{
          flex: 1,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.12em',
          color: '#111',
          textTransform: 'uppercase',
        }}
      />

      {/* Clear button */}
      {query && (
        <button
          onClick={() => setQuery('')}
          style={{ color: '#aaa', fontSize: '16px', lineHeight: 1, background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ×
        </button>
      )}
    </div>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* ── Hamburger trigger ── */}
      <button
        className="md:hidden flex items-center justify-center p-2"
        style={{ color: 'black' }}
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <HamburgerIcon isOpen={false} color="black" />
      </button>

      {/* ── Full screen panel ── */}
      <div
        className="fixed flex flex-col"
        style={{
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          // ✅ White background
          background: '#ffffff',
          zIndex: 200,
          transform: isOpen ? 'translateX(0%)' : 'translateX(100%)',
          transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* ── Header — logo + close ── */}
        <div
          className="flex items-center justify-between px-6 flex-shrink-0"
          style={{
            paddingTop: '20px',
            paddingBottom: '20px',
            borderBottom: '1px solid #f0f0ec',
          }}
        >
          <img
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png"
            alt="logo"
            className="h-5 w-auto"
            // ✅ White bg এ dark logo — filter সরানো হয়েছে
          />
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 p-2"
            aria-label="Close menu"
          >
            <span
              style={{
                color: '#999',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Close
            </span>
            {/* ✅ Close icon black — white bg তে */}
            <HamburgerIcon isOpen={true} color="black" />
          </button>
        </div>

        {/* ── Search bar ── */}
        <SearchBar />

        {/* ── Nav items — scrollable ── */}
        <div
          className="flex-1 px-6 py-2"
          style={{ overflowY: 'auto' }}
        >
          {/* ✅ MobileDropdown এ white bg এর জন্য dark text pass */}
          <MobileDropdown
            navItems={navItems}
            onClose={() => setIsOpen(false)}
            theme="light"
          />
        </div>

        {/* ── Footer ── */}
        <div
          className="flex-shrink-0 px-6 py-5"
          style={{ borderTop: '1px solid #f0f0ec' }}
        >
          <a
            href="#contact"
            style={{
              color: '#aaa',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            info@floka.com
          </a>
        </div>
      </div>
    </>
  );
}