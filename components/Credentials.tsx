
import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../constants';

const Credentials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#1c1c1c] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h3 className="font-cinzel text-3xl font-bold worn-gold uppercase">Ancient Wisdom</h3>
              <div className="flex-grow ornate-divider !my-0"></div>
              <span className="text-amber-500 font-cinzel text-sm uppercase">Education</span>
            </div>
            
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="group relative pl-8 border-l border-stone-800 hover:border-amber-500 transition-colors">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-stone-900 border border-stone-600 rounded-full group-hover:bg-amber-500 transition-colors"></div>
                  <h4 className="font-cinzel text-xl text-stone-200 mb-1 group-hover:text-amber-500 transition-colors">{edu.degree}</h4>
                  <p className="text-stone-500 font-medium">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <h3 className="font-cinzel text-3xl font-bold worn-gold uppercase">Accolades of Valor</h3>
              <div className="flex-grow ornate-divider !my-0"></div>
              <span className="text-amber-500 font-cinzel text-sm uppercase">Certifications</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-5 bg-stone-900/40 border border-stone-800 rounded-lg flex flex-col justify-center hover:bg-stone-800/20 hover:border-amber-900/50 transition-all">
                  <span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-2">Validated</span>
                  <h4 className="text-stone-200 font-bold text-sm leading-tight mb-1">{cert.name}</h4>
                  {cert.provider && <p className="text-stone-600 text-[10px] uppercase tracking-wider">{cert.provider}</p>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Credentials;