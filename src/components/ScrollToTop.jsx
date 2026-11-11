import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 300
  );

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 text-slate-800 border border-slate-300/80 shadow-xl backdrop-blur-md flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer shrink-0"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
}

