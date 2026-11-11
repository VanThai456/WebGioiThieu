import React, { useState } from 'react';
import { Star, ShieldCheck, Truck, RotateCcw, Package, Check, ArrowRight, Heart, ShoppingBag, Rotate3d } from 'lucide-react';

export default function ProductV2({ data, onSelectService }) {
  const [selectedModel, setSelectedModel] = useState('Midnight Black');

  const unboxingItems = [
    { title: '01 Tai Nghe AuraSound Apex Pro', desc: 'Đóng gói trong khuôn đệm nhung chống sốc chuẩn quân đội' },
    { title: '01 Dock Sạc Không Dây AuraStand 15W', desc: 'Đế hợp kim kẽm mạ PVD cao cấp dành cho bàn làm việc' },
    { title: '01 Cáp Audio Mạ Bạc Hi-End 4.4mm', desc: 'Lõi đồng 6N OCC mạ bạc chống suy hao tín hiệu âm thanh' },
    { title: '01 Hộp Đựng Du Lịch Chống Nước', desc: 'Vỏ Polycarbonate phủ vải Oxford chống va đập 360 độ' },
    { title: '01 Thẻ Bảo Hành Kim Loại VIP', desc: 'Kích hoạt bảo hành điện tử 1 đổi 1 trong 24 tháng toàn cầu' },
  ];

  const reviews = [
    {
      author: 'Trần Minh Hoàng',
      role: 'Nhạc sĩ / Producer tại Hà Nội',
      rating: 5,
      content: 'Chất âm cực kỳ cân bằng, âm bass sâu chắc không bị ù rền, dải mid trong trẻo rất nịnh tai. Khử ồn ANC trên máy bay êm ru!',
      verified: true,
      time: '3 ngày trước',
    },
    {
      author: 'Lê Thanh Thảo',
      role: 'Content Creator',
      rating: 5,
      content: 'Bản Moonlight Silver đẹp xuất sắc ngoài đời! Đệm tai da cừu đeo làm việc cả ngày không bị đau hay nóng tai chút nào.',
      verified: true,
      time: '1 tuần trước',
    },
    {
      author: 'Nguyễn Tuấn Anh',
      role: 'Audiophile & Tech Reviewer',
      rating: 5,
      content: 'Khả năng giải mã codec LDAC 32-bit thực sự đáng giá từng xu. Đáng tiền hơn hẳn các dòng tai nghe cùng phân khúc giá 5-7 triệu.',
      verified: true,
      time: '2 tuần trước',
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-900 transition-colors">
      {/* 1. E-Commerce Hero with Quick Purchase Box */}
      <section className="pt-20 pb-8 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-10 lg:gap-14 items-center">
          {/* Left: Product Gallery Angle Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-4 sm:p-8 lg:p-10 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85"
                alt="AuraSound Apex Pro E-Commerce Edition"
                className="w-full h-[200px] sm:h-[340px] lg:h-[460px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                SẴN HÀNG GIAO 2H
              </div>
              <a
                href="#gallery"
                className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-slate-900/90 text-white hover:bg-indigo-600 transition-colors shadow-lg backdrop-blur-md flex items-center gap-1.5"
              >
                <Rotate3d className="w-3.5 h-3.5 animate-spin-slow text-indigo-400" />
                <span>Xem 3D 360°</span>
              </a>
            </div>
          </div>

          {/* Right: Buy Box */}
          <div className="lg:col-span-6">
            <h1 className="font-heading text-xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-2 sm:mb-3 tracking-tight leading-snug sm:leading-tight">
              AuraSound Apex Pro - Flagship Wireless
            </h1>

            {/* Rating Stars */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3.5 sm:mb-6">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-700">4.9 / 5.0</span>
              <span className="text-[11px] sm:text-xs text-slate-400">(3.420 đánh giá xác thực)</span>
            </div>

            {/* Price Box */}
            <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm mb-4 sm:mb-6 flex flex-wrap items-baseline gap-2.5 sm:gap-4">
              <span className="text-xl sm:text-3xl lg:text-4xl font-black text-indigo-600 font-mono">
                3.890.000 đ
              </span>
              <span className="text-sm sm:text-lg text-slate-400 line-through">5.990.000 đ</span>
              <span className="px-2 py-0.5 sm:px-2.5 rounded-lg text-[10px] sm:text-xs font-bold bg-rose-100 text-rose-700">
                TIẾT KIỆM 35%
              </span>
            </div>

            {/* Color Selector */}
            <div className="mb-5 sm:mb-6">
              <span className="block text-xs font-mono font-bold uppercase text-slate-600 mb-2">
                Màu sắc: <strong>{selectedModel}</strong>
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['Midnight Black', 'Moonlight Silver', 'Cyber Neon'].map((col) => (
                  <button
                    key={col}
                    type="button"
                    onClick={() => setSelectedModel(col)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedModel === col
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-500/20 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6">
              <a
                href="#contact"
                onClick={() => onSelectService && onSelectService(`AuraSound Apex - Màu ${selectedModel}`)}
                className="flex-1 py-3 sm:py-4 px-5 sm:px-6 rounded-xl sm:rounded-2xl text-center font-bold text-sm sm:text-base text-white shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Đặt Mua Ngay (Giao Hỏa Tốc)</span>
              </a>
            </div>

            {/* Highlights guarantee */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-slate-600 pt-3 sm:pt-4 border-t border-slate-200">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bảo hành chính hãng 24 tháng</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <RotateCcw className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>30 ngày dùng thử miễn phí</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Unboxing Package Showcase (Trọn bộ phụ kiện trong hộp) */}
      <section className="py-10 sm:py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-xl sm:text-3xl md:text-4xl font-black text-slate-900 mb-2 sm:mb-4">
              Trọn Bộ Phụ Kiện Đẳng Cấp Đi Kèm
            </h2>
            <p className="text-xs sm:text-base text-slate-600">
              Mọi thứ bạn cần để thưởng thức âm nhạc đỉnh cao đều được đóng gói tỉ mỉ chuẩn hộp quà tặng sang trọng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {unboxingItems.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 sm:gap-4 shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 text-xs sm:text-base font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 mb-0.5 sm:mb-1">{item.title}</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Customer Testimonials (Đánh giá khách hàng) */}
      <section className="py-10 sm:py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-14">
          <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-slate-900 mb-2">Được Tin Dùng Bởi Hơn 50.000+ Khách Hàng</h2>
          <p className="text-xs sm:text-sm text-slate-500">Khảo sát đánh giá thực tế từ người yêu âm thanh trên toàn quốc.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-4">"{rev.content}"</p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{rev.author}</h4>
                  <span className="text-[11px] text-slate-500">{rev.role}</span>
                </div>
                {rev.verified && (
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Đã Mua Hàng
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

