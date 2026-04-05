import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useParallax } from '../../hooks/useParallax';
import { BlurText } from './BlurText';
import { RightCard } from './RightCard';

export default function Hero() {
  const flokaRef = useRef(null);
  const studioRef = useRef(null);
  const cardRef = useRef(null);
  const bottomTextRef = useRef(null);
  const { containerRef: imgContainerRef, targetRef: imgRef } = useParallax(25);
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      flokaRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(
        studioRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo(
        bottomTextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      );
  }, []);

  return (
    <section
      className="relative overflow-hidden rounded-3xl  "
      style={{
        height: 'calc(100vh - 32px)',
        margin: '16px 32px 0 32px',
      }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover">
        {/* Pixabay থেকে download করে public folder এ রাখুন */}
        <source
          src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Main content — bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 md:px-16 pb-12">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          {/* Left — FLOKA big + Studio blur */}
          <div className="flex-1 w-100% max-w-lg self-start">
            <h1
              ref={flokaRef}
              className=" md:text-[250px] text-[80px] font-normal capitalize leading-none tracking-[-7.5px] text-white"
              style={{ fontFamily: 'Funnel_Display, sans-serif' }}>
              Floka
            </h1>
            <p
              ref={studioRef}
              className="font-[Funnel_Display] md:text-[96px] text-[42px] font-normal leading-none tracking-[-2.88px] text-white md:ml-74 md:-mt-7.5"
              style={{
                filter: 'blur(1.5px)',
                opacity: 0.7,

                // marginLight: '50px',
              }}>
              Studio
            </p>
          </div>
          {/* Right — Card + bottom text */}
          <RightCard cardRef={cardRef} imgContainerRef={imgContainerRef} imgRef={imgRef} />
        </div>
      </div>
    </section>
  );
}
