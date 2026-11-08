import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, X, Loader2, Sparkles } from 'lucide-react';

export default function Contact({ data, selectedService }) {
  const { badge, title, description, info, form } = data.contact;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Update service if changed via props
  React.useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate smooth processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessToast(true);
      setFormData({
        name: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Toast Notification (Green Popup for Demo) */}
      {showSuccessToast && (
        <div className="fixed top-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-emerald-600 text-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-emerald-400 flex items-start gap-3 sm:gap-4 animate-fade-in-up">
          <div className="p-2 rounded-full bg-white/20 shrink-0">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-bold">Gửi Yêu Cầu Thành Công!</h4>
            <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
              {form.successMessage || 'Gửi thành công! Chúng tôi sẽ liên hệ lại ngay.'}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowSuccessToast(false)}
            className="p-1 rounded-lg hover:bg-white/20 transition-colors text-white"
            aria-label="Đóng thông báo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {badge && (
            <div
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
              style={{
                backgroundColor: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5"
            style={{ color: 'var(--color-text)' }}
          >
            {title}
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {description}
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Card */}
          <div
            className="lg:col-span-5 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border flex flex-col justify-between h-full"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'rgba(0,0,0,0.06)',
            }}
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                Thông Tin Trực Tiếp
              </h3>
              <p className="text-sm mb-8 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                Quý khách có thể ghé thăm trực tiếp hoặc liên hệ nhanh qua các kênh chăm sóc khách hàng 24/7 dưới đây:
              </p>

              <div className="space-y-6">
                {info.address && (
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-2xl shrink-0"
                      style={{
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                        Địa chỉ
                      </span>
                      <p className="text-sm font-semibold mt-0.5 leading-snug" style={{ color: 'var(--color-text)' }}>
                        {info.address}
                      </p>
                    </div>
                  </div>
                )}

                {info.phone && (
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-2xl shrink-0"
                      style={{
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                        Hotline / Zalo
                      </span>
                      <a
                        href={`tel:${info.phone.replace(/[^0-9]/g, '')}`}
                        className="text-base font-extrabold mt-0.5 block hover:underline"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {info.phone}
                      </a>
                    </div>
                  </div>
                )}

                {info.email && (
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-2xl shrink-0"
                      style={{
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                        Email hỗ trợ
                      </span>
                      <a
                        href={`mailto:${info.email}`}
                        className="text-sm font-semibold mt-0.5 block hover:underline"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {info.email}
                      </a>
                    </div>
                  </div>
                )}

                {info.hours && (
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-2xl shrink-0"
                      style={{
                        backgroundColor: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                      }}
                    >
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider opacity-70" style={{ color: 'var(--color-text-muted)' }}>
                        Giờ phục vụ
                      </span>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--color-text)' }}>
                        {info.hours}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-slate-800">
              <a
                href="https://zalo.me/0837017516"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl font-bold text-sm text-white shadow-md transition-transform hover:scale-[1.02] active:scale-98"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <span>Nhắn Tin Zalo Trực Tiếp (0837.017.516)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div
            className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'rgba(0,0,0,0.06)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={form.namePlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      borderColor: 'rgba(0,0,0,0.1)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={form.phonePlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      borderColor: 'rgba(0,0,0,0.1)',
                      color: 'var(--color-text)',
                    }}
                  />
                </div>
              </div>

              {/* Service Select Options */}
              {form.selectOptions && form.selectOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                    Nhu cầu quan tâm
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-colors cursor-pointer"
                    style={{
                      backgroundColor: 'var(--color-bg)',
                      borderColor: 'rgba(0,0,0,0.1)',
                      color: 'var(--color-text)',
                    }}
                  >
                    <option value="">-- {form.selectPlaceholder} --</option>
                    {form.selectOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Message textarea */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-text)' }}>
                  Nội dung lời nhắn
                </label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={form.messagePlaceholder}
                  className="w-full px-4 py-3.5 rounded-2xl text-sm border focus:outline-none transition-colors resize-none"
                  style={{
                    backgroundColor: 'var(--color-bg)',
                    borderColor: 'rgba(0,0,0,0.1)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl font-bold text-base text-white shadow-xl transition-all duration-300 hover:brightness-110 hover:shadow-2xl active:scale-[0.99] disabled:opacity-70"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Đang gửi thông tin...</span>
                  </>
                ) : (
                  <>
                    <span>{form.submitButton}</span>
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

