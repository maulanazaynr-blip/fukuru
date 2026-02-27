
import React from 'react';

interface NavbarProps {
  onContactClick: () => void;
  onPhilosophyClick: () => void;
  onAbilitiesClick: () => void;
  onArtifactsClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick, onPhilosophyClick, onAbilitiesClick, onArtifactsClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1c1c1c]/90 backdrop-blur-xl border-b border-red-900/40 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.location.reload()}
            className="w-10 h-10 border-2 border-amber-600 rounded-full flex items-center justify-center text-amber-600 font-bold text-xl font-cinzel"
          >
            F
          </button>
          <span className="font-cinzel text-xl font-bold tracking-widest hidden sm:block worn-gold cursor-default">
            THE IRON PORTFOLIO
          </span>
        </div>
        
        <div className="flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <button 
            onClick={onPhilosophyClick}
            className="hover:worn-gold transition-all hidden md:block"
          >
            Philosophy
          </button>
          <button 
            onClick={onAbilitiesClick}
            className="hover:worn-gold transition-all hidden md:block"
          >
            Abilities
          </button>
          <button 
            onClick={onArtifactsClick}
            className="hover:worn-gold transition-all hidden md:block"
          >
            Artifacts
          </button>
          <button 
            onClick={onContactClick}
            className="px-4 py-2 border border-red-900 rounded hover:bg-red-900/20 transition-all text-amber-500 font-bold"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
