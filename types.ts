
export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string;
  tech: string[];
  imageUrl: string;
  githubUrl?: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number; icon: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  missions: string[];
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
}

// Fix: Adding missing Education interface as referenced in constants.tsx
export interface Education {
  year: string;
  institution: string;
  degree: string;
  details: string;
}
