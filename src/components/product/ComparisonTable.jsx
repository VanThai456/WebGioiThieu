import React from 'react';
import { Check, Minus, Zap, Sparkles } from 'lucide-react';

export default function ComparisonTable({ onSelectVersion }) {
  const tiers = [
    {
      id: 'standard',
      name: 'Apex Standard',
      color: 'Midnight Black',
      price: '3.890.000 đ',
      highlight: false,
      badge: 'Phổ biến nhất',
    },
    {
      id: 'silver',
      name: 'Apex Premium',
      color: 'Moonlight Silver',
      price: '4.150.000 đ',
      highlight: true,
      badge: 'Khuyên Dùng',
    },
    {
      id: 'cyber',
      name: 'Apex Cyber Neon',
      color: 'RGB Aura Edition',
      price: '4.590.000 đ',
      highlight: false,
      badge: 'Bản Giới Hạn',
    },
  ];

  const specs = [
    { name: 'Màng loa Beryllium 40mm', std: true, sil: true, cyb: true },
    { name: 'Khử ồn chủ động Hybrid ANC -45dB', std: true, sil: true, cyb: true },
    { name: 'Thời lượng pin liên tục', std: '55 Giờ', sil: '65 Giờ', cyb: '65 Giờ' },
    { name: 'Codec giải mã Hi-Res LDAC & aptX', std: 'LDAC tiêu chuẩn', sil: 'LDAC + aptX Adaptive', cyb: 'LDAC + aptX Lossless' },
    { name: 'Chất liệu đệm tai', std: 'Da Protein thoáng khí', sil: 'Da cừu nguyên bản êm ái', cyb: 'Da cừu kháng nước IPX5' },
    { name: 'Hệ thống đèn LED AuraSync RGB', std: false, sil: false, cyb: true },
    { name: 'Tặng kèm Dock sạc không dây 15W', std: false, sil: true, cyb: true },
    { name: 'Bảo hành chính hãng 1 đổi 1', std: '12 Tháng', sil: '24 Tháng', cyb: '24 Tháng VIP' },
  ];

  const renderVal = (val) => {
    if (val === true) return <Check className="w-5 h-5 text-emerald-600 mx-auto" />;
    if (val === false) return <Minus className="w-5 h-5 text-slate-300 mx-auto" />;
    return <span className="text-xs sm:text-sm font-semibold text-slate-700">{val}</span>;
  };

  return (
    <section id="comparison" className="py-12 sm:py-20 md:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12 md:mb-16">
          <h2 className="font-heading text-xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 sm:mb-4 text-slate-900">
            Chọn Phiên Bản Phù Hợp Với Bạn
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-600">
            So sánh chi tiết từng tính năng để tìm ra chiếc tai nghe hoàn hảo cho phong cách thưởng thức âm nhạc của bạn.
          </p>
          <p className="md:hidden text-[11px] font-mono text-indigo-600 mt-3 font-semibold">
            ← Vuốt ngang để xem đầy đủ bảng so sánh →
          </p>
        </div>

        {/* Comparison Matrix Table in Light Studio Theme */}
        <div className="overflow-x-auto rounded-2xl sm:rounded-3xl border border-slate-200 bg-white shadow-xl">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-6 text-sm font-mono text-slate-500 uppercase tracking-wider w-1/4">
                  Tính Năng & Thông Số
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    className={`p-6 text-center w-1/4 ${
                      tier.highlight ? 'bg-indigo-50/50 border-x border-indigo-200' : ''
                    }`}
                  >
                    {tier.badge && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase mb-2 bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {tier.badge}
                      </span>
                    )}
                    <h3 className="font-heading text-lg font-bold text-slate-900">{tier.name}</h3>
                    <p className="text-xs text-slate-500 mb-2">{tier.color}</p>
                    <span className="text-lg font-black text-indigo-600 block mb-4 font-mono">
                      {tier.price}
                    </span>
                    <a
                      href="#contact"
                      onClick={() => onSelectVersion && onSelectVersion(tier.name)}
                      className={`inline-block w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                        tier.highlight
                          ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md hover:shadow-indigo-500/25'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      }`}
                    >
                      Chọn Bản Này
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {specs.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-700">{row.name}</td>
                  <td className="p-4 sm:p-5 text-center">{renderVal(row.std)}</td>
                  <td className="p-4 sm:p-5 text-center bg-indigo-50/30 border-x border-indigo-100">
                    {renderVal(row.sil)}
                  </td>
                  <td className="p-4 sm:p-5 text-center">{renderVal(row.cyb)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
