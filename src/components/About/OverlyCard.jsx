import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OverlyCard = ({className}) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { y: -60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    // overflow-visible দিয়ে image উপরে বের হবে
    <div
      ref={containerRef}
      className={` border  ${className}`}
      style={{  overflow: 'visible' }}
      
    >
      {/* Image — উপরে কিছুটা বের হবে */}
      <div className="md:w-87.5">
        <img
          ref={imageRef}
          src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
          alt="CEO"
          className="w-full md:h-[25vh] object-cover object-top  rounded-3xl"
          style={{
            minHeight: '500px',
            marginTop: '-40px', // উপরে বের হবে
          }}
        />{' '}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
            marginTop: '-40px',
          }}
        />
      </div>

      {/* Award badges top right */}
      <div className="absolute top-0 right-4 flex flex-col gap-6 z-10 mt-11">
        <img
          src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon1.svg"
          alt="award"
          className="w-28 h-auto"
        />
        <img
          src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon2.svg"
          alt="award"
          className="w-28 h-auto"
        />
      </div>

      {/* Quote bottom */}
      <div className="absolute bottom-11 left-0 right-0  p-6  z-10 text-white space-y-6">
        <p className="font-funnel text-[24px] font-normal leading-[1.41667] tracking-[-0.72px] ">
          " At Floka, we merge strategy, creativity, and technology to shape brands that
          people love. "
        </p>
        <p className="font-funnel text-[14px] font-normal">
          Merizo H. Yelso <span className="text-[#999999]">/CEO</span>
        </p>
      </div>
    </div>
  );
};

export default OverlyCard;
