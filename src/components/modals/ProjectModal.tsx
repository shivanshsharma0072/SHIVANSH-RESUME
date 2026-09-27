import React, { useState } from 'react';
import { X, Play, RefreshCw, CheckCircle, Terminal, Code2, Layers, Cpu } from 'lucide-react';
import { ProjectItem } from '../../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'terminal' | 'stack'>('overview');
  const [runningDemo, setRunningDemo] = useState(false);
  const [demoLog, setDemoLog] = useState<string[]>([
    "// practical_execution.py initialized",
    "> Target: dynamic synthesis pipeline",
    "> STATUS: SUCCESS - Ready for execution"
  ]);

  if (!project) return null;

  const handleRunSimulation = () => {
    setRunningDemo(true);
    setDemoLog(prev => [...prev, "> Starting new execution test..."]);
    
    setTimeout(() => {
      setDemoLog(prev => [
        ...prev,
        "> Loading dataset tensors & model weights [100%]",
        "> Processing 60fps frame generation pipeline...",
        "> Color grading & temporal consistency checks passed.",
        "> Synthesized 1080p preview ready. Pipeline latency: 1.42s.",
        "> [OK] All computational benchmarks verified."
      ]);
      setRunningDemo(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl bg-[#0a1929] text-white rounded-2xl shadow-2xl overflow-hidden border border-[#006ef2]/30 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="proj-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#06111f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#006ef2]/20 text-[#afc6ff] flex items-center justify-center shrink-0 border border-[#006ef2]/40">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#afc6ff] uppercase">{project.type}</span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-mono text-emerald-400">{project.status || "Completed"}</span>
              </div>
              <h2 id="proj-modal-title" className="text-xl font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-800 bg-[#06111f]/60 text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#006ef2] text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview & Scope
          </button>
          <button
            onClick={() => setActiveTab('terminal')}
            className={`pb-3 px-2 font-medium border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'terminal'
                ? 'border-[#006ef2] text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            Pipeline Simulator
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`pb-3 px-2 font-medium border-b-2 transition-colors ${
              activeTab === 'stack'
                ? 'border-[#006ef2] text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Tech Architecture
          </button>
        </div>

        {/* Body content based on tab */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4 text-sm">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
              
              {project.highlights && (
                <div className="bg-[#102238] p-4 rounded-xl border border-slate-800 space-y-2">
                  <h4 className="font-semibold text-white text-xs uppercase font-mono tracking-wider text-[#afc6ff]">
                    Key Highlights & Problem Solving
                  </h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-4 h-4 text-[#006ef2] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#006ef2]/10 border border-[#006ef2]/20 text-[#afc6ff] text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'terminal' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Interactive Runtime Console</span>
                <button
                  onClick={handleRunSimulation}
                  disabled={runningDemo}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0057c2] hover:bg-[#006ef2] text-white rounded-md text-xs font-medium transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${runningDemo ? 'animate-spin' : ''}`} />
                  <span>{runningDemo ? 'Executing...' : 'Run Pipeline'}</span>
                </button>
              </div>

              <div className="bg-[#040b14] p-4 rounded-xl font-mono text-xs text-[#afc6ff] space-y-1 border border-slate-800 h-56 overflow-y-auto">
                {demoLog.map((log, i) => (
                  <p key={i} className={log.includes('SUCCESS') || log.includes('[OK]') ? 'text-emerald-400' : ''}>
                    {log}
                  </p>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                Simulates real-world execution telemetry for computational media synthesis & asset pipeline verification.
              </p>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#afc6ff] tracking-wider">
                Technology Stack & Tooling
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {project.technologies?.map((tech, i) => (
                  <div key={i} className="p-3 bg-[#102238] rounded-xl border border-slate-800 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#006ef2]" />
                    <span className="text-xs font-medium text-slate-200">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#06111f] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Practical Project Showcase</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
