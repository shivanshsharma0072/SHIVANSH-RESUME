/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/modals/ResumeModal';
import { CertificateModal } from './components/modals/CertificateModal';
import { ProjectModal } from './components/modals/ProjectModal';
import { Toast } from './components/Toast';
import { ProjectItem, CertificateItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Intersection observer / scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: ESC to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeOpen(false);
        setSelectedProject(null);
        setSelectedCertificate(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
  };

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectAboutTag = (tag: string) => {
    // If a skill or project tag is selected, smooth scroll to skills or show toast
    scrollToSection('#skills');
    showToast(`Exploring focus area: ${tag}`);
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0e1c2d] flex flex-col font-sans selection:bg-[#0057c2] selection:text-white">
      {/* Top Fixed Header */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />

        <AboutSection 
          onSelectTag={handleSelectAboutTag} 
        />

        <SkillsSection />

        <ProjectsSection 
          onOpenProject={(proj) => setSelectedProject(proj)} 
        />

        <EducationSection 
          onOpenCertificate={(cert) => setSelectedCertificate(cert)} 
        />

        <CtaBanner 
          onContactClick={() => scrollToSection('#contact')} 
        />

        <ContactSection 
          onShowToast={showToast} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavClick={scrollToSection} 
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

      {/* Floating Feedback Toast */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
