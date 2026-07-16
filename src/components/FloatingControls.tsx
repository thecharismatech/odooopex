import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, UserCheck, MessageSquare } from 'lucide-react';

interface FloatingControlsProps {
  onOpenDemoModal: (plan?: string) => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenDemoModal }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col items-end rtl:items-start space-y-3 pointer-events-none">
      
      {/* Quick OPEX Pill CTA */}
      <button
        onClick={() => onOpenDemoModal('10000')}
        className="pointer-events-auto glass-pill px-4 py-2.5 rounded-2xl border border-purple-500/40 bg-purple-950/80 hover:bg-purple-900 text-white text-xs font-bold shadow-xl shadow-purple-600/30 flex items-center space-x-2 rtl:space-x-reverse transition-all duration-300 hover:scale-105"
      >
        <UserCheck className="w-4 h-4 text-purple-300 animate-pulse" />
        <span>Hire OPEX Employee (10,000 EGP)</span>
      </button>

      {/* WhatsApp Direct Floating Button */}
      <a
        href="https://wa.me/201229303030?text=Hello%2C%20I%27m%20interested%20in%20the%20Odoo%20Community%20System%20and%20Managed%20OPEX%20Employee.%20Please%20share%20pricing%20and%20availability."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact via WhatsApp"
        className="pointer-events-auto w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>

      {/* Floating Language Switcher */}
      <button
        onClick={toggleLanguage}
        className="pointer-events-auto glass-pill px-3 py-1.5 rounded-full text-xs font-extrabold text-slate-200 hover:text-white flex items-center space-x-1.5 rtl:space-x-reverse border border-white/20 shadow-lg"
        title="Switch Language"
      >
        <Globe className="w-3.5 h-3.5 text-purple-400" />
        <span>{language === 'en' ? 'عربي' : 'EN'}</span>
      </button>

    </div>
  );
};
