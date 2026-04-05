import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import OverlyCard from './OverlyCard';
import Marquee from '../Marquee/Marquee';
import { SkillBar } from './SkillBar';
import { BigHeading } from './BigHeading';
import { Stats } from './Stats';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = ['Dribbble', 'Behance', 'LinkedIn', 'X', 'Xing'];

const skills = [
  { label: 'Solutions', value: 100 },
  { label: 'UI/UX', value: 90 },
  { label: 'Explore', value: 72 },
];





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
      <section ref={sectionRef} className=" px-6 md:px-16 py-20 max-w-7xl mx-auto">
        {/* Top — small left text + big heading */}
    <BigHeading ref={headingRef} />

        {/* Bottom — 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          {/* Col 1 — Stats */}
        <Stats col1Ref={col1Ref}  />

          {/* Col 2 — Center image */}
          <OverlyCard imageRef={imageRef} />

          {/* Col 3 — Social + Skills */}
          <div ref={col3Ref} className="flex flex-col gap-6">
            {/* Social links */}
            <div className="bg-white rounded-3xl p-6">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">
                Follow us
              </p>
              <p className="text-black font-bold text-lg mb-5">For check updates</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(link => (
                  <a
                    key={link}
                    href="#"
                    className="border border-gray-200 text-black text-xs uppercase tracking-widest px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Skills/Progress */}
            <div ref={col4Ref} className="bg-white rounded-3xl p-6">
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-5">
                Impressions
              </p>
              <div className="flex flex-col gap-4">
                {skills.map(skill => (
                  <SkillBar key={skill.label} label={skill.label} value={skill.value} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
      </section>{' '}
      <Marquee />
    </>
  );
}
