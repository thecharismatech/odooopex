import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass-pill px-3.5 py-2 rounded-xl flex items-center space-x-2 rtl:space-x-reverse text-sm font-semibold text-slate-200 hover:text-white hover:border-purple-400/40 transition-all duration-200"
      title={language === 'en' ? 'Toggle theme' : 'تغيير المظهر'}
    >
      {theme === 'dark' ? <Moon className="w-4 h-4 text-purple-400" /> : <Sun className="w-4 h-4 text-yellow-400" />}
      <span className="hidden sm:inline">
        {language === 'en' ? (theme === 'dark' ? 'Dark' : 'Light') : theme === 'dark' ? 'داكن' : 'فاتح'}
      </span>
    </button>
  );
};

