
export type Theme = "light" | "dark";

export interface Links {
  github: string;
  site: string;
  email: string;
  topmate:string;
  linkedin:string;
  instagram:string;
  
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  pill: string;
  kind?: string;
  title: string;
  meta: string;
  points: string[];
  link?: {
    href: string;
    label: string;
  };


}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Project {
  title: string;
  github: string;
  image_link?: string;
  href: string;
  desc: string;
  tech: string[];
}

export interface Education {
  degree: string;
  score: number;
  school: string;
}
