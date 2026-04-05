import React from 'react';
import { LogoIcon } from '../../icons/logoIcon';
import { RotatingIcon } from '../Tools/RotatingIcon';

export const BigHeading = ({ headingRef }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:gap-32 mb-26">
      {/* Top left */}
      <div className="md:w-65 shrink-0">
        {/* Rotating badge */}
        <RotatingIcon
          className="sttic  relative text-black fill-black"
          rotatingText="SOUND PLAYFUL · LUXURIOUS · OR MORE ·"
        />

        <p className="text-gray-500 text-sm leading-relaxed">
          We design every project with long-term success in mind.
        </p>
      </div>

      {/* Big heading */}
      <div className="">
        <h2
          ref={headingRef}
          className="text-black font-semibold leading-tight text-[48px]">
          Our approach is straightforward— prioritizing functionality, speed, and clarity
          for solutions.
        </h2>
      </div>
    </div>
  );
};
