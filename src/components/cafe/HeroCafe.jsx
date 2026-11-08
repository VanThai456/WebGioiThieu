import React, { useState, useEffect } from 'react';
import { Coffee, ArrowRight, Clock, MapPin, Sparkles } from 'lucide-react';

export default function HeroCafe({ data }) {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { title, description, backgroundImage, primaryCta, secondaryCta, highlights } = data.hero;

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Background with warm ambient lighting & parallax */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(1.05)`,
        }}
      >
        <img
          src={backgroundImage}
          alt="The Artisan Brew Background"
          className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.08]"
          loading="eager"
        />
        {/* Warm cafe gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A]/95 via-[#2B1810]/50 to-[#1A0F0A]/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
        {/* Title */}
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.18] mb-6 sm:mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-amber-100/90 leading-relaxed mb-8 sm:mb-10 transition-all duration-700 delay-150 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {description}
        </p>

        {/* Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10 sm:mb-14 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href={primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span>{primaryCta.label}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-amber-100 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>{secondaryCta.label}</span>
          </a>
        </div>

        {/* Operating Quick Info Bar */}
        <div className="pt-6 border-t border-amber-900/40 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-amber-200/80">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Mở cửa: 07:00 - 22:30 mỗi ngày</span>
          </div>
          <div className="hidden sm:block text-amber-700">•</div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>128 Nguyễn Đình Chiểu, Quận 3, TP.HCM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

