import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Code2, Rocket, Users, BookOpen, Cpu, Globe, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { GoogleDots, GoogleColorBar } from '../components/GoogleColorBar';
import { AppImage } from '../components/AppImage';
import { timelineData } from '../data/timeline';
import { aboutData } from '../data/about';

export const About: React.FC<{ onOpenJoinModal: () => void }> = ({ onOpenJoinModal }) => {
  const whatWeDoCards = [
    {
      title: 'Learning',
      icon: <BookOpen className="w-6 h-6 text-[#4285F4]" />,
      color: 'blue',
      description: 'Hands-on workshops, peer study jams, code-alongs, and guided certifications across Google Cloud, Gemini, and modern web frameworks.',
      badge: 'Skill Up'
    },
    {
      title: 'Building',
      icon: <Cpu className="w-6 h-6 text-[#EA4335]" />,
      color: 'red',
      description: 'We prioritize shipping over lecturing. Student teams turn ideas into open-source products, participate in hackathons, and solve local problems.',
      badge: 'Ship Code'
    },
    {
      title: 'Community',
      icon: <Users className="w-6 h-6 text-[#FBBC05]" />,
      color: 'yellow',
      description: 'An ego-free space where juniors and seniors collaborate without intimidation. Mentorship, peer review, and lifelong friendships.',
      badge: 'Connect'
    },
    {
      title: 'Innovation',
      icon: <Rocket className="w-6 h-6 text-[#34A853]" />,
      color: 'green',
      description: 'Preparing student teams for Google Solution Challenge and international innovation stages with real industry architecture patterns.',
      badge: 'Compete'
    }
  ];

  const whyGdgcPoints = [
    'Direct access to Google developer resources, Cloud Skill Boost credits, and event swag.',
    'Collaborate across disciplines: Computer, IT, Mechanical, and Civil engineering students.',
    'Build a verifiable GitHub portfolio of production projects that impresses tech recruiters.',
    'Learn how to present, pitch, and lead technical workshops with confidence.',
    'Network with alumni, industry architects, and Google Developer Experts (GDEs).'
  ];

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white">
      {/* Hero */}
      <section className="relative py-20 bg-[#090d16] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#4285F4]/15 blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-6"
          >
            <GoogleDots size={6} />
            <span>About GDGC AIKTC</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight font-sans text-white leading-tight"
          >
            More than a community. <br />
            <span className="text-[#4285F4]">A place to build.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Google Developer Groups on Campus at Anjuman-I-Islam’s Kalsekar Technical Campus (AIKTC) bridges the gap between classroom theory and real-world software engineering.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#0c111e] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-[#111726] border border-white/10 hover:border-[#4285F4]/40 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#4285F4]">Our Mission</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Empowering campus engineers with practical capability</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                To create a collaborative ecosystem where any student—regardless of prior coding background or academic year—can learn modern developer technologies, build real-world solutions for local communities, and transition into top-tier tech professionals.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-[#111726] border border-white/10 hover:border-[#34A853]/40 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#34A853]">Our Vision</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">A national hub of builder culture in Navi Mumbai</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                To establish AIKTC as one of India's most recognized collegiate developer incubators, recognized for producing open-source pioneers, hackathon winners, and ethical AI builders solving United Nations Sustainable Development Goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Pillars"
            title="What we do"
            description="Four fundamental commitments that define every event, workshop, and study jam we organize."
            theme="dark"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoCards.map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-[#111726] border border-white/10 hover:border-slate-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                      {card.icon}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-white/5">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GDGC AIKTC? */}
      <section className="py-20 bg-slate-50 text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-200 text-slate-800 mb-4">
                <GoogleDots size={6} />
                <span>Student Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Why should you get involved with GDGC?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Joining GDGC AIKTC is not about sitting in a lecture hall listening to slides. It is about active participation, shipping GitHub code, meeting peers who hold you accountable, and opening doors to international developer opportunities.
              </p>

              <div className="mt-8 space-y-3.5">
                {whyGdgcPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#34A853] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenJoinModal}
                  className="px-6 py-3 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
                >
                  Join the Community Today
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
                <AppImage
                  src={aboutData.campusCollaborationImage.image}
                  fallbackSrc={aboutData.campusCollaborationImage.placeholderImage}
                  alt={aboutData.campusCollaborationImage.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-white border border-slate-200 shadow-xl hidden sm:block">
                <p className="text-xs font-bold text-slate-900">Anjuman-I-Islam’s Kalsekar Technical Campus</p>
                <p className="text-[11px] text-slate-500">Khandagao, New Panvel · Navi Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Timeline Overview */}
      <section className="py-20 bg-[#090d16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="History"
            title="Growing year by year"
            description="From chartered club to campus-wide technology catalyst."
            theme="dark"
          />

          <div className="mt-12 space-y-6">
            {timelineData.map((item) => (
              <div
                key={item.year}
                className="p-6 rounded-2xl bg-[#111726] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold font-mono text-[#4285F4]">{item.year}</span>
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">{item.description}</p>
                </div>
                <div className="shrink-0 text-xs font-medium text-slate-400">
                  {item.highlights.length} key achievements
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#080c14] border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Become part of the community.
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            No prerequisites. No membership fees. Just a passion for building software.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onOpenJoinModal}
              className="px-6 py-3 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white text-sm font-bold shadow-lg shadow-[#4285F4]/20 cursor-pointer"
            >
              Join GDGC AIKTC
            </button>
            <Link
              to="/team"
              className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
