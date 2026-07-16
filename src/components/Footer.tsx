import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, MapPin, PhoneCall, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-2xl pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <span className="font-black text-xl text-white">
                {t.nav.brandName}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.tagline}
            </p>

            <div className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-purple-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>100% Unlimited Odoo Community ERP</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#features" className="hover:text-purple-300 transition-colors">{t.nav.features}</a>
              </li>
              <li>
                <a href="#opex" className="hover:text-purple-300 transition-colors">{t.nav.opexService}</a>
              </li>
              <li>
                <a href="#modules" className="hover:text-purple-300 transition-colors">{t.nav.modules}</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-purple-300 transition-colors">{t.nav.pricing}</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-purple-300 transition-colors">{t.nav.calculator}</a>
              </li>
            </ul>
          </div>

          {/* Pricing Summary */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Monthly Packages
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>System Managed:</span>
                <strong className="text-cyan-300 dir-ltr">5,000 EGP / mo</strong>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Managed + OPEX Employee:</span>
                <strong className="text-gradient-gold dir-ltr">10,000 EGP / mo</strong>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1.5">
                <span>Per User Fee:</span>
                <strong className="text-emerald-400 dir-ltr">0 EGP (Unlimited)</strong>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start space-x-2.5 rtl:space-x-reverse">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{t.footer.location}</span>
              </li>
              <li className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="dir-ltr">+20 10 0000 0000 / +20 2 3800 0000</span>
              </li>
              <li className="flex items-center space-x-2.5 rtl:space-x-reverse">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="dir-ltr">support@odoocommunity.eg</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer & Rights */}
        <div className="pt-8 border-t border-white/10 text-center text-[11px] text-slate-300 space-y-2">
          <p>{t.footer.disclaimerText}</p>
          <p className="font-medium text-slate-300">{t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
};
