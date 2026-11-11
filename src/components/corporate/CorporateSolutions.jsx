import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Building, Cpu, DollarSign, Users, Globe2, Scale } from 'lucide-react';

export default function CorporateSolutions({ data, onSelectSolution }) {
  const { title, description, items } = data.services;

  const icons = [TrendingUp, Cpu, DollarSign, Users, Globe2, Scale];

  return (
    <section id="services" className="py-12 sm:py-20 md:py-24 bg-white text-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 sm:mb-4 text-slate-900">
            {title}
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 6 Executive Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.id}
                className="group p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-600/50 hover:bg-white hover:shadow-2xl transition-all duration-300 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-amber-300" />
                    </div>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {item.category}
                  </span>

                  <h3 className="font-heading text-base sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Quy mô gói</span>
                    <span className="text-base font-extrabold text-blue-900">{item.price}</span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => onSelectSolution && onSelectSolution(item.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-900 hover:text-white transition-all shadow-sm"
                  >
                    <span>Khảo Sát</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

