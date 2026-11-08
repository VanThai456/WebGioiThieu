import React from 'react';
import { Volume2, Activity, Cpu, Sliders, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductV3({ data, onSelectService }) {
  const acousticSpecs = [
    { title: 'Dải Tần Số Đáp Ứng', val: '4Hz - 45.000Hz', sub: 'Đạt chuẩn Hi-Res Audio Nhật Bản' },
    { title: 'Độ Méo Hài Tổng (THD)', val: '< 0.03%', sub: 'Tái tạo âm trường nguyên bản không méo tiếng' },
    { title: 'Trở Kháng Trực Tiếp', val: '32 Ohms', sub: 'Dễ dàng kéo tốt bởi mọi nguồn phát điện thoại & DAC' },
    { title: 'Độ Nhạy Áp Suất SPL', val: '108 dB/mW', sub: 'Độ động dynamic range cực cao cho nhạc giao hưởng' },
  ];

  return (
    <div className="bg-[#FAF9F5] text-slate-900 transition-colors">
      {/* 1. Audiophile Acoustic Engineering Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-indigo-100 text-indigo-900 border border-indigo-200 mb-6">
            ACOUSTIC ENGINEERING • BỘ GIAO DIỆN 3
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.12]">
            Kỹ Nghệ Tái Tạo Âm Thanh Không Gian Chuẩn Phòng Thu
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Được tinh chỉnh bởi các kỹ sư âm học hàng đầu thế giới để truyền tải trọn vẹn từng hơi thở của ca sĩ và tiếng gảy dây đàn mộc mạc nhất.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#acoustic"
              className="px-8 py-4 rounded-full font-bold text-sm text-white shadow-xl hover:scale-105 transition-transform bg-slate-900 hover:bg-indigo-600"
            >
              Xem Thông Số Kỹ Thuật Chi Tiết
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-transform shadow-sm"
            >
              Đặt Mua Bản Audiophile
            </a>
          </div>
        </div>

        {/* Acoustic Driver Visual Feature Frame */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-6 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-indigo-600">BERYLLIUM DOME DRIVER</span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mt-2 mb-4">
                Công Nghệ Màng Loa Bạc Nguyên Khối 40mm
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Màng loa được tôi luyện ở nhiệt độ 1.200°C với lớp phủ Beryllium siêu cứng, loại bỏ hoàn toàn hiện tượng uốn cong màng loa khi chơi các bản nhạc giao hưởng dồn dập.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
                <Activity className="w-5 h-5 text-indigo-600 shrink-0" />
                <span>Kiểm định và chứng nhận bởi Viện Tiêu Chuẩn Âm Thanh Quốc Tế (AES).</span>
              </div>
            </div>

            <div className="h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
                alt="Acoustic Driver"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Frequency & Acoustic Benchmark Metrics */}
      <section id="acoustic" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mb-3">Chỉ Số Benchmark Đo Lường Âm Học</h2>
            <p className="text-sm text-slate-500">Được đo lường trong phòng cách âm chuẩn tiêu chuẩn IEC 60268-7.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {acousticSpecs.map((spec, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-between">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase mb-2">{spec.title}</span>
                <span className="font-mono text-2xl sm:text-3xl font-black text-indigo-700 my-2">{spec.val}</span>
                <span className="text-xs text-slate-500 mt-2">{spec.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

