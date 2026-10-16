
export type Theme = "light" | "dark";
export type ExperienceKind = "teach" | "eng"| "other";

export interface Links {
  github: string;
  site: string;
  email: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  pill: string;
  kind: ExperienceKind;
  title: string;
  meta: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  github:string;
  href: string;
  desc: string;
  tech: string[];
}

export interface Education {
  degree: string;
  score:number;
  school: string;
}
