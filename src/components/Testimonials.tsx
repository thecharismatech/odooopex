import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote, Star, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Background radial highlight */}
      <div className="bg-orb-purple top-1/2 right-0 -translate-y-1/2 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full glass-pill border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-purple-400" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.testimonials.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/15 flex flex-col justify-between relative glass-card-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-1 rtl:space-x-reverse text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-purple-400/40" />
                </div>

                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div>
                {/* Metric Badge */}
                <div className="mb-6 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                  <span className="text-lg font-black text-gradient-gold dir-ltr">{item.metric}</span>
                  <span className="text-[11px] text-slate-300 font-medium">{item.metricLabel}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse pt-4 border-t border-white/10">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-400/40 shrink-0"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-white">{item.author}</h4>
                    <p className="text-xs text-purple-300 font-medium">{item.role}</p>
                    <p className="text-[11px] text-slate-400">{item.company}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
