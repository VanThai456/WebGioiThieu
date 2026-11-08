import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, Building, Cpu, DollarSign, Users, Globe2, Scale } from 'lucide-react';

export default function CorporateSolutions({ data, onSelectSolution }) {
  const { title, description, items } = data.services;

  const icons = [TrendingUp, Cpu, DollarSign, Users, Globe2, Scale];

  return (
    <section id="services" className="py-24 bg-white text-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-blue-100 text-blue-900 border border-blue-200">
            NĂNG LỰC CỐ VẤN CHIẾN LƯỢC
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* 6 Executive Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={item.id}
                className="group p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-600/50 hover:bg-white hover:shadow-2xl transition-all duration-300 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-amber-300" />
                    </div>
                    {item.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                    {item.category}
                  </span>

                  <h3 className="font-heading text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-800 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between mt-auto">
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

