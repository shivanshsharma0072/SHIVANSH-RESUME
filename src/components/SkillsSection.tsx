import React, { useState } from 'react';
import { Verified, Code2, Sparkles, Layers, Cpu, CheckCircle } from 'lucide-react';
import { SKILLS_DATA, PROFESSIONAL_STRENGTHS } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <section id="skills" className="w-full bg-[#eef4ff]/60 py-20 sm:py-24 border-y border-[#dbe9ff]/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col gap-1.5 max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#0057c2] uppercase font-bold tracking-widest">
            MY SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1c2d] tracking-tight">
            Technical Skills
          </h2>
          <p className="text-base text-slate-600 mt-1">
            I enjoy learning and working with modern web technologies and programming languages to build creative and functional digital experiences.
          </p>
        </div>

        {/* Languages & Core Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          {SKILLS_DATA.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                className={`bg-white p-5 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs border transition-all duration-300 group cursor-pointer ${
                  isSelected 
                    ? 'border-[#0057c2] ring-2 ring-[#0057c2]/20 -translate-y-1 shadow-md bg-blue-50/20' 
                    : 'border-[#e5eeff] hover:-translate-y-1 hover:shadow-md hover:border-[#0057c2]/30'
                }`}
                title={`Click to view ${skill.name} details`}
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl ${skill.badgeBg} ${skill.badgeText} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-[28px]">{skill.icon}</span>
                </div>
                
                <span className="text-sm font-bold text-slate-900 leading-tight">
                  {skill.name}
                </span>
                <span className="font-mono text-[11px] text-slate-500 mt-1">
                  {skill.role}
                </span>
              </div>
            );
          })}
        </div>

        {/* Interactive Skill Detail Popout if a skill is clicked */}
        {selectedSkill && (
          <div className="mb-8 p-6 rounded-2xl bg-white border border-[#0057c2]/30 shadow-md animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${selectedSkill.badgeBg} ${selectedSkill.badgeText} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-[24px]">{selectedSkill.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{selectedSkill.name}</h3>
                  <span className="text-xs font-mono text-[#0057c2]">{selectedSkill.category} • {selectedSkill.role}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs font-mono text-slate-400 hover:text-slate-700 self-end sm:self-center"
              >
                [Close Detail]
              </button>
            </div>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {selectedSkill.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-slate-500 self-center">Key Concepts:</span>
              {selectedSkill.topics.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#f8f9ff] border border-slate-200 text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Core Soft Competencies & Domains (Soft-Pill Tags) */}
        <div className="p-6 rounded-2xl bg-white shadow-xs border border-[#e5eeff] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Verified className="w-6 h-6 text-[#0057c2]" />
            <span className="text-base font-bold text-slate-900">
              Domain &amp; Professional Strengths
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {PROFESSIONAL_STRENGTHS.map((strength, idx) => {
              const isPrimary = idx < 3;
              return (
                <span
                  key={idx}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs ${
                    isPrimary
                      ? 'bg-[#0057c2]/10 text-[#0057c2] font-semibold border border-[#0057c2]/20'
                      : 'bg-[#d5e0f4] text-[#586374] font-medium'
                  }`}
                >
                  {strength}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
