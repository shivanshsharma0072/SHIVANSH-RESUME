import React from 'react';
import { Send, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onContactClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onContactClick }) => {
  return (
    <section className="w-full bg-gradient-to-r from-[#0057c2] via-[#006ef2] to-[#0073de] py-16 text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="flex flex-col gap-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 self-center md:self-start px-3.5 py-1 rounded-full bg-white/20 text-white font-mono text-xs font-semibold backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span>AVAILABLE IMMEDIATELY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Open To Opportunities
            </h2>

            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Currently looking for an internship or entry-level opportunity where I can apply my technical skills, gain real-world experience, and grow as a web designer and developer.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2.5 px-8 h-12 bg-white text-[#0057c2] rounded-xl text-sm font-bold hover:bg-[#f8f9ff] hover:scale-105 active:scale-100 transition-all shadow-xl shadow-black/15 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
