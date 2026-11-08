import React from 'react';
import { ArrowUpRight, Tag, Sparkles } from 'lucide-react';

export default function Services({ data, onSelectService }) {
  const { badge, title, description, items } = data.services;

  return (
    <section id="services" className="py-24 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
              style={{
                backgroundColor: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5"
            style={{ color: 'var(--color-text)' }}
          >
            {title}
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {description}
          </p>
        </div>

        {/* Dynamic Grid: 3 or 6 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 card-hover-effect border flex flex-col"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Card Image Container */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Badge Tag */}
                {item.badge && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    {item.badge}
                  </div>
                )}

                {/* Category Tag */}
                {item.category && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs font-semibold text-white/90 drop-shadow">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{item.category}</span>
                  </div>
                )}
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="font-heading text-xl sm:text-2xl font-bold mb-3 transition-colors duration-200 group-hover:text-amber-600 line-clamp-1"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6 line-clamp-3"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider font-semibold opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                      Giá tham khảo
                    </span>
                    <span
                      className="text-lg sm:text-xl font-extrabold"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {item.price}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => onSelectService && onSelectService(item.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm group-hover:shadow hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: 'var(--color-primary-light)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    <span>Chọn Mua</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

