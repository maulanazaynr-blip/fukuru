
import React, { useEffect } from 'react';
import { CERTIFICATIONS, EDUCATION } from '../constants';
import Embers from './Embers';

interface AbilitiesPageProps {
  onBack: () => void;
}

const AbilitiesPage: React.FC<AbilitiesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-stone-100 flex flex-col animate-in fade-in duration-500 relative">
      <div className="fire-glow"></div>
      <Embers />
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:30px_30px]"></div>
      </div>

      <header className="px-6 py-8 border-b border-red-900/20 flex items-center justify-between bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-500 font-cinzel text-[10px] tracking-[0.3em] hover:text-amber-400 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO HOME
        </button>
        
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-cinzel font-bold gold-gradient tracking-[0.2em] uppercase">The Sacred Accolades</h1>
        </div>

        <div className="w-16 hidden md:block"></div>
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-20 relative z-10">
        <div className="mb-20 text-center">
          <h3 className="text-amber-500 font-cinzel tracking-[0.5em] text-xs mb-4 uppercase font-bold">Validated Mastery</h3>
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold uppercase mb-6">CERTIFICATIONS</h2>
          <p className="text-stone-400 font-playfair text-lg italic max-w-2xl mx-auto drop-cap">
            "Proofs of valor and intellectual discipline, forged through rigorous trials in the digital and physical realms."
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto mt-8 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="group p-8 dark-parchment border border-red-900/20 rounded-sm hover:border-amber-600/50 transition-all hover:bg-red-900/5 flex flex-col h-full shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 wax-seal text-amber-500/80 group-hover:text-amber-400 transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                   </svg>
                </div>
                <span className="text-[10px] text-stone-600 font-cinzel tracking-widest uppercase">Validated Artifact</span>
              </div>
              
              <h3 className="text-xl font-cinzel font-bold text-stone-100 mb-2 group-hover:text-amber-500 transition-colors">
                {cert.name}
              </h3>
              <p className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                {cert.provider}
              </p>
              
              <p className="text-stone-400 text-sm leading-relaxed mb-6 italic">
                "{cert.description}"
              </p>
              
              <div className="mt-auto pt-6 border-t border-stone-800 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></div>
                 <span className="text-[9px] text-stone-500 uppercase tracking-widest font-bold">Authorized Practitioner</span>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section within Abilities Page */}
        <div className="border-t border-amber-900/30 pt-24">
          <div className="mb-16">
            <h3 className="text-amber-500 font-cinzel tracking-[0.4em] text-xs mb-4 uppercase font-bold">Foundation of Wisdom</h3>
            <h2 className="text-3xl md:text-5xl font-cinzel font-bold uppercase">ACADEMIC LINEAGE</h2>
          </div>
          
          <div className="space-y-12">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:items-center p-8 border-l-2 border-stone-800 hover:border-amber-500 transition-colors group">
                <div className="md:w-1/3">
                  <h4 className="font-cinzel text-xl text-stone-200 group-hover:text-amber-500 transition-colors uppercase font-bold">{edu.degree}</h4>
                </div>
                <div className="md:w-2/3">
                  <p className="text-stone-500 font-playfair italic text-lg">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-red-900/20 bg-black/40 text-center">
        <p className="font-cinzel text-[10px] text-stone-600 tracking-[0.5em] uppercase">Knight Professional Standards © 2026</p>
      </footer>

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-stone-900/20 z-[60]"></div>
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1c1c1c] to-transparent pointer-events-none z-40"></div>
    </div>
  );
};

export default AbilitiesPage;