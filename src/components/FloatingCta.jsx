import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';

export default function FloatingCta({ data, layoutVariant = 1, onCycleVariant }) {
  const cta = data.floatingCta || {
    url: 'https://zalo.me/0837017516',
    zaloPhone: '0837017516',
  };

  const targetUrl = cta.url || 'https://zalo.me/0837017516';

  return (
    <aside aria-label="Tư vấn và đổi giao diện" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5">
      {/* Nút "Đổi giao diện" chuyển đổi 1 -> 2 -> 3 -> 1 */}
      {onCycleVariant && (
        <button
          type="button"
          onClick={onCycleVariant}
          className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 text-white border-2 border-amber-400/80 shadow-2xl backdrop-blur-md hover:bg-slate-950 hover:scale-105 active:scale-95 transition-all cursor-pointer hover:shadow-amber-400/20"
          title="Bấm vào để đổi sang bộ giao diện khác (Mẫu 1 ➔ Mẫu 2 ➔ Mẫu 3)"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          <span className="text-xs sm:text-sm font-extrabold tracking-tight whitespace-nowrap">
            Đổi giao diện <span className="text-amber-300 font-mono">({layoutVariant}/3)</span>
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>
      )}

      {/* Bong bóng Zalo dạng tròn */}
      <div className="relative group">
        {/* Tooltip khi hover vào Zalo */}
        <div className="absolute right-full mr-3.5 hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
          <div className="bg-slate-900/95 text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-2xl whitespace-nowrap backdrop-blur-md border border-white/15 flex items-center gap-2">
            <span>Nhận báo giá qua Zalo: <strong className="text-blue-400">0837.017.516</strong></span>
            <div className="w-2 h-2 bg-slate-900/95 absolute -right-1 top-1/2 -translate-y-1/2 rotate-45 border-r border-t border-white/15" />
          </div>
        </div>

        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Liên hệ Zalo 0837017516"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0068FF] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-blue-500/50"
        >
          {/* Sóng lan tỏa */}
          <span className="absolute inset-0 rounded-full bg-[#0068FF] opacity-40 animate-ping pointer-events-none" />
          <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-30 blur-sm animate-pulse pointer-events-none" />

          {/* Chữ Zalo */}
          <div className="relative z-10 flex flex-col items-center justify-center select-none">
            <span className="font-black text-xs sm:text-sm tracking-tight leading-none drop-shadow">
              Zalo
            </span>
          </div>

          {/* Chấm xanh báo online */}
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-sm z-20" />
        </a>
      </div>
    </aside>
  );
}
