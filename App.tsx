
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PandavaSection from './components/PandavaSection';
import PortfolioGrid from './components/PortfolioGrid';
import Credentials from './components/Credentials';
import Footer from './components/Footer';
import DalangAI from './components/DalangAI';
import ContactPage from './components/ContactPage';
import PhilosophyPage from './components/PhilosophyPage';
import AbilitiesPage from './components/AbilitiesPage';
import ArtifactsPage from './components/ArtifactsPage';
import ScrollIndicator from './components/ScrollIndicator';
import Embers from './components/Embers';
import { View } from './types';

function App() {
  const [view, setView] = useState<View>('HOME');

  if (view === 'CONTACT') {
    return <ContactPage onBack={() => setView('HOME')} />;
  }

  if (view === 'PHILOSOPHY') {
    return <PhilosophyPage onBack={() => setView('HOME')} />;
  }

  if (view === 'ABILITIES') {
    return <AbilitiesPage onBack={() => setView('HOME')} />;
  }

  if (view === 'ARTIFACTS') {
    return <ArtifactsPage onBack={() => setView('HOME')} />;
  }

  return (
    <div className="relative min-h-screen bg-[#1c1c1c]">
      <div className="fixed inset-0 map-pattern opacity-[0.03] pointer-events-none z-0"></div>
      <div className="mist"></div>
      <div className="vignette"></div>
      <div className="fire-glow"></div>
      <Embers />
      <Navbar 
        onContactClick={() => setView('CONTACT')} 
        onPhilosophyClick={() => setView('PHILOSOPHY')} 
        onAbilitiesClick={() => setView('ABILITIES')}
        onArtifactsClick={() => setView('ARTIFACTS')}
      />
      
      <main>
        <Hero onContactClick={() => setView('CONTACT')} />
        <PandavaSection />
        {/* Re-introducing Credentials to the main page */}
        <Credentials />
        <PortfolioGrid />
      </main>

      <Footer />

      {/* AI Assistant */}
      <DalangAI />

      {/* Initial Scroll Hint */}
      <ScrollIndicator />

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-stone-900/20 z-[60]"></div>
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1c1c1c] to-transparent pointer-events-none z-40"></div>
    </div>
  );
}

export default App;