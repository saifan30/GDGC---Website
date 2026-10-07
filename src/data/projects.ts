import { Project } from '../types';

/**
 * Centralized Projects Directory
 *
 * All project preview images are configured via local asset paths under `/images/projects/`.
 * Contributor avatars reference `/images/team/`.
 */
export const projectsData: Project[] = [
  {
    id: 'proj-1',
    slug: 'medigemini-multimodal-assistant',
    title: 'MediGemini: Multimodal Clinical Assistant',
    category: 'AI',
    shortDescription: 'AI assistant analyzing clinical radiological reports and medication prescriptions with multi-lingual patient summaries.',
    fullDescription: 'MediGemini bridges the communication gap between rural healthcare facilities and patients across Maharashtra. Powered by Google Gemini 2.5 Flash and Google Cloud Vertex AI, it parses complex medical prescriptions and lab reports, converting technical jargon into simplified vernacular explanations (Marathi, Hindi, English) with voice synthesis.',
    problem: 'Patients in semi-urban and rural areas often struggle to decipher handwriting on doctor prescriptions and technical diagnostic radiology reports, leading to improper dosage adherence.',
    solution: 'An accessible progressive web application that accepts photos of prescriptions and medical reports, processes them via Gemini multimodal OCR with medical safety guardrails, and renders actionable dosage calendars and audio explanations.',
    features: [
      'Multimodal prescription OCR & extraction with Gemini 2.5 Flash',
      'Vernacular explanations in Marathi, Hindi, and English',
      'Text-to-speech audio guidance for low-literacy users',
      'Medicine dosage reminder notifications via WhatsApp API',
      'HIPAA & DPDP compliant privacy filters removing PII locally'
    ],
    image: '/images/projects/medigemini.jpg',
    previewImage: '/images/projects/medigemini.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Gemini API', 'Vertex AI', 'React', 'FastAPI', 'Google Cloud Run'],
    team: [
      {
        name: 'Amaan Shaikh',
        role: 'AI Lead',
        image: '/images/team/amaan-shaikh.jpg',
        avatar: '/images/team/amaan-shaikh.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Sara Khan',
        role: 'Frontend Eng',
        image: '/images/team/sara-khan.jpg',
        avatar: '/images/team/sara-khan.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Faizan Ansari',
        role: 'Cloud Architect',
        image: '/images/team/faizan-ansari.jpg',
        avatar: '/images/team/faizan-ansari.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
      }
    ],
    githubUrl: 'https://github.com/gdgc-aiktc/medigemini',
    liveDemoUrl: 'https://medigemini.aiktc.dev',
    stars: 142,
    stats: [
      { label: 'Prescriptions Parsed', value: '12,400+' },
      { label: 'Accuracy Score', value: '96.8%' },
      { label: 'Languages Supported', value: '4' }
    ]
  },
  {
    id: 'proj-2',
    slug: 'campusflow-aiktc-smart-navigation',
    title: 'CampusFlow: AR Indoor Navigation & Timetable',
    category: 'Android',
    shortDescription: 'Native Android app featuring AR indoor guidance for 6-floor AIKTC engineering complex with live lecture tracking.',
    fullDescription: 'Navigating across AIKTC engineering blocks, seminar halls, labs, and faculty cabins is daunting for freshmen and visitors. CampusFlow uses Google ARCore and indoor BLE beacons to provide step-by-step augmented reality pathway navigation superimposed directly on the phone camera view.',
    problem: 'Over 3,000 students across 6 departments waste significant time locating examination halls, faculty cabins, and project labs during busy college weeks.',
    solution: 'A Jetpack Compose Android application using Google ARCore and Kotlin Coroutines, providing smooth blue-line 3D arrows navigating students right to their destination doorway.',
    features: [
      'Turn-by-turn AR camera overlay navigation using Google ARCore',
      'Automated timetable synchronization with Google Calendar',
      'Offline floor plan caching with Room Database',
      'Classroom vacancy and open computer lab finder',
      'Emergency exit and fire safety evacuation route mapping'
    ],
    image: '/images/projects/campusflow.jpg',
    previewImage: '/images/projects/campusflow.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: ['Kotlin', 'Jetpack Compose', 'ARCore', 'Firebase', 'Room DB'],
    team: [
      {
        name: 'Rehan Qureshi',
        role: 'Android Dev',
        image: '/images/team/rehan-qureshi.jpg',
        avatar: '/images/team/rehan-qureshi.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Zoya Siddiqui',
        role: 'UI/UX Designer',
        image: '/images/team/zoya-siddiqui.jpg',
        avatar: '/images/team/zoya-siddiqui.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
      }
    ],
    githubUrl: 'https://github.com/gdgc-aiktc/campusflow-android',
    liveDemoUrl: 'https://play.google.com',
    stars: 98,
    stats: [
      { label: 'Active Campus Users', value: '2,800+' },
      { label: 'Floors Mapped', value: '7' },
      { label: 'Navigation Accuracy', value: '< 1 meter' }
    ]
  },
  {
    id: 'proj-3',
    slug: 'cloudpulse-green-infra-optimizer',
    title: 'CloudPulse: Carbon & Cost Infrastructure Optimizer',
    category: 'Cloud',
    shortDescription: 'Serverless dashboard monitoring GCP compute clusters for idle resources, carbon emissions, and microservice billing.',
    fullDescription: 'CloudPulse provides automated FinOps and GreenOps for student and startup GCP projects. It inspects Google Cloud instances, Cloud SQL, and unattached persistent disks, giving students actionable cost-reduction blueprints and automated shutdown schedules during off-campus hours.',
    problem: 'Student developers and university research labs often incur unexpected cloud bills from abandoned test clusters and inefficient compute configurations.',
    solution: 'A lightweight serverless observer that connects via GCP Service Accounts, calculates idle resource wastage, and optimizes deployment tier recommendations.',
    features: [
      'Automated scheduled shutdown rules via Google Cloud Scheduler',
      'Real-time carbon footprint tracker using Google Carbon Footprint API',
      'Discord & Slack automated alerts for budget thresholds',
      'One-click orphaned disk and snapshot cleanup scripts'
    ],
    image: '/images/projects/cloudpulse.jpg',
    previewImage: '/images/projects/cloudpulse.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['Google Cloud', 'Cloud Functions', 'Terraform', 'Next.js', 'Go'],
    team: [
      {
        name: 'Faizan Ansari',
        role: 'DevOps Lead',
        image: '/images/team/faizan-ansari.jpg',
        avatar: '/images/team/faizan-ansari.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Saif Sayed',
        role: 'Backend Lead',
        image: '/images/team/saif-sayed.jpg',
        avatar: '/images/team/saif-sayed.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'
      }
    ],
    githubUrl: 'https://github.com/gdgc-aiktc/cloudpulse',
    liveDemoUrl: 'https://cloudpulse.aiktc.dev',
    stars: 115,
    stats: [
      { label: 'Cloud Credits Saved', value: '$8,400+' },
      { label: 'Clusters Monitored', value: '45+' },
      { label: 'Emissions Reduced', value: '1.8 Tons' }
    ]
  },
  {
    id: 'proj-4',
    slug: 'civicpulse-panvel-citizen-reporter',
    title: 'CivicPulse: Smart Municipal Citizen Platform',
    category: 'Web',
    shortDescription: 'Community issue reporting system for Panvel Municipal Corporation with automated geotagging and AI priority triage.',
    fullDescription: 'Built as part of Google Solution Challenge, CivicPulse empowers citizens in Navi Mumbai to report civic issues (potholes, garbage dumping, broken streetlights, water supply leaks) with real-time tracking and automated municipality department routing.',
    problem: 'Traditional citizen grievance redressal is slow, lacks transparent progress tracking, and duplicates reports for the same incident.',
    solution: 'A responsive web application with progressive image compression, Google Maps API location geocoding, automated duplicate grouping using Gemini vision embeddings, and transparent status pipelines.',
    features: [
      'Google Maps Geolocation with precise road segment snap',
      'Computer vision verification preventing fake image uploads',
      'Automated ticket routing to appropriate municipal departments',
      'Citizen upvoting system to highlight high-priority bottlenecks'
    ],
    image: '/images/projects/civicpulse.jpg',
    previewImage: '/images/projects/civicpulse.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Google Maps API', 'Firebase', 'Tailwind CSS'],
    team: [
      {
        name: 'Ayaan Shaikh',
        role: 'Web Lead',
        image: '/images/team/ayaan-shaikh.jpg',
        avatar: '/images/team/ayaan-shaikh.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Zoya Siddiqui',
        role: 'UI Lead',
        image: '/images/team/zoya-siddiqui.jpg',
        avatar: '/images/team/zoya-siddiqui.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80'
      }
    ],
    githubUrl: 'https://github.com/gdgc-aiktc/civicpulse-panvel',
    liveDemoUrl: 'https://civicpulse.aiktc.dev',
    stars: 89,
    stats: [
      { label: 'Complaints Resolved', value: '640+' },
      { label: 'Average Resolution Time', value: '48 hrs' },
      { label: 'Citizens Reached', value: '3,200+' }
    ]
  },
  {
    id: 'proj-5',
    slug: 'agroguard-leaf-disease-detector',
    title: 'AgroGuard: Edge AI Crop Disease Diagnostic',
    category: 'Data',
    shortDescription: 'Lightweight TensorFlow Lite model running offline on Android phones to identify crop diseases for Maharashtra farmers.',
    fullDescription: 'AgroGuard brings precision agriculture to smallholder farmers with limited cellular connectivity in Raigad and Konkan regions. It detects 28 common crop afflictions across tomato, rice, cotton, and mango crops with localized organic remediation instructions.',
    problem: 'Delayed detection of fungal blight and pest infestation destroys up to 35% of crop yields before agricultural extension officers can visit farms.',
    solution: 'An on-device quantized TensorFlow Lite model that functions 100% offline without requiring internet, diagnosing leaf photos in under 200 milliseconds.',
    features: [
      'Edge TensorFlow Lite inference with 94.3% test accuracy',
      'Completely offline capable with zero data requirement',
      'Integrated weather hazard forecasting via Google Weather API',
      'Bilingual audio advice recorded by regional agricultural scientists'
    ],
    image: '/images/projects/agroguard.jpg',
    previewImage: '/images/projects/agroguard.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
    tags: ['TensorFlow Lite', 'Python', 'Android', 'Computer Vision', 'Edge AI'],
    team: [
      {
        name: 'Amaan Shaikh',
        role: 'ML Lead',
        image: '/images/team/amaan-shaikh.jpg',
        avatar: '/images/team/amaan-shaikh.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Bilal Khan',
        role: 'Data Engineer',
        image: '/images/team/bilal-khan.jpg',
        avatar: '/images/team/bilal-khan.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
      }
    ],
    githubUrl: 'https://github.com/gdgc-aiktc/agroguard-tflite',
    liveDemoUrl: 'https://agroguard.aiktc.dev',
    stars: 167,
    stats: [
      { label: 'Crop Classes', value: '28' },
      { label: 'Model Size', value: '4.2 MB' },
      { label: 'Inference Time', value: '180ms' }
    ]
  },
  {
    id: 'proj-6',
    slug: 'gdgc-portal-community-hub',
    title: 'GDGC AIKTC Portal & Badge Tracker',
    category: 'Web',
    shortDescription: 'The student community portal with automated RSVP check-ins, study jam leaderboard, and digital skill credentialing.',
    fullDescription: 'Our open-source digital community operating system. Integrates QR-code ticket scanning at campus doors, tracks student participation across study jams and hackathons, and awards dynamic verifiable digital achievement certificates.',
    problem: 'Managing physical registrations, certificate distribution, and study jam credits for 500+ attendees with Google Forms leads to bottlenecks.',
    solution: 'A unified portal with instant Google Sign-In, real-time ticket wallet with QR validation, and leaderboards synchronized with Google Cloud Skill Boost profile public URLs.',
    features: [
      'Instant attendee check-in via camera QR scanner',
      'Automated Google Cloud Skill Boost badge scraping & ranking',
      'Dynamic PDF certificate generation with cryptographic verification hash',
      'Real-time RSVP analytics dashboard for organizing team'
    ],
    image: '/images/projects/gdgc-portal.jpg',
    previewImage: '/images/projects/gdgc-portal.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
    team: [
      {
        name: 'Saif Sayed',
        role: 'Lead Architect',
        image: '/images/team/saif-sayed.jpg',
        avatar: '/images/team/saif-sayed.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80'
      },
      {
        name: 'Sara Khan',
        role: 'Full Stack',
        image: '/images/team/sara-khan.jpg',
        avatar: '/images/team/sara-khan.jpg',
        placeholderImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
      }
    ],
    githubUrl: 'https://github.com/gdgc-aiktc/gdgc-portal',
    liveDemoUrl: 'https://portal.aiktc.dev',
    stars: 204,
    stats: [
      { label: 'Check-in Time', value: '< 2 secs' },
      { label: 'Badges Tracked', value: '1,450+' },
      { label: 'Active Profiles', value: '520+' }
    ]
  }
];
