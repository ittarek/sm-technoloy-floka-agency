import React, { useState, useEffect } from 'react';

export const VIDEOSection = ({ videoRef }) => {
  const [open, setOpen] = useState(false);

  // ESC close
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section ref={videoRef} className="max-w-7xl mx-auto    py-10">
      {/* Video Card */}
      <div className="group relative rounded-3xl overflow-hidden shadow-lg h-64 md:h-160 cursor-pointer">
        {/* Thumbnail */}
        <img
          src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp"
          alt="Video thumbnail"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

        {/* Play Button */}
        <div className="absolute bottom-5 left-5 group-hover:bottom-1/2 group-hover:left-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <button
            onClick={() => setOpen(true)}
            className="
      transform group-hover:-translate-x-1/2 group-hover:translate-y-1/2
      flex items-center gap-2
      bg-white/90 backdrop-blur rounded-full px-4 py-2
      text-sm font-semibold text-gray-900 shadow-lg
    ">
            <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <polygon points="3,1 13,7 3,13" />
              </svg>
            </span>

            <span>Play Video</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn">
          {/* Video wrapper */}
          <div
            onClick={e => e.stopPropagation()}
            className="w-[90%] md:w-[900px] aspect-video transform scale-95 animate-scaleIn">
            <iframe
              className="w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/SF4aHwxHtZ0?autoplay=1"
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl opacity-70 hover:opacity-100 transition">
            ✕
          </button>
        </div>
      )}
    </section>
  );
};
