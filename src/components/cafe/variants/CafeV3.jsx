import React from 'react';
import { Sparkles, Calendar, Clock, Crown, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CafeV3({ data, onSelectService }) {
  const teaSets = [
    {
      title: 'Set Trà Chiều Royal Heritage',
      desc: 'Bình trà hoa cúc hoàng gia kèm tháp 3 tầng bánh ngọt Macaron, Bánh Tart hoa quả tươi và Scones bơ Pháp.',
      price: '289.000 đ',
      guests: 'Phù hợp 2 - 3 người',
      img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Set Trà Thảo Mộc Rose Blossom',
      desc: 'Trà hoa hồng Damascus kết hợp mật ong hoa rừng nguyên chất, bánh sừng bò hạnh nhân nướng mới.',
      price: '195.000 đ',
      guests: 'Phù hợp 1 - 2 người',
      img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'VIP High-Tea & Champagne Lounge',
      desc: 'Thưởng trà cao cấp trong phòng riêng yên tĩnh, đi kèm set canape mặn và bánh ngọt Pháp thượng hạng.',
      price: '550.000 đ',
      guests: 'Phòng VIP 4 - 6 người',
      img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="bg-[#FCF9F5] text-[#2F2119] transition-colors">
      {/* 1. Luxury Hero: Royal High-Tea Lounge */}
      <section className="relative pt-20 pb-8 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-2xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#2B1810] mb-3 sm:mb-6 leading-[1.22] sm:leading-[1.15]">
            Nghệ Thuật Thưởng Trà Chiều Hoàng Gia & Bánh Pháp
          </h1>

          <p className="text-xs sm:text-xl text-[#755F55] leading-relaxed mb-5 sm:mb-10 max-w-2xl mx-auto">
            Không gian sang trọng mang hơi thở quý tộc châu Âu, nơi bạn thả lỏng tâm hồn bên tách trà thơm thượng hạng và những khay bánh ngọt được nướng thủ công tinh xảo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-16">
            <a
              href="#tea-sets"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-[#78350F] hover:bg-[#5C270A]"
            >
              Khám Phá Các Set Trà Chiều
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-sm text-[#78350F] bg-white border border-amber-900/20 hover:bg-amber-50 shadow-sm transition-all hover:scale-105"
            >
              Đặt Phòng Trà Riêng VIP
            </a>
          </div>
        </div>

        {/* Featured Hero Photo Carousel Frame */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white max-w-5xl mx-auto relative group">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=85"
            alt="Royal Tea Lounge"
            className="w-full h-[210px] sm:h-[360px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent flex items-end p-4 sm:p-8 text-white text-left">
            <div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-amber-300">Không Gian Phòng Trà VIP</span>
              <h3 className="font-heading text-base sm:text-2xl md:text-3xl font-bold mt-0.5 sm:mt-1 leading-snug">Nơi Gặp Gỡ Tinh Tế Của Những Tâm Hồn Đồng Điệu</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tiered Tea Sets Showcase */}
      <section id="tea-sets" className="py-10 sm:py-16 md:py-20 bg-white border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
            <h2 className="font-heading text-xl sm:text-4xl font-extrabold text-[#2F2119] mb-2 sm:mb-4">
              Các Set Trà Chiều Tinh Tuyển Nhất
            </h2>
            <p className="text-xs sm:text-base text-[#755F55]">
              Mỗi set trà đi kèm bình gốm giữ nhiệt, bộ tách sứ mạ vàng và tuyển tập 5 - 7 loại bánh ngọt đặc trưng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {teaSets.map((item, idx) => (
              <div
                key={idx}
                className="group p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF6F0] border border-amber-900/15 hover:border-amber-800 hover:shadow-2xl transition-all duration-300 card-hover-effect flex flex-row md:flex-col items-center md:items-stretch justify-between gap-3 md:gap-0"
              >
                <div className="flex flex-row md:flex-col items-center md:items-stretch gap-3 md:gap-0 flex-1 min-w-0">
                  <div className="w-24 h-28 md:w-full md:h-60 shrink-0 rounded-xl md:rounded-2xl overflow-hidden md:mb-5 bg-amber-100">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs font-bold text-amber-800 mb-1 md:mb-2">
                      <span className="truncate">{item.guests}</span>
                      <span className="text-sm sm:text-lg font-black text-amber-950 font-serif shrink-0">{item.price}</span>
                    </div>
                    <h3 className="font-heading text-sm sm:text-xl font-bold text-[#2B1810] mb-1 md:mb-2 truncate md:whitespace-normal">{item.title}</h3>
                    <p className="text-[11px] sm:text-xs text-[#705E56] leading-relaxed line-clamp-2 md:line-clamp-none mb-2.5 md:mb-6">{item.desc}</p>

                    <button
                      type="button"
                      onClick={() => onSelectService && onSelectService(item.title)}
                      className="md:hidden px-3.5 py-1.5 rounded-xl text-[11px] font-bold text-white bg-[#78350F] hover:bg-[#5C270A] transition-colors shadow-sm"
                    >
                      Đặt Set Trà Này
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService && onSelectService(item.title)}
                  className="hidden md:block w-full py-3 rounded-2xl text-xs font-bold text-white bg-[#78350F] hover:bg-[#5C270A] transition-colors shadow-md"
                >
                  Đặt Set Trà Này
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

