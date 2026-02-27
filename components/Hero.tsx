
import React from 'react';
import { NAME_PREFIX, TITLES } from '../constants';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 citadel-bg overflow-hidden">
      {/* Decorative SVG Elements - Iron Throne/Sword inspired */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 100 100" className="float-anim">
          <path d="M50 5 L55 40 L95 45 L55 50 L50 95 L45 50 L5 45 L45 40 Z" fill="none" stroke="#b45309" strokeWidth="0.5" />
          <circle cx="50" cy="45" r="10" fill="none" stroke="#b45309" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="font-playfair italic text-amber-600 text-xl md:text-2xl mb-8 tracking-[0.3em]">
          The Warden of the Digital Realm
        </h2>
        
        <div className="flex flex-col items-center gap-2 mb-10">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-black leading-tight worn-gold px-4 italic">
            {NAME_PREFIX}
          </h1>
          <h3 className="font-cinzel text-lg md:text-2xl lg:text-3xl text-stone-300 tracking-[0.3em] mt-2 font-bold opacity-90 text-center uppercase">
            {TITLES}
          </h3>
        </div>
        
        <div className="ornate-divider w-full max-w-3xl !my-12"></div>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})} 
            className="w-full sm:w-auto px-16 py-5 bg-red-950 hover:bg-red-900 text-amber-500 font-bold rounded-sm transition-all shadow-2xl shadow-black/60 tracking-[0.2em] text-sm md:text-base border border-amber-600/30 group flex items-center gap-4"
          >
            <span className="group-hover:translate-x-1 transition-transform">VIEW ARTIFACTS</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="group-hover:rotate-12 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6 text-stone-500 font-cinzel text-[10px] md:text-xs tracking-[0.4em] italic opacity-70 w-full">
          <span className="flex-grow max-w-[100px] h-[1px] bg-stone-800"></span>
          <span className="whitespace-nowrap">PROUDLY INSPIRED BY THE SEVEN KINGDOMS</span>
          <span className="flex-grow max-w-[100px] h-[1px] bg-stone-800"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
