import React from 'react';
import { Award, Verified, PlusCircle, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATES_DATA } from '../data/portfolioData';
import { CertificateItem } from '../types';

interface EducationSectionProps {
  onOpenCertificate: (cert: CertificateItem) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section id="education" className="w-full bg-[#f8f9ff] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Header */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-[#0057c2] uppercase font-bold tracking-widest">
                ACADEMICS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1c2d] tracking-tight">
                My Education
              </h2>
            </div>

            {/* Vertical Timeline Nodes */}
            <div className="flex flex-col gap-6 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#d5e0f4]">
              {EDUCATION_DATA.map((edu, idx) => {
                const isBca = edu.id === 'bca';
                return (
                  <div 
                    key={edu.id}
                    className="relative flex flex-col gap-1.5 p-6 rounded-2xl bg-white shadow-xs border border-[#e5eeff] hover:shadow-md hover:border-[#0057c2]/30 transition-all duration-200"
                  >
                    {/* Node Dot */}
                    <span 
                      className={`absolute -left-[30px] top-7 w-3.5 h-3.5 rounded-full ring-4 ring-white ${
                        isBca ? 'bg-[#0057c2]' : 'bg-[#545f70]'
                      }`} 
                    />

                    <div className="flex items-center justify-between gap-2">
                      <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
                        isBca ? 'text-[#0057c2]' : 'text-slate-500'
                      }`}>
                        {edu.period}
                      </span>
                      
                      <span className={`px-2.5 py-0.5 rounded-full font-mono text-xs font-semibold ${
                        isBca 
                          ? 'bg-[#0057c2]/10 text-[#0057c2]' 
                          : 'bg-[#d5e0f4] text-slate-800'
                      }`}>
                        {isBca ? 'Active' : edu.score}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {edu.degree}
                    </h3>

                    {edu.score && isBca && (
                      <p className="text-sm text-slate-700 font-semibold">
                        {edu.score}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {edu.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Certificates */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            
            {/* Header */}
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-[#0057c2] uppercase font-bold tracking-widest">
                CREDENTIALS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1c2d] tracking-tight">
                My Certificates
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {CERTIFICATES_DATA.map((cert) => {
                const isVerified = cert.status === 'verified';
                return (
                  <div
                    key={cert.id}
                    onClick={() => onOpenCertificate(cert)}
                    className={`p-6 rounded-2xl flex items-center justify-between transition-all duration-200 cursor-pointer group ${
                      isVerified
                        ? 'bg-white shadow-xs border border-[#e5eeff] hover:shadow-md hover:border-[#0057c2]/30'
                        : 'bg-[#eef4ff] border border-[#d5e4fa]/60 hover:bg-white hover:shadow-xs'
                    }`}
                    title={`Click to inspect ${cert.title}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${
                        isVerified 
                          ? 'bg-[#006ef2]/10 text-[#0057c2]' 
                          : 'bg-[#d5e4fa] text-slate-600'
                      }`}>
                        {isVerified ? (
                          <Award className="w-6 h-6" />
                        ) : (
                          <PlusCircle className="w-6 h-6" />
                        )}
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0057c2] transition-colors">
                          {cert.title}
                        </h3>
                        <span className="text-xs sm:text-sm text-slate-600 mt-0.5">
                          {cert.type} • {isVerified ? `Score: ${cert.score}` : 'Web & Programming in progress'}
                        </span>
                      </div>
                    </div>

                    {isVerified ? (
                      <Verified className="w-5 h-5 text-[#0057c2] shrink-0" />
                    ) : (
                      <span className="font-mono text-xs text-[#0057c2] font-semibold bg-white px-3 py-1 rounded-full shadow-xs">
                        Enrolling
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
