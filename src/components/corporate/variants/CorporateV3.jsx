import React from 'react';
import { Landmark, TrendingUp, DollarSign, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CorporateV3({ data, onSelectService }) {
  const financialHighlights = [
    { title: 'Tổng Tài Sản Cố Vấn (AUM)', val: '$520M+', sub: 'Quản trị danh mục đầu tư tổ chức' },
    { title: 'Thương Vụ M&A Thành Công', val: '28 Deal', sub: 'Thẩm định Due Diligence chuẩn xác' },
    { title: 'Tỷ Suất Sinh Lời TB (IRR)', val: '28.5%', sub: 'Đo lường kiểm toán độc lập' },
    { title: 'Tỷ Lệ Giữ Chân Khách Hàng', val: '99.4%', sub: 'Hợp đồng đồng hành dài hạn trên 5 năm' },
  ];

  return (
    <div className="bg-[#FAF9F5] text-slate-900 transition-colors">
      {/* 1. Global Private Equity & M&A Hero */}
      <section className="pt-20 pb-10 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto mb-6 sm:mb-16">
          <h1 className="font-heading text-2xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-3 sm:mb-6 tracking-tight leading-[1.22] sm:leading-[1.14]">
            Kiến Tạo Giá Trị Vốn & Tái Cấu Trúc Tài Chính Bền Vững
          </h1>
          <p className="text-xs sm:text-xl text-slate-600 leading-relaxed mb-5 sm:mb-10 max-w-2xl mx-auto">
            Đồng hành cùng các tập đoàn lớn trong các thương vụ sáp nhập M&A chiến lược, huy động vốn cổ phần tư nhân và định hình tương lai tài chính thịnh vượng.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            <a
              href="#figures"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-white shadow-xl hover:scale-105 transition-all bg-[#0F3B82] hover:bg-[#0A295C]"
            >
              Hồ Sơ Năng Lực Tài Chính
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-4 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-all shadow-sm"
            >
              Đặt Lịch Phiên Cố Vấn M&A
            </a>
          </div>
        </div>

        {/* Financial Highlights Row */}
        <div id="figures" className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-10 border-t border-slate-200">
          {financialHighlights.map((stat, idx) => (
            <div key={idx} className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
              <span className="block text-[10px] sm:text-xs font-bold uppercase text-slate-500 mb-1">{stat.title}</span>
              <span className="block font-heading text-xl sm:text-3xl md:text-4xl font-black text-[#0F3B82] my-1 sm:my-2">{stat.val}</span>
              <span className="text-[10px] sm:text-[11px] text-slate-400">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

