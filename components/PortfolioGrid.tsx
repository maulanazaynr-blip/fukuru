
import React from 'react';
import { PROJECTS } from '../constants';

const PortfolioGrid: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#1c1c1c]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h3 className="text-amber-600 font-cinzel tracking-widest text-sm mb-2">THE CITADEL</h3>
          <h2 className="text-4xl md:text-6xl font-cinzel font-bold mb-6 worn-gold">VALYRIAN ARTIFACTS</h2>
          <div className="ornate-divider w-32 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-stone-900/90 text-amber-500 text-[10px] px-3 py-1 rounded-sm border border-stone-800/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-cinzel font-bold group-hover:worn-gold transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;