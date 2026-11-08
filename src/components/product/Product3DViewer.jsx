import React, { useState, useEffect, useRef } from 'react';
import {
  Rotate3d,
  Sparkles,
  Maximize2,
  Minimize2,
  RefreshCw,
  Play,
  Pause,
  Box,
  ShieldCheck,
  Zap,
  Smartphone,
  Laptop,
  Check,
  Compass,
  Battery,
  Feather,
  Sliders
} from 'lucide-react';

// Colorway Presets for AuraSound Apex
const COLOR_VARIANTS = [
  {
    id: 'black',
    name: 'Midnight Black',
    badge: 'Tiêu Chuẩn',
    swatch: '#0f172a',
    shellColor: [0.08, 0.09, 0.11, 1.0],
    trimColor: [0.18, 0.20, 0.24, 1.0],
    metalColor: [0.35, 0.38, 0.42, 1.0],
    description: 'Gam màu đen huyền bí công nghệ, bề mặt phủ nhám mờ chống bám vân tay.'
  },
  {
    id: 'silver',
    name: 'Moonlight Silver',
    badge: 'Bán Chạy Nhất',
    swatch: '#cbd5e1',
    shellColor: [0.82, 0.85, 0.89, 1.0],
    trimColor: [0.92, 0.94, 0.96, 1.0],
    metalColor: [0.95, 0.95, 0.96, 1.0],
    description: 'Hợp kim nhôm hàng không phay xước sáng bóng, tôn lên sự thanh lịch.'
  },
  {
    id: 'cyber',
    name: 'Cyber Neon Blue',
    badge: 'Phiên Bản Giới Hạn',
    swatch: '#0284c7',
    shellColor: [0.05, 0.38, 0.72, 1.0],
    trimColor: [0.15, 0.65, 0.90, 1.0],
    metalColor: [0.75, 0.85, 0.95, 1.0],
    description: 'Sắc xanh tương lai kết hợp viền ánh cobalt đậm chất công nghệ.'
  },
  {
    id: 'gold',
    name: 'Champagne Luxury',
    badge: 'Cao Cấp',
    swatch: '#d97706',
    shellColor: [0.75, 0.62, 0.42, 1.0],
    trimColor: [0.88, 0.76, 0.52, 1.0],
    metalColor: [0.82, 0.70, 0.48, 1.0],
    description: 'Sắc vàng rượu Champagne đẳng cấp với bề mặt mạ PVD chống oxy hóa.'
  }
];

// Preset camera viewing angles
const CAMERA_PRESETS = [
  { id: 'front', label: 'Chính Diện', orbit: '0deg 75deg 105%' },
  { id: 'iso', label: 'Góc Nghiêng 45°', orbit: '45deg 75deg 105%' },
  { id: 'side', label: 'Cạnh Hông', orbit: '90deg 80deg 105%' },
  { id: 'top', label: 'Từ Trên Xuống', orbit: '0deg 30deg 105%' }
];

export default function Product3DViewer() {
  const modelViewerRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState(COLOR_VARIANTS[0]);
  const [activeAngle, setActiveAngle] = useState('front');
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Detect Mobile device for resource & touch optimization
  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobileDevice(isMobile);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Listen to model-viewer events (load, progress)
  useEffect(() => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;

    const handleProgress = (event) => {
      const progress = Math.round(event.detail.totalProgress * 100);
      setLoadProgress(progress);
    };

    const handleLoad = () => {
      setIsLoaded(true);
      applyColorway(selectedColor);
    };

    viewer.addEventListener('progress', handleProgress);
    viewer.addEventListener('load', handleLoad);

    return () => {
      viewer.removeEventListener('progress', handleProgress);
      viewer.removeEventListener('load', handleLoad);
    };
  }, []);

  // Apply real-time material colors when user selects a colorway
  const applyColorway = (variant) => {
    setSelectedColor(variant);
    const viewer = modelViewerRef.current;
    if (!viewer || !viewer.model) return;

    try {
      const materials = viewer.model.materials;
      if (!materials || materials.length === 0) return;

      const shell = materials.find((m) => m.name && m.name.toLowerCase().includes('shell'));
      if (shell && shell.pbrMetallicRoughness) {
        shell.pbrMetallicRoughness.setBaseColorFactor(variant.shellColor);
      }

      const trim = materials.find((m) => m.name && m.name.toLowerCase().includes('trim'));
      if (trim && trim.pbrMetallicRoughness) {
        trim.pbrMetallicRoughness.setBaseColorFactor(variant.trimColor);
      }

      const metal = materials.find((m) => m.name && m.name.toLowerCase().includes('metal'));
      if (metal && metal.pbrMetallicRoughness) {
        metal.pbrMetallicRoughness.setBaseColorFactor(variant.metalColor);
      }
    } catch (e) {
      console.warn('Could not update 3D material:', e);
    }
  };

  // Reset camera to default perspective
  const handleResetCamera = () => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;
    viewer.cameraOrbit = '0deg 75deg 105%';
    viewer.cameraTarget = 'auto auto auto';
    setActiveAngle('front');
  };

  // Switch camera to preset angle smoothly
  const handleSelectAngle = (preset) => {
    const viewer = modelViewerRef.current;
    if (!viewer) return;
    setActiveAngle(preset.id);
    setIsAutoRotate(false);
    viewer.cameraOrbit = preset.orbit;
  };

  // Model source: light 269KB for mobile, 540KB for desktop/laptop (hỗ trợ sub-path GitHub Pages)
  const baseUrl = (import.meta.env.BASE_URL || './').replace(/\/+$/, '');
  const modelFileName = isMobileDevice ? 'aurasound-apex-mobile.glb' : 'aurasound-apex.glb';
  const modelSrc = `${baseUrl}/models/${modelFileName}`;

  return (
    <div
      className={`relative w-full transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl p-4 sm:p-8 flex flex-col items-center justify-center'
          : 'rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white shadow-2xl border border-indigo-500/20'
      }`}
    >
      {/* Top Header Toolbar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 p-4 sm:p-6 border-b border-white/10 relative z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-400 shadow-inner">
            <Rotate3d className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-extrabold tracking-tight text-white">
                Showroom 3D Tương Tác
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                60 FPS
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
              {isMobileDevice ? (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-indigo-400 inline" />
                  <span>Chế độ Di Động Siêu Nhẹ (269 KB) • Vuốt 1 ngón xoay • Chụm phóng to</span>
                </>
              ) : (
                <>
                  <Laptop className="w-3.5 h-3.5 text-indigo-400 inline" />
                  <span>Kéo chuột để xoay 360° • Cuộn chuột để zoom cận cảnh</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Auto-rotate Toggle */}
          <button
            type="button"
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              isAutoRotate
                ? 'bg-indigo-600/40 border-indigo-400/50 text-indigo-200'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
            }`}
            title={isAutoRotate ? 'Tạm dừng tự động xoay' : 'Bật tự động xoay'}
          >
            {isAutoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isAutoRotate ? 'Đang Xoay' : 'Dừng Xoay'}</span>
          </button>

          {/* Reset Camera Button */}
          <button
            type="button"
            onClick={handleResetCamera}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            title="Đặt lại góc nhìn ban đầu"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Góc</span>
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all flex items-center gap-1.5"
            title={isFullscreen ? 'Thu nhỏ' : 'Xem toàn màn hình'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Thu Nhỏ' : 'Toàn Màn Hình'}</span>
          </button>
        </div>
      </div>

      {/* Main 3D Viewport Area */}
      <div className="relative w-full flex flex-col lg:flex-row items-center justify-between p-3 sm:p-6 gap-6">
        {/* 3D Canvas Box */}
        <div
          className={`relative w-full ${
            isFullscreen ? 'lg:w-3/4 h-[60vh] sm:h-[70vh]' : 'lg:w-2/3 h-[380px] sm:h-[460px] md:h-[500px]'
          } rounded-2xl overflow-hidden bg-radial from-slate-800/80 via-slate-900/90 to-slate-950 flex items-center justify-center border border-white/5 shadow-inner`}
        >
          {/* Subtle Studio Lighting Rings */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-indigo-500/10 animate-pulse-slow" />
            <div className="absolute w-[200px] sm:w-[260px] h-[200px] sm:h-[260px] rounded-full bg-indigo-500/10 blur-[80px]" />
          </div>

          {/* Model Loading Shimmer / Progress */}
          {!isLoaded && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-md text-center p-6">
              <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
                <Box className="w-7 h-7 text-indigo-400 absolute" />
              </div>
              <p className="text-sm font-bold text-white mb-1">Đang Tải Mô Hình 3D Studio...</p>
              <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 rounded-full"
                  style={{ width: `${Math.max(loadProgress, 20)}%` }}
                />
              </div>
              <span className="text-[11px] font-mono text-slate-400 mt-2">
                {isMobileDevice ? 'Tối ưu bản di động (269 KB)' : 'Tải chuẩn HD (540 KB)'}
              </span>
            </div>
          )}

          {/* Google model-viewer Web Component - CLEAN, NO FLOATING HOTSPOTS */}
          <model-viewer
            ref={modelViewerRef}
            src={modelSrc}
            alt="Tai nghe AuraSound Apex 3D Model"
            camera-controls
            touch-action="pan-y"
            auto-rotate={isAutoRotate ? '' : undefined}
            auto-rotate-delay="1500"
            rotation-per-second="25deg"
            shadow-intensity="1.8"
            shadow-softness="0.75"
            exposure="1.05"
            environment-image="neutral"
            interaction-prompt="auto"
            ar
            ar-modes="webxr scene-viewer quick-look"
            className="w-full h-full cursor-grab active:cursor-grabbing outline-none"
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />

          {/* Floating On-Screen Gesture Instructions */}
          <div className="absolute bottom-3 left-3 sm:left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] text-slate-300">
            <Rotate3d className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow shrink-0" />
            <span>Kéo chuột hoặc vuốt để xoay 360° mọi góc</span>
          </div>

          {/* Current Colorway Watermark Pill */}
          <div className="absolute top-3 left-3 sm:left-4 z-20 pointer-events-none px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono font-bold text-white flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full border border-white/50"
              style={{ backgroundColor: selectedColor.swatch }}
            />
            <span>{selectedColor.name}</span>
          </div>
        </div>

        {/* Interactive Side Control Panel */}
        <div className={`w-full ${isFullscreen ? 'lg:w-1/4' : 'lg:w-1/3'} flex flex-col justify-between gap-5`}>
          {/* 1. Color Customizer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-indigo-300 tracking-wider uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Đổi Màu Sắc 3D Trực Tiếp
              </span>
              <span className="text-[11px] text-slate-400">4 Phiên bản</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {COLOR_VARIANTS.map((variant) => {
                const isSelected = selectedColor.id === variant.id;
                return (
                  <button
                    key={variant.id}
                    type="button"
                    onClick={() => applyColorway(variant)}
                    className={`relative p-3 rounded-xl border transition-all text-left flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-400 ring-2 ring-indigo-500/50 shadow-lg'
                        : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full shrink-0 border-2 border-white/40 shadow-sm mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: variant.swatch }}
                    >
                      {isSelected && <Check className="w-3 h-3 text-white drop-shadow" />}
                    </span>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-white truncate leading-tight">
                        {variant.name}
                      </p>
                      <span className="text-[10px] text-indigo-300 block mt-0.5">
                        {variant.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-400 mt-3 italic leading-relaxed border-t border-white/10 pt-2.5">
              {selectedColor.description}
            </p>
          </div>

          {/* 2. Fast Camera Angle Switcher (Clean preset buttons) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-xs font-mono font-bold text-indigo-300 tracking-wider uppercase block mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              Chọn Góc Nhìn Nhanh
            </span>

            <div className="grid grid-cols-2 gap-2">
              {CAMERA_PRESETS.map((preset) => {
                const isActive = activeAngle === preset.id;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handleSelectAngle(preset)}
                    className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isActive
                        ? 'bg-indigo-600 border-indigo-400 text-white shadow-md'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{preset.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Key Specs Snapshot */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <Battery className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <p className="text-xs font-mono font-bold text-white">65 Giờ</p>
              <p className="text-[10px] text-slate-400">Thời Lượng Pin</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <Feather className="w-4 h-4 text-sky-400 mx-auto mb-1" />
              <p className="text-xs font-mono font-bold text-white">240g</p>
              <p className="text-[10px] text-slate-400">Siêu Êm Nhẹ</p>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
              <Sliders className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
              <p className="text-xs font-mono font-bold text-white">-45dB</p>
              <p className="text-[10px] text-slate-400">Hybrid ANC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
