import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavClick(href);
  };

  return (
    <footer className="w-full bg-[#eef4ff]/70 py-16 border-t border-[#dbe9ff] shadow-[0_-1px_12px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-[#d5e4fa]/60">
          
          <div className="md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#006ef2] text-white flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                {PERSONAL_INFO.initials}
              </div>
              <span className="text-lg font-bold text-slate-900">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
              BCA undergraduate passionate about creating precision user experiences, accessible interfaces, and refined web software.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap md:justify-end gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-xs sm:text-sm font-medium text-slate-600 hover:text-[#0057c2] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom copyright & status row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs">
          <span className="font-mono text-slate-500 text-center sm:text-left">
            © 2024 {PERSONAL_INFO.name}. Built with precision &amp; modern web architecture.
          </span>
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0073de] animate-pulse"></span>
            <span className="font-mono text-slate-600 font-medium">
              Available for Freelance &amp; Roles
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
