import { Stars } from "../Stars";

export   const BigCard = ({ bottomFillRef, testimonial }) => (
  <div
    className="relative overflow-hidden rounded-2xl border border-gray-100 flex-1"
    style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 15px' }}>
    {/* Bottom fill */}
    <div
      ref={bottomFillRef}
      className="absolute inset-0 bg-black z-0"
      style={{ transform: 'scaleY(0)', transformOrigin: 'bottom' }}
    />
    <div className="relative z-10 p-6 flex flex-col gap-4 h-full">
      <Stars size={25} count={testimonial.stars} />
      <p className="hover-text  text-lg leading-relaxed flex-1">" {testimonial.text} "</p>
      <p className="hover-text hover-border text-black text-xs font-semibold uppercase tracking-widest border-t border-gray-100 pt-24">
        " {testimonial.tag} "
      </p>
    </div>
  </div>
);