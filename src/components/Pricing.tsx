import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Check, UserCheck, Cpu, Sparkles, Building2, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingProps {
  onOpenDemoModal: (planPrice?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      
      {/* Background radial highlights */}
      <div className="bg-orb-purple top-1/3 left-1/2 -translate-x-1/2 opacity-35" />
      <div className="bg-orb-amber bottom-10 right-10 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full glass-pill border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.pricing.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.pricing.subtitle}
          </p>

          <p className="text-xs text-purple-300 mt-2 font-semibold">
            {t.pricing.billedMonthly}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: 5,000 EGP System Managed Plan */}
          <div className="glass-card rounded-3xl p-8 border border-white/15 flex flex-col justify-between relative glass-card-hover">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-300" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  SYSTEM ONLY
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{t.pricing.plan1Name}</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">{t.pricing.plan1Desc}</p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline space-x-2 rtl:space-x-reverse">
                  <span className="text-4xl sm:text-5xl font-black text-white dir-ltr">
                    {t.pricing.plan1Price}
                  </span>
                  <span className="text-sm font-bold text-slate-300">{t.pricing.egpMonth}</span>
                </div>
                <p className="text-[11px] text-cyan-300 mt-1 font-semibold">
                  Zero per-user costs • Unlimited team users
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {t.pricing.plan1Features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3 rtl:space-x-reverse text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenDemoModal('5000')}
              className="w-full py-3.5 px-6 rounded-2xl glass-card hover:bg-cyan-500/20 text-white font-bold text-sm border border-cyan-400/30 hover:border-cyan-400 transition-all text-center flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>Select System Plan (5,000 EGP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 2: 10,000 EGP Managed System + OPEX Employee Plan (POPULAR SPOTLIGHT) */}
          <div className="glass-card rounded-3xl p-8 border-2 border-purple-500/80 bg-gradient-to-b from-purple-950/40 via-slate-900/80 to-indigo-950/50 flex flex-col justify-between relative shadow-2xl shadow-purple-600/30 glow-purple scale-[1.03] z-10">
            
            {/* Top Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center space-x-1.5 rtl:space-x-reverse">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.pricing.popularBadge}</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-2">
                <div className="w-10 h-10 rounded-xl bg-purple-500/30 border border-purple-400/50 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-purple-200" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-200 border border-purple-500/40">
                  SYSTEM + DEDICATED EMPLOYEE
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{t.pricing.plan2Name}</h3>
              <p className="text-xs text-purple-200/80 mb-6 leading-relaxed">{t.pricing.plan2Desc}</p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline space-x-2 rtl:space-x-reverse">
                  <span className="text-4xl sm:text-5xl font-black text-gradient-gold dir-ltr">
                    {t.pricing.plan2Price}
                  </span>
                  <span className="text-sm font-bold text-slate-200">{t.pricing.egpMonth}</span>
                </div>
                <p className="text-[11px] text-emerald-300 mt-1 font-bold">
                  Includes 1 Full-Time Virtual Employee for Data Entry & Reports
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {t.pricing.plan2Features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3 rtl:space-x-reverse text-xs text-slate-100 font-medium">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenDemoModal('10000')}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 font-black text-white text-sm shadow-xl shadow-purple-600/40 hover:shadow-purple-600/60 hover:scale-[1.02] transition-all text-center flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <UserCheck className="w-4 h-4 text-purple-200" />
              <span>Get OPEX Employee Plan (10,000 EGP)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Custom Enterprise Plan */}
          <div className="glass-card rounded-3xl p-8 border border-white/15 flex flex-col justify-between relative glass-card-hover">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-amber-300" />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  ENTERPRISE
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{t.pricing.plan3Name}</h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">{t.pricing.plan3Desc}</p>

              <div className="mb-6 pb-6 border-b border-white/10">
                <div className="text-3xl font-black text-gradient-gold">
                  {t.pricing.plan3Price}
                </div>
                <p className="text-[11px] text-amber-300 mt-1 font-semibold">
                  Tailored SLA & Custom Module Dev
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {t.pricing.plan3Features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3 rtl:space-x-reverse text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenDemoModal('Custom Enterprise')}
              className="w-full py-3.5 px-6 rounded-2xl glass-card hover:bg-amber-500/20 text-white font-bold text-sm border border-amber-400/30 hover:border-amber-400 transition-all text-center flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <span>Consult Solution Architect</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center flex justify-center">
          <div className="glass-pill px-6 py-3 rounded-full border border-purple-500/30 text-xs text-slate-300 font-medium flex items-center space-x-2 rtl:space-x-reverse">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            <span>{t.pricing.disclaimer}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
