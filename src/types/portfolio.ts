export interface HeroStat {
  value: string;
  label: string;
}

export interface AboutPillar {
  title: string;
  desc: string;
}

export interface ServiceItem {
  title: string;
  desc: string;
  tags: string[];
}

export interface ExperienceItem {
  period: string;
  position: string;
  company: string;
  desc?: string;
  tags?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  status?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  tags: string[];
  highlights?: string[];
  link?: string | null;
  images?: string[];
}
