export const PERSON = {
  name: "Ethan Edouard",
  nameShort: "Ethan",
  role: "CS @ Howard University",
  company: "Howard University",
  location: "Washington, D.C.",
  status: "Open to new roles",
  bio: [
    "CS student at Howard University building software that solves real problems. Interested in full-stack development, distributed systems, and creating products people actually use.",
    "Founder of It Starts With Us, Matthew Henson Research Fellow, and developer of The Lookbook, a wardrobe management app used by 300+ users.",
  ],
  links: {
    github:   "https://github.com/ethanxedouard",
    linkedin: "https://www.linkedin.com/in/ethanedouard",
    email:    "edouardethan@gmail.com",
    resume:   "/resume.pdf",
  },
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  image?: string;   // real logo — place file in /public/logos/
  logo?: string;    // fallback text if no image
  logoBg?: string;  // fallback bg color if no image
};

export const EXPERIENCE: Experience[] = [
  {
    role: "Research Assistant",
    company: "Kastner Research Group — UC San Diego",
    period: "June 2026 – Present",
    description:
      "Selected Matthew Henson Fellow building distributed systems; developed Docker/Kubernetes infrastructure for edge computing by transforming discarded smartphones into scalable compute clusters.",
    image: "/logos/ucsd-crest.png",  
    logoBg: "#182B49",
    logo: "UC",
  },
  {
    role: "Co-Founder & Co-Developer",
    company: "The Lookbook",
    period: "July 2025 – Present",
    description:
      "Co-founded and co-developed a mobile fashion organization app with 300+ active users; developed React Native features and UI, contributed to application architecture, and integrated Supabase for user authentication and cloud data management.",
    image: "/logos/lookbook_logo.png",  
    logoBg: "#182B49",
    logo: "Lookbook",
  },
  {
    role: "Founder & Executive Director",
    company: "It Starts With Us",
    period: "August 2025 – Present",
    description:
      "Founded a nonprofit focused on student development and community engagement; built partnerships with local organizations and developed technology initiatives to expand educational and volunteer opportunities.",
    image: "/logos/iswu_logo.png",  
    logoBg: "#182B49",
    logo: "ISWU",
  },
  {
    role: "Resident Assistant",
    company: "Howard University",
    period: "July 2026 – Present",
    description:
      "Serve as a Resident Assistant for Howard University Towers Plaza East, supporting a residential community of 102 students through programming, conflict resolution, and day-to-day student support.",
    image: "/logos/howard-crest.png",  
    logoBg: "#182B49",
    logo: "UC",
  },
];

export type Award = {
  title: string;
  org: string;
  description: string;
  year: string;
  type: "Fellowship" | "Award" | "Honor" | "Scholarship" | "Professional Development" | "Hackathon";
};

export const AWARDS: Award[] = [
  {
    title: "PlayStation Career Pathways Scholarship",
    org: "Sony Interactive Entertainment (PlayStation)",
    description:
      "Participated in PlayStation's Career Pathways program focused on software engineering and technical development within large-scale entertainment and gaming systems, gaining exposure to industry engineering practices and infrastructure workflows.",
    year: "2026 – Present",
    type: "Scholarship",
  },
  {
    title: "Google Career Launchpad Program",
    org: "Google",
    description:
      "Completed Google Cloud’s Career Launchpad program, gaining hands-on experience in generative AI, cloud computing, and emerging AI technologies through practical labs and industry-developed coursework. Developed technical skills in AI and cloud infrastructure while earning Google credentials and preparing for an AI-driven technology workforce.",
    year: "2026 – Present",
    type: "Professional Development",
  },
  {
    title: "HU Boeing Academy",
    org: "Boeing / Howard University",
    description:
      "Completed Google Cloud’s Career Launchpad program, gaining hands-on experience in generative AI, cloud computing, and emerging AI technologies through practical labs and industry-developed coursework. Developed technical skills in AI and cloud infrastructure while earning Google credentials and preparing for an AI-driven technology workforce.",
    year: "2026 – Present",
    type: "Professional Development",
  },
  {
    title: "Matthew Henson Fellow, Kastner Research Group",
    org: "University of California, San Diego",
    description:
      "Selected for a competitive undergraduate research fellowship focused on distributed and sustainable computing systems. Developed Docker- and Kubernetes-based infrastructure for edge computing, transforming discarded smartphones into scalable compute clusters as part of the Junkyard Computing (RAIS) initiative. Awarded $12,000 in research funding.",
    year: "2026 – Present",
    type: "Fellowship",
  },
  {
    title: "Brother 2 Brother Undergraduate Scholarship",
    org: "Alpha Phi Alpha Fraternity, Inc. — Beta Chapter",
    description:
      "Recipient of the Beta Chapter's Brother 2 Brother Undergraduate Scholarship, awarded to undergraduate members demonstrating academic achievement and campus/community leadership.",
    year: "2026",
    type: "Scholarship",
  },
  {
    title: "BisonHacks 2026 — 3rd Place, Best Use of ElevenLabs",
    org: "Howard University School of Business",
    description:
      "Placed 3rd overall and won Best Use of ElevenLabs at BisonHacks 2026 for an ASL detection system built with MediaPipe and Random Forest classification.",
    year: "2026",
    type: "Hackathon",
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  date: string;
  tags: string[];
  github: any;
  live: any;
  coverImage?: string;  // real screenshot — place file in /public/projects/
  metrics: [string, string][];
  overview: string;
  highlights: [string, string][];
  architecture: string;
  learned: string;
  result?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "lookbook",
    title: "The Lookbook",
    tagline: "A digital wardrobe platform that helps users organize clothing, build outfits, and manage personal style across devices.",
    description: "Mobile wardrobe management app available on the App Store. Built a local-first SQLite architecture supporting offline access, fast search, and organization of 1,000+ clothing items per user.",
    date: "Jul 2025 - Present",
    coverImage: "/projects/lookbook.png",  // place screenshot at public/projects/meridian.png
    tags: ["react-native", "next.js", "typescript", "sqlite", "firebase", "tailwind"],
    github: null,
    live: "https://www.trythelookbook.com/",
    metrics: [
      ["300+", "users"],
      ["5.0★", "App Store rating"],
      ["1,000+", "items per wardrobe"],
      ["Offline", "first architecture"],
    ],
    overview:
      "Getting dressed shouldn't require digging through a crowded closet or wondering whether you already own something similar. The Lookbook helps users catalog their wardrobe, create outfits, and make more intentional fashion decisions by putting their entire closet in one place.",
    highlights: [
      ["SQLite engine", "local-first storage optimized for thousands of clothing items"],
      ["React Native app", "cross-platform mobile experience with native performance"],
      ["Outfit organization", "categorization, search, and wardrobe management workflows"],
      ["Next.js website", "marketing platform supporting user acquisition and product discovery"],
    ],
    architecture:
      "The application is centered around a local-first SQLite database that serves as the primary source of truth. Storing wardrobe data directly on-device allows users to instantly browse, search, and organize their collections without network dependency.\n\nA separate Next.js marketing website supports product discovery, onboarding, and distribution. The architecture prioritizes responsiveness and reliability by keeping core functionality local to the device rather than depending on remote infrastructure.",
    learned:
      "Building The Lookbook taught me that mobile performance is often determined by architecture decisions made long before users interact with the interface. Choosing a local-first approach created a noticeably faster experience and reinforced the importance of designing around user behavior rather than implementation convenience.",
  },
  {
    slug: "asl-detection",
    title: "ASL Detection System",
    tagline: "A real-time computer vision system that recognizes American Sign Language gestures using machine learning.",
    description: "Built a live ASL recognition system using MediaPipe and Random Forest classification. Processes webcam input locally with confidence-based verification for reliable gesture detection.",
    date: "Feb 2026",
    result: "3rd Place + Best Use of ElevenLabs — BisonHacks 2026",
    coverImage: "/projects/asl-detection.png",  // place screenshot at public/projects/fieldwork.png
    tags: ["python", "opencv", "mediapipe", "scikit-learn", "machine-learning"],
    github: "https://github.com/armstrongterry87/BisonHacks-2026-ASL",
    live: null,
    metrics: [
      ["21", "tracked hand landmarks"],
      ["63", "input features"],
      ["15", "frame verification window"],
      ["Real-time", "local inference"],
    ],
    overview:
      "This project explored how machine learning and computer vision can improve accessibility through real-time sign language recognition. The goal was to create a fast and privacy-preserving system that runs entirely on-device.",
    highlights: [
      ["MediaPipe tracking", "extracts 21 hand landmarks from live webcam input"],
      ["Feature engineering", "generates 63-dimensional vectors for classification"],
      ["Random Forest model", "low-latency gesture recognition pipeline"],
      ["Prediction stabilization", "confidence-based filtering reduces false positives"],
    ],
    architecture:
      "The system captures live webcam frames, extracts hand landmarks through MediaPipe, transforms those landmarks into feature vectors, and passes them to a trained Random Forest classifier.\n\nTo improve reliability, predictions are validated across multiple consecutive frames before a gesture is accepted, significantly reducing instability caused by slight hand movement.",
    learned:
      "The biggest lesson was that machine learning performance depends as much on data processing and validation as it does on model selection. Robust post-processing often produces larger gains than switching to a more complex model.",
  },
  {
    slug: "hudeca",
    title: "Howard University Collegiate DECA Website",
    tagline: "The official web platform for Howard University's Collegiate DECA chapter.",
    description: "Designed and developed a production-ready website for a university organization, providing a centralized hub for chapter information, events, and member engagement.",
    date: "Aug 2025",
    coverImage: "/projects/hudeca.png",  // place screenshot at public/projects/kairos.png
    tags: ["next.js", "react", "typescript", "tailwind", "vercel"],
    github: "https://github.com/ethanxedouard/howard-deca",
    live: "https://hudeca.vercel.app/",
    metrics: [
      ["100%", "solo development"],
      ["Mobile", "responsive design"],
      ["Production", "organization website"],
      ["CI/CD", "automated deployments"],
    ],
    overview:
      "The Howard University Collegiate DECA chapter needed a modern digital presence where prospective and current members could learn about the organization, explore events, and access chapter resources. The project focused on usability, accessibility, and long-term maintainability.",
    highlights: [
      ["Responsive UI", "optimized experience across desktop, tablet, and mobile devices"],
      ["Component architecture", "reusable React components for future expansion"],
      ["Next.js performance", "fast loading pages through static generation and optimization"],
      ["Automated deployment", "continuous deployment pipeline powered by Vercel"],
    ],
    architecture:
      "A component-driven architecture was used to ensure maintainability and scalability as chapter leadership changes over time. Shared UI components reduce duplication and simplify future updates.\n\nThe application leverages Next.js for routing and rendering, Tailwind CSS for design consistency, and Vercel for hosting and deployment automation.",
    learned:
      "Building software for a real organization highlighted the importance of maintainability. Unlike personal projects, organizational software must remain usable and extensible for future contributors who may not have built the original system.",
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
