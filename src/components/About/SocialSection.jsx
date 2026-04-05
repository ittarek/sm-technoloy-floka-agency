import React from 'react';
import { SkillBar } from './SkillBar';

const socialLinks = ['Dribbble', 'Behance', 'LinkedIn', 'X', 'Xing'];

const skills = [
  { label: 'Solutions', value: 100 },
  { label: 'UI/UX', value: 90 },
  { label: 'Explore', value: 72 },
];

export const SocialSection = ({ col3Ref, col4Ref, className }) => {
  return (
    <div ref={col3Ref} className={`flex flex-col gap-6 ${className}`}>
      {/* Social Links */}
      <div
        className="bg-white rounded-3xl p-6 w-full flex flex-col justify-start"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
        <p className="text-gray-400 text-xs tracking-widest mb-1">Follow us</p>
        <p className="text-black font-bold text-xl mb-8">For check updates</p>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map(link => (
            <a
              key={link}
              href="#"
              className="border border-gray-200 text-black text-xs uppercase tracking-widest px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Impressions */}
      <div
        ref={col4Ref}
        className="bg-white rounded-3xl p-6 w-full flex flex-col justify-start "
        style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
        <p className="text-gray-400 text-xs tracking-widest mb-6">Impressions</p>

        <div className="flex flex-col gap-2">
          {skills.map((skill, i) => (
            <SkillBar
              key={skill.label}
              label={skill.label}
              value={skill.value}
              isActive={i === 1}
              isLast={i === skills.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
