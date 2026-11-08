import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Award, TrendingUp, Building2 } from 'lucide-react';

export default function HeroCorporate({ data }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { title, description, backgroundImage, primaryCta, secondaryCta, highlights } = data.hero;

  const trustPartners = [
    'Tập đoàn VNR500',
    'Chuẩn ISO 9001:2015',
    'Phương Pháp MBB / Big4',
    'Cam Kết Tăng Trưởng ROI',
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-28 pb-20 sm:pt-32 sm:pb-24 bg-gradient-to-b from-[#F0F4FA] to-white text-slate-900 overflow-hidden">
      {/* Subtle geometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#0F3B82 1px, transparent 1px), linear-gradient(90deg, #0F3B82 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 text-left">
            <h1
              className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-6 sm:mb-8 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {title}
            </h1>

            <p
              className={`text-base sm:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl transition-all duration-700 delay-150 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {description}
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12 transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 bg-[#0F3B82] hover:bg-[#0A295C]"
              >
                <span>{primaryCta.label}</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <span>{secondaryCta.label}</span>
              </a>
            </div>

            {/* Highlights */}
            {highlights && (
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Visual Trust Panel & Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src={backgroundImage}
                alt="Nexus Global Corporate Consulting"
                className="w-full h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Stat Card inside photo */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/40 text-slate-900 flex items-center justify-between">
                <div>
                  <span className="block text-xs uppercase tracking-wider font-bold text-slate-500">Tăng Trưởng Doanh Thu TB</span>
                  <span className="text-2xl font-black text-[#0F3B82]">+42.8% / Năm</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Trust Badges Strip below */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              {trustPartners.map((p, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

