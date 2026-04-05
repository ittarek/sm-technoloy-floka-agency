import { useParallax } from '../../hooks/useParallax';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function PortfolioCard({ project }) {
  const { containerRef: cardRef, targetRef: imgRef } = useParallax(75);

  return (
    <div className={`${project.size === 'full' ? 'col-span-2' : 'col-span-1'}`}>
      {/* Image Card */}
      <div
        ref={cardRef}
        className="group cursor-pointer overflow-hidden rounded-2xl relative "
        style={{ height: project.size === 'full' ? '620px' : '450px' }}>
        <img
          ref={imgRef}
          src={project.img}
          alt={project.title}
          className="w-full  object-cover rounded-2xl"
  
        />

        {/* Top Left */}
        <div className="absolute top-4 left-4 rounded-lg px-3 py-1.5 flex items-center gap-2 pointer-events-none">
          <img src={project?.icon} alt="" />
        </div>

        {/* Bottom Left Text */}
        <div
          className="absolute bottom-4 left-4 text-white pointer-events-none
          opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500">
          <p className="text-xs uppercase tracking-widest">{project.title}</p>
        </div>

        {/* Top Right Icon */}
        <div
          className="absolute top-4 right-4 pointer-events-none
          opacity-0 translate-x-4 -translate-y-4
          group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0
          transition-all duration-500">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
            {/* SVG */}
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none">
              <path
                d="M8.2778 3.63859C8.25294 3.41485 8.45182 3.21598 8.70041 3.21598H14.4677C14.7163 3.21598 14.8904 3.39 14.8904 3.63859V9.40593C14.8904 9.65452 14.6915 9.85339 14.4677 9.82853L14.0949 9.85339C13.8711 9.82853 13.6971 9.65452 13.6723 9.43079V5.25444L4.35004 14.5766C4.17603 14.7507 3.92744 14.7507 3.75342 14.5766L3.50483 14.3281C3.35567 14.1789 3.33082 13.9054 3.50483 13.7314L12.827 4.40922L8.67555 4.43408C8.45182 4.40922 8.2778 4.23521 8.25294 4.01148L8.2778 3.63859Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Small Section */}
      <div
        className="bg-white rounded-2xl flex justify-between items-center mt-3 px-4 py-3 mb-6"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 5px 15px' }}>
        <p className="text-black font-bold">{project.title}</p>
        <span className="text-gray-400">{project.year}</span>
      </div>
    </div>
  );
}
