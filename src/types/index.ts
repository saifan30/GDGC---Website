export interface Event {
  id: string;
  slug: string;
  title: string;
  type: 'Workshop' | 'Study Jam' | 'Hackathon' | 'Competition' | 'Tech Talk';
  status: 'upcoming' | 'ongoing' | 'past';
  date: string;
  time: string;
  location: string;
  mode: 'In-Person' | 'Hybrid' | 'Virtual';
  shortDescription: string;
  fullDescription: string;
  image: string;
  coverImage: string;
  placeholderImage?: string;
  tags: string[];
  registrationUrl?: string;
  rsvpCount: number;
  capacity: number;
  agenda?: { time: string; title: string; description: string }[];
  speakers?: {
    name: string;
    role: string;
    company?: string;
    image: string;
    avatar: string;
    placeholderImage?: string;
    bio: string;
  }[];
  prerequisites?: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'AI' | 'Cloud' | 'Web' | 'Android' | 'Data' | 'Other';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  features: string[];
  image: string;
  previewImage: string;
  placeholderImage?: string;
  tags: string[];
  team: {
    name: string;
    role: string;
    image: string;
    avatar: string;
    placeholderImage?: string;
  }[];
  githubUrl: string;
  liveDemoUrl?: string;
  stars?: number;
  stats?: { label: string; value: string }[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Core Team' | 'Technical Team' | 'Design Team' | 'PR & Outreach' | 'Operations';
  year: string;
  bio: string;
  image: string;
  avatar: string;
  placeholderImage?: string;
  linkedin: string;
  github?: string;
  skills: string[];
}

export interface ResourceCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: 'blue' | 'red' | 'yellow' | 'green';
  learningPath: {
    level: string;
    step: number;
    title: string;
    description: string;
    topics: string[];
  }[];
  curatedLinks: {
    title: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    type: 'Codelab' | 'Documentation' | 'Video Course' | 'Interactive Sandbox';
    description: string;
    url: string;
    estimatedTime: string;
  }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'AI' | 'Cloud' | 'Web' | 'Android' | 'Career' | 'Hackathons';
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
    image: string;
    avatar: string;
    placeholderImage?: string;
  };
  date: string;
  readTime: string;
  image: string;
  coverImage: string;
  placeholderImage?: string;
  tags: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  color: 'blue' | 'red' | 'yellow' | 'green';
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon Wins' | 'Competition Winners' | 'Certifications' | 'Community Milestones';
  description: string;
  year: string;
  rank: string;
  event: string;
  members: string[];
  color: 'blue' | 'red' | 'yellow' | 'green';
}

export interface StudentStory {
  id: string;
  name: string;
  role: string;
  batch: string;
  image: string;
  avatar: string;
  placeholderImage?: string;
  quote: string;
  story: string;
  keyOutcome: string;
  accentColor: 'blue' | 'red' | 'yellow' | 'green';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  placeholderImage?: string;
  attendeesCount: string;
}
