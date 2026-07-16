import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

export const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="bg-orb-purple bottom-10 left-1/2 -translate-x-1/2 opacity-25" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full glass-pill border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.faq.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-start flex items-center justify-between gap-4 font-bold text-white text-base hover:text-purple-300 transition-colors"
                >
                  <span className="leading-snug">{item.q}</span>
                  <div className={`w-8 h-8 rounded-xl glass-pill flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-purple-600/30 text-purple-300' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/10 animate-fadeIn">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Banner CTA */}
        <div className="mt-12 p-6 rounded-3xl glass-pill border border-purple-500/30 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Sparkles className="w-6 h-6 text-purple-400 shrink-0" />
            <div className="text-start">
              <h4 className="text-sm font-bold text-white">Have a unique business workflow or custom question?</h4>
              <p className="text-xs text-slate-400">Our Cairo system engineers are available to review your operational diagram.</p>
            </div>
          </div>

          <a
            href="https://wa.me/201000000000?text=Hello%2C%20I%20have%20questions%20about%20Odoo%20Community%20and%20the%20OPEX%20employee%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-extrabold text-white shadow-lg shadow-emerald-600/30 transition-all shrink-0"
          >
            Chat Directly on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
