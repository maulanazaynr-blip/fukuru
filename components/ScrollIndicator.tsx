
import React, { useState, useEffect } from 'react';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 1.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-[150] flex flex-col items-center justify-center transition-all duration-1000 pointer-events-none ${
        isVisible ? 'opacity-100 bg-[#12100e]/60 backdrop-blur-sm' : 'opacity-0 scale-110'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Decorative Ring */}
        <div className="absolute inset-[-40px] border border-amber-500/10 rounded-full animate-pulse"></div>
        
        <div className="relative w-12 h-20 rounded-full border-2 border-amber-500/40 flex justify-center p-2 overflow-hidden bg-stone-900/40">
          {/* The "Flying" Mouse Scroll Dot */}
          <div className="w-1.5 h-5 bg-amber-500 rounded-full animate-mouse-fly shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="font-cinzel text-xs tracking-[0.6em] text-amber-500 uppercase font-bold mb-2">
            Explore the Realm
          </p>
          <p className="text-stone-500 text-[10px] uppercase tracking-widest italic opacity-60">
            Scroll to begin your journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
