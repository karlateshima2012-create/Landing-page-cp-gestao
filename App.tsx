
import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { QuickFeatures } from './components/sections/QuickFeatures';
import { FeaturesShowcase } from './components/sections/Features';
import { TargetAudience } from './components/sections/TargetAudience';
import { Pricing } from './components/sections/Pricing';
import { FAQSection } from './components/sections/FAQ';

import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { FloatingCTA } from './components/sections/FloatingCTA';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-blue/30 selection:text-white bg-slate-950 overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Main Content Wrapper for Internal Margin */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="relative z-20">
          <QuickFeatures />
        </div>
      </main>

      <div className="bg-slate-950">
        <FeaturesShowcase />
      </div>

      <main className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        <TargetAudience />
      </main>

      <Pricing />


      {/* Unified Bottom Area: FAQ + Final CTA */}
      <div className="relative bg-slate-950 overflow-hidden">
        {/* Atmospheric Gradients for Unification */}
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-brand-blue/20 to-transparent pointer-events-none z-10"></div>

        {/* Central Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[1200px] bg-brand-blue/10 blur-[200px] -z-10 pointer-events-none"></div>

        <FAQSection />
        <FinalCTA />
      </div>



      <Footer />
      <FloatingCTA />

      {/* Ambient Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[120px]"></div>
      </div>

      {/* Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none -z-10 opacity-30 bg-grid"></div>
    </div>
  );
}
