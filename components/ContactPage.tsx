
import React from 'react';
import { NAME_PREFIX, TITLES } from '../constants';
import Embers from './Embers';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-[#1c1c1c] flex flex-col items-center justify-center p-6 overflow-y-auto animate-in fade-in duration-500">
      <div className="fire-glow"></div>
      <Embers />
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#b45309_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="relative max-w-5xl w-full bg-black/50 border-2 iron-border p-8 md:p-12 rounded-sm shadow-2xl backdrop-blur-sm my-8">
        {/* Close Button */}
        <button 
          onClick={onBack}
          className="absolute top-6 right-6 text-stone-500 hover:text-amber-500 transition-colors flex items-center gap-2 group"
          aria-label="Close"
        >
          <span className="text-xs tracking-[0.3em] font-cinzel opacity-0 group-hover:opacity-100 transition-opacity">BACK TO HOME</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 border border-amber-900/50 text-amber-500 text-[10px] tracking-[0.4em] uppercase mb-4">
            Visit the Sanctuary
          </div>
          <h1 className="font-cinzel text-3xl md:text-5xl font-bold worn-gold mb-2 uppercase">CONTACT THE KNIGHT</h1>
          <div className="ornate-divider w-32 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Brief Biodata */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="font-cinzel text-xl text-amber-500 border-b border-amber-900/30 pb-2 inline-block uppercase worn-gold">Brief Biography</h3>
            <div className="space-y-4">
              <p className="font-bold text-stone-200 text-lg">{NAME_PREFIX}</p>
              <p className="text-stone-400 text-sm leading-relaxed italic">
                "{TITLES}"
              </p>
              <p className="text-stone-500 text-sm leading-relaxed">
                A multidisciplinary practitioner who combines the acumen of Industrial Engineering, 
                Legal integrity, and the strength of Cybersecurity to build a resilient and ethical digital ecosystem.
              </p>
            </div>
            
            {/* Additional Info Box */}
            <div className="p-4 border border-red-900/20 bg-black/30 rounded-sm">
              <p className="text-xs text-stone-500 italic">
                "A Kshatriya is not just about strength, but about how he upholds trust and integrity in every step of his journey."
              </p>
            </div>
          </div>

          {/* Contact Details Grid */}
          <div className="space-y-6">
            <h3 className="font-cinzel text-xl text-amber-500 border-b border-red-900/30 pb-2 inline-block w-full md:w-auto text-center md:text-left uppercase worn-gold">Communication Channels</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <a href="mailto:mframadhan0908@gmail.com" className="flex items-center gap-3 group p-3 bg-black/50 border border-red-900/20 hover:border-amber-600/50 transition-all">
                <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest">Email</p>
                  <p className="text-stone-300 text-xs truncate group-hover:text-amber-500 transition-colors">mframadhan0908@gmail.com</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/muhammad-fakhri-ramadhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-3 bg-black/50 border border-red-900/20 hover:border-amber-600/50 transition-all">
                <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-stone-300 text-xs truncate group-hover:text-amber-500 transition-colors">fakhri-ramadhan</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/mframadhan_r.12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-3 bg-black/50 border border-red-900/20 hover:border-amber-600/50 transition-all">
                <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest">Instagram</p>
                  <p className="text-stone-300 text-xs truncate group-hover:text-amber-500 transition-colors">@mframadhan_r.12</p>
                </div>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com/Muhammad.Fakhri.Ramadhan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group p-3 bg-black/50 border border-red-900/20 hover:border-amber-600/50 transition-all">
                <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 text-amber-500">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest">Facebook</p>
                  <p className="text-stone-300 text-xs truncate group-hover:text-amber-500 transition-colors">Muhammad Fakhri Ramadhan</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+6281234567890" className="flex items-center gap-3 group p-3 bg-black/50 border border-red-900/20 hover:border-amber-600/50 transition-all">
                <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest">Phone / WhatsApp</p>
                  <p className="text-stone-300 text-xs truncate group-hover:text-amber-500 transition-colors">+62 812-3456-7890</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 bg-black/50 border border-red-900/20">
                <div className="w-8 h-8 flex items-center justify-center bg-red-900/20 text-amber-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[9px] text-stone-500 uppercase tracking-widest">Location</p>
                  <p className="text-stone-300 text-xs truncate">Bekasi, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;