import React, { useState } from 'react';
import { Coffee, ArrowRight, Star, Clock, Check, Sparkles, Heart, Plus } from 'lucide-react';

export default function CafeV2({ data, onSelectService }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const signaturePicks = [
    {
      name: 'Cold Brew Mộc Châu',
      note: 'Hương hoa nhài, mật ong rừng, hậu vị ngọt thanh mát',
      price: '58.000 đ',
      roast: 'Light Roast',
      img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Latte Yến Mạch Tự Nhiên',
      note: 'Hạt Arabica Cầu Đất kết hợp sữa hạt Oatly thanh béo',
      price: '62.000 đ',
      roast: 'Medium Roast',
      img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Cà Phê Phin Gỗ Mộc',
      note: 'Đậm đà truyền thống, pha chế bằng phin gốm Bát Tràng',
      price: '48.000 đ',
      roast: 'Dark Roast',
      img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-[#F7F5F0] text-[#2C221E] transition-colors">
      {/* 1. Hero: Minimalist Split Hero (Scandinavian Coffee Bar) */}
      <section className="pt-20 pb-8 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-heading text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#231815] mb-3 sm:mb-6 leading-[1.24] sm:leading-[1.18]">
              Tối Giản Trong Không Gian, Đậm Đà Từng Giọt Cà Phê Mộc
            </h1>
            <p className="text-xs sm:text-lg text-[#6B5E57] leading-relaxed mb-5 sm:mb-8 max-w-xl">
              Được thiết kế theo triết lý Wabi-Sabi và Scandinavian, The Artisan mang đến trải nghiệm thưởng thức cà phê nguyên bản trong không gian ánh sáng tự nhiên tĩnh lặng.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-4">
              <a
                href="#menu-board"
                className="px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-white shadow-md hover:shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Khám Phá Menu Quầy Bar
              </a>
              <a
                href="#booking"
                className="px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-[#231815] bg-white border border-[#D9D2C9] hover:bg-amber-50/50 shadow-sm transition-transform hover:scale-105"
              >
                Giữ Chỗ Ngồi Chill
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 lg:border-8 border-white bg-amber-100">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
                alt="Minimalist Coffee Bar"
                className="w-full h-[220px] sm:h-[340px] lg:h-[440px] object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-800">Cà phê đặc sản hôm nay</span>
                  <p className="font-bold text-xs sm:text-sm text-slate-900">Arabica Cầu Đất Hái Chín 100%</p>
                </div>
                <span className="text-xs sm:text-sm font-black text-amber-700 shrink-0 ml-2">65.000 đ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Minimalist Menu Board (Bảng menu quầy bar tinh tế) */}
      <section id="menu-board" className="py-10 sm:py-16 md:py-20 bg-white border-y border-[#ECE6DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12">
            <div>
              <h2 className="font-heading text-xl sm:text-4xl font-extrabold text-[#231815]">
                Lựa Chọn Nổi Bật Của Barista
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6B5E57] max-w-md mt-1.5 md:mt-0">
              Các thức uống được chiết xuất thủ công theo từng mẻ nhỏ để đảm bảo độ tươi mới và cân bằng hoàn hảo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {signaturePicks.map((item, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE4DC] hover:border-amber-600/40 hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-row md:flex-col items-center md:items-stretch justify-between gap-3 md:gap-0"
              >
                <div className="flex flex-row md:flex-col items-center md:items-stretch gap-3 md:gap-0 flex-1 min-w-0">
                  <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden md:mb-4 bg-amber-50">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1 md:mb-2">
                      <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 truncate">
                        {item.roast}
                      </span>
                      <span className="text-sm sm:text-base font-black text-amber-900 shrink-0">{item.price}</span>
                    </div>
                    <h3 className="font-heading text-sm sm:text-xl font-bold text-[#231815] mb-1 md:mb-2 truncate md:whitespace-normal">{item.name}</h3>
                    <p className="text-[11px] sm:text-xs text-[#70645E] leading-relaxed line-clamp-2 md:line-clamp-none">{item.note}</p>

                    <button
                      type="button"
                      onClick={() => onSelectService && onSelectService(item.name)}
                      className="mt-2.5 md:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold bg-white border border-[#D9D1C7] text-[#231815] shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Chọn</span>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(item.name)}
                  className="hidden md:flex mt-6 w-full py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-amber-900 hover:text-white border border-[#D9D1C7] transition-all items-center justify-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Chọn Thưởng Thức</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Barista Philosophy (Triết lý pha chế tối giản) */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <Coffee className="w-8 h-8 sm:w-10 sm:h-10 text-amber-700 mx-auto mb-3 sm:mb-4" />
        <h2 className="font-heading text-xl sm:text-4xl font-extrabold text-[#231815] mb-4 sm:mb-6">
          "Chúng tôi không chỉ bán cà phê, chúng tôi tạo nên điểm dừng an yên giữa cuộc sống hối hả."
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-5 sm:pt-8 border-t border-[#E8E2D8] text-center">
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-black text-amber-900">100%</span>
            <span className="text-[11px] sm:text-xs text-[#6B5E57] font-medium">Hạt Cà Phê Mộc</span>
          </div>
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-black text-amber-900">24H</span>
            <span className="text-[11px] sm:text-xs text-[#6B5E57] font-medium">Ủ Lạnh Cold Brew</span>
          </div>
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-black text-amber-900">0%</span>
            <span className="text-[11px] sm:text-xs text-[#6B5E57] font-medium">Hương Liệu Nhân Tạo</span>
          </div>
          <div>
            <span className="block font-heading text-2xl sm:text-3xl font-black text-amber-900">4.9★</span>
            <span className="text-[11px] sm:text-xs text-[#6B5E57] font-medium">Đánh Giá Từ Khách Hàng</span>
          </div>
        </div>
      </section>
    </div>
  );
}

