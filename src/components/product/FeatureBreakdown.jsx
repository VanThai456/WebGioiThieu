import React from 'react';
import { Layers, Activity, Wind, Battery, Mic2, ShieldCheck } from 'lucide-react';

export default function FeatureBreakdown() {
  const features = [
    {
      icon: Activity,
      title: 'Màng Loa Beryllium 40mm Cao Cấp',
      desc: 'Độ cứng cao gấp 4 lần thép nhưng nhẹ hơn nhôm 30%, tái tạo dải âm trường từ 4Hz đến 45.000Hz với độ méo hài < 0.05%.',
      tag: 'Âm Thanh Chuẩn Phòng Thu',
    },
    {
      icon: Wind,
      title: 'Khử Ồn Chủ Động Hybrid ANC -45dB',
      desc: 'Hệ thống 4 microphone thu âm môi trường kết hợp thuật toán AI khử ồn thời gian thực 50.000 lần/giây.',
      tag: 'Triệt Tiêu 99% Tạp Âm',
    },
    {
      icon: Layers,
      title: 'Đệm Da Cừu Memory Foam',
      desc: 'Mút hoạt tính ghi nhớ hình dáng công thái học, phủ da cừu protein thoáng khí không gây bí tai khi đeo suốt 8 tiếng.',
      tag: 'Siêu Nhẹ Chỉ 240g',
    },
    {
      icon: Battery,
      title: 'Pin 65 Giờ & Sạc Nhanh AuraCharge',
      desc: 'Thoải mái nghe nhạc trọn tuần không lo hết pin. Khi gấp, chỉ cần cắm sạc nhanh 10 phút là có ngay 5 giờ chơi nhạc liên tục.',
      tag: 'Chuẩn Type-C / Không Dây',
    },
    {
      icon: Mic2,
      title: 'Microphone Chống Nhiễu Gió Beamforming',
      desc: 'Thu trọn giọng nói rõ ràng như đang đối thoại trực tiếp ngay cả khi đang đi bộ ngoài phố gió lớn hay quán cafe ồn ào.',
      tag: 'Đàm Thoại Chuẩn HD',
    },
    {
      icon: ShieldCheck,
      title: 'Khung Nhôm Hàng Không Gia Công CNC',
      desc: 'Khung gập xoay 180 độ bền bỉ vượt qua bài kiểm tra 100.000 lần uốn gập, sơn phủ Anodized chống trầy xước tuyệt đối.',
      tag: 'Độ Bền Chuẩn Quân Đội',
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-20 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 sm:mb-4 text-slate-900">
            Bóc Tách Những Đột Phá Công Nghệ
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Mỗi chi tiết bên trong AuraSound Apex đều được định hình bởi những vật liệu tiên tiến và kỹ nghệ cơ khí chính xác nhất.
          </p>
        </div>

        {/* 6 Feature Breakdown Cards in Light Theme */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="group p-3.5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 hover:border-indigo-400 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-3 sm:mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  <span className="inline-block text-[9px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-indigo-600 mb-1 sm:mb-2">
                    {feat.tag}
                  </span>

                  <h3 className="font-heading text-sm sm:text-xl font-bold mb-1.5 sm:mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-slate-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-8 pt-2.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-400">
                  <span>SPEC_ID: 0{idx + 1}</span>
                  <span className="text-indigo-600 font-bold group-hover:underline">Chi tiết ➔</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
