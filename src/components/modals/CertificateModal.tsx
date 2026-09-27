import React from 'react';
import { X, Award, CheckCircle, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import { CertificateItem } from '../../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-modal-title"
      >
        {/* Certificate Decorative Top Header */}
        <div className="bg-gradient-to-r from-[#0057c2] to-[#006ef2] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-blue-100">
                Official Credential Record
              </span>
              <h2 id="cert-modal-title" className="text-xl font-bold text-white">
                {certificate.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="p-6 space-y-6">
          {/* Status Badge */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 border border-blue-100">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0057c2]" />
              <span className="text-xs font-semibold text-slate-800">
                {certificate.status === 'verified' ? 'Verified Academic Record' : 'Enrollment Confirmed'}
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-[#0057c2] px-2.5 py-1 rounded-full bg-white shadow-xs">
              Score: {certificate.score}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">Issuing Authority</span>
              <p className="text-sm font-semibold text-slate-800">{certificate.issuer}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">Examination Year</span>
              <p className="text-sm font-semibold text-slate-800">{certificate.year}</p>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">Description</span>
              <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{certificate.details}</p>
            </div>
          </div>

          {/* Subjects / Competencies */}
          <div>
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block mb-2">
              Academic Competencies & Subjects
            </span>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skills.map((s, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
