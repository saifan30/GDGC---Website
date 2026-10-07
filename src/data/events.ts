import { Event } from '../types';

/**
 * Centralized Events Directory
 *
 * All event cover images are configured via local asset paths under `/images/events/`.
 * Replace any event image by saving a file to `/public/images/events/` and updating the path below.
 */
export const eventsData: Event[] = [
  {
    id: 'evt-1',
    slug: 'genai-study-jam-2026',
    title: 'GenAI Study Jam 2026: Hands-on with Gemini & Vertex AI',
    type: 'Study Jam',
    status: 'upcoming',
    date: 'Oct 24, 2026',
    time: '10:00 AM – 3:30 PM IST',
    location: 'Auditorium 1, AIKTC Campus & Google Meet',
    mode: 'Hybrid',
    shortDescription: 'Master multimodal AI, prompt engineering, and building agentic apps using Google Gemini and Google AI Studio.',
    fullDescription: 'Join GDGC AIKTC for an intensive hands-on GenAI Study Jam! Learn how modern generative models work, prompt engineering techniques, multimodal APIs with Gemini 2.5/3, building tool-calling agents, and deploying serverless generative AI solutions on Google Cloud Run.',
    image: '/images/events/genai-study-jam-2026.jpg',
    coverImage: '/images/events/genai-study-jam-2026.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Gemini', 'Vertex AI', 'GenAI', 'Python', 'AI Studio'],
    registrationUrl: 'https://gdg.community.dev/events/details/developer-student-clubs-aiktc',
    rsvpCount: 248,
    capacity: 300,
    agenda: [
      { time: '10:00 AM', title: 'Check-in & Welcome Keynote', description: 'Kickoff by GDGC Lead & faculty mentors' },
      { time: '10:30 AM', title: 'Deep Dive: Gemini API & Multimodality', description: 'Live coding with text, images, and audio using Gemini SDK' },
      { time: '12:00 PM', title: 'Hands-on Lab: Vertex AI Agent Builder', description: 'Guided lab with Google Cloud Skill Boost credits' },
      { time: '01:30 PM', title: 'Networking & Lunch Break', description: 'Connect with senior peer developers and alumni' },
      { time: '02:15 PM', title: 'Building & Deploying GenAI Apps', description: 'FastAPI + Next.js + Cloud Run deployment demo' },
      { time: '03:15 PM', title: 'Q&A, Badges & Goodies Distribution', description: 'Claim Google Cloud Skill Boost certificate badges' }
    ],
    speakers: [
      {
        name: 'Amaan Shaikh',
        role: 'AI/ML Lead, GDGC AIKTC',
        image: '/images/team/amaan-shaikh.jpg',
        avatar: '/images/team/amaan-shaikh.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        bio: 'Passionate about deep learning and GenAI. Built multiple open-source Gemini agents and mentor for 400+ students.'
      },
      {
        name: 'Zaid Patel',
        role: 'Google Cloud Certified Professional Architect',
        company: 'Cloud Architect & GDGC Mentor',
        image: '/images/team/zaid-patel.jpg',
        avatar: '/images/team/zaid-patel.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        bio: 'Ex-GDGC AIKTC alumnus currently building scalable multi-tenant cloud platforms on GCP.'
      }
    ],
    prerequisites: [
      'Basic knowledge of Python or JavaScript',
      'Laptop with Chrome browser',
      'Active Google Account for Cloud Skill Boost'
    ]
  },
  {
    id: 'evt-2',
    slug: 'google-cloud-practitioner-day',
    title: 'Google Cloud Practitioner Day: Serverless & Kubernetes',
    type: 'Workshop',
    status: 'upcoming',
    date: 'Nov 12, 2026',
    time: '11:00 AM – 4:00 PM IST',
    location: 'Lab 402, Computer Engg Dept, AIKTC',
    mode: 'In-Person',
    shortDescription: 'Learn Docker containerization, Google Cloud Run, GKE, Cloud Functions, and Firebase for scalable backend architecture.',
    fullDescription: 'Get your hands dirty deploying actual cloud architectures. We will demystify cloud infrastructure, IAM security, microservices deployment using Cloud Run, containerizing web apps, and connecting cloud databases with zero downtime.',
    image: '/images/events/google-cloud-practitioner-day.jpg',
    coverImage: '/images/events/google-cloud-practitioner-day.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Google Cloud', 'Docker', 'Kubernetes', 'Cloud Run', 'Firebase'],
    rsvpCount: 180,
    capacity: 200,
    agenda: [
      { time: '11:00 AM', title: 'Why Serverless First?', description: 'Understanding Cloud Run, Compute Engine vs GKE' },
      { time: '12:15 PM', title: 'Live Lab: Containerization & Artifact Registry', description: 'Building Docker containers and pushing to GCP' },
      { time: '01:45 PM', title: 'Deploying High-Traffic Apps with Firebase', description: 'Integrating Firestore and real-time security rules' },
      { time: '03:15 PM', title: 'Cloud Architecture Challenge', description: 'Mini architecture quiz with GDGC swag prizes' }
    ],
    speakers: [
      {
        name: 'Faizan Ansari',
        role: 'Cloud & DevOps Lead',
        image: '/images/team/faizan-ansari.jpg',
        avatar: '/images/team/faizan-ansari.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        bio: 'DevOps enthusiast specializing in automated CI/CD pipelines, Terraform, and Kubernetes orchestration.'
      }
    ],
    prerequisites: ['Basic command line familiarity', 'Git installed']
  },
  {
    id: 'evt-3',
    slug: 'hack-aiktc-annual-hackathon-2026',
    title: 'Hack-AIKTC 2026: 36-Hour National Hackathon',
    type: 'Hackathon',
    status: 'upcoming',
    date: 'Dec 05 – Dec 06, 2026',
    time: '36 Hours Non-stop',
    location: 'AIKTC Campus Sports Complex & Central Hall',
    mode: 'In-Person',
    shortDescription: 'Our flagship 36-hour hackathon bringing 400+ student builders together with cash prizes, cloud credits, and startup tracks.',
    fullDescription: 'Hack-AIKTC is the premier student hackathon of Navi Mumbai organized by GDGC AIKTC. Gather your squad of 2 to 4, innovate across Google Solution Challenge tracks (Sustainability, Health, Education, FinTech), build functional prototypes with mentor guidance, and pitch to industry judges.',
    image: '/images/events/hack-aiktc-2026.jpg',
    coverImage: '/images/events/hack-aiktc-2026.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Hackathon', 'Solution Challenge', 'Innovation', 'Prizes', 'Mentorship'],
    rsvpCount: 380,
    capacity: 450,
    agenda: [
      { time: 'Day 1 - 09:00 AM', title: 'Opening Ceremony & Track Unveiling', description: 'Keynotes, rules, and problem statements announcement' },
      { time: 'Day 1 - 11:00 AM', title: 'Hacking Begins', description: 'First check-in and mentor pairing' },
      { time: 'Day 1 - 08:00 PM', title: 'Mid-Way Evaluation Round 1', description: 'Technical architecture feedback from mentors' },
      { time: 'Day 2 - 08:00 AM', title: 'Breakfast & Pitch Rehearsals', description: 'Preparing 3-minute project demo slides' },
      { time: 'Day 2 - 01:00 PM', title: 'Final Pitching to Jury', description: 'Top 10 finalists present live on stage' },
      { time: 'Day 2 - 04:30 PM', title: 'Awards & Closing Ceremony', description: 'Cash prizes of INR 1,00,000+ announced' }
    ],
    speakers: [
      {
        name: 'Saif Sayed',
        role: 'GDGC Lead 2025-26',
        image: '/images/team/saif-sayed.jpg',
        avatar: '/images/team/saif-sayed.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
        bio: 'Leading community operations, partnerships, and technical programs across AIKTC engineering campus.'
      }
    ],
    prerequisites: ['Team of 2-4 members', 'GitHub account', 'Student ID card']
  },
  {
    id: 'evt-4',
    slug: 'modern-web-development-bootcamp',
    title: 'Modern Web Bootcamp: React 19, Next.js & Tailwind CSS',
    type: 'Workshop',
    status: 'past',
    date: 'Sep 18, 2026',
    time: '10:00 AM – 2:00 PM IST',
    location: 'Seminar Hall 2, AIKTC',
    mode: 'In-Person',
    shortDescription: 'Deep dive into component architecture, React Server Components, state management, and building slick responsive web UIs.',
    fullDescription: 'An interactive hands-on bootcamp exploring the cutting edge of web engineering. We coded a full-stack real-time collaboration dashboard from scratch, covered accessibility best practices, and deployed it on Vercel.',
    image: '/images/events/modern-web-bootcamp.jpg',
    coverImage: '/images/events/modern-web-bootcamp.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'WebDev'],
    rsvpCount: 220,
    capacity: 220
  },
  {
    id: 'evt-5',
    slug: 'android-compose-camp',
    title: 'Android Compose Camp: Building Modern Native Apps',
    type: 'Study Jam',
    status: 'past',
    date: 'Aug 28, 2026',
    time: '11:00 AM – 3:30 PM IST',
    location: 'Lab 301, AIKTC',
    mode: 'In-Person',
    shortDescription: 'Built declarative Android apps with Kotlin and Jetpack Compose with Material Design 3 and Coroutines.',
    fullDescription: 'Students experienced the future of native Android development using Kotlin and Jetpack Compose. Learned reactive state hoisting, Material 3 theming, animations, and Room database integration.',
    image: '/images/events/android-compose-camp.jpg',
    coverImage: '/images/events/android-compose-camp.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Material 3', 'Mobile'],
    rsvpCount: 165,
    capacity: 170
  },
  {
    id: 'evt-6',
    slug: 'solutions-challenge-ideation-sprint',
    title: 'Google Solution Challenge: UN SDG Ideation Sprint',
    type: 'Competition',
    status: 'past',
    date: 'Jul 15, 2026',
    time: '01:00 PM – 5:00 PM IST',
    location: 'Innovation Cell, AIKTC',
    mode: 'Hybrid',
    shortDescription: 'Formed cross-departmental teams to brainstorm technology solutions addressing the 17 United Nations Sustainable Development Goals.',
    fullDescription: 'Sprint focused on framing problem statements, interviewing local stakeholders in Navi Mumbai/Panvel region, wireframing prototypes, and mapping solutions to Google Cloud and Android SDKs.',
    image: '/images/events/solution-challenge-ideation.jpg',
    coverImage: '/images/events/solution-challenge-ideation.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    tags: ['Solution Challenge', 'Design Thinking', 'UN SDG', 'Ideation'],
    rsvpCount: 195,
    capacity: 200
  }
];
