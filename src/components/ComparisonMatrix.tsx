import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="comparison" className="py-24 relative overflow-hidden">
      
      {/* Ambient Orbs */}
      <div className="bg-orb-cyan top-1/4 left-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full glass-pill border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>{t.comparison.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.comparison.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Table Container with Glassmorphism */}
        <div className="glass-card rounded-3xl border border-white/15 overflow-x-auto shadow-2xl backdrop-blur-2xl">
          <table className="w-full text-start border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/10 bg-slate-900/60">
                <th className="py-5 px-6 text-start text-sm font-extrabold text-slate-300 uppercase tracking-wider">
                  {t.comparison.featureHeader}
                </th>
                <th className="py-5 px-6 text-start text-sm font-extrabold text-purple-300 bg-purple-950/40 border-x border-purple-500/30">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{t.comparison.odooCommunityHeader}</span>
                  </div>
                </th>
                <th className="py-5 px-6 text-start text-sm font-extrabold text-slate-400">
                  {t.comparison.odooEnterpriseHeader}
                </th>
                <th className="py-5 px-6 text-start text-sm font-extrabold text-slate-400">
                  {t.comparison.otherErpHeader}
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
              {t.comparison.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  
                  {/* Feature Label */}
                  <td className="py-4 px-6 font-bold text-white">
                    {row.feature}
                  </td>

                  {/* Our Solution Column (Highlighted) */}
                  <td className="py-4 px-6 font-extrabold text-emerald-300 bg-purple-950/30 border-x border-purple-500/20">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.community}</span>
                    </div>
                  </td>

                  {/* Odoo Enterprise Column */}
                  <td className="py-4 px-6 text-slate-400 font-medium">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{row.enterprise}</span>
                    </div>
                  </td>

                  {/* Other ERP Systems Column */}
                  <td className="py-4 px-6 text-slate-400 font-medium">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{row.other}</span>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
