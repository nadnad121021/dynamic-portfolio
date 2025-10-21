// Root Portfolio Interface
export interface Portfolio {
  name: string;
  title: string;
  description: string;
  resumeLink?: string;
  aboutMe: AboutMe;
  socialMediaLinks: SocialMediaLink;
  skills: SkillCategory[];
  education: Education[];
  projects: Project[];
  experiences: Experience[];
  reviews: Review[];
}

// aboutMe
export interface AboutMe {
  quote?: string;
  greetings: string;
  philosophies: Philosophy[];
  isOpenToWork?: boolean;
}

// Philosophy
export interface Philosophy {
  title: string;
  description: string;
}

// Social Media Links
export interface SocialMediaLink {
  github: string;
  linkedin: string;
  email: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  phone?: string;
  skype?: string;
  [key: string]: string | undefined;
}

// Skills
export interface SkillCategory {
  category: string;
  items: string[];
}

// Education
export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
  logo: string;
  achievements: string[];
}

// Projects
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  logo: string;
  link: string;
  github: string;
  role: string;
  duration: string;
}

// Experience
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  logo: string;
}

// Reviews / Testimonials
export interface Review {
  name: string;
  role: string;
  company: string;
  image: string;
  review: string;
}

export type TPortfolioInfo = Portfolio;