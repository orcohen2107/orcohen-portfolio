export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  /** Screenshots — horizontal gallery; first image is the cover */
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "backend" | "fullstack";
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  technologies: string[];
};

export type Skill = {
  name: string;
  category: "frontend" | "backend" | "devops" | "tools";
};

export type Testimonial = {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  initials: string;
};

export type SocialLink = {
  platform: "github" | "linkedin" | "email";
  url: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  title: string;
  tagline: string;
  description: string;
  email: string;
  socials: SocialLink[];
  url: string;
};
