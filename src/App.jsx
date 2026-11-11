import React, { useState, useEffect } from 'react';
import { getCurrentBrandData } from './data/brands';
import Navbar from './components/Navbar';
import FloatingCta from './components/FloatingCta';
import Footer from './components/Footer';

// Cafe Suite
import HeroCafe from './components/cafe/HeroCafe';
import MenuTabs from './components/cafe/MenuTabs';
import BrewingProcess from './components/cafe/BrewingProcess';
import CafeGallery from './components/cafe/CafeGallery';
import TableBooking from './components/cafe/TableBooking';
import CafeV2 from './components/cafe/variants/CafeV2';
import CafeV3 from './components/cafe/variants/CafeV3';

// Product Suite (Light Studio Aesthetic)
import HeroProduct from './components/product/HeroProduct';
import FeatureBreakdown from './components/product/FeatureBreakdown';
import ComparisonTable from './components/product/ComparisonTable';
import ProductGallery from './components/product/ProductGallery';
import QuickOrder from './components/product/QuickOrder';
import ProductV2 from './components/product/variants/ProductV2';
import ProductV3 from './components/product/variants/ProductV3';

// Corporate Suite
import HeroCorporate from './components/corporate/HeroCorporate';
import CorporateSolutions from './components/corporate/CorporateSolutions';
import ProcessTimeline from './components/corporate/ProcessTimeline';
import CorporateGallery from './components/corporate/CorporateGallery';
import ExecutiveBooking from './components/corporate/ExecutiveBooking';
import CorporateV2 from './components/corporate/variants/CorporateV2';
import CorporateV3 from './components/corporate/variants/CorporateV3';

// Shared Components
import Stats from './components/Stats';
import { X } from 'lucide-react';

export default function App() {
  const [brandData, setBrandData] = useState(() => getCurrentBrandData());
  const [selectedItem, setSelectedItem] = useState('');

  // Layout variant for each brand: 1, 2, or 3
  const [layoutVariant, setLayoutVariant] = useState(() => {
    if (typeof window === 'undefined') return 1;
    const p = new URLSearchParams(window.location.search);
    const v = parseInt(p.get('v') || '1', 10);
    return v >= 1 && v <= 3 ? v : 1;
  });

  const [variantToast, setVariantToast] = useState('');

  // Watch for URL query parameter changes (?brand=cafe | product | corporate & v=1|2|3)
  useEffect(() => {
    const handleUrlChange = () => {
      const current = getCurrentBrandData();
      setBrandData(current);
      const p = new URLSearchParams(window.location.search);
      const v = parseInt(p.get('v') || '1', 10);
      if (v >= 1 && v <= 3) setLayoutVariant(v);
    };

    window.addEventListener('popstate', handleUrlChange);
    handleUrlChange();
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Cycle Variant: 1 -> 2 -> 3 -> 1
  const handleCycleVariant = () => {
    setLayoutVariant((prev) => {
      const next = prev === 3 ? 1 : prev + 1;
      
      // Update URL query param 'v' without reload
      const url = new URL(window.location);
      url.searchParams.set('v', next);
      window.history.replaceState({}, '', url);

      // Toast notification
      const variantNames = {
        cafe: ['Mẫu 1: Phong cách Mộc mạc & Ấm cúng', 'Mẫu 2: Phong cách Tối giản Scandinavian Bar', 'Mẫu 3: Phòng Trà Chiều Hoàng Gia & Bánh Pháp'],
        product: ['Mẫu 1: Studio Inspector Tối giản', 'Mẫu 2: E-Commerce Storefront & Mở hộp Unboxing', 'Mẫu 3: Kỹ nghệ Âm học Audiophile Chuyên nghiệp'],
        corporate: ['Mẫu 1: Cố vấn Chiến lược Cấp cao', 'Mẫu 2: Chuyển đổi số & Điện toán Đám mây', 'Mẫu 3: Quản trị Tài chính & M&A Holding'],
      };

      const brandKey = brandData.id || 'cafe';
      const name = variantNames[brandKey]?.[next - 1] || `Bộ giao diện Mẫu ${next}`;
      setVariantToast(`Đã chuyển sang: ${name}`);
      setTimeout(() => setVariantToast(''), 3500);

      // Smooth scroll back to top to admire new layout
      window.scrollTo({ top: 0, behavior: 'smooth' });

      return next;
    });
  };

  // Dynamically inject CSS variables & Document Title whenever brand changes
  useEffect(() => {
    if (!brandData) return;

    // 1. Update Document Title
    document.title = `${brandData.name} (Mẫu ${layoutVariant}) - ${brandData.category} | White-label Demo`;

    // 2. Inject Dynamic CSS Variables
    const root = document.documentElement;
    const theme = brandData.theme;

    root.style.setProperty('--color-primary', theme.primaryColor);
    root.style.setProperty('--color-primary-hover', theme.primaryHover || theme.primaryColor);
    root.style.setProperty('--color-primary-light', theme.primaryLight || 'rgba(0,0,0,0.08)');
    root.style.setProperty('--color-accent', theme.accentColor);
    root.style.setProperty('--color-secondary', theme.secondaryColor);
    root.style.setProperty('--color-bg', theme.bgColor);
    root.style.setProperty('--color-surface', theme.surfaceColor);
    root.style.setProperty('--color-text', theme.textColor);
    root.style.setProperty('--color-text-muted', theme.textMutedColor);
    root.style.setProperty('--font-heading', theme.fontHeading);
    root.style.setProperty('--font-body', theme.fontBody);

    document.body.style.backgroundColor = theme.bgColor;
    document.body.style.color = theme.textColor;

    // Clean light mode
    root.classList.remove('dark');
    root.removeAttribute('data-theme');
  }, [brandData, layoutVariant]);

  if (!brandData) return null;

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-400">
      {/* 1. Header / Navbar */}
      <Navbar data={brandData} />

      {/* Floating Variant Switch Toast */}
      {variantToast && (
        <div className="fixed top-16 sm:top-20 inset-x-3 sm:inset-x-6 z-50 flex justify-center pointer-events-none">
          <div className="pointer-events-auto max-w-sm sm:max-w-lg px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-slate-900/95 text-white shadow-2xl border border-amber-400/60 backdrop-blur-md flex items-center justify-center gap-2.5 sm:gap-3 animate-fade-in-up">
            <span className="text-xs sm:text-sm font-bold text-center">{variantToast}</span>
            <button type="button" onClick={() => setVariantToast('')} className="p-1 hover:bg-white/20 rounded-lg text-white shrink-0" aria-label="Đóng thông báo">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content: Render 3 Distinct Variants for Each Brand */}
      <main className="flex-1">
        {/* ========================================================
            BRAND 1: QUÁN CAFE (3 BỘ GIAO DIỆN HOÀN TOÀN KHÁC NHAU)
            ======================================================== */}
        {brandData.id === 'cafe' && (
          <>
            {layoutVariant === 1 && (
              <>
                <HeroCafe data={brandData} />
                <MenuTabs data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <BrewingProcess data={brandData} />
                <CafeGallery data={brandData} />
                <Stats data={brandData} />
                <TableBooking data={brandData} selectedService={selectedItem} />
              </>
            )}

            {layoutVariant === 2 && (
              <>
                <CafeV2 data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <CafeGallery data={brandData} />
                <TableBooking data={brandData} selectedService={selectedItem} />
              </>
            )}

            {layoutVariant === 3 && (
              <>
                <CafeV3 data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <MenuTabs data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <CafeGallery data={brandData} />
                <TableBooking data={brandData} selectedService={selectedItem} />
              </>
            )}
          </>
        )}

        {/* ========================================================
            BRAND 2: SẢN PHẨM CÔNG NGHỆ (3 BỘ GIAO DIỆN KHÁC NHAU)
            ======================================================== */}
        {brandData.id === 'product' && (
          <>
            {layoutVariant === 1 && (
              <>
                <HeroProduct data={brandData} />
                <FeatureBreakdown data={brandData} />
                <ComparisonTable onSelectVersion={(v) => setSelectedItem(v)} />
                <ProductGallery data={brandData} />
                <Stats data={brandData} />
                <QuickOrder data={brandData} selectedService={selectedItem} />
              </>
            )}

            {layoutVariant === 2 && (
              <>
                <ProductV2 data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <ProductGallery data={brandData} />
                <QuickOrder data={brandData} selectedService={selectedItem} />
              </>
            )}

            {layoutVariant === 3 && (
              <>
                <ProductV3 data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <FeatureBreakdown data={brandData} />
                <ProductGallery data={brandData} />
                <QuickOrder data={brandData} selectedService={selectedItem} />
              </>
            )}
          </>
        )}

        {/* ========================================================
            BRAND 3: DOANH NGHIỆP / B2B (3 BỘ GIAO DIỆN KHÁC NHAU)
            ======================================================== */}
        {brandData.id === 'corporate' && (
          <>
            {layoutVariant === 1 && (
              <>
                <HeroCorporate data={brandData} />
                <CorporateSolutions data={brandData} onSelectSolution={(s) => setSelectedItem(s)} />
                <ProcessTimeline data={brandData} />
                <CorporateGallery data={brandData} />
                <Stats data={brandData} />
                <ExecutiveBooking data={brandData} selectedService={selectedItem} />
              </>
            )}

            {layoutVariant === 2 && (
              <>
                <CorporateV2 data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <CorporateGallery data={brandData} />
                <Stats data={brandData} />
                <ExecutiveBooking data={brandData} selectedService={selectedItem} />
              </>
            )}

            {layoutVariant === 3 && (
              <>
                <CorporateV3 data={brandData} onSelectService={(name) => setSelectedItem(name)} />
                <CorporateSolutions data={brandData} onSelectSolution={(s) => setSelectedItem(s)} />
                <CorporateGallery data={brandData} />
                <ExecutiveBooking data={brandData} selectedService={selectedItem} />
              </>
            )}
          </>
        )}
      </main>

      {/* 3. Footer */}
      <Footer data={brandData} />

      {/* 4. Bong bóng Zalo góc trái + Nút "Đổi giao diện" & Nút lên đầu trang góc phải */}
      <FloatingCta
        data={brandData}
        layoutVariant={layoutVariant}
        onCycleVariant={handleCycleVariant}
      />
    </div>
  );
}
