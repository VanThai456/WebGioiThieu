import React, { useState, useEffect } from 'react';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function CafeGallery({ data }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const images = data.gallery?.images || [];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') setActiveIdx(null);
      if (e.key === 'ArrowRight') setActiveIdx((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, images.length]);

  // Rotations for the polaroid scrapbook feel (applied on sm+ so mobile grid stays straight & clean)
  const rotations = ['sm:rotate-[-1.5deg]', 'sm:rotate-[2deg]', 'sm:rotate-[-2deg]', 'sm:rotate-[1.5deg]', 'sm:rotate-[-1deg]', 'sm:rotate-[2.5deg]'];

  return (
    <section id="gallery" className="py-10 sm:py-20 md:py-24 bg-[#FAF6F0] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vintage Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-xl sm:text-4xl md:text-5xl font-extrabold text-[#2C1A11] tracking-tight mb-2 sm:mb-4">
            Bức Tường Kỷ Niệm Tại The Artisan
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#7A6A5E] leading-relaxed">
            Từng bức ảnh polaroid lưu giữ lại hương thơm cà phê, góc bàn gỗ quen thuộc và những nụ cười ấm áp của khách ghé thăm.
          </p>
        </div>

        {/* Polaroid Scrapbook Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 lg:gap-10">
          {images.map((img, idx) => {
            const rot = rotations[idx % rotations.length];
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`group bg-white p-2 pb-3 sm:p-4 sm:pb-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer border border-amber-100/80 ${rot} hover:rotate-0`}
              >
                {/* Vintage Tape on top */}
                <div className="hidden sm:block w-16 h-4 bg-amber-200/50 backdrop-blur-sm mx-auto -mt-6 mb-3 rounded-sm shadow-inner opacity-75 border-t border-b border-amber-300/40" />

                <div className="relative h-32 sm:h-64 md:h-72 w-full overflow-hidden rounded-lg sm:rounded-xl bg-amber-50">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover object-center filter sepia-[0.1] contrast-[1.05] transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 sm:p-3 rounded-full bg-white/90 text-amber-900 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </div>
                </div>

                {/* Polaroid Caption bottom */}
                <div className="mt-2 sm:mt-4 px-1 sm:px-2 flex items-center justify-between gap-1">
                  <div className="min-w-0">
                    <h3 className="font-heading text-xs sm:text-lg font-bold text-[#2C1A11] group-hover:text-amber-800 transition-colors truncate">
                      {img.title}
                    </h3>
                    <p className="hidden sm:block text-xs text-[#7A6A5E] mt-0.5 line-clamp-1 italic">
                      {img.caption}
                    </p>
                  </div>
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 group-hover:text-red-500 transition-colors shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#1A0F0A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveIdx(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(null);
            }}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div className="max-w-4xl text-center text-white" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeIdx].url}
              alt={images[activeIdx].title}
              className="max-h-[72vh] w-auto max-w-full rounded-2xl mx-auto border-4 border-white/20 shadow-2xl"
            />
            <h4 className="font-heading text-xl font-bold mt-4 text-amber-200">
              {images[activeIdx].title}
            </h4>
            <p className="text-sm text-amber-100/80 mt-1">{images[activeIdx].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

