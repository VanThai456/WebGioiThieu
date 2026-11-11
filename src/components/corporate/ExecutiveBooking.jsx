import React, { useState } from 'react';
import { Building2, ShieldCheck, Phone, Mail, MapPin, Send, CheckCircle2, X, Loader2, Award } from 'lucide-react';

export default function ExecutiveBooking({ data, selectedService }) {
  const { info } = data.contact;

  const [form, setForm] = useState({
    companyName: '',
    repName: '',
    email: '',
    phone: '',
    scale: '50 - 200 nhân sự',
    revenue: '20 - 100 tỷ VNĐ / Năm',
    service: selectedService || 'Tư vấn chiến lược tăng trưởng doanh thu',
    challenge: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  React.useEffect(() => {
    if (selectedService) setForm((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setForm({
        companyName: '',
        repName: '',
        email: '',
        phone: '',
        scale: '50 - 200 nhân sự',
        revenue: '20 - 100 tỷ VNĐ / Năm',
        service: 'Tư vấn chiến lược tăng trưởng doanh thu',
        challenge: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-10 sm:py-24 bg-slate-50 text-slate-900 relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-emerald-600 text-white rounded-2xl shadow-2xl p-4 sm:p-5 border border-emerald-400 flex items-start gap-3 sm:gap-4 animate-fade-in-up">
          <div className="p-2 rounded-full bg-white/20 shrink-0">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="text-sm sm:text-base font-bold">Đăng Ký Buổi Cố Vấn Thành Công!</h4>
            <p className="text-xs sm:text-sm text-emerald-100 mt-0.5">
              Hồ sơ của Quý công ty đã được chuyển tới Chuyên gia trưởng. Chúng tôi sẽ liên hệ trong 15 phút.
            </p>
          </div>
          <button type="button" onClick={() => setShowToast(false)} className="p-1 rounded-lg hover:bg-white/20 text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
          <h2 className="font-heading text-xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 sm:mb-4 text-slate-900">
            Khởi Đầu Phiên Cố Vấn Chiến Lược (1-on-1)
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Mọi thông tin doanh nghiệp được bảo mật tuyệt đối theo chuẩn cam kết NDA quốc tế trước khi bắt đầu phiên làm việc.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-10 items-stretch">
          {/* Left Info Card */}
          <div className="lg:col-span-5 p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-blue-900 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold bg-blue-800 text-amber-300 mb-3 sm:mb-6 border border-blue-700">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>BẢO MẬT NDA CHUẨN QUỐC TẾ</span>
              </div>

              <h3 className="font-heading text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-white">Trụ Sở Điều Hành Nexus Global</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed mb-4 sm:mb-8">
                Quý lãnh đạo có thể sắp xếp buổi gặp trực tiếp tại văn phòng của chúng tôi hoặc tổ chức phiên cố vấn trực tuyến qua nền tảng bảo mật riêng.
              </p>

              <div className="space-y-3 sm:space-y-6 text-xs sm:text-sm text-blue-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-blue-800/80 text-amber-300 shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs uppercase tracking-wider font-bold text-blue-300">Địa chỉ văn phòng</span>
                    <p className="font-semibold text-white mt-0.5 leading-snug">{info.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-blue-800/80 text-amber-300 shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] sm:text-xs uppercase tracking-wider font-bold text-blue-300">Đường dây nóng lãnh đạo</span>
                    <a href={`tel:${info.phone}`} className="font-black text-sm sm:text-lg text-amber-300 hover:underline block mt-0.5">
                      {info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-blue-800/80 text-amber-300 shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] sm:text-xs uppercase tracking-wider font-bold text-blue-300">Hòm thư bảo mật</span>
                    <p className="font-semibold text-white mt-0.5 break-all sm:break-normal">{info.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3.5 sm:mt-8 sm:pt-6 border-t border-blue-800/80 flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-blue-200">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <span>Cố vấn bởi các chuyên gia cựu lãnh đạo Big 4 & Tập đoàn đa quốc gia.</span>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7 p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Tên doanh nghiệp / Tổ chức *</label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="Công ty CP Tập đoàn..."
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Họ tên người đại diện / Chức danh *</label>
                  <input
                    type="text"
                    required
                    value={form.repName}
                    onChange={(e) => setForm({ ...form, repName: e.target.value })}
                    placeholder="Ông/Bà - Tổng Giám Đốc"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Số điện thoại liên hệ trực tiếp *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="0837.xxx.xxx"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-700"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Email doanh nghiệp *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="ceo@company.com"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Quy mô nhân sự</label>
                  <select
                    value={form.scale}
                    onChange={(e) => setForm({ ...form, scale: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 focus:outline-none cursor-pointer"
                  >
                    <option value="Dưới 50 nhân sự">Dưới 50 nhân sự</option>
                    <option value="50 - 200 nhân sự">50 - 200 nhân sự</option>
                    <option value="200 - 500 nhân sự">200 - 500 nhân sự</option>
                    <option value="Trên 500 nhân sự">Trên 500 nhân sự</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Doanh thu hàng năm</label>
                  <select
                    value={form.revenue}
                    onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 focus:outline-none cursor-pointer"
                  >
                    <option value="Dưới 20 tỷ VNĐ / Năm">Dưới 20 tỷ VNĐ / Năm</option>
                    <option value="20 - 100 tỷ VNĐ / Năm">20 - 100 tỷ VNĐ / Năm</option>
                    <option value="100 - 500 tỷ VNĐ / Năm">100 - 500 tỷ VNĐ / Năm</option>
                    <option value="Trên 500 tỷ VNĐ / Năm">Trên 500 tỷ VNĐ / Năm</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2 text-slate-700">Thách thức trọng tâm doanh nghiệp cần giải quyết</label>
                <textarea
                  rows="3"
                  value={form.challenge}
                  onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                  placeholder="Mô tả tóm tắt mục tiêu chiến lược (ví dụ: mở rộng thị phần, chuẩn bị gọi vốn, tối ưu chi phí vận hành)..."
                  className="w-full h-20 sm:h-auto px-3 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl text-sm bg-slate-50 border border-slate-200 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-5 sm:py-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-white text-sm sm:text-base bg-[#0F3B82] hover:bg-[#0A295C] shadow-lg transition-transform hover:scale-[1.01] active:scale-98 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Đang tiếp nhận hồ sơ...</span>
                  </>
                ) : (
                  <>
                    <span>Đăng Ký Phiên Cố Vấn Chiến Lược</span>
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

