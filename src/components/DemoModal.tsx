import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X, CheckCircle2, Send, Sparkles, PhoneCall, Building, Mail, User } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('10000');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialPlan === '5000') {
      setSelectedPlan('5000');
    } else if (initialPlan === '10000') {
      setSelectedPlan('10000');
    } else if (initialPlan) {
      setNotes(`Interested in: ${initialPlan}`);
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setCompanyName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-card max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-purple-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-xl glass-pill text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white">{t.modal.title}</h3>
                <p className="text-xs text-slate-300">{t.modal.subtitle}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.modal.fullName}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full glass-input rounded-xl py-2.5 pl-9 rtl:pl-3 rtl:pr-9 pr-3 text-sm"
                    placeholder="e.g. Eng. Tarek El-Kady"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.modal.companyName}
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full glass-input rounded-xl py-2.5 pl-9 rtl:pl-3 rtl:pr-9 pr-3 text-sm"
                    placeholder="e.g. Nile Logistics SAE"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.modal.phone}
                </label>
                <div className="relative">
                  <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full glass-input rounded-xl py-2.5 pl-9 rtl:pl-3 rtl:pr-9 pr-3 text-sm dir-ltr text-start"
                    placeholder="+20 100 123 4567"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.modal.email}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 rtl:left-auto rtl:right-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full glass-input rounded-xl py-2.5 pl-9 rtl:pl-3 rtl:pr-9 pr-3 text-sm dir-ltr text-start"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Service Package Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.modal.planInterest}
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full glass-input rounded-xl py-2.5 px-3 text-sm bg-slate-900 text-white"
                >
                  <option value="5000">{t.modal.planOption1}</option>
                  <option value="10000">{t.modal.planOption2}</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t.modal.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full glass-input rounded-xl p-3 text-sm"
                  placeholder="Tell us about your company size or current ERP system..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 font-extrabold text-white text-sm shadow-xl shadow-purple-600/30 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing Sandbox...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.modal.submitBtn}</span>
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white">
              {t.modal.successTitle}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mx-auto">
              {t.modal.successDesc}
            </p>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-start space-y-1 text-xs text-slate-300">
              <div className="flex justify-between font-bold text-white">
                <span>Selected Plan:</span>
                <span className="text-purple-300">
                  {selectedPlan === '10000' ? '10,000 EGP (Managed + Virtual Employee)' : '5,000 EGP (System Managed)'}
                </span>
              </div>
              <p>Reference Code: <strong className="text-cyan-300 font-mono">#ODOO-EG-2026-{Math.floor(1000 + Math.random() * 9000)}</strong></p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 px-6 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm transition-colors"
            >
              {t.modal.close}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
