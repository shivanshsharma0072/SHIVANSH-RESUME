import React, { useState, useEffect } from 'react';
import { Download, User, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)] border-b border-[#e5eeff]' 
        : 'bg-[#f8f9ff]/80 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
    }`}>
      <div className="h-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Brand Lockup */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-[#006ef2] text-white flex items-center justify-center font-bold text-base shadow-[0_4px_14px_rgba(22,119,255,0.25)] group-hover:bg-[#0057c2] transition-colors">
            <span className="font-mono">{PERSONAL_INFO.initials}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 leading-tight text-lg group-hover:text-[#0057c2] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-xs text-[#0057c2] uppercase tracking-wide font-medium">
              {PERSONAL_INFO.title}
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#eef4ff]/80 p-1.5 rounded-xl shadow-[0_2px_12px_rgba(6,17,31,0.03)] border border-[#d5e4fa]/40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#0057c2] font-bold bg-[#e5eeff] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-[#e5eeff]/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 h-11 bg-[#0057c2] text-white rounded-lg text-sm font-semibold hover:bg-[#006ef2] shadow-[0_4px_14px_rgba(22,119,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={onOpenResume}
            className="w-10 h-10 rounded-full bg-[#0057c2] text-white flex items-center justify-center shrink-0 hover:bg-[#006ef2] transition-colors shadow-xs"
            title="View Profile Resume"
            aria-label="View Profile Resume"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-4 shadow-xl space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0057c2] hover:bg-blue-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0057c2] text-white rounded-lg text-sm font-semibold hover:bg-[#006ef2] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
