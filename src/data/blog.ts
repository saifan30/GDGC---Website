import { BlogPost } from '../types';

/**
 * Centralized GDGC Tech Blog Directory
 *
 * Cover images reference `/images/blog/`. Author avatars reference `/images/team/`.
 */
export const blogData: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'demystifying-gemini-function-calling',
    title: 'Demystifying Gemini Function Calling: Building Action-Oriented Agents',
    category: 'AI',
    excerpt: 'How to connect Google Gemini 2.5 models to external database queries and web APIs with type-safe schema declarations.',
    content: [
      'Generative AI has evolved from static text completion to agentic workflows where models make decisions, invoke specialized tools, and synthesize results.',
      'When building with the @google/genai SDK, Function Calling allows you to provide structured JSON Schema function declarations in your model configuration. The model then intelligently outputs arguments instead of raw prose when a tool call is appropriate.',
      'During our recent GDGC AIKTC GenAI study jam, student teams built everything from weather-aware route planners to automated GitHub issue triage bots using this exact mechanism.',
      'Key architectural tip: Always validate parameters returned by the model before executing operations, and handle tool errors gracefully to allow the agent to self-correct its strategy.'
    ],
    author: {
      name: 'Amaan Shaikh',
      role: 'AI/ML Lead, GDGC AIKTC',
      image: '/images/team/amaan-shaikh.jpg',
      avatar: '/images/team/amaan-shaikh.jpg',
      placeholderImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Oct 02, 2026',
    readTime: '6 min read',
    image: '/images/blog/gemini-function-calling.jpg',
    coverImage: '/images/blog/gemini-function-calling.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Gemini', 'Generative AI', 'TypeScript', 'Agents']
  },
  {
    id: 'post-2',
    slug: 'surviving-36-hour-hackathons-playbook',
    title: 'The 36-Hour Hackathon Playbook: From Blank Slate to Winning Demo',
    category: 'Hackathons',
    excerpt: 'Tactical lessons from our AIKTC podium finishes: scope reduction, pitch design, and fast zero-config deployments.',
    content: [
      'In a competitive student hackathon, great code is only 40% of the victory. The other 60% comes from sharp problem framing, seamless team execution, and a demo that makes the judges nod within 15 seconds.',
      'First rule of hackathon engineering: Ruthlessly kill secondary features. A prototype that does one difficult thing end-to-end flawlessly will always beat a dashboard with ten semi-functional buttons.',
      'Second rule: Set up deployment pipelines within the first 90 minutes. Do not wait for 3:00 AM on Sunday to debug Docker container builds or DNS propagations.',
      'Lastly: Rehearse your live pitch at least 4 times. Ensure the presenter never touches the keyboard while the developer demonstrates the user flow.'
    ],
    author: {
      name: 'Saif Sayed',
      role: 'GDGC Lead 2025-26',
      image: '/images/team/saif-sayed.jpg',
      avatar: '/images/team/saif-sayed.jpg',
      placeholderImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 24, 2026',
    readTime: '8 min read',
    image: '/images/blog/hackathon-playbook.jpg',
    coverImage: '/images/blog/hackathon-playbook.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Hackathons', 'Product Thinking', 'Mentorship', 'Pitching']
  },
  {
    id: 'post-3',
    slug: 'cloud-run-vs-gke-for-student-startups',
    title: 'Google Cloud Run vs GKE: Which Should Your Student Startup Choose?',
    category: 'Cloud',
    excerpt: 'A pragmatic cost and operational comparison for running containerized workloads on Google Cloud.',
    content: [
      'When students start architecting their Google Solution Challenge projects, one of the most common debates is: should we spin up a GKE cluster or deploy serverless to Cloud Run?',
      'For 95% of early-stage products, Cloud Run is the clear winner. You get scale-to-zero economics, automated TLS certificate provisioning, zero cluster node management, and seamless rollout revisions.',
      'GKE shines when you require persistent stateful pods, custom network overlays, daemonsets, or low-level kernel configurations. But it requires ongoing operational overhead that distracts small teams from product iteration.',
      'Our recommendation: Start on Cloud Run, package everything into clean OCI Docker containers, and only migrate to GKE when microservice inter-dependencies truly warrant it.'
    ],
    author: {
      name: 'Faizan Ansari',
      role: 'Cloud & DevOps Lead',
      image: '/images/team/faizan-ansari.jpg',
      avatar: '/images/team/faizan-ansari.jpg',
      placeholderImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 11, 2026',
    readTime: '5 min read',
    image: '/images/blog/cloud-run-vs-gke.jpg',
    coverImage: '/images/blog/cloud-run-vs-gke.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['Google Cloud', 'Cloud Run', 'Kubernetes', 'DevOps']
  },
  {
    id: 'post-4',
    slug: 'declarative-ui-with-jetpack-compose',
    title: 'Why Declarative UI Changed the Game for Modern Android Engineering',
    category: 'Android',
    excerpt: 'Transitioning from XML layouts to Kotlin Jetpack Compose: state hoisting, recomposition, and animation mechanics.',
    content: [
      'The era of maintaining disjoint XML layout files, finding views by ID, and wrestling with adapter boilerplate in RecyclerViews is officially over.',
      'Jetpack Compose allows Android engineers to define the UI purely as a mathematical function of current state. When the state changes, Compose automatically recalculates only the dirty composables.',
      'In this article, we examine how state hoisting keeps components stateless and reusable, and look at how animateDpAsState delivers delightful 60fps micro-interactions with minimal lines of code.'
    ],
    author: {
      name: 'Rehan Qureshi',
      role: 'Android & Mobile Lead',
      image: '/images/team/rehan-qureshi.jpg',
      avatar: '/images/team/rehan-qureshi.jpg',
      placeholderImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Aug 29, 2026',
    readTime: '7 min read',
    image: '/images/blog/jetpack-compose.jpg',
    coverImage: '/images/blog/jetpack-compose.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Mobile Architecture']
  },
  {
    id: 'post-5',
    slug: 'building-accessible-web-apps-in-2026',
    title: 'The Accessible Web: Beyond Color Contrast & Alt Tags',
    category: 'Web',
    excerpt: 'How we built keyboard navigable, screen-reader verified components for GDGC AIKTC digital properties.',
    content: [
      'Accessibility (a11y) is not an afterthought or a compliance checklist; it is an intrinsic measure of software craftsmanship.',
      'In our redesign of the GDGC AIKTC web platform, we committed to semantic HTML5 milestones, ARIA live regions for dynamic modal popups, and full keyboard tab-navigation with visible focus rings.',
      'We also made sure that high-motion animations gracefully degrade when the user specifies prefers-reduced-motion in their operating system preferences.'
    ],
    author: {
      name: 'Ayaan Shaikh',
      role: 'Web Development Lead',
      image: '/images/team/ayaan-shaikh.jpg',
      avatar: '/images/team/ayaan-shaikh.jpg',
      placeholderImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Aug 14, 2026',
    readTime: '5 min read',
    image: '/images/blog/accessible-web.jpg',
    coverImage: '/images/blog/accessible-web.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Accessibility', 'React', 'Design Systems', 'Web Standards']
  },
  {
    id: 'post-6',
    slug: 'cracking-google-summer-of-code-from-college',
    title: 'Cracking GSoC & Top Tech Internships as an AIKTC Student',
    category: 'Career',
    excerpt: 'Actionable steps to build a standout GitHub profile, contribute to major open source projects, and land global developer internships.',
    content: [
      'Many students believe you need to be from an IIT to contribute to global open-source software or crack programs like Google Summer of Code (GSoC). That is a total myth.',
      'The open-source community only cares about your pull requests, clear communication, and consistency. Start by reading issue trackers, fixing test coverage, and clarifying documentation on repositories you already use.',
      'In this guide, we share how 3 AIKTC students made their first contributions, communicated with project maintainers on Slack/IRC, and drafted winning proposals.'
    ],
    author: {
      name: 'Sara Khan',
      role: 'Co-Lead & Community Manager',
      image: '/images/team/sara-khan.jpg',
      avatar: '/images/team/sara-khan.jpg',
      placeholderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Jul 28, 2026',
    readTime: '9 min read',
    image: '/images/blog/cracking-gsoc.jpg',
    coverImage: '/images/blog/cracking-gsoc.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    tags: ['Career', 'Open Source', 'GSoC', 'Mentorship']
  }
];
