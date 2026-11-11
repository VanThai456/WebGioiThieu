import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

export default function Hero({ data }) {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { title, description, backgroundImage, primaryCta, secondaryCta, highlights } = data.hero;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      {/* Parallax Background Container */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none parallax-bg transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0) scale(1.06)`,
        }}
      >
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
          loading="eager"
        />
        {/* Dynamic Multi-layered Gradient Overlay for cinematic depth & 3D feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
      </div>

      {/* Floating subtle ambient lights */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse-slow"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none animate-pulse-slow"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />

      {/* Content Container (Perfect vertical balance) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white my-auto">
        {/* Hero Title (Slogan) */}
        <h1
          className={`font-heading text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.22] sm:leading-[1.18] mb-3 sm:mb-8 drop-shadow-md transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {title}
        </h1>

        {/* Hero Description */}
        <p
          className={`max-w-3xl mx-auto text-xs sm:text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-5 sm:mb-10 drop-shadow transition-all duration-700 delay-150 ${
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 group"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <span>{primaryCta.label}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>{secondaryCta.label}</span>
          </a>
        </div>

        {/* Key Highlights / Bullets */}
        {highlights && highlights.length > 0 && (
          <div
            className={`pt-6 sm:pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-200 transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#services"
        className="relative sm:absolute sm:bottom-6 mt-6 sm:mt-0 text-white/70 hover:text-white transition-colors animate-bounce flex flex-col items-center gap-1 z-10"
        aria-label="Cuộn xuống"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium opacity-80">Cuộn xuống</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
