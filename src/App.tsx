import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { OpexWorkflow } from './components/OpexWorkflow';
import { ModuleExplorer } from './components/ModuleExplorer';
import { Pricing } from './components/Pricing';
import { RoiCalculator } from './components/RoiCalculator';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { DemoModal } from './components/DemoModal';

const MainContent: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<string | undefined>('10000');

  const handleOpenDemoModal = (plan?: string) => {
    setModalPlan(plan);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-purple-500 selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Sections */}
      <main>
        <Hero onOpenDemoModal={handleOpenDemoModal} />
        <ValueProps />
        <OpexWorkflow onOpenDemoModal={handleOpenDemoModal} />
        <ModuleExplorer onOpenDemoModal={handleOpenDemoModal} />
        <Pricing onOpenDemoModal={handleOpenDemoModal} />
        <RoiCalculator onOpenDemoModal={handleOpenDemoModal} />
        <ComparisonMatrix />
        <Testimonials />
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Widget */}
      <FloatingControls onOpenDemoModal={handleOpenDemoModal} />

      {/* Request Demo / Sandbox Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
        initialPlan={modalPlan}
      />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
