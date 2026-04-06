import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { navItems } from './navItems';
import { MobileFullMenu } from './MobileFullMenu';
import { LogoIcon } from '../../icons/logoIcon';
import { RotatingIcon } from '../Tools/RotatingIcon';
import { MobileDropdown } from './MobileDropdown';
import { MobileNav } from './HamburgerMenu';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (mobileOpen) {
      gsap.killTweensOf(menu);
      gsap.fromTo(
        menu,
        { scaleY: 0, opacity: 0, transformOrigin: 'top' },
        { scaleY: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.killTweensOf(menu);
      gsap.to(menu, {
        scaleY: 0,
        opacity: 0,
        transformOrigin: 'top',
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [mobileOpen]);

  const handleMouseEnter = label => {
    const el = dropdownRefs.current[label];
    if (!el) return;
    gsap.killTweensOf(el);
    el.style.pointerEvents = 'auto';
    gsap.fromTo(
      el,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }
    );
  };

  const handleMouseLeave = label => {
    const el = dropdownRefs.current[label];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      y: 20,
      opacity: 0,
      duration: 0.2,
      ease: 'power3.in',
      onComplete: () => {
        el.style.pointerEvents = 'none';
      },
    });
  };
  const [hovered, setHovered] = useState(false);
  const [tick, setTick] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!hovered) {
      setTick(false);
      return;
    }
    setTick(true);
    const timeout = setTimeout(() => {
      setTick(false);
    }, 400);
    return () => clearTimeout(timeout);
  }, [hovered]);

  const centerOffset = [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 0 },
  ];

  const handleMouseMove = e => {
    if (!mobileOpen) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-16 py-5 flex items-center justify-between bg-black
        ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="w-auto align-middle ">
          <img
            className="max-w-100 h-auto max-h-6 "
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/Logo.png"
            alt=""
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-between w-2/3 gap-10">
          {navItems.map(item => (
            <li
              key={item.label}
              className="relative py-5  -my-5 px-2 -mx-2"
              onMouseEnter={() => item.isMega && handleMouseEnter(item.label)}
              onMouseLeave={() => item.isMega && handleMouseLeave(item.label)}>
              <a
                href={item.isMega ? '#' : `#${item.label.toLowerCase()}`}
                className="text-[#202020] font-medium hover:text-black text-sm uppercase tracking-widest transition-colors duration-300 flex items-center gap-1">
                {item.label}
              </a>

              {/* Dropdown — শুধু isMega হলে */}
              {item.isMega && (
                <>
                  <div className="absolute left-0 right-0 h-4 top-full" />
                  <div
                    ref={el => (dropdownRefs.current[item.label] = el)}
                    className="fixed left-0 right-0 w-screen max-h-[85vh] overflow-y-auto bg-white border-t border-gray-200 shadow-2xl py-10 origin-top"
                    style={{
                      opacity: 0,
                      top: '72px',
                      boxSizing: 'border-box',
                      pointerEvents: 'none',
                    }}>
                    <div className="w-full flex justify-center px-12">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl">
                        {item.children.map(child => (
                          <div
                            key={child.label}
                            className="group cursor-pointer flex flex-col gap-3">
                            {/* Image box */}
                            <div
                              className="relative overflow-hidden border border-2 border-black transition-all duration-300"
                              style={{
                                width: '100%',
                                height: '280px',
                                borderRadius: '10px',
                              }}
                              onMouseEnter={e =>
                                (e.currentTarget.style.borderRadius = '0px')
                              }
                              onMouseLeave={e =>
                                (e.currentTarget.style.borderRadius = '10px')
                              }>
                              {/* Image */}
                              <img
                                src={child.img}
                                alt={child.label}
                                className="w-full object-cover object-top transition-all ease-in-out group-hover:object-bottom"
                                style={{
                                  height: '160%',
                                  transitionDuration: '5000ms',
                                  transitionTimingFunction:
                                    'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                }}
                              />

                              {/* Dark overlay */}
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                              {/* Buttons */}
                              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <a
                                  href={child.preview}
                                  className="bg-black text-white text-[14px] uppercase tracking-widest px-11 py-2.5 font-bold border border-black rounded-[10px]
                    scale-75 group-hover:scale-100 transition-all duration-300
                    hover:bg-white hover:text-black">
                                  Preview
                                </a>
                                <a
                                  href={child.onepage}
                                  className="bg-white text-black text-[14px] uppercase tracking-widest px-11 py-2.5 font-bold border border-black rounded-[10px]
                    scale-75 group-hover:scale-100 transition-all duration-300 delay-75
                    hover:bg-black hover:text-white">
                                  Onepage
                                </a>
                              </div>
                            </div>

                            {/* Card name */}
                            <div className="px-1 mx-auto">
                              <span className="text-black text-sm uppercase tracking-widest font-bold">
                                {child.label}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Let's Talk + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:block font-medium   tracking-widest px-5 py-2 hover:bg-black hover:text-white transition-all duration-300">
            info@floka.com
          </a>

          {/* Hamburger */}

          <button
            className="hidden relative cursor-pointer p-2 md:flex items-center gap-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            style={{
              background: mobileOpen ? 'black' : 'transparent',
              borderRadius: mobileOpen ? '8px' : '0px',
              transition: 'background 0.3s ease, border-radius 0.3s ease',
              overflow: 'hidden',
            }}>
            {/* mouse light effect — only when open */}
            {mobileOpen && (
              <div
                style={{
                  position: 'absolute',
                  left: mousePos.x,
                  top: mousePos.y,
                  width: '80px',
                  height: '80px',
                  transform: 'translate(-50%, -50%)',
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  transition: 'left 0.05s, top 0.05s',
                }}
              />
            )}

            {/* dot grid icon */}
            <div
              className={`grid grid-cols-3 gap-1.5 transition-all duration-300
      ${mobileOpen ? 'rotate-45 scale-90' : 'rotate-0 scale-100'}`}>
              {[...Array(9)].map((_, i) => {
                const isPlus = [1, 3, 4, 5, 7].includes(i);
                const { x, y } = centerOffset[i];
                return (
                  <span
                    key={i}
                    className={`block w-1 h-1 rounded-full`}
                    style={{
                      background: isPlus
                        ? mobileOpen
                          ? 'white'
                          : 'black'
                        : 'transparent',
                      transition: 'transform 0.3s ease, background 0.3s ease',
                      transitionDelay: `${i * 30}ms`,
                      transform: tick
                        ? `translate(${x * 6}px, ${y * 6}px)`
                        : 'translate(0px, 0px)',
                    }}
                  />
                );
              })}
            </div>
          </button>
          {/* ✅ Mobile hamburger — নতুন */}
          <MobileNav iconColor="black" />
        </div>
      </nav>{' '}
      {/* Full Screen Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0  bg-black z-50 flex overflow-hidden"
          style={{ top: 0 }}>
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mx-auto">
            {/* Left — Hero Section */}

            <div className=" hidden lg:flex flex-col w-full mx-auto justify-between items-center">
              <h2 className="text-white   w-2/3 text-[46px] font-bold leading-tight mb-10">
                Our approach is straightforward— prioritizing functionality, speed, and
                clarity for solutions.
              </h2>
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img15.jpg"
                alt="hero"
                className="w-[65%] object-cover rounded-lg"
              />
            </div>

            {/* Right — Nav Items */}
            <div className="w-2/3  p-3 lg:p-6 ">
              {/* Close button top right */}
              {/* Close button top right */}
              <div className="close-btn mt-6 absolute top-4 right-6">
                <div
                  className="relative cursor-pointer p-2 flex items-center gap-2"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onMouseMove={handleMouseMove}
                  style={{ background: 'transparent', overflow: 'hidden' }}>
                  {mobileOpen && (
                    <div
                      className="relative px-4 py-2 cursor-pointer"
                      style={{ background: 'transparent' }}
                      onMouseMove={e => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMousePos({
                          x: e.clientX - rect.left,
                          y: e.clientY - rect.top,
                        });
                      }}>
                      <span
                        style={{
                          color: hovered ? 'white' : 'gray',
                          fontSize: '18px',
                          fontWeight: '500',
                          letterSpacing: '0.05em',
                          userSelect: 'none',
                          transition: 'color 0.3s ease',
                        }}>
                        Close
                      </span>
                    </div>
                  )}

                  {/* dot grid icon */}
                  <div
                    className={`grid grid-cols-3 gap-1.5 transition-all duration-300
        ${mobileOpen ? 'rotate-45 scale-90' : 'rotate-0 scale-100'}`}
                    style={{ background: 'transparent' }}>
                    {[...Array(9)].map((_, i) => {
                      const isPlus = [1, 3, 4, 5, 7].includes(i);
                      const { x, y } = centerOffset[i];
                      return (
                        <span
                          key={i}
                          className="block w-1 h-1 rounded-full"
                          style={{
                            background: isPlus
                              ? mobileOpen
                                ? 'white'
                                : 'black'
                              : 'transparent',
                            transition: 'transform 0.3s ease, background 0.3s ease',
                            transitionDelay: `${i * 30}ms`,
                            transform: tick
                              ? `translate(${x * 6}px, ${y * 6}px)`
                              : 'translate(0px, 0px)',
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Nav Items */}
              <MobileFullMenu navItems={navItems} onClose={() => setMobileOpen(false)} />

              {/* Bottom right rotating button */}
              <div className=" absolute bottom-0 right-0">
                <RotatingIcon
                  className=" bottom-10 right-10 text-white fill-white"
                  rotatingText="WANT IT TO SOUND LUXURIOUS, PLAYFUL / OR MORE /"
                />
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
