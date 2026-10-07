import { GalleryItem } from '../types';

/**
 * Centralized Gallery Directory
 *
 * All gallery images are configured via local asset paths under `/images/gallery/`.
 */
export const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'GenAI Study Jam Keynote in Main Auditorium',
    category: 'Workshops',
    date: 'Oct 2026',
    image: '/images/gallery/genai-keynote-auditorium.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    attendeesCount: '250+ Attendees'
  },
  {
    id: 'gal-2',
    title: 'Late Night Hacking Sprint at Hack-AIKTC',
    category: 'Hackathons',
    date: 'Dec 2025',
    image: '/images/gallery/hack-aiktc-night-sprint.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    attendeesCount: '400+ Hackers'
  },
  {
    id: 'gal-3',
    title: 'Hands-on Cloud Lab Session in Computer Dept',
    category: 'Hands-on Labs',
    date: 'Nov 2025',
    image: '/images/gallery/cloud-lab-session.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    attendeesCount: '120+ Students'
  },
  {
    id: 'gal-4',
    title: 'Solution Challenge Team Demo & Jury Review',
    category: 'Project Showcase',
    date: 'Feb 2026',
    image: '/images/gallery/solution-challenge-jury.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    attendeesCount: '15 Teams'
  },
  {
    id: 'gal-5',
    title: 'Android Compose Camp Live Code-Along',
    category: 'Bootcamps',
    date: 'Aug 2025',
    image: '/images/gallery/android-compose-camp.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
    attendeesCount: '160+ Developers'
  },
  {
    id: 'gal-6',
    title: 'Core Team Strategy & Campus Outreach Meetup',
    category: 'Community',
    date: 'Jul 2026',
    image: '/images/gallery/core-team-meetup.jpg',
    placeholderImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    attendeesCount: 'Core Crew'
  }
];
