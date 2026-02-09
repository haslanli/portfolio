export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Language' | 'Tool' | 'Concept' | 'Other';
}

export interface LearningItem {
  name: string;
  link: string;
  status: 'In Progress' | 'Planning';
  platform: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}