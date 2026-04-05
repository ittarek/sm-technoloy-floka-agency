import React from 'react';

import logo1 from '../../assets/logoImage/logo1.svg';
import logo2 from '../../assets/logoImage/logo2.svg';
import logo3 from '../../assets/logoImage/logo3.svg';
import logo4 from '../../assets/logoImage/logo4.svg';
import logo5 from '../../assets/logoImage/logo5.svg';
import logo6 from '../../assets/logoImage/logo6.svg';
import logo7 from '../../assets/logoImage/logo7.svg';

const logos = [
  { src: logo1 },
  { src: logo2 },
  { src: logo3 },
  { src: logo4 },
  { src: logo5 },
  { src: logo6 },
  { src: logo7 },
];

export const LogosSection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-11">
      <div className="flex justify-between items-center pb-6 px-2 md:px-0 ">
        <p>Happy users</p>
        <p>©2025 Case-Themes™ Studio</p>
      </div>

      {/* Logo grid */}
      <div className="grid grid-cols-2 md:grid-cols-4  bg-gray-100 rounded-3xl overflow-hidden px-2 md:px-0 ">
        {logos.map((l, i) => {
          const cols = 4;
          const row = Math.floor(i / cols);
          const col = i % cols;
          const totalRows = Math.ceil((logos.length + 1) / cols);

          const isFirstCol = col === 0;
          const isLastCol = col === cols - 1;
          const isFirstRow = row === 0;
          const isLastRow = row === totalRows - 1;

          const tl = isFirstCol && isFirstRow ? '14px' : '4px';
          const tr = isLastCol && isFirstRow ? '14px' : '4px';
          const bl = isFirstCol && isLastRow ? '14px' : '4px';
          const br = isLastCol && isLastRow ? '14px' : '4px';

          return (
            <div
              key={i}
              className="flex items-center justify-center bg-white border border-gray-50 h-50"
              style={{
                borderTopLeftRadius: tl,
                borderTopRightRadius: tr,
                borderBottomLeftRadius: bl,
                borderBottomRightRadius: br,
              }}>
              <img src={l.src} alt={`logo-${i}`} className=" object-contain" />
            </div>
          );
        })}

        {/* Last cell */}
        <div className="flex flex-col items-center justify-center bg-white  text-black border border-gray-50 ">
          <p className="text-xs uppercase tracking-widest text-black mb-1">
            next can be you.
          </p>
          <p className="text-lg font-bold">let's talk</p>
        </div>
      </div>
    </section>
  );
};
