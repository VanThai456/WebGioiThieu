import React from 'react';
import { Flame, Droplets, HeartHandshake, Sprout, ArrowRight } from 'lucide-react';

export default function BrewingProcess({ data }) {
  const steps = [
    {
      step: '01',
      title: 'Hạt Chín Cây Tuyển Chọn',
      desc: '100% hạt Arabica Cầu Đất chín mọng được hái thủ công bằng tay ở độ cao 1.600m giàu khoáng chất.',
      icon: Sprout,
    },
    {
      step: '02',
      title: 'Rang Mộc Mẻ Nhỏ',
      desc: 'Công nghệ rang mộc mẻ nhỏ Profile Roasting giữ trọn tầng hương trái cây và vị ngọt hậu mộc mạc.',
      icon: Flame,
    },
    {
      step: '03',
      title: 'Chiết Xuất Tinh Khiết',
      desc: 'Ủ lạnh Cold Brew 24h hoặc chiết xuất áp suất chuẩn xác tạo lớp Crema dày vàng óng ả.',
      icon: Droplets,
    },
    {
      step: '04',
      title: 'Trao Gửi Yêu Thương',
      desc: 'Từng tách cà phê được các Barista tạo hình Latte Art tỉ mỉ, gửi trao bạn phút giây an yên trọn vẹn.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-amber-900/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 shadow-sm"
            style={{
              backgroundColor: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
            }}
          >
            QUY TRÌNH THỦ CÔNG
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Hành Trình Tinh Túy Từ Nông Trại Đến Tách Cà Phê
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Chúng tôi không tạo ra cà phê công nghiệp, chúng tôi gìn giữ tình yêu thương thuần khiết với hạt cà phê nông sản Việt.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl border transition-all duration-300 card-hover-effect flex flex-col justify-between"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'rgba(0,0,0,0.06)',
                }}
              >
                {/* Step Number watermarked */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-110"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className="font-heading text-3xl font-black opacity-20"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-heading text-xl font-bold mb-3"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-bold" style={{ color: 'var(--color-accent)' }}>
                  <span>Bước {idx + 1} chuẩn quy trình</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

