import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ShieldCheck, Volume2, Cpu, BatteryCharging, Rotate3d, Sparkles } from 'lucide-react';

export default function HeroProduct({ data }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { title, description, backgroundImage, primaryCta, secondaryCta } = data.hero;

  const techSpecs = [
    { icon: Volume2, label: 'Hybrid ANC', val: '-45dB' },
    { icon: Cpu, label: 'Hi-Res DAC', val: '32-Bit' },
    { icon: BatteryCharging, label: 'Thời Lượng Pin', val: '65 Giờ' },
    { icon: ShieldCheck, label: 'Bảo Hành', val: '24 Tháng' },
  ];
  
  return (
    <section id="hero" className="relative min-h-[68vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 sm:pt-32 sm:pb-24 bg-gradient-to-b from-white via-slate-50 to-indigo-50/40 text-slate-900">
      {/* Background with clear, high-resolution product showcase */}
      <div
        className="absolute inset-0 w-full h-[115%] sm:h-[120%] -top-[8%] sm:-top-[10%] pointer-events-none transition-transform duration-75 ease-out opacity-45 sm:opacity-85"
        style={{
          transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.05)`,
        }}
      >
        <img
          src={backgroundImage}
          alt="Product Flagship AuraSound"
          className="w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.10]"
          loading="eager"
        />
        {/* Soft gradient overlay ensuring text readability while keeping the product clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-white/75 sm:via-white/50 to-white/55 sm:to-white/35" />
      </div>

      {/* Clean high-tech glowing ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Title */}
        <h1
          className={`font-heading text-2xl sm:text-6xl md:text-7xl font-extrabold sm:font-black tracking-tight leading-[1.24] sm:leading-[1.14] mb-3 sm:mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <span className="bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-700 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Description */}
        <p
          className={`max-w-3xl mx-auto text-xs sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-5 sm:mb-10 transition-all duration-700 delay-150 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          {description}
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-6 mb-6 sm:mb-14 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          <a
            href={primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-base font-extrabold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-indigo-500/25"
          >
            <span>{primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a
            href={secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 py-2.5 sm:px-8 sm:py-4 rounded-full text-xs sm:text-base font-bold text-slate-800 bg-white/90 backdrop-blur-md border border-slate-300 hover:border-indigo-400 hover:text-indigo-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
          >
            <Rotate3d className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 animate-spin-slow shrink-0" />
            <span>Xoay 3D 360° Studio</span>
          </a>
        </div>

        {/* 4 Key Spec Highlights (Light Glass Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto">
          {techSpecs.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white/85 sm:bg-white/80 border border-slate-200/80 backdrop-blur-md shadow-sm flex flex-col items-center justify-center transition-all duration-300 hover:border-indigo-400 hover:shadow-md hover:-translate-y-1"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 mb-1 sm:mb-2" />
                <span className="text-base sm:text-2xl font-black text-slate-900 font-mono">{spec.val}</span>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{spec.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
