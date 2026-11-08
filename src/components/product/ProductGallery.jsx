import React, { useState } from 'react';
import {
  Eye,
  Sparkles,
  Layers,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  ShieldCheck,
  Rotate3d,
  Camera,
  Smartphone,
  Laptop,
  CheckCircle2
} from 'lucide-react';
import Product3DViewer from './Product3DViewer';

export default function ProductGallery({ data }) {
  const images = data.gallery?.images || [];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [viewMode, setViewMode] = useState('3d'); // '3d' | 'photos'

  const currentImg = images[selectedIdx] || images[0] || { url: '', title: '', caption: '' };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50/60 text-slate-900 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 bg-indigo-50 border border-indigo-200/80 text-indigo-700 shadow-sm">
            <Rotate3d className="w-3.5 h-3.5 animate-spin-slow text-indigo-600" />
            <span>STUDIO 3D PRODUCT INSPECTOR</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            Khám Phá Chi Tiết Từng Góc Độ
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Xoay tự do 360°, đổi màu thời gian thực và soi cận cảnh linh kiện cơ khí chính xác của AuraSound Apex trên mọi màn hình.
          </p>

          {/* Mode Switcher Tabs: 3D View vs Real Photos */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-200/80 backdrop-blur-md shadow-inner border border-slate-300/60 max-w-full">
            <button
              type="button"
              onClick={() => setViewMode('3d')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                viewMode === '3d'
                  ? 'bg-white text-indigo-600 shadow-md scale-102 ring-1 ring-slate-900/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <Rotate3d className={`w-4 h-4 ${viewMode === '3d' ? 'text-indigo-600 animate-spin-slow' : 'text-slate-500'}`} />
              <span>Chế Độ 3D 360° Tương Tác</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-indigo-100 text-indigo-700 font-bold uppercase ml-1">
                Mới
              </span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('photos')}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'photos'
                  ? 'bg-white text-indigo-600 shadow-md scale-102 ring-1 ring-slate-900/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <Camera className={`w-4 h-4 ${viewMode === 'photos' ? 'text-indigo-600' : 'text-slate-500'}`} />
              <span>Bộ Ảnh Studio 4K</span>
              <span className="text-[11px] font-mono opacity-75">({images.length})</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Interactive 3D Model Viewer */}
        {viewMode === '3d' && (
          <div className="max-w-5xl mx-auto transition-all duration-500 animate-fade-in-up">
            <Product3DViewer />
          </div>
        )}

        {/* View Mode 2: Static High-Res Photo Gallery */}
        {viewMode === 'photos' && (
          <div className="max-w-5xl mx-auto transition-all duration-500 animate-fade-in-up">
            {/* Large Central Spotlight Viewer */}
            <div className="mb-6">
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-xl p-4 sm:p-8 flex flex-col md:flex-row items-center gap-8 group">
                {/* Big Image Viewport */}
                <div
                  className="relative w-full md:w-3/5 h-[320px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-50 shadow-inner flex items-center justify-center cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src={currentImg.url}
                    alt={currentImg.title}
                    className="w-full h-full object-contain p-2 sm:p-6 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 shadow-md text-slate-700 hover:text-indigo-600 border border-slate-200 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-900/80 text-white backdrop-blur-md">
                    GÓC 0{selectedIdx + 1} / 0{images.length}
                  </div>
                </div>

                {/* Side Detail Card */}
                <div className="w-full md:w-2/5 flex flex-col justify-between h-full py-2 sm:py-4 text-left">
                  <div>
                    <span className="inline-block text-xs font-mono font-bold tracking-wider uppercase text-indigo-600 mb-2">
                      GÓC CHỤP #0{selectedIdx + 1}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-snug">
                      {currentImg.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {currentImg.caption || 'Gia công chính xác từ hợp kim nhôm nguyên khối hàng không và đệm da cừu protein mềm mại.'}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-slate-200 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Vật liệu chống xước Anodized siêu nhẹ</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Khớp xoay công thái học đa hướng 180°</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      className="w-full py-3 px-5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-indigo-600 text-white transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Phóng To Xem Chi Tiết Ảnh Gốc</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Selector Strip below */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
              {images.map((img, idx) => {
                const isSelected = selectedIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedIdx(idx)}
                    className={`relative rounded-2xl overflow-hidden p-1.5 transition-all text-left ${
                      isSelected
                        ? 'ring-2 ring-indigo-600 shadow-lg scale-105 bg-white'
                        : 'opacity-70 hover:opacity-100 bg-white border border-slate-200 hover:shadow-sm'
                    }`}
                  >
                    <div className="h-16 sm:h-20 w-full overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center">
                      <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                    </div>
                    <span className="block text-[10px] font-bold text-slate-800 truncate mt-1 text-center">
                      {img.title ? `${img.title.split(' ')[0]} ${img.title.split(' ')[1] || ''}` : `Góc 0${idx + 1}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Responsive Cross-Platform Capability Banner */}
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Tối Ưu Điện Thoại (iOS & Android)
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Tự động dùng model siêu nhẹ 269 KB, vuốt 1 ngón xoay 360°, không bị khóa cuộn trang (pan-y).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Mượt Mà Trên Laptop & PC
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Tải chuẩn đồ họa 60 FPS, hỗ trợ cuộn chuột zoom sâu, hiển thị toàn màn hình chuẩn Cinema.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Sẵn Sàng Cho AR & WebXR
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Chiếu thử tai nghe lên bàn làm việc thực tế với Apple QuickLook và Google Scene Viewer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl text-center text-white" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentImg.url}
              alt={currentImg.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl mx-auto shadow-2xl border border-white/20"
            />
            <h4 className="font-heading text-xl font-bold mt-4">{currentImg.title}</h4>
            <p className="text-sm text-slate-300 mt-1">{currentImg.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
