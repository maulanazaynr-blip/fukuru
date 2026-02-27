
import React, { useState, useEffect } from 'react';
import { PANDAVAS } from '../constants';
import { PandavaCharacter } from '../types';
import Embers from './Embers';

interface PhilosophyPageProps {
  onBack: () => void;
}

const PhilosophyPage: React.FC<PhilosophyPageProps> = ({ onBack }) => {
  const [activeChar, setActiveChar] = useState<PandavaCharacter>(PANDAVAS[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-stone-100 flex flex-col animate-in fade-in duration-500 relative">
      <div className="fire-glow"></div>
      <Embers />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(153,27,27,0.1),transparent_50%)]"></div>
      
      <header className="px-6 py-8 border-b border-red-900/20 flex items-center justify-between bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-500 font-cinzel text-[10px] tracking-[0.3em] hover:text-amber-400 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK
        </button>
        
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-cinzel font-bold worn-gold tracking-[0.2em] uppercase">Pancadarma Grimoire</h1>
        </div>

        <div className="w-16 hidden md:block"></div>
      </header>

      <main className="flex-grow flex flex-col lg:flex-row-reverse overflow-hidden max-w-[1600px] mx-auto w-full relative z-10">
        <nav className="w-full lg:w-80 border-b lg:border-b-0 lg:border-l border-red-900/10 bg-black/40">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
            {PANDAVAS.map((char) => (
              <button
                key={char.name}
                onClick={() => setActiveChar(char)}
                className={`flex flex-1 lg:flex-none items-center gap-4 px-6 py-8 transition-all duration-300 border-b-4 lg:border-b-0 lg:border-r-4 min-w-[150px] lg:min-w-0 ${
                  activeChar.name === char.name 
                    ? 'bg-red-900/15 border-amber-500 text-amber-400' 
                    : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-white/5'
                }`}
              >
                <span className="text-2xl lg:text-3xl">{char.icon}</span>
                <div className="text-left">
                  <p className="font-cinzel text-xs lg:text-sm font-bold tracking-widest uppercase mb-1">{char.name}</p>
                  <p className="text-[10px] uppercase tracking-tighter hidden lg:block opacity-60 font-medium">{char.alias}</p>
                </div>
              </button>
            ))}
          </div>
        </nav>

        <div className="flex-grow relative overflow-y-auto h-[calc(100vh-140px)] lg:h-[calc(100vh-100px)]">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
            <span className="text-[40vw] filter blur-md">{activeChar.icon}</span>
          </div>

          <div key={activeChar.name} className="relative z-10 p-6 lg:p-16 max-w-4xl mx-auto animate-in slide-in-from-left-4 fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-black border-2 border-red-900/30 rounded-full flex items-center justify-center text-5xl lg:text-6xl shadow-xl">
                {activeChar.icon}
              </div>
              <div className="flex-grow">
                <span className="text-amber-500 font-cinzel text-xs tracking-widest uppercase mb-2 block font-bold">The Virtue of {activeChar.quality}</span>
                <h2 className="text-4xl lg:text-7xl font-cinzel font-black worn-gold leading-none uppercase tracking-tight">{activeChar.name}</h2>
                <div className="ornate-divider w-full max-w-sm !my-6"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div className="space-y-6">
                  <h3 className="font-cinzel text-amber-500 text-sm tracking-[0.3em] uppercase flex items-center gap-2 font-bold">
                    <span className="w-8 h-px bg-amber-500/40"></span>
                    Philosophical Core
                  </h3>
                  <p className="font-playfair text-2xl lg:text-3xl leading-relaxed text-stone-100 italic drop-cap">
                    "{activeChar.extendedWisdom}"
                  </p>
                </div>

                <div className="p-8 border border-red-900/20 bg-black/40 rounded-sm">
                  <h3 className="font-cinzel text-stone-500 text-[10px] tracking-[0.3em] uppercase mb-4 font-bold">Domain Description</h3>
                  <p className="text-stone-300 leading-relaxed italic">
                    {activeChar.description}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-8 bg-red-900/[0.05] border border-red-900/20 rounded-sm">
                  <h4 className="font-cinzel text-xs text-amber-400 tracking-widest uppercase mb-8 font-bold">Technical Masteries</h4>
                  <div className="flex flex-col gap-5">
                    {activeChar.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-stone-300">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 border border-red-900/20 bg-black/20 text-center">
                  <p className="text-stone-500 text-[9px] uppercase tracking-[0.2em] italic font-medium">
                    Legacy through code and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 px-6 border-t border-red-900/10 text-center text-[10px] text-stone-500 uppercase tracking-widest bg-black/40">
        Pancadarma Archives © 2026
      </footer>

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-stone-900/20 z-[60]"></div>
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1c1c1c] to-transparent pointer-events-none z-40"></div>
    </div>
  );
};

export default PhilosophyPage;
