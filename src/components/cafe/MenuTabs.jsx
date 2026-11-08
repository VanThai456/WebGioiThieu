import React, { useState } from 'react';
import { Coffee, Sparkles, Tag, Plus } from 'lucide-react';

export default function MenuTabs({ data, onSelectService }) {
  const { badge, title, description, categories, items } = data.menuTabs || {
    badge: 'THỰC ĐƠN ĐẶC SẮC',
    title: 'Hương Vị Thủ Công Đánh Thức Vị Giác',
    description: 'Từng món đồ uống và bánh ngọt được pha chế và nướng mới mỗi sáng từ nguyên liệu tuyển chọn khắt khe.',
    categories: ['Tất cả', 'Cà phê ủ lạnh & phin', 'Trà & Thảo mộc', 'Bánh ngọt mỗi ngày'],
    items: data.services?.items || []
  };

  const [activeTab, setActiveTab] = useState('Tất cả');

  // Filter items
  const filteredItems = activeTab === 'Tất cả'
    ? items
    : items.filter((item) => item.category?.toLowerCase().includes(activeTab.toLowerCase()) || activeTab.toLowerCase().includes(item.category?.toLowerCase()));

  return (
    <section id="services" className="py-24 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {badge && (
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
              style={{
                backgroundColor: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
              }}
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
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

        {/* Category Tabs */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
            {categories.map((cat, idx) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-sm ${
                    isActive
                      ? 'text-white shadow-md scale-105'
                      : 'hover:bg-black/5 dark:hover:bg-white/10 opacity-75 hover:opacity-100'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: isActive ? '#FFFFFF' : 'var(--color-text)',
                    borderColor: 'rgba(0,0,0,0.06)',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 card-hover-effect border flex flex-col"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-amber-50">
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

                {/* Category tag */}
                {item.category && (
                  <div className="absolute bottom-3 left-4 flex items-center gap-1 text-xs font-semibold text-white/95 drop-shadow">
                    <Tag className="w-3.5 h-3.5 text-amber-300" />
                    <span>{item.category}</span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className="font-heading text-xl font-bold transition-colors group-hover:text-amber-700"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-2"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {item.description}
                  </p>

                  {/* Tasting notes pill if available */}
                  {item.tastingNotes && (
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {item.tastingNotes.map((note, nIdx) => (
                        <span
                          key={nIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-amber-100/70 text-amber-900 border border-amber-200"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer price & Order */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <span
                    className="text-lg font-black tracking-tight"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.price}
                  </span>

                  <a
                    href="#contact"
                    onClick={() => onSelectService && onSelectService(item.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: '#FFFFFF',
                    }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Chọn Món</span>
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

