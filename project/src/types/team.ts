export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  image: string;
  bio: string;
  certifications: string[];
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}