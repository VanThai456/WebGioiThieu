import ScrollToTop from './ScrollToTop';

export default function FloatingCta({ data, layoutVariant = 1, onCycleVariant }) {
  const cta = data.floatingCta || {
    url: 'https://zalo.me/0837017516',
    zaloPhone: '0837017516',
  };

  const targetUrl = cta.url || 'https://zalo.me/0837017516';

  return (
    <>
      {/* Bong bóng Zalo cố định góc trái */}
      <div className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 z-40">
        <div className="relative group flex items-center">
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Liên hệ Zalo 0837017516"
            className="relative flex items-center justify-center w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-[#0068FF] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-blue-500/50"
          >
            {/* Sóng lan tỏa */}
            <span className="absolute inset-0 rounded-full bg-[#0068FF] opacity-40 animate-ping pointer-events-none" />
            <span className="absolute -inset-1 rounded-full bg-blue-400 opacity-30 blur-sm animate-pulse pointer-events-none" />

            {/* Chữ Zalo */}
            <div className="relative z-10 flex flex-col items-center justify-center select-none">
              <span className="font-black text-[11px] sm:text-sm tracking-tight leading-none drop-shadow">
                Zalo
              </span>
            </div>

            {/* Chấm xanh báo online */}
            <span className="absolute top-0 right-0 sm:top-0.5 sm:right-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-sm z-20" />
          </a>

          {/* Tooltip khi hover vào Zalo */}
          <div className="absolute left-full ml-3.5 hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -translate-x-2 group-hover:translate-x-0">
            <div className="bg-slate-900/95 text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-2xl whitespace-nowrap backdrop-blur-md border border-white/15 flex items-center gap-2 relative">
              <div className="w-2 h-2 bg-slate-900/95 absolute -left-1 top-1/2 -translate-y-1/2 rotate-45 border-l border-b border-white/15" />
              <span>Nhận báo giá qua Zalo: <strong className="text-blue-400">0837.017.516</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Nút "Đổi giao diện" + Nút lên đầu trang cố định góc phải */}
      <aside aria-label="Đổi giao diện và lên đầu trang" className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-row items-center gap-2 sm:gap-2.5">
        {onCycleVariant && (
          <button
            type="button"
            onClick={onCycleVariant}
            className="group relative flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-slate-900/95 text-white border-2 border-amber-400/80 shadow-2xl backdrop-blur-md hover:bg-slate-950 hover:scale-105 active:scale-95 transition-all cursor-pointer hover:shadow-amber-400/20"
            title="Bấm vào để đổi sang bộ giao diện khác (Mẫu 1 ➔ Mẫu 2 ➔ Mẫu 3)"
          >
            <span className="text-[11px] sm:text-sm font-extrabold tracking-tight whitespace-nowrap">
              Đổi giao diện <span className="text-amber-300 font-mono">({layoutVariant}/3)</span>
            </span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
          </button>
        )}

        <ScrollToTop />
      </aside>
    </>
  );
}
