import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Users, ShoppingBag, Boxes, Calculator, Store, UserCheck, Factory, Truck, 
  Kanban, Globe, Headphones, BarChart3, CheckCircle2, X, Sparkles, Layers, ArrowUpRight 
} from 'lucide-react';

interface ModuleExplorerProps {
  onOpenDemoModal: (plan?: string) => void;
}

export const ModuleExplorer: React.FC<ModuleExplorerProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModuleModal, setActiveModuleModal] = useState<any | null>(null);

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Users,
    ShoppingBag,
    Boxes,
    Calculator,
    Store,
    UserCheck,
    Factory,
    Truck,
    Kanban,
    Globe,
    Headphones,
    BarChart3,
  };

  const categories = ['All', 'Sales & Marketing', 'Operations', 'Finance', 'Human Resources', 'Customer Support', 'Digital'];

  const filteredItems = selectedCategory === 'All'
    ? t.modules.items
    : t.modules.items.filter((item) => item.category.toLowerCase().includes(selectedCategory.toLowerCase()) || selectedCategory === 'All');

  return (
    <section id="modules" className="py-24 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="bg-orb-cyan top-20 right-0 opacity-20" />
      <div className="bg-orb-purple bottom-20 left-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>{t.modules.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {t.modules.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            {t.modules.subtitle}
          </p>
        </div>

        {/* Category Filters Pill Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'glass-pill text-slate-300 hover:text-white hover:border-purple-500/40'
              }`}
            >
              {cat === 'All' ? t.modules.allApps : cat}
            </button>
          ))}
        </div>

        {/* Modules Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const IconComponent = iconMap[item.icon] || Layers;
            return (
              <div
                key={item.id}
                onClick={() => setActiveModuleModal(item)}
                className="glass-card p-6 rounded-3xl border border-white/10 glass-card-hover cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600/40 to-indigo-600/40 border border-purple-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-purple-300" />
                    </div>

                    <span className="text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      0 EGP FEE
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2 flex items-center justify-between">
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-purple-300">
                  <span className="text-[11px] text-slate-400 font-mono">{item.previewStat}</span>
                  <span className="group-hover:underline">{t.modules.viewDemo}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Banner below modules */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            * All modules above run on Odoo Community open-source core with zero user license charges forever.
          </p>
        </div>

      </div>

      {/* Detail Modal for Selected Module */}
      {activeModuleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-purple-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModuleModal(null)}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 p-2 rounded-xl glass-pill text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-400/40 flex items-center justify-center">
                {React.createElement(iconMap[activeModuleModal.icon] || Layers, { className: 'w-6 h-6 text-purple-300' })}
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">{activeModuleModal.name}</h3>
                <span className="text-xs text-purple-300 font-medium">{activeModuleModal.category} • Odoo Community Unlocked</span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModuleModal.desc}
            </p>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 mb-6 flex items-center justify-between">
              <div>
                <div className="text-xl font-extrabold text-gradient-gold dir-ltr">
                  {activeModuleModal.previewStat}
                </div>
                <div className="text-xs text-slate-300">
                  {activeModuleModal.previewText}
                </div>
              </div>
              <Sparkles className="w-8 h-8 text-purple-400 opacity-60" />
            </div>

            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Included Features & Capabilities:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {activeModuleModal.features.map((feat: string, idx: number) => (
                <div key={idx} className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  const mod = activeModuleModal;
                  setActiveModuleModal(null);
                  onOpenDemoModal(`Demo Module Request: ${mod.name}`);
                }}
                className="flex-1 py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition-all text-center"
              >
                Request Custom Sandbox Demo
              </button>

              <button
                onClick={() => setActiveModuleModal(null)}
                className="py-3 px-6 rounded-xl glass-pill text-slate-300 hover:text-white text-sm font-bold"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
