import React, { useState } from 'react';
import { FileText, Mail, Sparkles, Linkedin, Github, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onShowToast: (msg: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onShowToast }) => {
  const [imageError, setImageError] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full bg-[#06111f] text-slate-100 overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      {/* Ambient Blue Energy Flares */}
      <div 
        aria-hidden="true" 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0057c2]/20 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] rounded-full bg-[#0073de]/15 blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero Left Column: Narrative & Action */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#0057c2]/20 border border-[#006ef2]/30 text-[#afc6ff]">
              <span className="w-2 h-2 rounded-full bg-[#006ef2] animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#d9e2ff] font-semibold">
                HELLO, I'M
              </span>
            </div>

            {/* Display Hero Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Shivansh{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#afc6ff] via-[#006ef2] to-[#d6e3ff]">
                Sharma
              </span>
            </h1>

            {/* Sub-Headline Badges */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-lg bg-[#d5e4fa]/15 text-[#afc6ff] font-mono text-xs font-medium border border-white/5">
                {PERSONAL_INFO.roleHeadline}
              </span>
              <span className="px-3 py-1 rounded-lg bg-[#006ef2]/20 text-[#d9e2ff] font-mono text-xs font-semibold border border-[#006ef2]/30">
                {PERSONAL_INFO.subRole}
              </span>
            </div>

            {/* Narrative Lead */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 h-12 bg-[#006ef2] text-white rounded-lg text-sm font-semibold hover:bg-[#0057c2] transition-all duration-300 shadow-xl shadow-[#006ef2]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FileText className="w-5 h-5" />
                <span>View My Resume</span>
              </button>

              <a
                href="#contact"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2 px-6 h-12 bg-white/10 text-slate-200 hover:text-white hover:bg-white/15 rounded-lg text-sm font-semibold border border-white/10 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Matrix & Fast Connect */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider font-semibold">
                CONNECT:
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#006ef2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/5 hover:border-transparent"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                {/* Email Copy / Mailto */}
                <button
                  onClick={handleCopyEmail}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#006ef2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/5 hover:border-transparent cursor-pointer"
                  title="Copy Email Address (shivusharma7272@gmail.com)"
                  aria-label="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5" />}
                </button>

                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#006ef2] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/5 hover:border-transparent"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Hero Right Column: High Craft Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Backlight Ambient Glow */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#0057c2] via-[#0073de] to-[#006ef2] opacity-30 blur-2xl pointer-events-none" 
            />

            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl p-2 bg-gradient-to-b from-[#0057c2]/30 to-white/5 shadow-2xl backdrop-blur-md border border-white/10">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#06111f]/90 group">
                {!imageError ? (
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={`${PERSONAL_INFO.name} - Aspiring Web Designer and BCA Student`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#06111f] to-[#102238] p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-[#006ef2]/20 border border-[#006ef2]/40 flex items-center justify-center text-white text-3xl font-bold font-mono mb-4">
                      {PERSONAL_INFO.initials}
                    </div>
                    <span className="text-lg font-bold text-white">{PERSONAL_INFO.name}</span>
                    <span className="text-xs font-mono text-[#afc6ff] mt-1">{PERSONAL_INFO.roleHeadline}</span>
                  </div>
                )}

                {/* Subtle Gradient Scrim at bottom */}
                <div 
                  aria-hidden="true" 
                  className="absolute inset-0 bg-gradient-to-t from-[#06111f] via-transparent to-transparent opacity-60 pointer-events-none" 
                />

                {/* Floating Philosophy Accent Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#06111f]/90 backdrop-blur-md px-4 py-3 rounded-xl flex items-center justify-between shadow-lg border border-white/10">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#afc6ff] shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                        Philosophy
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {PERSONAL_INFO.philosophy}
                      </span>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006ef2] animate-ping shrink-0" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
