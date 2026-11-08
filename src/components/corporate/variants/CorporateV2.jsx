import React, { useState } from 'react';
import { Cpu, Cloud, Database, Lock, ArrowRight, CheckCircle2, LineChart, Code2 } from 'lucide-react';

export default function CorporateV2({ data, onSelectService }) {
  const [activeTab, setActiveTab] = useState(0);

  const digitalSolutions = [
    {
      title: 'Hệ Sinh Thái ERP / CRM Đám Mây',
      desc: 'Tích hợp toàn diện luồng dữ liệu bán hàng, kho vận và kế toán tự động theo thời gian thực trên nền tảng AWS / Azure.',
      metrics: 'Giảm 50% thời gian xử lý đơn hàng',
      icon: Cloud,
    },
    {
      title: 'Kiến Trúc Dữ Liệu Data Lakehouse & AI',
      desc: 'Xây dựng kho dữ liệu tập trung, triển khai mô hình học máy dự báo nhu cầu thị trường và tối ưu hóa chi phí vận hành.',
      metrics: 'Độ chính xác dự báo 94.6%',
      icon: Database,
    },
    {
      title: 'An Ninh Mạng & Bảo Mật Dữ Liệu Chuẩn SOC 2',
      desc: 'Thiết lập tường lửa đa lớp, mã hóa đầu cuối và kiểm toán lỗ hổng bảo mật định kỳ bảo vệ tài sản số doanh nghiệp.',
      metrics: 'Cam kết 99.99% Uptime an toàn',
      icon: Lock,
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-slate-900 transition-colors">
      {/* 1. Digital Transformation Agency Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-3 py-1 rounded-md">
            DIGITAL TRANSFORMATION & CLOUD • BỘ GIAO DIỆN 2
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-slate-900 mt-4 mb-6 tracking-tight leading-[1.15]">
            Tăng Tốc Chuyển Đổi Số & Tự Động Hóa Vận Hành Doanh Nghiệp
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl">
            Chúng tôi hiện đại hóa hệ thống công nghệ thông tin lõi (Legacy IT), đưa điện toán đám mây và trí tuệ nhân tạo vào quy trình vận hành giúp doanh nghiệp dẫn đầu làn sóng chuyển đổi số.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#solutions"
              className="px-8 py-4 rounded-xl font-bold text-sm text-white shadow-xl hover:scale-105 transition-all bg-blue-900 hover:bg-blue-800"
            >
              Khám Phá Giải Pháp Công Nghệ
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
            >
              Đăng Ký Khảo Sát Hệ Thống IT
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Digital Solutions Grid */}
      <section id="solutions" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Năng Lực Công Nghệ Lõi Của Nexus Digital
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Được thiết kế theo tiêu chuẩn kiến trúc Microservices hiện đại, dễ dàng mở rộng theo quy mô doanh nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-700 hover:shadow-2xl transition-all duration-300 card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center mb-6 shadow-md">
                      <Icon className="w-7 h-7 text-amber-300" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">{sol.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{sol.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 text-xs font-bold text-blue-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{sol.metrics}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

