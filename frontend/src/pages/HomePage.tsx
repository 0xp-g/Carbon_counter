
// frontend/src/pages/HomePage.tsx
// --- MODIFIED FILE ---
// The unnecessary div wrappers have been removed to fix the layout.

import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { WhyCarbonCounterSection } from '../components/WhyCarbonCounter';
import { FoundationSection } from '../components/FoundationSection';
import { AboutSection } from '../components/AboutSection';
import { ValuesSection } from '../components/ValuesImpactSection';
import { ImpactSection } from '../components/ImpactSection';
import { JoinSection } from '../components/JoinSection';

const HomePage: React.FC = () => {
  return (
    // The extra divs were removed. This is the correct structure.
    <div className="bg-black">
        <Navigation />
        <HeroSection />
        <WhyCarbonCounterSection />
        <FoundationSection />
        <AboutSection />
        <ValuesSection />
        <ImpactSection />
        <JoinSection />
    </div>
  );
}

export default HomePage;
