import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA, CERTIFICATES_DATA, PROFESSIONAL_STRENGTHS } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
SHIVANSH SHARMA
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.bioParagraphs.join('\n\n')}

EDUCATION
${EDUCATION_DATA.map(e => `• ${e.degree} - ${e.institution} (${e.period}) [${e.score || ''}]\n  ${e.description}`).join('\n')}

TECHNICAL SKILLS
• Programming & Languages: ${SKILLS_DATA.map(s => s.name).join(', ')}
• Strengths: ${PROFESSIONAL_STRENGTHS.join(', ')}

PROJECTS
${PROJECTS_DATA.map(p => `• ${p.title} (${p.type})\n  ${p.description}\n  Tech: ${p.technologies?.join(', ')}`).join('\n\n')}

CERTIFICATIONS
${CERTIFICATES_DATA.map(c => `• ${c.title} - ${c.issuer} (${c.score})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    onShowToast("Resume details copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl my-8 overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Toolbar (hidden in print) */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200 no-print">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#006ef2] text-white flex items-center justify-center font-bold text-xs">
              SS
            </span>
            <span className="font-semibold text-slate-800 text-sm">Resume Preview • Shivansh Sharma</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors shadow-sm"
              title="Copy Resume Plaintext"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#0057c2] hover:bg-[#006ef2] rounded-lg transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Document Content */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 id="resume-title" className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-[#0057c2] mt-1 tracking-wide font-mono">
                  {PERSONAL_INFO.roleHeadline} • {PERSONAL_INFO.subRole}
                </p>
              </div>
              <div className="flex flex-col text-xs text-slate-600 space-y-1">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0057c2]" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0057c2]" />
                  <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0057c2]" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#0057c2]" />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    linkedin.com/in/{PERSONAL_INFO.linkedinUsername}
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-bold text-[#0057c2] tracking-wider uppercase font-mono mb-2">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Passionate BCA student currently in 5th semester with a solid foundation in web designing, front-end development, and UI/UX design. Experienced with HTML, CSS, modern JavaScript, Python, C, C++, and C#. Known for active problem-solving skills demonstrated through applied projects like an AI video pipeline. Eager to contribute technical skills and learn in an engineering or design internship.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-[#0057c2] tracking-wider uppercase font-mono mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="border-l-2 border-[#0057c2]/30 pl-4 py-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900">{edu.degree}</h3>
                    <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-600 mt-0.5 font-medium">
                    <span>{edu.institution}</span>
                    {edu.score && (
                      <>
                        <span>•</span>
                        <span className="text-[#0057c2] font-semibold">{edu.score}</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Competencies */}
          <div>
            <h2 className="text-xs font-bold text-[#0057c2] tracking-wider uppercase font-mono mb-3">
              Technical & Professional Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Languages & Web Technologies</span>
                <p className="text-slate-600 leading-relaxed">
                  HTML5, CSS3, JavaScript (ES6+), Python, C, C++, C#, Tailwind CSS, Responsive Design, DOM Manipulation.
                </p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Core Competencies & Design</span>
                <p className="text-slate-600 leading-relaxed">
                  Web Designing, Front-End Development, UI/UX Layouts, Problem Solving, Creative Thinking, Data Structures, OOP Logic.
                </p>
              </div>
            </div>
          </div>

          {/* Practical Projects */}
          <div>
            <h2 className="text-xs font-bold text-[#0057c2] tracking-wider uppercase font-mono mb-3">
              Projects & Practical Experience
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      {proj.title}
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-[#0057c2] font-normal">
                        {proj.type}
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{proj.status}</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed">{proj.description}</p>
                  {proj.highlights && (
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 list-disc list-inside">
                      {proj.highlights.slice(0, 2).map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                  {proj.technologies && (
                    <div className="mt-2 pt-2 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-semibold text-slate-500">Tech:</span>
                      {proj.technologies.map((t, i) => (
                        <span key={i} className="text-[11px] font-mono text-slate-700">
                          {t}{i < proj.technologies!.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Badges */}
          <div>
            <h2 className="text-xs font-bold text-[#0057c2] tracking-wider uppercase font-mono mb-3">
              Certifications & Credentials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CERTIFICATES_DATA.map((cert) => (
                <div key={cert.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900">{cert.title}</h4>
                    <span className="text-slate-500 text-[11px]">{cert.issuer} • Score: {cert.score}</span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">
                    {cert.status === 'verified' ? 'Verified' : 'In Progress'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 no-print">
          <span>Available for immediate internship & junior front-end positions</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-medium transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};
