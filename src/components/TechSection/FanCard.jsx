import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8-100x120.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img9-100x120.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img10-100x120.webp',
];

const finalTransforms = [
  { rotate: -15, x: -60, y: 10 },
  { rotate: 0, x: 0, y: -10 },
  { rotate: 15, x: 60, y: 10 },
];

export default function FanCard() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    // সব card শুরুতে center এ stack হয়ে থাকবে
    gsap.set(cards, { rotation: 0, x: 0, y: 0 });

    // Scroll করে section এ আসলে fan out হবে
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      onEnter: () => {
        cards.forEach((card, i) => {
          gsap.to(card, {
            rotation: finalTransforms[i].rotate,
            x: finalTransforms[i].x,
            y: finalTransforms[i].y,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'back.out(1.4)',
          });
        });
      },
    });
  }, []);

  return (
    <div
      className="bg-[#1a1a1a] rounded-2xl overflow-hidden p-6 shadow-sm flex flex-col justify-between"
      style={{ minHeight: '380px' }}>
      {/* Top — Fan cards */}
      <div
        ref={containerRef}
        className="relative flex justify-center items-center"
        style={{ height: '160px' }}>
        {images.map((src, i) => (
          <div
            key={i}
            ref={el => (cardRefs.current[i] = el)}
            className="absolute rounded-xl overflow-hidden shadow-lg"
            style={{
              width: '100px',
              height: '130px',
              zIndex: i === 1 ? 3 : i === 0 ? 2 : 1,
            }}>
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Bottom — text */}
      <div className="relative mt-6">
        <p className="text-white text-lg font-medium leading-snug">
          More than 2k+ projects completed—each crafted to deliver real-world results for
          ambitious brands.
        </p>
        <div
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{ background: 'linear-gradient(to bottom, transparent, #1a1a1a)' }}
        />
      </div>
    </div>
  );
}
