import React from 'react';
import { GraduationCap, Terminal, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onSelectTag?: (tag: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onSelectTag }) => {
  return (
    <section id="about" className="w-full bg-[#f8f9ff] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-1.5 mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#0057c2] uppercase font-bold tracking-widest">
            ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1c2d] tracking-tight">
            Who I Am
          </h2>
          <div className="w-16 h-1 rounded-full bg-[#0057c2] mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Biography Content Block */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="p-8 sm:p-10 rounded-2xl bg-white shadow-sm border border-[#e5eeff] flex flex-col gap-5">
              <p className="text-base text-slate-700 leading-relaxed">
                I’m <strong className="text-slate-950 font-bold">{PERSONAL_INFO.name}</strong>, a 5th-semester BCA student with a strong interest in Web Designing, Front-End Development, and UI/UX. I have experience with HTML, CSS, JavaScript, Python, C, C++, and C#, and I enjoy using technology to turn ideas into creative and functional digital experiences.
              </p>
              
              <p className="text-base text-slate-700 leading-relaxed">
                I have also worked on an AI video project, which helped me explore practical applications of technology and strengthen my problem-solving skills. I’m a quick learner who enjoys exploring new technologies and developing my skills through hands-on projects.
              </p>
              
              <p className="text-base text-slate-700 leading-relaxed">
                Currently, I’m looking for an internship or entry-level opportunity where I can apply my technical skills, gain real-world experience, and grow as a web designer and developer.
              </p>

              {/* Tag Pills */}
              <div className="pt-3 flex flex-wrap gap-2.5">
                {PERSONAL_INFO.hashtags.map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSelectTag?.(tag)}
                    className="px-4 py-1.5 rounded-full bg-[#eef4ff] text-[#0057c2] hover:bg-[#d9e2ff] font-mono text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Feature Cards Bento */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            
            {/* Card 1: Education */}
            <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md border border-[#e5eeff] hover:border-[#0057c2]/30 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#0057c2]/10 text-[#0057c2] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Education
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  BCA — {PERSONAL_INFO.semester}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {PERSONAL_INFO.college} / Currently Pursuing
                </p>
              </div>
            </div>

            {/* Card 2: Core Capabilities */}
            <div className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md border border-[#e5eeff] hover:border-[#0073de]/30 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#0073de]/10 text-[#0073de] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                  Core Capabilities
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Web Designing &amp; Programming
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {PERSONAL_INFO.bcaFocus}
                </p>
              </div>
            </div>

            {/* Card 3: Career Goal */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#eef4ff] to-[#dbe9ff] shadow-sm hover:shadow-md border border-[#0057c2]/20 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#0057c2] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0057c2]/20 group-hover:scale-105 transition-transform">
                <Rocket className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#0057c2] uppercase tracking-wider font-bold">
                  Current Goal
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  Internship / Entry-Level
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-1">
                  Ready to contribute to live engineering &amp; design sprints
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
