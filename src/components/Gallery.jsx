import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function Gallery({ data }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const { badge, title, description, images } = data.gallery;

  // Handle keyboard events in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') {
        setActiveIdx((prev) => (prev + 1) % images.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, images.length]);

  return (
    <section id="gallery" className="py-24 transition-colors duration-300 relative bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <h2
            className="font-heading text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2.5 sm:mb-5"
            style={{ color: 'var(--color-text)' }}
          >
            {title}
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {description}
          </p>
        </div>

        {/* Masonry / Dynamic Editorial Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 auto-rows-[140px] sm:auto-rows-[240px] lg:auto-rows-[280px]">
          {images.map((img, idx) => {
            // Give specific cards different span heights for a modern masonry feel
            const isSpan = idx === 0 || idx === 3;
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ${
                  isSpan ? 'col-span-2 sm:col-span-1 sm:row-span-2 auto-rows-auto' : ''
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title || `Gallery ${idx}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay & Hover details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 text-white border border-white/30">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold drop-shadow-md">
                      {img.title}
                    </h3>
                    {img.caption && (
                      <p className="text-xs text-gray-200 mt-1 line-clamp-2">
                        {img.caption}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal (Click to enlarge full-screen) */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 transition-all duration-300"
          onClick={() => setActiveIdx(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:rotate-90 active:scale-90"
            aria-label="Đóng xem ảnh"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation: Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-2 sm:left-6 z-50 p-2 sm:p-3 rounded-full bg-black/40 sm:bg-white/10 hover:bg-white/20 text-white transition-all duration-200 active:scale-95"
            aria-label="Ảnh trước"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Navigation: Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-2 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-black/40 sm:bg-white/10 hover:bg-white/20 text-white transition-all duration-200 active:scale-95"
            aria-label="Ảnh kế tiếp"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>

          {/* Modal Main Content Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center animate-fade-in-up px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIdx].url}
              alt={images[activeIdx].title}
              className="max-h-[65vh] sm:max-h-[74vh] w-auto max-w-[94vw] sm:max-w-full rounded-xl sm:rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            {/* Caption & Counter */}
            <div className="mt-3 sm:mt-4 text-center text-white">
              <h4 className="font-heading text-base sm:text-xl font-bold">
                {images[activeIdx].title}
              </h4>
              {images[activeIdx].caption && (
                <p className="text-xs sm:text-sm text-gray-300 mt-0.5 sm:mt-1 max-w-xl mx-auto line-clamp-2 sm:line-clamp-none">
                  {images[activeIdx].caption}
                </p>
              )}
              <span className="inline-block mt-1.5 sm:mt-2 px-2.5 sm:px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 border border-white/20 text-gray-300">
                {activeIdx + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

