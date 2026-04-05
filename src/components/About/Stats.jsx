import { Counter } from './Counter';

const avatars = [
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img1.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img2.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img3.webp',
  'https://floka.casethemes.net/wp-content/uploads/2025/05/home1-counter-img4.webp',
];
export const Stats = ({ col1Ref, className }) => {
  return (
    <div
      ref={col1Ref}
      className={`  ${className}`}
      style={{ minHeight: '500px' }}>
      {/* Counter */}
      <div>
        <p className="text-[#0a0a0a] font-funnel text-[120px] font-normal leading-none tracking-[-3.6px]">
          <Counter target={25} />
          <span className="text-gray-300">+</span>
        </p>
        <p className="text-gray-400 text-sm mt-2 tracking-wide">Years of experience</p>
      </div>

      <div className="w-full h-px bg-gray-100" />

      <p className="text-[#666666] text-md leading-relaxed">
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
              className="w-11 h-11 rounded-full border-2 border-white object-cover"
            />
          ))}
        </div>
        <p className="text-black font-bold text-md">1200+ happy users review</p>
      </div>
    </div>
  );
};
