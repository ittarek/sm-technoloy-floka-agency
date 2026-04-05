import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import OverlyCard from './OverlyCard';
import Marquee from '../Marquee/Marquee';
import { SkillBar } from './SkillBar';
import { BigHeading } from './BigHeading';
import { Stats } from './Stats';
import { SocialSection } from './SocialSection';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const col1Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      }
    );

    // Columns fade in
    [col1Ref, col3Ref, col4Ref].forEach((ref, i) => {
      gsap.fromTo(
        ref.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.15,
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        }
      );
    });

    // Image parallax on scroll
    gsap.to(imageRef.current, {
      y: -40,
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section ref={sectionRef} className="px-8 md:px-24 py-28 max-w-[1400px] mx-auto">
        {/* Top — small left text + big heading */}
        <BigHeading ref={headingRef} />

        {/* Bottom — 3 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-3 items-stretch">
          {/* Col 1 — Stats */}
          <div
            className="md:col-span-2 rounded-3xl "
            style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
            <Stats
              col1Ref={col1Ref}
              className="bg-white rounded-3xl  p-6 h-full flex flex-col justify-between "
            />
          </div>

          {/* Col 2 — Center image */}
          <div className="md:col-span-4">
            <OverlyCard
              imageRef={imageRef}
              className="rounded-3xl relative bg-black w-full h-full"
            />
          </div>

          {/* Col 3 — Social + Skills */}
          <div
            className="md:col-span-2 rounded-3xl"
  >
            <SocialSection
              col3Ref={col3Ref}
              col4Ref={col4Ref}
              className=""
            />
          </div>
        </div>
        {/* Marquee */}
      </section>
      <Marquee />
    </>
  );
}
