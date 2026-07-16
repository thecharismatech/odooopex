import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, UserCheck, BarChart2, TrendingUp, ShieldCheck, HeartHandshake } from 'lucide-react';

export const ValueProps: React.FC = () => {
  const { t } = useLanguage();

  const propsList = [
    {
      icon: Users,
      title: t.valueProps.prop1Title,
      desc: t.valueProps.prop1Desc,
      gradient: 'from-blue-500 to-cyan-500',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: UserCheck,
      title: t.valueProps.prop2Title,
      desc: t.valueProps.prop2Desc,
      gradient: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/40',
      badge: '10,000 EGP / mo Plan',
    },
    {
      icon: BarChart2,
      title: t.valueProps.prop3Title,
      desc: t.valueProps.prop3Desc,
      gradient: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-500/30',
    },
    {
      icon: TrendingUp,
      title: t.valueProps.prop4Title,
      desc: t.valueProps.prop4Desc,
      gradient: 'from-emerald-500 to-teal-500',
      borderColor: 'border-emerald-500/30',
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full glass-pill border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>{t.valueProps.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {t.valueProps.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.valueProps.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propsList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-6 sm:p-8 rounded-3xl border ${item.borderColor} glass-card-hover relative group flex flex-col justify-between`}
              >
                <div>
                  {item.badge && (
                    <span className="absolute top-4 right-4 rtl:right-auto rtl:left-4 bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.gradient} p-0.5 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-950/80 backdrop-blur-md rounded-[14px] flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center space-x-2 rtl:space-x-reverse text-xs font-semibold text-slate-400 group-hover:text-purple-300 transition-colors">
                  <HeartHandshake className="w-4 h-4 text-purple-400" />
                  <span>100% Guaranteed Outcome</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
