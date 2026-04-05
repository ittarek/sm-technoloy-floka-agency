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
    <div ref={col3Ref} className={` ${className}`}>
      {/* Social links */}
      <div className="bg-white rounded-3xl p-6">
        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Follow us</p>
        <p className="text-black font-bold text-lg mb-5">For check updates</p>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map(link => (
            <a
              key={link}
              href="#"
              className="border border-gray-200 text-black text-xs uppercase tracking-widest px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-all duration-300">
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Skills/Progress */}
      <div ref={col4Ref} className="bg-white rounded-3xl p-6">
        <p className="text-gray-400 text-xs uppercase tracking-widest mb-5">
          Impressions
        </p>
        <div className="flex flex-col gap-4">
          {skills.map(skill => (
            <SkillBar key={skill.label} label={skill.label} value={skill.value} />
          ))}
        </div>
      </div>
    </div>
  );
};
