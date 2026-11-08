import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, Phone, Send, CheckCircle2, X, Loader2, Sparkles } from 'lucide-react';

export default function TableBooking({ data, selectedService }) {
  const { info, form } = data.contact;

  const [booking, setBooking] = useState({
    name: '',
    phone: '',
    guests: '2 Người',
    space: 'Trong nhà yên tĩnh (Máy lạnh)',
    time: '14:00 hôm nay',
    note: selectedService ? `Đặt trước món: ${selectedService}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setBooking({
        name: '',
        phone: '',
        guests: '2 Người',
        space: 'Trong nhà yên tĩnh (Máy lạnh)',
        time: '',
        note: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors">
      {/* Toast Success Popup */}
      {showToast && (
        <div className="fixed top-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-emerald-600 text-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-emerald-400 flex items-start gap-3 sm:gap-4 animate-fade-in-up">
          <div className="p-2 rounded-full bg-white/20 shrink-0">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-bold">Đặt Bàn Thành Công!</h4>
            <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
              Đội ngũ The Artisan Brew đã ghi nhận thông tin và sẽ gọi xác nhận trong 5 phút.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowToast(false)}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 shadow-sm"
            style={{
              backgroundColor: 'var(--color-primary-light)',
              color: 'var(--color-primary)',
            }}
          >
            ĐẶT BÀN & THƯỞNG THỨC
          </span>
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Giữ Chỗ Đẹp Cho Buổi Gặp Gỡ Hoàn Hảo
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Để đảm bảo luôn có vị trí ngồi ưng ý cho làm việc hay trò chuyện cùng bạn bè, quý khách vui lòng giữ bàn trước.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-stretch">
          {/* Left Info Card */}
          <div
            className="lg:col-span-5 p-6 sm:p-10 rounded-3xl border shadow-lg flex flex-col justify-between"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'rgba(0,0,0,0.06)',
            }}
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                Không Gian Quán
              </h3>
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl shrink-0" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--color-text-muted)' }}>Địa chỉ</span>
                    <p className="font-semibold mt-0.5" style={{ color: 'var(--color-text)' }}>{info.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl shrink-0" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--color-text-muted)' }}>Khung giờ vàng</span>
                    <p className="font-semibold mt-0.5" style={{ color: 'var(--color-text)' }}>{info.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl shrink-0" style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--color-text-muted)' }}>Hotline xác nhận bàn</span>
                    <a href={`tel:${info.phone}`} className="font-extrabold text-base mt-0.5 block hover:underline" style={{ color: 'var(--color-primary)' }}>
                      {info.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                ☕ <strong>Mẹo nhỏ:</strong> Khách đặt bàn trước từ 4 người được miễn phí 1 đĩa bánh quy bơ nướng giòn thượng hạng.
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div
            className="lg:col-span-7 p-6 sm:p-10 rounded-3xl border shadow-xl"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'rgba(0,0,0,0.06)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                    Họ và tên của bạn *
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.name}
                    onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none"
                    style={{ backgroundColor: 'var(--color-bg)', borderColor: 'rgba(0,0,0,0.1)', color: 'var(--color-text)' }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    placeholder="0837.xxx.xxx"
                    className="w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none"
                    style={{ backgroundColor: 'var(--color-bg)', borderColor: 'rgba(0,0,0,0.1)', color: 'var(--color-text)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                    Số lượng khách
                  </label>
                  <select
                    value={booking.guests}
                    onChange={(e) => setBooking({ ...booking, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none"
                    style={{ backgroundColor: 'var(--color-bg)', borderColor: 'rgba(0,0,0,0.1)', color: 'var(--color-text)' }}
                  >
                    <option value="1 Người">1 Người (Góc làm việc tĩnh lặng)</option>
                    <option value="2 Người">2 Người (Bàn hẹn hò đôi ấm cúng)</option>
                    <option value="4-6 Người">4 - 6 Người (Bàn nhóm bạn bè)</option>
                    <option value="7-15 Người">7 - 15 Người (Workshop / Họp nhóm)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                    Khu vực mong muốn
                  </label>
                  <select
                    value={booking.space}
                    onChange={(e) => setBooking({ ...booking, space: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none"
                    style={{ backgroundColor: 'var(--color-bg)', borderColor: 'rgba(0,0,0,0.1)', color: 'var(--color-text)' }}
                  >
                    <option value="Trong nhà yên tĩnh (Máy lạnh)">Trong nhà yên tĩnh (Máy lạnh)</option>
                    <option value="Sân vườn xanh mát (Ngoài trời)">Sân vườn xanh mát (Ngoài trời)</option>
                    <option value="Ban công tầng 2 ngắm phố">Ban công tầng 2 ngắm phố</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                  Ghi chú hoặc Món muốn order trước
                </label>
                <textarea
                  rows="3"
                  value={booking.note}
                  onChange={(e) => setBooking({ ...booking, note: e.target.value })}
                  placeholder="Thời gian ghé (ví dụ: 15h30 chiều nay) hoặc yêu cầu chỗ ngồi gần ổ cắm điện..."
                  className="w-full px-4 py-3 rounded-2xl text-sm border focus:outline-none resize-none"
                  style={{ backgroundColor: 'var(--color-bg)', borderColor: 'rgba(0,0,0,0.1)', color: 'var(--color-text)' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-98"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Đang xác nhận bàn...</span>
                  </>
                ) : (
                  <>
                    <span>Xác Nhận Giữ Bàn Ngay</span>
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

