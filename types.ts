
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface PandavaCharacter {
  name: string;
  alias: string;
  quality: string;
  description: string;
  extendedWisdom: string;
  mantra: string;
  skills: string[];
  icon: string;
  color: string;
}

export interface Education {
  degree: string;
  institution: string;
}

export interface Certification {
  name: string;
  provider?: string;
  description: string; // Penjelasan singkat tentang sertifikasi
}

export type View = 'HOME' | 'CONTACT' | 'PHILOSOPHY' | 'ABILITIES' | 'ARTIFACTS';

export enum Section {
  HERO = 'hero',
  ABOUT = 'about',
  SKILLS = 'skills',
  PORTFOLIO = 'portfolio',
  CONTACT = 'contact'
}
