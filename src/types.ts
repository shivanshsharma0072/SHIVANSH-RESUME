export interface SkillItem {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  icon: string;
  colorClass: string;
  badgeBg: string;
  badgeText: string;
  level: string;
  topics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  type: string;
  featured?: boolean;
  status?: string;
  highlights?: string[];
  technologies?: string[];
  codeSnippet?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  statusBadge: string;
  score?: string;
  description: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  type: string;
  score: string;
  issuer: string;
  year: string;
  status: 'verified' | 'enrolling';
  details: string;
  skills: string[];
}
