
import React, { useEffect } from 'react';
import { PROJECTS, EXPERIENCES } from '../constants';
import Embers from './Embers';

interface ArtifactsPageProps {
  onBack: () => void;
}

const ArtifactsPage: React.FC<ArtifactsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-stone-100 flex flex-col animate-in fade-in duration-500 relative">
      <div className="fire-glow"></div>
      <Embers />
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:50px_50px]"></div>
      </div>

      <header className="px-6 py-8 border-b border-red-900/20 flex items-center justify-between bg-black/80 backdrop-blur-xl sticky top-0 z-50">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-amber-500 font-cinzel text-[10px] tracking-[0.3em] hover:text-amber-400 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          BACK TO REALM
        </button>
        
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-cinzel font-bold gold-gradient tracking-[0.2em] uppercase">The Chamber of Artifacts</h1>
        </div>

        <div className="w-16 hidden md:block"></div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-20 relative z-10">
        {/* Work Experience Section */}
        <div className="mb-32">
          <div className="mb-16 text-center lg:text-left">
            <h3 className="text-amber-500 font-cinzel tracking-[0.4em] text-xs mb-4 uppercase font-bold">Chronicles of Valor</h3>
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold uppercase">WORK EXPERIENCE</h2>
            <div className="w-24 h-1 bg-amber-600 mt-6 hidden lg:block"></div>
          </div>
          
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-16 border-l border-stone-800 hover:border-amber-500 transition-colors group py-6">
                <div className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-stone-900 border border-amber-500 group-hover:scale-150 group-hover:bg-amber-500 transition-all"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-cinzel text-2xl text-stone-100 group-hover:text-amber-500 transition-colors font-bold uppercase">{exp.role}</h4>
                    <p className="text-amber-600 font-bold tracking-widest uppercase text-[10px] mt-1">{exp.company}</p>
                  </div>
                  <span className="text-stone-500 font-cinzel text-xs tracking-widest bg-stone-900/50 px-4 py-2 border border-stone-800 rounded-full">{exp.period}</span>
                </div>
                
                <div className="dark-parchment p-6 rounded-sm shadow-lg">
                  <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-4xl italic">
                    "{exp.description}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects / Sacred Artifacts Section */}
        <div>
          <div className="mb-16 text-center">
            <h3 className="text-amber-500 font-cinzel tracking-[0.4em] text-xs mb-4 uppercase font-bold">Tangible Creations</h3>
            <h2 className="text-4xl md:text-6xl font-cinzel font-bold uppercase">SACRED ARTIFACTS</h2>
            <p className="text-stone-400 font-playfair text-lg italic max-w-2xl mx-auto mt-4 drop-cap">
              "Every artifact is a manifestation of discipline, designed to withstand the tides of the digital age."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group flex flex-col">
                <div className="relative overflow-hidden aspect-video mb-8 border border-stone-800 group-hover:border-amber-500/50 transition-colors">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-stone-900/90 text-amber-500 text-[9px] px-3 py-1.5 rounded-sm border border-amber-900/50 uppercase font-bold tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                   <h3 className="text-3xl font-cinzel font-bold text-stone-100 group-hover:gold-gradient transition-all uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-stone-600 text-[10px] font-cinzel tracking-widest uppercase">{project.category}</span>
                </div>

                <p className="text-stone-400 text-sm leading-relaxed mb-6 font-medium italic">
                  "{project.description}"
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="h-px flex-grow bg-stone-800 group-hover:bg-amber-900/50 transition-colors"></div>
                  <button className="text-amber-500 font-cinzel text-[10px] tracking-[0.2em] hover:text-amber-400 uppercase font-bold">
                    Examine Artifact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-20 border-t border-red-900/20 bg-black/40 text-center">
        <p className="font-cinzel text-[10px] text-stone-600 tracking-[0.5em] uppercase mb-4">Artifact Custodian Standards © 2026</p>
        <div className="flex justify-center gap-8">
           <div className="w-16 h-px bg-stone-800"></div>
           <div className="w-2 h-2 rotate-45 border border-amber-500"></div>
           <div className="w-16 h-px bg-stone-800"></div>
        </div>
      </footer>

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-stone-900/20 z-[60]"></div>
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#1c1c1c] to-transparent pointer-events-none z-40"></div>
    </div>
  );
};

export default ArtifactsPage;