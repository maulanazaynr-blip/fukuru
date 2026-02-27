
import React from 'react';
import { PANDAVAS } from '../constants';

const PandavaSection: React.FC = () => {
  return (
    <section id="pancadarma" className="py-32 px-6 bg-[#1c1c1c] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-20 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h3 className="text-amber-600 font-cinzel tracking-[0.5em] text-xs mb-4 uppercase font-bold">The Great Houses</h3>
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold uppercase tracking-tight leading-none mb-6 worn-gold">THE SEVEN KINGDOMS</h2>
            <p className="text-stone-400 font-playfair text-lg max-w-lg italic drop-cap">
              "Mapping the ancient virtues of the Great Houses into a multi-disciplinary technical arsenal."
            </p>
            <div className="ornate-divider w-full max-w-md mx-auto md:mx-0"></div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-amber-600 font-cinzel text-xs tracking-widest uppercase mb-2">Code of the Realm</p>
            <div className="h-px w-32 bg-stone-800/50 mb-4"></div>
            <p className="text-stone-500 text-[10px] font-cinzel uppercase tracking-[0.2em] italic max-w-[240px] text-center md:text-right">
              Integrity, strength, precision, flow, and structural perfection in every build.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PANDAVAS.map((char) => (
            <div 
              key={char.name} 
              className={`relative p-8 rounded-sm border border-stone-800/30 transition-all duration-500 hover:border-amber-600/50 group flex flex-col overflow-hidden h-full ${char.color} backdrop-blur-sm`}
            >
              <div className="absolute -top-8 -right-8 text-9xl opacity-[0.03] group-hover:opacity-[0.15] group-hover:scale-110 transition-all duration-700 pointer-events-none">
                {char.icon}
              </div>

              <div className="flex items-center justify-between mb-10">
                <span className="text-3xl filter drop-shadow-[0_0_8px_rgba(180,83,9,0.3)]">{char.icon}</span>
                <span className="text-amber-600/20 font-cinzel text-[10px] tracking-widest uppercase font-bold group-hover:text-amber-600/50 transition-colors">
                  {char.quality.split(' ')[0]}
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-amber-500 font-cinzel text-2xl mb-1 uppercase tracking-wider font-bold group-hover:worn-gold transition-all">{char.name}</h4>
                <p className="text-stone-500 text-[9px] mb-4 italic uppercase tracking-[0.3em] font-medium">{char.alias}</p>
                <div className="ornate-divider w-12 !my-4"></div>
                <p className="text-stone-200 text-xs font-bold uppercase tracking-widest mb-4">
                  {char.quality}
                </p>
              </div>

              <p className="text-stone-400 text-xs leading-relaxed mb-10 flex-grow">
                {char.description}
              </p>

              <div className="pt-6 border-t border-stone-800/60 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {char.skills.map(skill => (
                    <span key={skill} className="text-[9px] px-2 py-1 bg-stone-900/80 border border-stone-800 text-stone-500 uppercase tracking-tighter group-hover:text-stone-300 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-600/0 to-transparent group-hover:via-amber-600/40 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PandavaSection;