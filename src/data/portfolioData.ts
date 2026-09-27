import { SkillItem, ProjectItem, EducationItem, CertificateItem } from '../types';

export const PERSONAL_INFO = {
  name: "Shivansh Sharma",
  initials: "SS",
  title: "BCA • Web Designer",
  roleHeadline: "BCA Student • Aspiring Web Designer",
  subRole: "Front-End & UI/UX",
  tagline: "Passionate BCA student focused on web designing, front-end development and UI/UX, with a strong interest in creating modern and functional digital experiences.",
  philosophy: "Keep Learning, Keep Growing",
  avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNTV8C7zFCNV2dLJ972zAA3nwGIcW4dXnhLoKdOfRZfGhCouAmmKWNXfRUgvQchQkLwa7uwso6VE9dRpoh9D1jCBQn27wqMECTFxzDVCdupc3EJq4exrIYo02G8cghtqAXIKXhkG2wdi4JvBr6PvUtfbMUu7v-6oSl8kbMDYNtA4lUWy-hBW5tpg3WuQRmf-3cdxQysRI0oSdTfpCVrFsW2SUmsS4RMyzZRLggV7rY3L-naU7Xpg6h72j7P9CH2xQd2w",
  email: "shivusharma7272@gmail.com",
  phone: "+91 6230249072",
  phoneRaw: "6230249072",
  location: "Bilaspur, Himachal Pradesh, India",
  linkedin: "https://www.linkedin.com/in/shivansh-sharma-398939343",
  linkedinUsername: "shivansh-sharma-398939343",
  github: "https://github.com",
  availabilityStatus: "Available Immediately for Internship & Roles",
  bioParagraphs: [
    "I’m Shivansh Sharma, a 5th-semester BCA student with a strong interest in Web Designing, Front-End Development, and UI/UX. I have experience with HTML, CSS, JavaScript, Python, C, C++, and C#, and I enjoy using technology to turn ideas into creative and functional digital experiences.",
    "I have also worked on an AI video project, which helped me explore practical applications of technology and strengthen my problem-solving skills. I’m a quick learner who enjoys exploring new technologies and developing my skills through hands-on projects.",
    "Currently, I’m looking for an internship or entry-level opportunity where I can apply my technical skills, gain real-world experience, and grow as a web designer and developer."
  ],
  hashtags: ["#FrontEndDev", "#UIDesign", "#CreativeCoder"],
  college: "Govt. College",
  semester: "5th Semester",
  bcaFocus: "Front-End Dev, UI/UX, C/C++, Python & JavaScript"
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: "html5",
    name: "HTML5",
    role: "Structure",
    category: "Markup",
    description: "Semantic web architecture, accessible DOM structures, audio/video integration, and SEO-friendly document layouts.",
    icon: "code",
    colorClass: "text-[#ba1a1a]",
    badgeBg: "bg-[#ffdad6]/40",
    badgeText: "text-[#ba1a1a]",
    level: "Advanced",
    topics: ["Semantic Tags", "Accessibility (a11y)", "Forms & Validation", "Canvas & Media"]
  },
  {
    id: "css3",
    name: "CSS3",
    role: "Styling",
    category: "Styling",
    description: "Responsive layouts, Flexbox, CSS Grid, custom properties, animations, and modern utility-first styling with Tailwind CSS.",
    icon: "css",
    colorClass: "text-[#0057c2]",
    badgeBg: "bg-[#d6e3ff]",
    badgeText: "text-[#0057c2]",
    level: "Advanced",
    topics: ["Flexbox & Grid", "Responsive Design", "Transitions & Keyframes", "Tailwind CSS"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    role: "Interactivity",
    category: "Core Web",
    description: "ES6+ syntax, DOM manipulation, asynchronous programming, event handling, API fetching, and modern client-side architectures.",
    icon: "javascript",
    colorClass: "text-[#b48000]",
    badgeBg: "bg-[#fef3c7]",
    badgeText: "text-[#92400e]",
    level: "Proficient",
    topics: ["ES6+ Modern JS", "DOM & Event Loop", "Async / Await / Fetch", "Modular Architecture"]
  },
  {
    id: "python",
    name: "Python",
    role: "Core & Logic",
    category: "Backend / AI",
    description: "Applied scripting, algorithmic problem solving, automated workflows, and integration with AI model media pipelines.",
    icon: "smart_toy",
    colorClass: "text-[#006ef2]",
    badgeBg: "bg-[#d9e2ff]",
    badgeText: "text-[#004398]",
    level: "Intermediate",
    topics: ["Data Structures", "Scripting & Automation", "AI / OpenCV Pipelines", "Object-Oriented Design"]
  },
  {
    id: "c-lang",
    name: "C Lang",
    role: "Procedural",
    category: "Systems",
    description: "Foundational programming concepts, memory pointers, manual resource management, data structures, and algorithmic logic.",
    icon: "memory",
    colorClass: "text-[#545f70]",
    badgeBg: "bg-[#dbe9ff]",
    badgeText: "text-[#0e1c2d]",
    level: "Academic",
    topics: ["Pointers & Memory", "Structs & Arrays", "Procedural Flow", "Algorithms"]
  },
  {
    id: "cpp",
    name: "C++",
    role: "OOP & Logic",
    category: "Systems",
    description: "Object-oriented software development, classes, inheritance, polymorphism, templates, and the Standard Template Library (STL).",
    icon: "developer_mode",
    colorClass: "text-[#0057c2]",
    badgeBg: "bg-[#dbe9ff]",
    badgeText: "text-[#0057c2]",
    level: "Academic",
    topics: ["OOP Principles", "STL Collections", "Inheritance & Polymorphism", "Performance"]
  },
  {
    id: "csharp",
    name: "C#",
    role: "Applications",
    category: "Application Dev",
    description: "Modern component-based application development, .NET foundations, event-driven interfaces, and enterprise logic patterns.",
    icon: "integration_instructions",
    colorClass: "text-[#005bb2]",
    badgeBg: "bg-[#d6e3ff]",
    badgeText: "text-[#005bb2]",
    level: "Academic",
    topics: [".NET Framework", "Event Driven Apps", "LINQ & Collections", "UI Architecture"]
  }
];

export const PROFESSIONAL_STRENGTHS = [
  "Web Designing",
  "Front-End Development",
  "UI/UX",
  "Problem Solving",
  "Creative Thinking",
  "Quick Learning"
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ai-video-project",
    title: "AI Video Project",
    subtitle: "Dynamic Synthesis & Computational Media Pipeline",
    description: "Worked on an AI video project that helped me explore practical applications of artificial intelligence and strengthen my problem-solving skills. Focused on dynamic synthesis, computational workflow integration, and modern creative media pipeline management.",
    tags: ["AI", "Creative Technology", "Problem Solving"],
    type: "Practical Project",
    featured: true,
    status: "Completed Prototype",
    highlights: [
      "Explored prompt-to-video computational synthesis and automated scene sequencing",
      "Built clean integration scripts for asset processing, format conversion, and parameter optimization",
      "Designed a responsive preview viewer with playback controls and real-time inference telemetry logs",
      "Strengthened debugging and pipeline execution across Python and modern web visualization"
    ],
    technologies: ["Python", "AI Video Models", "FFmpeg / Media Processing", "HTML5 Video API", "JavaScript"],
    codeSnippet: `// practical_execution.py
> AI model inference running on dataset assets...
> Synthesized responsive output pipeline initialized.
> Frame batch 01-120 compiled with zero artifacts.
> Rendering pipeline complete. Latency: 1.82s. STATUS: SUCCESS`
  },
  {
    id: "portfolio-live",
    title: "Personal Interactive Portfolio",
    subtitle: "High-Performance Modern Web Architecture",
    description: "Engineered a responsive, accessible personal portfolio website built with modern front-end technologies. Features dark/light dual atmospheric zones, interactive modals, responsive glassmorphic cards, and clean typography.",
    tags: ["Front-End", "UI/UX", "Tailwind CSS"],
    type: "Live Portfolio",
    featured: false,
    status: "Active / Live",
    highlights: [
      "Custom dual-surface optical contrast system adhering to WCAG AA guidelines",
      "Fully responsive mobile-to-desktop fluid typography and micro-interactions",
      "Integrated printable CV viewer, certificate verification modals, and direct contact suite"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide Icons"]
  },
  {
    id: "frontend-design-system",
    title: "Frontend Component Design System",
    subtitle: "Reusable UI Primitives & Tokens",
    description: "Developing a modular design system of accessible, responsive UI primitives including custom buttons, input controls, cards, dialog overlays, and navigation widgets.",
    tags: ["UI/UX", "Design Systems", "HTML/CSS"],
    type: "In Progress",
    featured: false,
    status: "In Progress",
    highlights: [
      "Strict zero-pill metadata hierarchy and readable typographic scaling",
      "Keyboard navigable modal dialogues and accessible focus rings",
      "Light and dark contrast token sets"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
  },
  {
    id: "bca-capstone",
    title: "BCA Academic Capstone Systems",
    subtitle: "Database & Information Management",
    description: "Academic projects and lab coursework covering student record systems, database schemas, object-oriented design in C++/C#, and procedural algorithms in C.",
    tags: ["C++", "C#", "Database Logic", "Academic"],
    type: "Academic",
    featured: false,
    status: "Academic Year 2024",
    highlights: [
      "Object-oriented data persistence using relational file storage and structures",
      "Search, filter, and reporting algorithms implemented with structured complexity analysis",
      "Consistent error checking and input validation routines"
    ],
    technologies: ["C++", "C#", "C", "Data Structures", "Algorithms"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "bca",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Govt. College",
    period: "2022 — Present",
    statusBadge: "Active",
    score: "Currently Pursuing (5th Semester)",
    description: "Focused on web technologies, data structures, object-oriented programming, and computer networks.",
    highlights: [
      "5th Semester currently pursuing with consistent academic focus",
      "Core coursework: Web Development, Computer Networks, Database Management Systems, Software Engineering, C++, Java, and Data Structures",
      "Active participant in practical lab sprints and technology projects"
    ]
  },
  {
    id: "12th",
    degree: "12th Grade (Higher Secondary)",
    institution: "Himachal Pradesh Board of School Education",
    period: "2021 — 2022",
    statusBadge: "Completed",
    score: "80.6%",
    description: "Rigorous science/mathematics stream preparation with solid computational foundation.",
    highlights: [
      "Secured 80.6% distinction across core subjects",
      "Strong foundational analytical problem solving and scientific reasoning",
      "Active engagement in academic co-curricular competitions"
    ]
  },
  {
    id: "10th",
    degree: "10th Grade (Matriculation)",
    institution: "Himachal Pradesh Board of School Education",
    period: "2019 — 2020",
    statusBadge: "Completed",
    score: "82.8%",
    description: "Comprehensive secondary education with academic distinction.",
    highlights: [
      "Secured 82.8% overall score with outstanding performance in mathematics and sciences",
      "Recognized for academic diligence and consistent high standing"
    ]
  }
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "cert-12th",
    title: "12th Certificate",
    type: "Academic Certificate",
    score: "80.6%",
    issuer: "HP Board of School Education",
    year: "2022",
    status: "verified",
    details: "Higher Secondary Examination Certificate verifying successful completion of senior secondary education with distinction score of 80.6%.",
    skills: ["Mathematics", "Physics", "Chemistry", "English", "Analytical Reasoning"]
  },
  {
    id: "cert-10th",
    title: "10th Certificate",
    type: "Academic Certificate",
    score: "82.8%",
    issuer: "HP Board of School Education",
    year: "2020",
    status: "verified",
    details: "Secondary School Examination Matriculation Certificate awarded with 82.8% distinction score.",
    skills: ["Mathematics", "Science", "Social Studies", "Languages", "Foundational Logic"]
  },
  {
    id: "cert-additional",
    title: "Additional Certifications",
    type: "Professional Coursework",
    score: "In Progress",
    issuer: "Online Learning & Technical Academies",
    year: "2024",
    status: "enrolling",
    details: "Currently enrolling and completing advanced certifications in modern front-end web development, responsive CSS architectures, and JavaScript engineering.",
    skills: ["Web Design", "Responsive Layouts", "Modern JavaScript", "UI/UX Prototyping"]
  }
];
