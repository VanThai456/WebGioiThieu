import React from 'react';
import { Search, Compass, Rocket, BarChart3, CheckCircle } from 'lucide-react';

export default function ProcessTimeline() {
  const phases = [
    {
      phase: 'Giai Đoạn 01',
      title: 'Khảo Sát Hiện Trạng & Thẩm Định Sâu',
      desc: 'Phỏng vấn ban điều hành, kiểm toán dòng tiền và bóc tách các điểm nghẽn kìm hãm đà tăng trưởng của tổ chức.',
      time: 'Tuần 1 - Tuần 2',
      deliverable: 'Báo cáo chẩn đoán sức khỏe doanh nghiệp toàn diện',
      icon: Search,
    },
    {
      phase: 'Giai Đoạn 02',
      title: 'Hoạch Định Chiến Lược & Mô Hình Tài Chính',
      desc: 'Thiết kế lộ trình chuyển đổi số, ma trận sản phẩm cạnh tranh và kịch bản tài chính tối ưu hóa dòng tiền.',
      time: 'Tuần 3 - Tuần 6',
      deliverable: 'Bộ tài liệu chiến lược tăng trưởng & Kế hoạch hành động 3 năm',
      icon: Compass,
    },
    {
      phase: 'Giai Đoạn 03',
      title: 'Triển Khai Thí Điểm & Tự Động Hóa Quy Trình',
      desc: 'Cố vấn trực tiếp (hands-on) cùng đội ngũ nội bộ, số hóa quy trình vận hành và áp dụng hệ thống quản trị OKRs/KPIs.',
      time: 'Tháng 2 - Tháng 4',
      deliverable: 'Hệ thống vận hành số tinh gọn đi vào hoạt động thực tế',
      icon: Rocket,
    },
    {
      phase: 'Giai Đoạn 04',
      title: 'Đo Lường Chỉ Số ROI & Chuyển Giao Năng Lực',
      desc: 'Đánh giá tỷ suất lợi nhuận đầu tư (ROI), đào tạo đội ngũ lãnh đạo kế cận để doanh nghiệp tự vận hành bền vững.',
      time: 'Tháng 5 - Tháng 6',
      deliverable: 'Biên bản nghiệm thu cam kết tăng trưởng doanh thu đo lường được',
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-12 sm:py-20 md:py-24 bg-[#0A1A3A] text-white relative overflow-hidden">
      {/* Background ambient shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 sm:mb-4 text-white">
            Lộ Trình Cố Vấn Chiến Lược 4 Giai Đoạn
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Chúng tôi cam kết đồng hành thực chiến cùng doanh nghiệp từ giai đoạn định hướng đến khi kết quả tăng trưởng được chứng minh trên báo cáo tài chính.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {phases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-3.5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-slate-900/80 border border-blue-900/60 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-6">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md sm:rounded-lg text-[9px] sm:text-xs font-mono font-bold bg-blue-950 text-blue-300 border border-blue-800">
                      {item.phase}
                    </span>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-800/40 border border-blue-600/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xs sm:text-lg font-bold mb-1.5 sm:mb-3 text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-sm text-slate-300 leading-relaxed mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-2 sm:mt-6 pt-2.5 sm:pt-4 border-t border-slate-800 text-[10px] sm:text-xs">
                  <div className="flex items-center justify-between text-slate-400 mb-1.5 sm:mb-2">
                    <span className="hidden sm:inline">Thời lượng:</span>
                    <strong className="text-amber-300">{item.time}</strong>
                  </div>
                  <div className="hidden sm:flex p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-300 items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

