
export interface Internship {
  id: string;
  title: string;
  description: string;
  skills: string[];
  duration: string;
  outcomes: string[];
}

export type PageType = 'home' | 'about' | 'internships' | 'jobs' | 'contact' | 'signup';

export interface SignupFormData {
  fullName: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}
