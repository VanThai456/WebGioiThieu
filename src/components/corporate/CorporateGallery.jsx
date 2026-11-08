import React, { useState } from 'react';
import { Building2, TrendingUp, Award, Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function CorporateGallery({ data }) {
  const [activeIdx, setActiveIdx] = useState(null);
  const images = data.gallery?.images || [];

  const caseStudies = [
    { tag: 'Dự Án Trọng Điểm', result: '+38% Doanh Thu Sau 12 Tháng' },
    { tag: 'Chuyển Đổi Số', result: 'Tiết Kiệm 40% Chi Phí Vận Hành' },
    { tag: 'Thẩm Định Thị Trường', result: '100% Quyết Định Chuẩn Xác Dựa Trên Data' },
    { tag: 'Hợp Tác Quốc Tế', result: 'Thương Vụ Gọi Vốn Thành Công 25M USD' },
    { tag: 'Cơ Sở Vật Chất Hạng A', result: 'Trụ Sở Hội Nghị Cấp Cao Landmark 81' },
    { tag: 'Đào Tạo Kế Cận', result: 'Chuyển Giao Năng Lực 120 Lãnh Đạo' },
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-blue-100 text-blue-900 border border-blue-200">
            DỰ ÁN & HỒ SƠ NĂNG LỰC
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Dấu Ấn Thành Công Qua Những Thương Vụ Lớn
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Mỗi hình ảnh là một minh chứng thực tế cho năng lực triển khai, bảo mật và cam kết kết quả đo lường được của Nexus Global.
          </p>
        </div>

        {/* Bento Grid Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => {
            const isWide = idx === 0 || idx === 3;
            const cs = caseStudies[idx % caseStudies.length];
            return (
              <div
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col ${
                  isWide ? 'md:col-span-2 h-[340px] sm:h-[380px]' : 'h-[340px] sm:h-[380px]'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase bg-blue-900/90 text-white backdrop-blur-md border border-blue-700 shadow-sm">
                    {cs.tag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom details card */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1.5 bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Kết quả: {cs.result}</span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold leading-snug drop-shadow-md">
                    {img.title}
                  </h3>
                  {img.caption && (
                    <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                      {img.caption}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0A1A3A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
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
            <h4 className="font-heading text-xl font-bold mt-4 text-blue-200">
              {images[activeIdx].title}
            </h4>
            <p className="text-sm text-slate-300 mt-1">{images[activeIdx].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

