import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, Globe, Menu, X, ArrowRight, UserCheck, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';


interface NavbarProps {
  onOpenDemoModal: (plan?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const { t, language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: t.nav.features },
    { href: '#opex', label: t.nav.opexService },
    { href: '#modules', label: t.nav.modules },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#comparison', label: t.nav.comparison },
    { href: '#faq', label: t.nav.faq },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group rtl:space-x-reverse">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 p-0.5 shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950/80 backdrop-blur-md rounded-[10px] flex items-center justify-center">
                <Layers className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  {t.nav.brandName}
                </span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  COMMUNITY
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {t.nav.brandTag}
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse">
            
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="glass-pill px-3.5 py-2 rounded-xl flex items-center space-x-2 rtl:space-x-reverse text-sm font-semibold text-slate-200 hover:text-white hover:border-purple-400/40 transition-all duration-200"
              title={language === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
            >
              <Globe className="w-4 h-4 text-purple-400" />
              <span>{language === 'en' ? 'عربي' : 'English'}</span>
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle />


            {/* Request Demo / OPEX CTA Button */}
            <button
              onClick={() => onOpenDemoModal('10000')}
              className="relative group overflow-hidden rounded-xl p-px font-semibold text-sm shadow-lg shadow-purple-600/25 transition-all duration-300 hover:shadow-purple-600/40 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 transition-all duration-300 group-hover:opacity-90" />
              <div className="relative px-4 py-2.5 bg-slate-950/80 rounded-[11px] flex items-center space-x-2 rtl:space-x-reverse text-white group-hover:bg-transparent transition-all duration-300">
                <UserCheck className="w-4 h-4 text-purple-300" />
                <span>{t.nav.bookDemo}</span>
                <ArrowRight className="w-4 h-4 text-purple-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="glass-pill px-3 py-1.5 rounded-lg text-xs font-bold text-slate-200 flex items-center space-x-1 rtl:space-x-reverse"
            >
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>{language === 'en' ? 'عربي' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white glass-pill hover:border-purple-500/40"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-t border-white/10 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-purple-600/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal('10000');
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-white text-center shadow-lg shadow-purple-600/30 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Sparkles className="w-5 h-5 text-purple-200" />
              <span>{t.nav.bookDemo}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
