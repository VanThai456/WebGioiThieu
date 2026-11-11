import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer({ data }) {
  const { footer, navbar, name, tagline } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="pt-6 pb-20 sm:pt-16 sm:pb-12 border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'rgba(0, 0, 0, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-10 pb-5 sm:pb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-2 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div
                className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-lg shadow-md shrink-0"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {navbar.brandLogoText.charAt(0)}
              </div>
              <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight" style={{ color: 'var(--color-text)' }}>
                {navbar.brandLogoText}
              </span>
            </div>
            {tagline && (
              <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider" style={{ color: 'var(--color-accent)' }}>
                {tagline}
              </p>
            )}
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm" style={{ color: 'var(--color-text-muted)' }}>
              {footer.about}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
              Liên Kết Nhanh
            </h4>
            <ul className="grid grid-cols-2 sm:block gap-x-4 gap-y-1.5 sm:space-y-2.5 text-xs sm:text-sm">
              {footer.quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:underline transition-colors opacity-80 hover:opacity-100"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* White-label Notice & Zalo Support */}
          <div className="md:col-span-4 space-y-1.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-text)' }}>
              Giải Pháp White-Label
            </h4>
            <p className="text-[11px] sm:text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              Trang web được thiết kế theo kiến trúc tách biệt dữ liệu hoàn toàn. Mọi nội dung, hình ảnh, màu sắc và font chữ đều có thể thay đổi trong 1 file JSON duy nhất.
            </p>
            <div className="pt-0.5 sm:pt-2">
              <a
                href="https://zalo.me/0837017516"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Hỗ trợ kỹ thuật & Đặt làm web: 0837.017.516</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-4 sm:pt-8 border-t border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-center sm:text-left" style={{ color: 'var(--color-text-muted)' }}>
          <p>{footer.copyright}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-semibold shrink-0"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

