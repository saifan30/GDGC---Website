import { StudentStory } from '../types';

/**
 * Centralized Student Stories & Testimonials Directory
 *
 * Member images reference `/images/stories/` or `/images/team/`.
 */
export const storiesData: StudentStory[] = [
  {
    id: 'story-1',
    name: 'Zaid Patel',
    role: 'Cloud Architect Intern @ Enterprise Cloud',
    batch: 'Class of 2025 · Information Technology',
    image: '/images/stories/zaid-patel.jpg',
    avatar: '/images/stories/zaid-patel.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    quote: 'GDGC turned theory into production code. I went from reading textbook slides to deploying GKE clusters and landing my cloud role.',
    story: 'Before joining GDGC AIKTC in my second year, I had zero exposure to real cloud consoles or Git branching workflows. The Cloud Study Jam labs gave me free credits and patient peer mentors who sat with me till my containers compiled. By third year, I was conducting workshops myself.',
    keyOutcome: 'Cracked Associate Cloud Engineer Certification & secured a high-package cloud placement.',
    accentColor: 'blue'
  },
  {
    id: 'story-2',
    name: 'Sara Khan',
    role: 'Frontend Engineer & Community Co-Lead',
    batch: 'Class of 2026 · Information Technology',
    image: '/images/stories/sara-khan.jpg',
    avatar: '/images/stories/sara-khan.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    quote: 'The collaborative energy here is unmatched. You never build alone—there is always someone to test your PR or ideate with.',
    story: 'I joined as a curious fresher who only knew basic HTML/CSS. Through the web bootcamps and building the campus portal, I mastered React and modern UI engineering. When we pitched at the Google Solution Challenge, presenting to international jury members completely transformed my confidence.',
    keyOutcome: 'Built 4 production web apps and co-led a chapter of 500+ builders.',
    accentColor: 'red'
  },
  {
    id: 'story-3',
    name: 'Rehan Qureshi',
    role: 'Android Engineer & Hackathon Builder',
    batch: 'Class of 2026 · Computer Engineering',
    image: '/images/stories/rehan-qureshi.jpg',
    avatar: '/images/stories/rehan-qureshi.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    quote: 'GDGC gave me a crew of hungry builders. We hacked together for 36 hours straight and ended up taking the trophy.',
    story: 'Building in isolation is tough. At GDGC, I met teammates who shared my obsession for mobile app performance and smooth Jetpack Compose animations. Together we mapped our entire 6-floor campus in AR and won the regional hackathon.',
    keyOutcome: 'Won Smart India Hackathon & published 2 open-source Android libraries with 200+ stars.',
    accentColor: 'green'
  }
];
