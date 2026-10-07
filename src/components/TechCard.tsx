import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export interface TechItem {
  id: string;
  name: string;
  description: string;
  accentColor: 'blue' | 'red' | 'yellow' | 'green';
  tagline: string;
  url: string;
  iconSvg: React.ReactNode;
}

export const techList: TechItem[] = [
  {
    id: 'gcp',
    name: 'Google Cloud',
    tagline: 'Enterprise Cloud Infrastructure',
    description: 'Serverless compute with Cloud Run, Kubernetes with GKE, BigQuery, and scalable global storage.',
    accentColor: 'blue',
    url: 'https://cloud.google.com',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#4285F4"/>
      </svg>
    )
  },
  {
    id: 'firebase',
    name: 'Firebase',
    tagline: 'App Development Platform',
    description: 'Real-time database, Authentication, Cloud Functions, and Firebase Hosting for rapid product development.',
    accentColor: 'yellow',
    url: 'https://firebase.google.com',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M4.5 18L9 2l4.5 7.5L4.5 18z" fill="#FFA000"/>
        <path d="M13.5 9.5L16 4.5l3.5 13.5H4.5l9-8.5z" fill="#F57C00"/>
        <path d="M19.5 18L16 4.5l-2.5 5 6 8.5z" fill="#FFCA28"/>
      </svg>
    )
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    tagline: 'Next-Gen Multimodal AI',
    description: 'State-of-the-art multimodal generative models for text, code, audio, and visual reasoning with low latency.',
    accentColor: 'blue',
    url: 'https://deepmind.google/technologies/gemini/',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#gemini-grad)"/>
        <defs>
          <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4285F4"/>
            <stop offset="0.5" stopColor="#9B51E0"/>
            <stop offset="1" stopColor="#EA4335"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    id: 'aistudio',
    name: 'Google AI Studio',
    tagline: 'Rapid AI Prototyping',
    description: 'Web-based developer sandbox to test prompts, system instructions, function calls, and export production code.',
    accentColor: 'red',
    url: 'https://aistudio.google.com',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#EA4335" strokeWidth="2.5"/>
        <path d="M8 12h8M12 8v8" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'android',
    name: 'Android & Jetpack Compose',
    tagline: 'Modern Mobile OS & UI',
    description: 'Declarative native Android app engineering using Kotlin, Material Design 3, Coroutines, and ARCore.',
    accentColor: 'green',
    url: 'https://developer.android.com',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zM15.53 2.16l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.62 1.23 12.83 1 12 1s-1.62.23-2.64.63L7.88.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.3 1.3C6.72 3.32 5.5 5.51 5.5 8h13c0-2.49-1.22-4.68-2.97-5.84z" fill="#34A853"/>
      </svg>
    )
  },
  {
    id: 'flutter',
    name: 'Flutter',
    tagline: 'Multi-Platform Framework',
    description: 'Build, test, and deploy beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    accentColor: 'blue',
    url: 'https://flutter.dev',
    iconSvg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 2L3 13.5l3.5 3.5L18 5.5 14.5 2z" fill="#4285F4"/>
        <path d="M14.5 14L8 20.5l3.5 3.5L21.5 14h-7z" fill="#02569B"/>
        <path d="M11.5 17l3.5-3.5 3.5 3.5-3.5 3.5-3.5-3.5z" fill="#0175C2"/>
      </svg>
    )
  }
];

export const TechCard: React.FC<{ item: TechItem }> = ({ item }) => {
  const colorBorders = {
    blue: 'hover:border-[#4285F4]/50 group-hover:shadow-[#4285F4]/10',
    red: 'hover:border-[#EA4335]/50 group-hover:shadow-[#EA4335]/10',
    yellow: 'hover:border-[#FBBC05]/50 group-hover:shadow-[#FBBC05]/10',
    green: 'hover:border-[#34A853]/50 group-hover:shadow-[#34A853]/10'
  }[item.accentColor];

  const dotColor = {
    blue: 'bg-[#4285F4]',
    red: 'bg-[#EA4335]',
    yellow: 'bg-[#FBBC05]',
    green: 'bg-[#34A853]'
  }[item.accentColor];

  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`group relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl ${colorBorders} transition-all duration-300 flex flex-col justify-between`}
    >
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
            {item.iconSvg}
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
        </div>

        <div className="flex items-center gap-1.5 mb-1">
          <span className={`w-2 h-2 rounded-full ${dotColor}`} />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {item.tagline}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
          {item.name}
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
        <span>Explore Docs</span>
        <span className="text-[#4285F4] group-hover:translate-x-0.5 transition-transform">→</span>
      </div>
    </motion.a>
  );
};
