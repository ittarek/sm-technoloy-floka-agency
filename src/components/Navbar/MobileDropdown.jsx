// MobileDropdown.jsx — পুরোটা replace করো

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

function ImageGrid({ children, onClose }) {
  return (
    <div className="flex flex-col gap-4 pb-6 px-1">
      {children.map(child => (
        <div key={child.label} className="group cursor-pointer flex flex-col gap-2">
          {/* Image box — desktop style same */}
          <div
            className="relative overflow-hidden border-2 border-black transition-all duration-300"
            style={{ width: '100%', height: '260px', borderRadius: '10px' }}
            onMouseEnter={e => (e.currentTarget.style.borderRadius = '0px')}
            onMouseLeave={e => (e.currentTarget.style.borderRadius = '10px')}>
            {/* Image — scroll effect */}
            <img
              src={child.img}
              alt={child.label}
              className="w-full object-cover object-top transition-all ease-in-out group-hover:object-bottom"
              style={{
                height: '160%',
                transitionDuration: '5000ms',
                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

            {/* Buttons */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <a
                href={child.preview || '#'}
                className="bg-black text-white text-[13px] uppercase tracking-widest px-8 py-2.5 font-bold border border-black rounded-[10px]
                  scale-75 group-hover:scale-100 transition-all duration-300
                  hover:bg-white hover:text-black"
                onClick={onClose}>
                Preview
              </a>
              <a
                href={child.onepage || '#'}
                className="bg-white text-black text-[13px] uppercase tracking-widest px-8 py-2.5 font-bold border border-black rounded-[10px]
                  scale-75 group-hover:scale-100 transition-all duration-300 delay-75
                  hover:bg-black hover:text-white"
                onClick={onClose}>
                Onepage
              </a>
            </div>
          </div>

          {/* Label */}
          <span className="text-white text-xs uppercase tracking-widest font-semibold px-1">
            {child.label}
          </span>
        </div>
      ))}
    </div>
  );
}
function AccordionItem({ child, onClose, theme = 'dark' }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const hasChildren = child.children?.length > 0;

  const textMuted = theme === 'light' ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)';
  const grandColor = theme === 'light' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.35)';
  const borderColor = theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';

  const toggle = () => {
    if (!hasChildren) {
      onClose();
      return;
    }
    const el = contentRef.current;
    if (!open) {
      el.style.display = 'block';
      const h = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: h, opacity: 1, duration: 0.3, ease: 'power3.out' }
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power3.in',
        onComplete: () => {
          el.style.display = 'none';
        },
      });
    }
    setOpen(o => !o);
  };

  return (
    <div>
      <button
        className="w-full text-left py-2.5 pl-4 flex items-center justify-between group"
        onClick={toggle}>
        <span
          className="text-sm uppercase tracking-widest transition-colors duration-200"
          style={{ color: textMuted }}>
          {child.label}
        </span>
        {hasChildren && (
          <span
            className="text-base mr-2"
            style={{
              color: grandColor,
              display: 'inline-block',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}>
            +
          </span>
        )}
      </button>

      {hasChildren && (
        <div
          ref={contentRef}
          style={{ height: 0, overflow: 'hidden', opacity: 0, display: 'none' }}>
          <div className="ml-4 mb-1" style={{ borderLeft: `1px solid ${borderColor}` }}>
            {child.children.map(grand => (
              <a
                key={grand.label}
                href={grand.href}
                onClick={onClose}
                className="block py-2 pl-4 text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: grandColor }}>
                — {grand.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function NavAccordion({ item, onClose, theme = 'dark' }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  // ✅ theme অনুযায়ী color
  const textColor = theme === 'light' ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.85)';
  const textMuted = theme === 'light' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.35)';
  const borderColor = theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
  const plusColor = theme === 'light' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.4)';

  const toggle = () => {
    const el = contentRef.current;
    if (!open) {
      el.style.display = 'block';
      const h = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: h,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
          onComplete: () => {
            el.style.height = 'auto';
          },
        }
      );
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.28,
        ease: 'power3.in',
        onComplete: () => {
          el.style.display = 'none';
        },
      });
    }
    setOpen(o => !o);
  };

  return (
    <div style={{ borderBottom: `1px solid ${borderColor}` }}>
      <button
        className="w-full text-left py-5 flex items-center justify-between group"
        onClick={toggle}>
        <span
          className="text-3xl font-semibold tracking-tight transition-colors duration-200"
          style={{ color: open ? textColor : textMuted }}>
          {item.label}
        </span>
        <span
          className="text-2xl mr-1 transition-transform duration-300"
          style={{
            color: plusColor,
            display: 'inline-block',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}>
          +
        </span>
      </button>

      <div
        ref={contentRef}
        style={{ height: 0, overflow: 'hidden', opacity: 0, display: 'none' }}>
        {item.isMega ? (
          <ImageGrid children={item.children} onClose={onClose} />
        ) : (
          <div className="pb-4">
            {item.children.map(child => (
              <AccordionItem
                key={child.label}
                child={child}
                onClose={onClose}
                theme={theme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export function MobileDropdown({ navItems, onClose, theme = 'dark' }) {
  return (
    <nav className="flex-1 overflow-y-auto">
      {navItems.map(item => (
        <NavAccordion key={item.label} item={item} onClose={onClose} theme={theme} />
      ))}
    </nav>
  );
}
