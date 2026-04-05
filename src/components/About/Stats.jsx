import { Counter } from './Counter';

const avatars = [
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img1.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img2.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img3.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img4.webp',
];
export const Stats = ({ col1Ref }) => {
  return (
    <div ref={col1Ref} className="bg-white rounded-3xl p-8 flex flex-col gap-6">
      {/* Counter */}
      <div>
        <p
          className="text-black font-black leading-none"
          style={{ fontSize: 'clamp(60px, 6vw, 90px)' }}>
          <Counter target={25} />
          <span className="text-gray-300">+</span>
        </p>
        <p className="text-gray-400 text-sm mt-2 tracking-wide">Years of experience</p>
      </div>

      <div className="w-full h-px bg-gray-100" />

      <p className="text-gray-500 text-sm leading-relaxed">
        Explore how we transform ideas into extraordinary digital experiences.
      </p>

      <div className="w-full h-px bg-gray-100" />

      {/* Avatars + review count */}
      <div>
        <div className="flex -space-x-3 mb-2">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <p className="text-black font-bold text-sm">1200+ happy users review</p>
      </div>
    </div>
  );
};
