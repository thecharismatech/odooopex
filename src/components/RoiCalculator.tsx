import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, DollarSign, ArrowRight, TrendingDown, Users, CheckCircle } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenDemoModal: (planPrice?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();

  const [selectedPlan, setSelectedPlan] = useState<'5000' | '10000'>('10000');
  const [employeeCount, setEmployeeCount] = useState<number>(15);

  // Math calculation constants
  const egpPerUsdUserLicense = 1000; // ~$20 USD license fee in EGP
  const traditionalInHouseAccountantSalary = 15000; // Average salary for full time data entry/accountant
  const traditionalItSupportOverhead = 3000;

  // Traditional monthly cost = (employees * per user fee) + in house staff salary + IT overhead
  const traditionalMonthlyCost = (employeeCount * egpPerUsdUserLicense) + traditionalInHouseAccountantSalary + traditionalItSupportOverhead;

  // Our monthly cost = fixed 5000 EGP or 10000 EGP
  const ourMonthlyCost = selectedPlan === '10000' ? 10000 : 5000;

  // Net monthly & annual savings
  const monthlySavings = Math.max(0, traditionalMonthlyCost - ourMonthlyCost);
  const annualSavings = monthlySavings * 12;

  return (
    <section id="calculator" className="py-24 relative overflow-hidden bg-slate-950/60">
      
      {/* Background radial highlight */}
      <div className="bg-orb-amber top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full glass-pill border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>{t.calculator.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.calculator.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls Input Side (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Package Selector */}
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  {t.calculator.selectPlanLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('5000')}
                    className={`p-4 rounded-2xl border text-start transition-all ${
                      selectedPlan === '5000'
                        ? 'glass-card border-cyan-400 bg-cyan-950/40 text-white glow-cyan'
                        : 'glass-pill border-white/10 text-slate-400 hover:border-cyan-400/40'
                    }`}
                  >
                    <div className="text-xs font-bold text-cyan-300 uppercase">SYSTEM ONLY</div>
                    <div className="text-sm font-extrabold text-white mt-1">5,000 EGP / Month</div>
                    <div className="text-[11px] text-slate-400 mt-1">Managed Community ERP</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedPlan('10000')}
                    className={`p-4 rounded-2xl border text-start transition-all ${
                      selectedPlan === '10000'
                        ? 'glass-card border-purple-500 bg-purple-950/50 text-white glow-purple'
                        : 'glass-pill border-white/10 text-slate-400 hover:border-purple-500/40'
                    }`}
                  >
                    <div className="text-xs font-bold text-gradient-gold uppercase">RECOMMENDED OPEX</div>
                    <div className="text-sm font-extrabold text-white mt-1">10,000 EGP / Month</div>
                    <div className="text-[11px] text-purple-200 mt-1">System + Full-Time Dedicated Employee</div>
                  </button>
                </div>
              </div>

              {/* Step 2: Employee Slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>{t.calculator.employeesLabel}</span>
                  </label>
                  <span className="px-3 py-1 rounded-xl bg-purple-600/30 border border-purple-400/40 text-purple-200 text-sm font-extrabold dir-ltr">
                    {employeeCount} Staff Members
                  </span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="100"
                  step="1"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />

                <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono dir-ltr">
                  <span>5 Staff</span>
                  <span>25 Staff</span>
                  <span>50 Staff</span>
                  <span>100 Staff</span>
                </div>
              </div>

              {/* Step 3: Fast Features Highlights */}
              <div className="p-4 rounded-2xl glass-pill border border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2 rtl:space-x-reverse font-semibold text-emerald-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Unlimited Users: Adding {employeeCount} users costs 0 EGP per license!</span>
                </div>
                {selectedPlan === '10000' && (
                  <div className="flex items-center space-x-2 rtl:space-x-reverse font-semibold text-purple-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Dedicated Specialist replaces standard 15,000+ EGP in-house salary overhead!</span>
                  </div>
                )}
              </div>

            </div>

            {/* Results Display Output (5 cols) */}
            <div className="lg:col-span-5">
              <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-amber-500/50 bg-gradient-to-b from-amber-950/30 via-slate-900/90 to-purple-950/40 text-center space-y-6 glow-gold">
                
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-extrabold uppercase">
                  <TrendingDown className="w-4 h-4 text-amber-400" />
                  <span>Cost Comparison</span>
                </div>

                {/* Traditional Cost Breakdown */}
                <div className="pb-4 border-b border-white/10">
                  <span className="text-xs text-slate-400 block font-medium">
                    {t.calculator.traditionalCostTitle}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-rose-400 line-through mt-1 block dir-ltr">
                    {traditionalMonthlyCost.toLocaleString()} EGP / mo
                  </span>
                </div>

                {/* Our Package Cost */}
                <div className="pb-4 border-b border-white/10">
                  <span className="text-xs text-slate-300 block font-medium">
                    {t.calculator.ourCostTitle}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-white mt-1 block dir-ltr">
                    {ourMonthlyCost.toLocaleString()} EGP / mo
                  </span>
                </div>

                {/* Savings Box Big Highlight */}
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 shadow-inner">
                  <span className="text-xs text-emerald-300 font-extrabold uppercase tracking-wider block">
                    {t.calculator.monthlySavings}
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400 dir-ltr my-1">
                    {monthlySavings.toLocaleString()} EGP
                  </div>
                  <div className="text-xs text-slate-300 font-semibold pt-1 border-t border-emerald-500/20">
                    {t.calculator.annualSavings}{' '}
                    <strong className="text-emerald-300 dir-ltr">{annualSavings.toLocaleString()} EGP / Year</strong>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-tight">
                  {t.calculator.savingsNote}
                </p>

                <button
                  onClick={() => onOpenDemoModal(selectedPlan)}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 font-extrabold text-white text-sm shadow-xl shadow-purple-600/30 hover:scale-[1.02] transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>{t.calculator.ctaCalculator}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
