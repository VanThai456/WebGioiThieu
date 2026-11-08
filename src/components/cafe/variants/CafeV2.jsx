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
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-800 bg-amber-100/80 px-3 py-1 rounded-md">
              SCANDINAVIAN COFFEE BAR • BỘ GIAO DIỆN 2
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#231815] mt-4 mb-6 leading-[1.18]">
              Tối Giản Trong Không Gian, Đậm Đà Từng Giọt Cà Phê Mộc
            </h1>
            <p className="text-base sm:text-lg text-[#6B5E57] leading-relaxed mb-8 max-w-xl">
              Được thiết kế theo triết lý Wabi-Sabi và Scandinavian, The Artisan mang đến trải nghiệm thưởng thức cà phê nguyên bản trong không gian ánh sáng tự nhiên tĩnh lặng.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu-board"
                className="px-7 py-3.5 rounded-full font-bold text-sm text-white shadow-md hover:shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Khám Phá Menu Quầy Bar
              </a>
              <a
                href="#booking"
                className="px-7 py-3.5 rounded-full font-bold text-sm text-[#231815] bg-white border border-[#D9D2C9] hover:bg-amber-50/50 shadow-sm transition-transform hover:scale-105"
              >
                Giữ Chỗ Ngồi Chill
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-amber-100">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1000&q=80"
                alt="Minimalist Coffee Bar"
                className="w-full h-[440px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Cà phê đặc sản hôm nay</span>
                  <p className="font-bold text-sm text-slate-900">Arabica Cầu Đất Hái Chín 100%</p>
                </div>
                <span className="text-sm font-black text-amber-700">65.000 đ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Minimalist Menu Board (Bảng menu quầy bar tinh tế) */}
      <section id="menu-board" className="py-20 bg-white border-y border-[#ECE6DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-700">MENU TẠI QUẦY</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#231815] mt-1">
                Lựa Chọn Nổi Bật Của Barista
              </h2>
            </div>
            <p className="text-sm text-[#6B5E57] max-w-md mt-2 md:mt-0">
              Các thức uống được chiết xuất thủ công theo từng mẻ nhỏ để đảm bảo độ tươi mới và cân bằng hoàn hảo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signaturePicks.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EBE4DC] hover:border-amber-600/40 hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 rounded-xl overflow-hidden mb-4 bg-amber-50">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
                      {item.roast}
                    </span>
                    <span className="text-base font-black text-amber-900">{item.price}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#231815] mb-2">{item.name}</h3>
                  <p className="text-xs text-[#70645E] leading-relaxed">{item.note}</p>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(item.name)}
                  className="mt-6 w-full py-2.5 rounded-xl text-xs font-bold bg-white hover:bg-amber-900 hover:text-white border border-[#D9D1C7] transition-all flex items-center justify-center gap-1.5 shadow-sm"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <Coffee className="w-10 h-10 text-amber-700 mx-auto mb-4" />
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#231815] mb-6">
          "Chúng tôi không chỉ bán cà phê, chúng tôi tạo nên điểm dừng an yên giữa cuộc sống hối hả."
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[#E8E2D8] text-center">
          <div>
            <span className="block font-heading text-3xl font-black text-amber-900">100%</span>
            <span className="text-xs text-[#6B5E57] font-medium">Hạt Cà Phê Mộc</span>
          </div>
          <div>
            <span className="block font-heading text-3xl font-black text-amber-900">24H</span>
            <span className="text-xs text-[#6B5E57] font-medium">Ủ Lạnh Cold Brew</span>
          </div>
          <div>
            <span className="block font-heading text-3xl font-black text-amber-900">0%</span>
            <span className="text-xs text-[#6B5E57] font-medium">Hương Liệu Nhân Tạo</span>
          </div>
          <div>
            <span className="block font-heading text-3xl font-black text-amber-900">4.9★</span>
            <span className="text-xs text-[#6B5E57] font-medium">Đánh Giá Từ Khách Hàng</span>
          </div>
        </div>
      </section>
    </div>
  );
}

