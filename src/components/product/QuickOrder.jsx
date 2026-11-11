import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle2, ShieldCheck, Truck, RotateCcw, Send, X, Loader2, Sparkles } from 'lucide-react';

export default function QuickOrder({ data, selectedService }) {
  const [selectedColor, setSelectedColor] = useState('Midnight Black');
  const [selectedEdition, setSelectedEdition] = useState(selectedService || 'AuraSound Apex - Moonlight Silver (4.150.000 đ)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (selectedService) setSelectedEdition(selectedService);
  }, [selectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setName('');
      setPhone('');
      setAddress('');
    }, 600);
  };

  const colors = [
    { name: 'Midnight Black', hex: '#1E293B', label: 'Đen Huyền Bí' },
    { name: 'Moonlight Silver', hex: '#E2E8F0', label: 'Trắng Bạc Tinh Tế' },
    { name: 'Cyber Neon', hex: '#0284C7', label: 'Xanh Cyan Giới Hạn' },
  ];

  return (
    <section id="contact" className="py-10 sm:py-20 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-emerald-600 text-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-emerald-400 flex items-start gap-3 sm:gap-4 animate-fade-in-up">
          <div className="p-2 rounded-full bg-white/20 shrink-0">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-bold">Đặt Hàng Thành Công!</h4>
            <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
              Mã đơn hàng đã được gửi tới hệ thống. Nhân viên AuraSound sẽ liên hệ xác nhận sau 10 phút.
            </p>
          </div>
          <button type="button" onClick={() => setShowToast(false)} className="p-1 rounded-lg hover:bg-white/20 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Flash Sale Banner with Countdown */}
        <div className="max-w-4xl mx-auto mb-5 sm:mb-14 p-3.5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-950 to-blue-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-6">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1 sm:mb-2">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              FLASH SALE RA MẮT - GIẢM 35%
            </span>
            <h3 className="text-base sm:text-2xl font-black">Ưu Đãi Kết Thúc Trong</h3>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 font-mono">
            <div className="text-center">
              <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-lg sm:text-3xl font-black text-cyan-300 shadow-inner">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-indigo-200 uppercase mt-1 block">Giờ</span>
            </div>
            <span className="text-lg sm:text-2xl font-black text-cyan-300">:</span>
            <div className="text-center">
              <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-lg sm:text-3xl font-black text-cyan-300 shadow-inner">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-indigo-200 uppercase mt-1 block">Phút</span>
            </div>
            <span className="text-lg sm:text-2xl font-black text-cyan-300">:</span>
            <div className="text-center">
              <div className="w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-lg sm:text-3xl font-black text-cyan-300 shadow-inner">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-[10px] text-indigo-200 uppercase mt-1 block">Giây</span>
            </div>
          </div>
        </div>

        {/* Order Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 items-stretch">
          {/* Left Guarantees Card */}
          <div className="lg:col-span-5 p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="font-heading text-lg sm:text-2xl font-bold mb-3.5 sm:mb-6 text-slate-900">Quyền Lợi Khách Hàng VIP</h3>
              <div className="space-y-3 sm:space-y-6 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 border border-indigo-100">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Giao Hàng Hỏa Tốc Miễn Phí</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Nhận hàng trong 2h tại Hà Nội & TP.HCM. Kiểm tra hàng trước khi thanh toán (COD).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 border border-indigo-100">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Bảo Hành 1 Đổi 1 Trong 24 Tháng</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Cam kết đổi mới thiết bị ngay lập tức nếu phát sinh bất kỳ lỗi nào từ nhà sản xuất.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-indigo-50 text-indigo-600 shrink-0 border border-indigo-100">
                    <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">30 Ngày Dùng Thử Hoàn Tiền</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Không ưng chất âm? Chúng tôi hoàn tiền 100% không yêu cầu bất kỳ lý do gì.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 sm:mt-8 sm:pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
              <span>Hỗ trợ hotline 24/7:</span>
              <a href="tel:0837017516" className="font-mono font-bold text-indigo-600 hover:underline">0837.017.516</a>
            </div>
          </div>

          {/* Right Order Form */}
          <div className="lg:col-span-7 p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
              {/* Color Swatch Picker */}
              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-2 sm:mb-3 text-slate-700">
                  1. Chọn Màu Sắc Thiết Bị: <span className="text-indigo-600 font-bold">{selectedColor}</span>
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {colors.map((c) => {
                    const isPicked = selectedColor === c.name;
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setSelectedColor(c.name)}
                        className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-center transition-all ${
                          isPicked
                            ? 'bg-indigo-50/70 border-indigo-600 shadow-md ring-2 ring-indigo-500/20'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full mx-auto mb-1 sm:mb-2 border border-slate-300 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="block text-[10px] sm:text-xs font-bold text-slate-800 leading-tight">{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Version dropdown */}
              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">
                  2. Chọn Phiên Bản & Gói Phụ Kiện
                </label>
                <select
                  value={selectedEdition}
                  onChange={(e) => setSelectedEdition(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3.5 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-600 cursor-pointer"
                >
                  <option value="AuraSound Apex - Midnight Black (3.890.000 đ)">AuraSound Apex - Midnight Black (3.890.000 đ)</option>
                  <option value="AuraSound Apex - Moonlight Silver (4.150.000 đ)">AuraSound Apex - Moonlight Silver (4.150.000 đ)</option>
                  <option value="AuraSound Apex - Cyber Neon Limited (4.590.000 đ)">AuraSound Apex - Cyber Neon Limited (4.590.000 đ)</option>
                  <option value="Combo Apex + Dock Sạc AuraStand 15W (4.890.000 đ)">Combo Apex + Dock Sạc AuraStand 15W (4.890.000 đ)</option>
                </select>
              </div>

              {/* Customer Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Họ và tên người nhận *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Số điện thoại nhận hàng *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0837.xxx.xxx"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Địa chỉ giao hàng chi tiết *</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Số nhà, tên đường, phường/xã, quận/huyện, tỉnh/thành..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 sm:py-4 sm:px-6 rounded-xl sm:rounded-2xl font-extrabold text-white text-sm sm:text-base bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 hover:shadow-lg transition-all hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Đang gửi đơn hàng...</span>
                  </>
                ) : (
                  <>
                    <span>Xác Nhận Đặt Mua Ngay (Ưu Đãi 35%)</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
