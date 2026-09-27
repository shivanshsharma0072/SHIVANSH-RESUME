import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, ArrowUp, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`${label} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending message & prepare mailto link
    setSubmitted(true);
    onShowToast("Message prepared! Opening direct transmission window...");

    // Also trigger mailto so user can send direct from their local client
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="w-full bg-[#06111f] text-slate-100 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Contact Information Block */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs text-[#afc6ff] uppercase font-bold tracking-widest">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let’s Connect
              </h2>
              <p className="text-base text-slate-300 mt-1 leading-relaxed">
                I am eager to hear about internship opportunities, collaborate on innovative web projects, or discuss design engineering.
              </p>
            </div>

            <div className="flex flex-col gap-3.5">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="flex items-center gap-4 min-w-0 flex-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#006ef2]/20 text-[#afc6ff] flex items-center justify-center shrink-0 group-hover:bg-[#006ef2] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Email
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium truncate group-hover:text-[#afc6ff] transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={(e) => handleCopy(PERSONAL_INFO.email, "Email", e)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-2"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedField === 'Email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all flex items-center justify-between group">
                <a 
                  href={`tel:${PERSONAL_INFO.phoneRaw}`} 
                  className="flex items-center gap-4 min-w-0 flex-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#006ef2]/20 text-[#afc6ff] flex items-center justify-center shrink-0 group-hover:bg-[#006ef2] group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      Phone
                    </span>
                    <span className="text-sm sm:text-base text-white font-medium group-hover:text-[#afc6ff] transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </a>
                <button
                  onClick={(e) => handleCopy(PERSONAL_INFO.phone, "Phone", e)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-2"
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'Phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#006ef2]/20 text-[#afc6ff] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    Location
                  </span>
                  <span className="text-sm sm:text-base text-white font-medium">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn Profile Card */}
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/15 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#006ef2]/20 text-[#afc6ff] flex items-center justify-center shrink-0 group-hover:bg-[#006ef2] group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                    LinkedIn Profile
                  </span>
                  <span className="text-sm sm:text-base text-white font-medium truncate group-hover:text-[#afc6ff] transition-colors">
                    {PERSONAL_INFO.linkedinUsername}
                  </span>
                </div>
              </a>

            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7 bg-[#102238] p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/5 flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Send Me a Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="font-mono text-xs text-slate-300 uppercase font-semibold">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="h-11 px-4 rounded-xl bg-[#06111f] text-white placeholder-slate-500 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#006ef2] focus:border-transparent transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="font-mono text-xs text-slate-300 uppercase font-semibold">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="h-11 px-4 rounded-xl bg-[#06111f] text-white placeholder-slate-500 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#006ef2] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="font-mono text-xs text-slate-300 uppercase font-semibold">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message or inquiry here..."
                  className="p-4 rounded-xl bg-[#06111f] text-white placeholder-slate-500 text-sm border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#006ef2] focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="flex items-center gap-4 pt-1">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 h-12 bg-[#0057c2] text-white rounded-xl text-sm font-semibold hover:bg-[#006ef2] transition-all shadow-lg shadow-[#0057c2]/25 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>

                {submitted && (
                  <span className="text-xs font-mono text-emerald-400">
                    Draft prepared &amp; dispatched!
                  </span>
                )}
              </div>

              {/* Feedback State Notice */}
              {submitted && (
                <div className="p-4 rounded-xl bg-[#006ef2]/15 border border-[#006ef2]/30 text-[#d6e3ff] text-xs flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you, {formData.name}! Your message has been prepared for transmission. You can also reach me directly at <strong className="text-white underline">{PERSONAL_INFO.email}</strong>.
                  </span>
                </div>
              )}
            </form>

            {/* Back to Top & Fast Navigation */}
            <div className="pt-8 border-t border-slate-800/80 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-xs text-slate-400 text-center sm:text-left">
                © 2026 Shivansh Sharma. All Rights Reserved.
              </span>
              
              <button
                onClick={scrollToTop}
                type="button"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#afc6ff] hover:text-white transition-colors cursor-pointer group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
