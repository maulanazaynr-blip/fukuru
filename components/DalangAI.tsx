
import React, { useState, useRef, useEffect } from 'react';
import { getDalangResponse } from '../services/geminiService';

const DalangAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'dalang', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsLoading(true);

    const dalangReply = await getDalangResponse(userMsg);
    setMessages(prev => [...prev, {role: 'dalang', text: dalangReply || ''}]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-black border border-red-900/50 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-red-950/30 p-4 border-b border-red-900/30 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📜</span>
              <div>
                <h4 className="font-cinzel text-amber-500 font-bold leading-none uppercase">Grand Maester</h4>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-1">Keeper of the Citadel</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-stone-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth">
            {messages.length === 0 && (
              <div className="text-center py-10 px-4">
                <p className="text-stone-500 italic text-sm">
                  "Greetings, Lord Traveler. How may the Citadel assist your quest today?"
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${
                  m.role === 'user' 
                  ? 'bg-red-900 text-amber-100' 
                  : 'bg-stone-900 border border-red-900/20 text-stone-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-900 p-3 rounded-lg text-stone-500 animate-pulse text-xs italic">
                  The Maester is consulting the scrolls...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-red-900/30">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Consult the Maester..."
                className="flex-grow bg-black border border-red-900/30 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-amber-600"
              />
              <button 
                onClick={handleSend}
                className="bg-red-900 text-amber-500 p-2 rounded-lg hover:bg-red-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center shadow-xl shadow-black/40 hover:scale-110 transition-transform active:scale-95 group"
        >
          <span className="text-3xl group-hover:animate-bounce">📜</span>
          <div className="absolute -top-12 right-0 bg-black border border-red-900/30 px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">Consult the Maester</span>
          </div>
        </button>
      )}
    </div>
  );
};

export default DalangAI;
