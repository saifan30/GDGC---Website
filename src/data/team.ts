import { TeamMember } from '../types';

/**
 * Centralized GDGC AIKTC Team Member Directory
 *
 * All profile images are configured via local asset paths under `/images/team/`.
 * To replace any member's photo with a real image:
 * 1. Place your image file in `/public/images/team/your-file.jpg`
 * 2. Update the `image` field below to match your filename.
 */
export const teamData: TeamMember[] = [
  // Core Team
  {
    id: 'team-1',
    name: 'Saifan',
    role: 'GDGC Lead 2025–2026',
    department: 'Core Team',
    year: 'Final Year · Computer Engineering',
    bio: 'Passionate about distributed systems, developer communities, and empowering student engineers to turn ideas into real products.',
    image: '/images/team/saif-sayed.jpg',
    avatar: '/images/team/saif-sayed.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/in/gdgc-aiktc',
    github: 'https://github.com/saifan-dev',
    skills: ['Community Leadership', 'Go', 'GCP', 'System Architecture']
  },
  {
    id: 'team-2',
    name: 'Sara Khan',
    role: 'Co-Lead & Community Manager',
    department: 'Core Team',
    year: 'Third Year · Information Technology',
    bio: 'Full-stack builder and open-source enthusiast. Spearheads chapter strategy, developer outreach, and national hackathon alliances.',
    image: '/images/team/sara-khan.jpg',
    avatar: '/images/team/sara-khan.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com/in/sarakhan-dev',
    github: 'https://github.com/sarakhan',
    skills: ['React', 'Next.js', 'Program Management', 'UI/UX']
  },
  {
    id: 'team-3',
    name: 'Dr. Abdul Quddus',
    role: 'Faculty Mentor & Advisor',
    department: 'Core Team',
    year: 'Head of Department · AIKTC',
    bio: 'Guiding student developer initiatives, research projects, industry partnerships, and campus innovation labs.',
    image: '/images/team/dr-abdul-quddus.jpg',
    avatar: '/images/team/dr-abdul-quddus.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Research', 'Cloud Computing', 'Academic Mentorship']
  },

  // Technical Team
  {
    id: 'team-4',
    name: 'Amaan Shaikh',
    role: 'AI / Machine Learning Lead',
    department: 'Technical Team',
    year: 'Final Year · Computer Engineering',
    bio: 'Building with Gemini API, Vertex AI, and deep neural networks. Conducted 6+ hands-on AI study jams for 500+ attendees.',
    image: '/images/team/amaan-shaikh.jpg',
    avatar: '/images/team/amaan-shaikh.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/amaanshaikh',
    skills: ['PyTorch', 'Gemini SDK', 'LangChain', 'FastAPI']
  },
  {
    id: 'team-5',
    name: 'Faizan Ansari',
    role: 'Cloud & DevOps Lead',
    department: 'Technical Team',
    year: 'Final Year · Information Technology',
    bio: 'GCP Certified Associate Cloud Engineer. Manages our cloud clusters, CI/CD automation, and infrastructure study tracks.',
    image: '/images/team/faizan-ansari.jpg',
    avatar: '/images/team/faizan-ansari.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/faizan-ansari',
    skills: ['Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    id: 'team-6',
    name: 'Ayaan Shaikh',
    role: 'Web Development Lead',
    department: 'Technical Team',
    year: 'Third Year · Computer Engineering',
    bio: 'Passionate about frontend performance, TypeScript, modern CSS, and making delightful developer tools.',
    image: '/images/team/ayaan-shaikh.jpg',
    avatar: '/images/team/ayaan-shaikh.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/ayaanshaikh',
    skills: ['React 19', 'Next.js', 'Tailwind CSS', 'GraphQL']
  },
  {
    id: 'team-7',
    name: 'Rehan Qureshi',
    role: 'Android & Mobile Lead',
    department: 'Technical Team',
    year: 'Third Year · Computer Engineering',
    bio: 'Crafting responsive mobile experiences with Kotlin, Jetpack Compose, Flutter, and Google ARCore.',
    image: '/images/team/rehan-qureshi.jpg',
    avatar: '/images/team/rehan-qureshi.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/rehanqureshi',
    skills: ['Kotlin', 'Jetpack Compose', 'Flutter', 'ARCore']
  },

  // Design Team
  {
    id: 'team-8',
    name: 'Zoya Siddiqui',
    role: 'Design & Creative Lead',
    department: 'Design Team',
    year: 'Third Year · Information Technology',
    bio: 'Figma wizard obsessed with design systems, accessible typography, and Google Material Design 3 guidelines.',
    image: '/images/team/zoya-siddiqui.jpg',
    avatar: '/images/team/zoya-siddiqui.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    skills: ['Figma', 'Material Design 3', 'Motion Graphics', 'Branding']
  },
  {
    id: 'team-9',
    name: 'Danish Merchant',
    role: 'Visual & Motion Designer',
    department: 'Design Team',
    year: 'Second Year · Computer Engineering',
    bio: 'Creating interactive 3D assets, event posters, and motion trailers for GDGC AIKTC events and social reels.',
    image: '/images/team/danish-merchant.jpg',
    avatar: '/images/team/danish-merchant.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Spline 3D', 'After Effects', 'Illustrator', 'UI Design']
  },

  // PR & Outreach
  {
    id: 'team-10',
    name: 'Mariyam Dalvi',
    role: 'PR & Communications Lead',
    department: 'PR & Outreach',
    year: 'Third Year · Civil / Tech Hybrid',
    bio: 'Managing community storytelling, corporate sponsor relations, campus cross-collaboration, and newsletter reach.',
    image: '/images/team/mariyam-dalvi.jpg',
    avatar: '/images/team/mariyam-dalvi.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Brand Outreach', 'Content Strategy', 'Partnerships', 'Public Speaking']
  },
  {
    id: 'team-11',
    name: 'Bilal Khan',
    role: 'Social Media & Editorial Lead',
    department: 'PR & Outreach',
    year: 'Second Year · Computer Engineering',
    bio: 'Connecting tech stories with students. Manages chapter LinkedIn, Instagram broadcast, and technical articles.',
    image: '/images/team/bilal-khan.jpg',
    avatar: '/images/team/bilal-khan.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Copywriting', 'SEO', 'Community Growth', 'Analytics']
  },

  // Operations
  {
    id: 'team-12',
    name: 'Hamza Kazi',
    role: 'Operations & Logistics Lead',
    department: 'Operations',
    year: 'Third Year · Mechanical / IoT',
    bio: 'Ensuring flawless event day execution, auditorium technical setups, hardware labs, and attendee hospitality.',
    image: '/images/team/hamza-kazi.jpg',
    avatar: '/images/team/hamza-kazi.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://linkedin.com',
    skills: ['Event Operations', 'Hardware Lab Setup', 'Crisis Management']
  }
];
