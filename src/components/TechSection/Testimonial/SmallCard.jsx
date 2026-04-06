export const SmallCard = ({ topFillRef, testimonial }) => (
  <div
    className="relative overflow-hidden rounded-2xl "
    style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 15px' }}>
    {/* Top fill */}
    <div
      ref={topFillRef}
      className="absolute inset-0 bg-black z-0"
      style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
    />
    <div className="relative z-10 p-5 flex items-center gap-3">
      <img
        src={testimonial.img}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover shrink-0"
      />
      <div>
        <p className="hover-text text-black font-semibold text-lg">{testimonial.name}</p>
        <p className="hover-text text-gray-400 text-md tracking-wide">
          {testimonial.role}
        </p>
      </div>
    </div>
  </div>
);
