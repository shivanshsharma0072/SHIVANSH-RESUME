import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Clock, Terminal, Film, Layers, Play } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenProject: (proj: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProject }) => {
  const featuredProject = PROJECTS_DATA[0]; // AI Video Project
  const [terminalState, setTerminalState] = useState({
    status: "STATUS: SUCCESS",
    lines: [
      "> AI model inference running on dataset assets...",
      "> Synthesized responsive output pipeline initialized."
    ],
    isRunning: false
  });

  const handleSimulateTerminal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (terminalState.isRunning) return;

    setTerminalState(prev => ({
      ...prev,
      status: "STATUS: RUNNING...",
      isRunning: true,
      lines: [
        "> Fetching media assets and video parameter matrix...",
        "> Applying temporal optical flow interpolation..."
      ]
    }));

    setTimeout(() => {
      setTerminalState({
        status: "STATUS: SUCCESS",
        isRunning: false,
        lines: [
          "> AI model inference running on dataset assets...",
          "> Synthesized responsive output pipeline initialized.",
          "> Frame rendering complete. 0 artifacts detected."
        ]
      });
    }, 1200);
  };

  return (
    <section id="projects" className="w-full bg-[#0a1929] text-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="flex flex-col gap-1.5 max-w-2xl mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#afc6ff] uppercase font-bold tracking-widest">
            MY PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects &amp; Practical Work
          </h2>
          <p className="text-base text-slate-300 mt-1">
            Projects and practical work that have helped me apply my technical knowledge and develop real-world skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Featured Project: AI Video Project */}
          <div className="md:col-span-7 bg-[#102238] rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-black/25 border border-white/5 hover:border-[#006ef2]/40 transition-all duration-300 group">
            <div className="flex flex-col gap-5">
              
              {/* Category Pills & Icon */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#006ef2]/20 text-[#afc6ff] font-mono text-xs font-medium border border-[#006ef2]/30">
                    AI
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[#d6e3ff] font-mono text-xs font-medium border border-white/5">
                    Creative Technology
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[#afc6ff] font-mono text-xs font-medium border border-white/5">
                    Problem Solving
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#afc6ff] shrink-0">
                  <Film className="w-5 h-5" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#afc6ff] transition-colors tracking-tight">
                {featuredProject.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Decorative & Interactive Terminal Simulator */}
              <div 
                onClick={handleSimulateTerminal}
                className="p-4 rounded-xl bg-[#06111f] font-mono text-xs text-[#afc6ff] flex flex-col gap-2 border border-slate-800 shadow-inner cursor-pointer hover:border-[#006ef2]/50 transition-colors group/terminal"
                title="Click to simulate execution telemetry"
              >
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] text-slate-400 ml-1">// practical_execution.py</span>
                  </div>
                  <span className={`text-[11px] font-semibold ${terminalState.isRunning ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}`}>
                    {terminalState.status}
                  </span>
                </div>

                <div className="space-y-1 pt-1">
                  {terminalState.lines.map((l, i) => (
                    <p key={i} className={i === 0 ? "text-white" : "text-[#afc6ff]"}>
                      {l}
                    </p>
                  ))}
                </div>

                <div className="pt-2 text-[10px] text-slate-500 flex items-center justify-between">
                  <span>[Click to re-run pipeline test]</span>
                  <span className="text-[#006ef2] font-semibold">Ready</span>
                </div>
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="pt-8 flex items-center justify-between gap-4 border-t border-slate-800/80 mt-6">
              <button
                onClick={() => onOpenProject(featuredProject)}
                className="inline-flex items-center gap-2 px-6 h-11 bg-[#0057c2] text-white rounded-lg text-sm font-semibold hover:bg-[#006ef2] transition-all shadow-md shadow-[#0057c2]/30 cursor-pointer"
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              <span className="font-mono text-xs text-slate-400 font-medium">
                {featuredProject.type}
              </span>
            </div>
          </div>

          {/* Expansion Card: Projects In Progress */}
          <div className="md:col-span-5 bg-[#102238]/60 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-lg border border-white/5">
            <div className="flex flex-col gap-5">
              
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#afc6ff] flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                More Projects In Progress
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Actively developing responsive web applications, modern interactive UI design systems, and frontend prototypes using HTML, CSS, and modern JavaScript.
              </p>

              {/* Progress List Items */}
              <ul className="flex flex-col gap-3 pt-2 text-sm text-slate-300">
                {PROJECTS_DATA.slice(1).map((proj) => {
                  const isLive = proj.id === 'portfolio-live';
                  return (
                    <li 
                      key={proj.id}
                      onClick={() => onOpenProject(proj)}
                      className="flex items-center justify-between p-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item"
                    >
                      <div className="flex items-center gap-2.5">
                        {isLive ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 text-[#afc6ff] shrink-0" />
                        )}
                        <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors">
                          {proj.title} {isLive && <span className="text-emerald-400 font-mono text-[11px]">(Live)</span>}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/item:text-slate-300" />
                    </li>
                  );
                })}
              </ul>

            </div>

            {/* Bottom Status Badge */}
            <div className="pt-8 border-t border-slate-800/80 mt-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 text-slate-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-[#afc6ff] animate-pulse"></span>
                <span>Updated Regularly</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
