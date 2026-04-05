import React from 'react'
import { BlurText } from './BlurText';

export const RightCard = ({ cardRef, imgContainerRef, imgRef }) => {
  return (
    <div ref={cardRef} className="flex flex-col gap-4 justify-end items-end">
      {/* Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full md:w-105">
        <div className="flex items-stretch p-4 gap-4">
          {/* Left — Author image */}
          <div
            ref={imgContainerRef}
            className="w-36 h-36 rounded-2xl shrink-0 overflow-hidden">
            <img
              ref={imgRef}
              src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg"
              alt="author"
              className="w-full h-full object-cover"
              style={{ scale: '1.2', willChange: 'transform' }}
            />
          </div>

          {/* Right — Author info + button */}
          <div className="flex-1 flex flex-col justify-between py-1">
            <div>
              <p className="text-gray-400 text-sm tracking-widest uppercase mb-1">
                Head of Idea
              </p>
              <p className="text-black text-xl font-bold leading-tight">
                Almond D. Nelsi
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="w-10 h-10 flex items-center justify-center bg-black text-white text-xl rounded-full hover:bg-gray-800 transition-all duration-300 flex-shrink-0">
                +
              </a>
              <p className="text-black text-lg font-semibold">Let's Talk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-[18px] font-normal w-full md:w-105">
        <p className="text-white font-medium leading-snug">
          No cookie-cutter websites. No fluff.
        </p>
        <BlurText text="Just real tools and smart strategies to grow your business and elevate your brand." />
      </div>
    </div>
  );
}
