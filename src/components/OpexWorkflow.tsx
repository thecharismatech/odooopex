import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UserCheck, Clock, FileSpreadsheet, ShieldAlert, FileText, CheckCircle2, Award, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface OpexWorkflowProps {
  onOpenDemoModal: (plan?: string) => void;
}

export const OpexWorkflow: React.FC<OpexWorkflowProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const opexTimeline = [
    {
      time: t.opex.step1Time,
      title: t.opex.step1Title,
      desc: t.opex.step1Desc,
      icon: Clock,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      time: t.opex.step2Time,
      title: t.opex.step2Title,
      desc: t.opex.step2Desc,
      icon: FileSpreadsheet,
      color: 'from-purple-500 to-pink-500',
    },
    {
      time: t.opex.step3Time,
      title: t.opex.step3Title,
      desc: t.opex.step3Desc,
      icon: ShieldAlert,
      color: 'from-amber-500 to-orange-500',
    },
    {
      time: t.opex.step4Time,
      title: t.opex.step4Title,
      desc: t.opex.step4Desc,
      icon: FileText,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="opex" className="py-24 relative overflow-hidden bg-slate-950/40">
      
      {/* Ambient background blur */}
      <div className="bg-orb-purple top-1/2 left-0 -translate-y-1/2 opacity-30" />
      <div className="bg-orb-amber bottom-10 right-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-4 py-1.5 rounded-full glass-pill border border-purple-500/40 bg-purple-950/50 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4 glow-purple">
            <UserCheck className="w-4 h-4 text-purple-300" />
            <span>{t.opex.badgeHighlight}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.opex.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.opex.subtitle}
          </p>
        </div>

        {/* 4 Feature Pillars Grid for Managed Employee */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-6 rounded-3xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-6 h-6 text-purple-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t.opex.card1Title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.opex.card1Desc}</p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-indigo-500/30 hover:border-indigo-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center mb-4">
              <PhoneCall className="w-6 h-6 text-indigo-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t.opex.card2Title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.opex.card2Desc}</p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t.opex.card3Title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.opex.card3Desc}</p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-emerald-300" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t.opex.card4Title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{t.opex.card4Desc}</p>
          </div>
        </div>

        {/* Interactive Timeline Showcase */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
            <div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                <Clock className="w-6 h-6 text-purple-400" />
                <span>{t.opex.timelineTitle}</span>
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Click on any time-slot below to explore how our dedicated specialist manages your workflow.
              </p>
            </div>

            <span className="glass-pill px-4 py-2 rounded-full text-xs font-bold text-gradient-gold border border-amber-500/40 shrink-0">
              ● Guaranteed Full-Time Focus
            </span>
          </div>

          {/* Timeline Navigation Switcher */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {opexTimeline.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border text-start transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'glass-card border-purple-500 bg-purple-900/30 glow-purple scale-[1.02]'
                      : 'glass-pill border-white/10 hover:border-purple-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-purple-300' : 'text-slate-400'}`}>
                      {step.time}
                    </span>
                    <StepIcon className={`w-4 h-4 ${isActive ? 'text-purple-300' : 'text-slate-500'}`} />
                  </div>
                  <div className={`text-sm font-extrabold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-bold">
                <span>{opexTimeline[activeStep].time}</span>
                <span>•</span>
                <span>{opexTimeline[activeStep].title}</span>
              </div>
              <h4 className="text-xl font-bold text-white">
                {opexTimeline[activeStep].title}
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {opexTimeline[activeStep].desc}
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
              <div className="p-4 rounded-xl glass-pill border border-emerald-500/30 flex items-center space-x-3 rtl:space-x-reverse">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-emerald-200">
                  Verified Data Output & Logged Audit Trail
                </span>
              </div>

              <button
                onClick={() => onOpenDemoModal('10000')}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 font-bold text-white text-xs shadow-lg shadow-purple-600/30 hover:opacity-90 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{t.opex.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SLA & Confidentiality Banner */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-purple-300 font-semibold">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{t.opex.guaranteeTitle}</span>
            </div>
            <p className="text-slate-400 text-center sm:text-end">
              {t.opex.guaranteeDesc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
