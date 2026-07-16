import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, UserCheck, Cpu, Database, Award, DollarSign } from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: (plan?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      
      {/* Background Glowing Ambient Orbs */}
      <div className="bg-orb-purple top-10 left-1/2 -translate-x-1/2 opacity-70" />
      <div className="bg-orb-cyan top-1/3 -left-20 opacity-50" />
      <div className="bg-orb-amber top-2/3 -right-20 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-full glass-pill border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold mb-8 animate-pulse-glow">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight">
            {t.hero.titleLine1}{' '}
            <span className="text-gradient-purple underline decoration-purple-500/40 underline-offset-8">
              {t.hero.titleHighlight}
            </span>{' '}
            {t.hero.titleLine2}
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* Pricing Highlight Badges floating under subtitle */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="glass-pill px-4 py-2.5 rounded-2xl flex items-center space-x-2 rtl:space-x-reverse border border-indigo-500/30">
              <Database className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-white">
                Odoo Community System: <span className="text-cyan-400">5,000 EGP / mo</span>
              </span>
            </div>
            <div className="glass-pill px-4 py-2.5 rounded-2xl flex items-center space-x-2 rtl:space-x-reverse border border-purple-500/40 bg-purple-950/30 glow-purple">
              <UserCheck className="w-5 h-5 text-purple-300" />
              <span className="text-sm font-bold text-white">
                Full System + Dedicated Employee (OPEX): <span className="text-gradient-gold">10,000 EGP / mo</span>
              </span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Primary OPEX Employee CTA */}
            <button
              onClick={() => onOpenDemoModal('10000')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 font-extrabold text-white text-base shadow-xl shadow-purple-600/35 hover:shadow-purple-600/60 hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center space-x-3 rtl:space-x-reverse group"
            >
              <UserCheck className="w-5 h-5 text-purple-200" />
              <span>{t.hero.ctaPrimary}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 rtl:group-hover:-translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary System Only CTA */}
            <button
              onClick={() => onOpenDemoModal('5000')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl glass-card hover:bg-white/10 text-white font-bold text-base border border-white/20 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
            >
              <Cpu className="w-5 h-5 text-cyan-400" />
              <span>{t.hero.ctaSecondary}</span>
            </button>
          </div>

          {/* Bullet Features Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.pill1}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.pill2}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.pill3}</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup Glass Card Showcase */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
            
            {/* Header bar inside mock browser */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-slate-400 ml-2 font-mono dir-ltr">
                  https://app.odoocommunity.eg/dashboard
                </span>
              </div>

              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ● Live Managed Session
                </span>
                <span className="text-xs text-slate-300 hidden sm:inline font-medium">
                  Assigned Employee: <strong className="text-purple-300">Mohamed S. (Full Time OPEX)</strong>
                </span>
              </div>
            </div>

            {/* Simulated Glass Dashboard Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-pill p-4 rounded-2xl border border-purple-500/30">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                  <span>Daily Sales Logs</span>
                  <Award className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-black text-white dir-ltr">
                  EGP 148,200
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 font-semibold flex items-center gap-1">
                  <span>↑ 100% Invoiced by OPEX Employee</span>
                </div>
              </div>

              <div className="glass-pill p-4 rounded-2xl border border-cyan-500/30">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                  <span>Inventory Accuracy</span>
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-black text-white dir-ltr">
                  99.8 %
                </div>
                <div className="text-[11px] text-cyan-300 mt-1 font-semibold">
                  Daily Physical vs System Audit
                </div>
              </div>

              <div className="glass-pill p-4 rounded-2xl border border-emerald-500/30">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                  <span>Per-User Software Fee</span>
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-emerald-300 dir-ltr">
                  EGP 0.00
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Unlimited Users Core Free
                </div>
              </div>

              <div className="glass-pill p-4 rounded-2xl border border-pink-500/30">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-1">
                  <span>WhatsApp Reports</span>
                  <Sparkles className="w-4 h-4 text-pink-400" />
                </div>
                <div className="text-2xl font-black text-pink-300 dir-ltr">
                  Daily @ 5 PM
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  P&L and Stock Alert Summary
                </div>
              </div>
            </div>

            {/* Interactive Live Banner Prompt Inside Card */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-slate-900/60 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Need a Full-Time Employee To Operate Your Odoo?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Get system hosting + dedicated data officer for only 10,000 EGP / month.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onOpenDemoModal('10000')}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-bold text-white shadow-md shadow-purple-600/30 transition-all shrink-0"
              >
                Claim OPEX Specialist
              </button>
            </div>

          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-6 rounded-2xl text-center border border-white/10 hover:border-purple-500/30 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient-purple dir-ltr">
              {t.hero.stat1Val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {t.hero.stat1Label}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center border border-white/10 hover:border-purple-500/30 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient-gold dir-ltr">
              {t.hero.stat2Val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {t.hero.stat2Label}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center border border-white/10 hover:border-purple-500/30 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient-cyan dir-ltr">
              {t.hero.stat3Val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {t.hero.stat3Label}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl text-center border border-white/10 hover:border-purple-500/30 transition-colors">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 dir-ltr">
              {t.hero.stat4Val}
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-1">
              {t.hero.stat4Label}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
