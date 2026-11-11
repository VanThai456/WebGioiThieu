import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar({ data }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { brandLogoText, brandBadge, links, actionButton } = data.navbar;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2.5 sm:py-3.5 border-b border-gray-100 dark:border-slate-800'
          : 'bg-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transition-transform group-hover:scale-105"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {brandLogoText.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-none truncate max-w-[170px] sm:max-w-none" style={{ color: 'var(--color-text)' }}>
                {brandLogoText}
              </span>
              {brandBadge && (
                <span
                  className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mt-0.5"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {brandBadge}
                </span>
              )}
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-100 opacity-80 relative group py-1"
                style={{ color: 'var(--color-text)' }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={actionButton.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 active:scale-95"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <span>{actionButton.label}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in-up">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium transition-colors hover:bg-gray-50 dark:hover:bg-slate-800"
              style={{ color: 'var(--color-text)' }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={actionButton.href}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white shadow-md"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <span>{actionButton.label}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

