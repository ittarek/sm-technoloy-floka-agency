import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const awards = [
  { title: 'Best Designer Awards', company: 'Awwwards', year: '2025' },
  { title: 'Peaky UI Designer', company: 'Google', year: '2024' },
  { title: 'Great in UX', company: 'Apple', year: '2023' },
  { title: 'Best Website Pick', company: 'Microsoft', year: '2022' },
  { title: 'Nelson UI & UX Designer', company: 'Samsung', year: '2021' },
];

const teams = {
  design: [
    {
      name: 'Nicolas K. Ellington',
      role: 'Founder',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img1-min-450x450.png',
    },
    {
      name: 'Carlos E. Ashcroft',
      role: 'CEO',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img2-min-450x450.png',
    },
    {
      name: 'Leonardo F. Ashton',
      role: 'UX Designer',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img3-min-450x450.png',
    },
    {
      name: 'Ricardo P. Winslow',
      role: 'UI Designer',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img4-min-450x450.png',
    },
  ],
  development: [
    {
      name: 'Adrian T. Carrington',
      role: 'Founder',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home3-author-4-450x450.png',
    },
    {
      name: 'Marcus J. Remington',
      role: 'CEO',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home3-author-5-450x450.png',
    },
    {
      name: 'Victor L. Harrington',
      role: 'UX Designer',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img3-min-450x450.png',
    },
    {
      name: 'Samuel R. Worthington',
      role: 'UI Designer',
      img: 'https://floka.casethemes.net/wp-content/uploads/2025/06/home3-author-2-450x450.png',
    },
  ],
};

function TeamCard({ member, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: { trigger: cardRef.current, start: 'top 90%' },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow duration-300  ">
      <div className="overflow-hidden" style={{ height: '200px' }}>
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-black font-bold text-sm">{member.name}</p>
        <p className="text-gray-400 text-xs uppercase tracking-widest mt-0.5 mb-3">
          {member.role}
        </p>
        <div className="flex items-center gap-3">
          {[
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
            <>
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </>,
          ].map((icon, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-400 hover:text-black transition-colors duration-200">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const [activeTab, setActiveTab] = useState('design');
  const awardsRef = useRef(null);
  const leftRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (awardsRef.current) {
      gsap.fromTo(
        awardsRef.current.children,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: awardsRef.current, start: 'top 85%' },
        }
      );
    }
    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: leftRef.current, start: 'top 85%' },
        }
      );
    }
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
    );
  }, [activeTab]);

  return (
    <section className="bg-[#f5f5f3] px-4 md:px-8 py-16 w-full max-w-350  mx-auto">
      {/* Awards section */}
      <div className="px-4 md:px-8 mb-10">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left — image + label */}
          <div className="flex flex-col gap-4 md:w-[260px] flex-shrink-0">
            {/* Two icons */}
            <div className="flex gap-4 mb-2">
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </div>
              <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                🏆
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ height: '160px' }}>
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-500x600.webp"
                alt="awards"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-400 text-xs uppercase tracking-widest">Get Rewards</p>
          </div>

          {/* Right — heading + awards list */}
          <div className="flex-1">
            <p
              className="text-black font-bold leading-snug mb-8"
              style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', maxWidth: '480px' }}>
              Driven by passion and grounded in expertise, our team turns bold ideas into
              reality, leading the way in creative innovation.
            </p>

            {/* Awards table */}
            <div ref={awardsRef} className="flex flex-col">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-200 px-2 rounded">
                  <span className="text-gray-500 text-xs uppercase tracking-widest flex-1">
                    {award.title}
                  </span>
                  <span className="text-gray-400 text-xs uppercase tracking-widest flex-1 text-center">
                    {award.company}
                  </span>
                  <span className="text-gray-400 text-xs">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-white rounded-3xl p-8 md:p-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left */}
          <div ref={leftRef} className="md:w-[300px] flex-shrink-0 flex flex-col gap-6">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-3">
                Our Avengers
              </p>
              <h2
                className="text-black font-bold leading-tight mb-6"
                style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}>
                Meet with our team member
              </h2>

              {/* Tabs */}
              <div className="flex gap-6 border-b border-gray-100 mb-5">
                {['design', 'development'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 border-b-2 -mb-px
                      ${
                        activeTab === tab
                          ? 'text-black border-black'
                          : 'text-gray-400 border-transparent hover:text-black'
                      }`}>
                    {tab === 'design' ? 'Design Team' : 'Development Team'}
                  </button>
                ))}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                What began over coffee-fueled brainstorming sessions has grown into a
                thriving digital agency dedicated to helping brands stand out.
              </p>
            </div>

            {/* Join button */}
            <a href="#" className="flex items-center gap-3 group w-fit">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                <span className="text-white text-base">+</span>
              </div>
              <span className="text-black text-xs uppercase tracking-widest font-semibold">
                Join With Us
              </span>
            </a>

            {/* Bottom image */}
            <div className="rounded-2xl overflow-hidden" style={{ height: '180px' }}>
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp"
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — grid */}
          <div ref={gridRef} className="flex-1 grid grid-cols-2 gap-4">
            {teams[activeTab].map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
