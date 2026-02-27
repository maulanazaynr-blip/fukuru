
import React from 'react';

const Embers: React.FC = () => {
  const emberCount = 60;
  const colors = ['#b45309', '#92400e', '#78350f', '#ef4444', '#f59e0b'];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(emberCount)].map((_, i) => {
        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div 
            key={i}
            className="ember"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-20px`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              boxShadow: Math.random() > 0.5 ? `0 0 10px ${color}` : 'none',
              '--duration': `${Math.random() * 8 + 6}s`,
              animationDelay: `${Math.random() * 15}s`
            } as any}
          />
        );
      })}
    </div>
  );
};

export default Embers;
