import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Stars } from '../Stars';
import { SmallCard } from './SmallCard';
import { BigCard } from './BigCard';
gsap.registerPlugin(ScrollTrigger);
export function TestimonialColumn({ testimonial, reverse = false, index = 0 }) {
  const colRef = useRef(null);
  const topFillRef = useRef(null);
  const bottomFillRef = useRef(null);

  useEffect(() => {
    if (!colRef.current) return;

    // Entrance animation
    gsap.fromTo(
      colRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.15,
        scrollTrigger: { trigger: colRef.current, start: 'top 85%' },
      }
    );

    const col = colRef.current;
    const topFill = topFillRef.current;
    const bottomFill = bottomFillRef.current;

    const onEnter = () => {
      // Small card — top থেকে fill
      gsap.fromTo(
        topFill,
        { scaleY: 0, transformOrigin: 'top' },
        { scaleY: 1, duration: 0.4, ease: 'power3.out' }
      );
      // Big card — bottom থেকে fill
      gsap.fromTo(
        bottomFill,
        { scaleY: 0, transformOrigin: 'bottom' },
        { scaleY: 1, duration: 0.4, ease: 'power3.out' }
      );
      // সব text white
      gsap.to(col.querySelectorAll('.hover-text'), { color: 'white', duration: 0.3 });
      gsap.to(col.querySelectorAll('.hover-border'), {
        borderColor: 'rgba(255,255,255,0.15)',
        duration: 0.3,
      });
    };

    const onLeave = () => {
      gsap.to(topFill, {
        scaleY: 0,
        transformOrigin: 'bottom',
        duration: 0.3,
        ease: 'power3.in',
      });
      gsap.to(bottomFill, {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.3,
        ease: 'power3.in',
      });
      gsap.to(col.querySelectorAll('.hover-text'), { color: '', duration: 0.3 });
      gsap.to(col.querySelectorAll('.hover-border'), { borderColor: '', duration: 0.3 });
    };

    col.addEventListener('mouseenter', onEnter);
    col.addEventListener('mouseleave', onLeave);

    return () => {
      col.removeEventListener('mouseenter', onEnter);
      col.removeEventListener('mouseleave', onLeave);
    };
  }, [index, reverse]);

  return (
    <div ref={colRef} className="flex flex-col gap-4 cursor-pointer">
      {!reverse ? (
        <>
          <SmallCard topFillRef={topFillRef} testimonial={testimonial} />
          <BigCard bottomFillRef={bottomFillRef} testimonial={testimonial} />
        </>
      ) : (
        <>
          <BigCard bottomFillRef={bottomFillRef} testimonial={testimonial} />
          <SmallCard topFillRef={topFillRef} testimonial={testimonial} />
        </>
      )}
    </div>
  );
}
