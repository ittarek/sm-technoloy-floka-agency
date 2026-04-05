import { Stars } from "./Stars";

export const TestimonialCard = ({ name, role, text, stars = 4 }) => (
  <div className=" bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
    <div>
      <p className="font-semibold text-sm text-gray-900">{name}</p>
      <p className="text-xs text-gray-400">{role}</p>
    </div>
    <Stars filled={stars} />
    <p className="text-xs text-gray-600 leading-relaxed">"{text}"</p>
    <p className="text-[10px] text-gray-300 mt-auto">— GMMostrariasDirect</p>
  </div>
);
