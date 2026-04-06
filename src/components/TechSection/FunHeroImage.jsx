// HeroImage.jsx
import { useRef } from 'react';
import { useGlassShatter } from '../../hooks/useGlassShatter';


export default function HeroImage() {
  const containerRef = useRef(null);

  useGlassShatter(containerRef, '/image/heroImage_wave.webp', {
    width: 400,
    height: 580,
  });

  return (
    <div
      ref={containerRef}
      className="md:sticky mx-auto top-20 self-start rounded-2xl overflow-hidden shadow-xl"
      style={{ width: '90%', height: '580px' }}
    />
  );
}
