import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Terminal, Award, Trophy, ChevronRight, Eye, X } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { StatCard } from '../components/StatCard';
import { EventCard } from '../components/EventCard';
import { ProjectCard } from '../components/ProjectCard';
import { TechCard, techList } from '../components/TechCard';
import { GoogleDots, GoogleColorBar } from '../components/GoogleColorBar';
import { AppImage } from '../components/AppImage';
import { eventsData } from '../data/events';
import { projectsData } from '../data/projects';
import { timelineData } from '../data/timeline';
import { achievementsData } from '../data/achievements';
import { storiesData } from '../data/stories';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';

export const Home: React.FC<{ onOpenJoinModal: () => void }> = ({ onOpenJoinModal }) => {
  // Event section state
  const [eventTab, setEventTab] = useState<'upcoming' | 'ongoing' | 'past'>('upcoming');
  // Project section state
  const [projectCategory, setProjectCategory] = useState<string>('All');
  // Gallery modal
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Filter events
  const filteredEvents = eventsData.filter((evt) => {
    if (eventTab === 'upcoming') return evt.status === 'upcoming';
    if (eventTab === 'past') return evt.status === 'past';
    return evt.status === 'ongoing';
  });

  // Filter projects
  const filteredProjects = projectsData.filter((proj) => {
    if (projectCategory === 'All') return true;
    return proj.category.toLowerCase() === projectCategory.toLowerCase();
  });

  return (
    <div className="relative overflow-hidden">
      {/* ================================================== */}
      {/* SECTION 1 — HERO (Dark Premium Hero)               */}
      {/* ================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 bg-[#090d16] text-white overflow-hidden">
        {/* Subtle developer grid background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

        {/* Ambient Google color orbs (soft blurred light) */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#4285F4]/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#EA4335]/12 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-[#34A853]/12 blur-[120px] pointer-events-none" />

        {/* Subtle floating developer code glyphs */}
        <div className="absolute top-28 right-[12%] hidden lg:flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md text-xs font-mono text-slate-400 select-none animate-pulse">
          <Terminal className="w-3.5 h-3.5 text-[#4285F4]" />
          <span>$ npx create-gdgc-project</span>
        </div>
        <div className="absolute bottom-28 left-[10%] hidden lg:flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-md text-xs font-mono text-slate-400 select-none">
          <span className="w-2 h-2 rounded-full bg-[#34A853]" />
          <span>cloud-run: healthy (200 OK)</span>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Subtle Google-color badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-md mb-6 hover:border-white/20 transition-colors"
          >
            <GoogleDots size={6} />
            <span>Google Developer Groups on Campus · AIKTC</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-sans leading-[1.08] select-none"
          >
            BUILD. <span className="text-[#4285F4]">LEARN.</span> SHIP.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal"
          >
            GDGC AIKTC is a student developer community where curiosity turns into skills, ideas turn into projects, and students build together.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#4285F4] hover:bg-[#3367D6] transition-all duration-200 shadow-xl shadow-[#4285F4]/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Discover Projects</span>
            </Link>
          </motion.div>

          {/* Campus Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-14 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400"
          >
            <span>Anjuman-I-Islam’s Kalsekar Technical Campus</span>
            <span>•</span>
            <span>New Panvel, Navi Mumbai</span>
            <span>•</span>
            <span className="text-[#34A853]">Est. 2023</span>
          </motion.div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 2 — COMMUNITY IMPACT (Light Background)     */}
      {/* ================================================== */}
      <section className="relative py-20 bg-slate-50 text-slate-900 border-y border-slate-200">
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="By the Numbers"
            title="Building a community of creators."
            description="From curious beginners to national hackathon champions, our student developer community empowers members across engineering disciplines."
            theme="light"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              number={500}
              suffix="+"
              label="Community Members"
              description="Student engineers across Computer, IT, Mechanical & Civil departments."
              color="blue"
              delay={0}
            />
            <StatCard
              number={25}
              suffix="+"
              label="Events Hosted"
              description="Hands-on bootcamps, Google Cloud study jams, and guest keynotes."
              color="red"
              delay={0.1}
            />
            <StatCard
              number={20}
              suffix="+"
              label="Shipped Projects"
              description="Open-source applications solving real campus and municipal challenges."
              color="yellow"
              delay={0.2}
            />
            <StatCard
              number={10}
              suffix="+"
              label="Hackathons & Competitions"
              description="National podium finishes including Smart India Hackathon."
              color="green"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 3 — WHAT'S HAPPENING (Dark Section)        */}
      {/* ================================================== */}
      <section className="relative py-24 bg-[#0b0f19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="Calendar"
              title="What's happening at GDGC"
              description="Join our upcoming study jams, hands-on workshops, and collaborative build weekends."
              align="left"
              theme="dark"
            />

            {/* Event Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10 self-start md:self-auto">
              {(['upcoming', 'ongoing', 'past'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setEventTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    eventTab === tab
                      ? 'bg-[#4285F4] text-white shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.slice(0, 3).map((event) => (
                <EventCard key={event.id} event={event} theme="dark" />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-2xl bg-white/5 border border-white/10 text-slate-400">
              <p>No {eventTab} events currently scheduled. Check back soon or browse our past workshops!</p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-colors uppercase tracking-wider"
            >
              <span>View All Events & Workshops</span>
              <ArrowRight className="w-4 h-4 text-[#4285F4]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 4 — BUILT BY GDGC (Dark Project Showcase)   */}
      {/* ================================================== */}
      <section className="relative py-24 bg-[#090d16] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="Innovation Lab"
              title="Built by our community."
              description="Real tools built by AIKTC student developers tackling healthcare, cloud economics, edge AI, and municipal governance."
              align="left"
              theme="dark"
            />

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 self-start md:self-auto">
              {['All', 'AI', 'Cloud', 'Web', 'Android', 'Data'].map((category) => (
                <button
                  key={category}
                  onClick={() => setProjectCategory(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    projectCategory.toLowerCase() === category.toLowerCase()
                      ? 'bg-white text-slate-900 font-semibold'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(0, 6).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200 transition-colors uppercase tracking-wider"
            >
              <span>Explore All Shipped Projects</span>
              <ArrowRight className="w-4 h-4 text-[#4285F4]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 5 — GOOGLE TECHNOLOGIES (Light Section)    */}
      {/* ================================================== */}
      <section className="relative py-24 bg-white text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Ecosystem"
            title="Powered by Google technologies."
            description="We build hands-on skills in core Google platforms, from multimodal intelligence to cloud-native microservices."
            theme="light"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techList.map((tech) => (
              <TechCard key={tech.id} item={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 6 — GDGC JOURNEY (Timeline Section)         */}
      {/* ================================================== */}
      <section className="relative py-24 bg-[#0b0f19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Milestones"
            title="Our journey."
            description="How an ambitious group of 30 freshmen transformed into AIKTC's most active student developer ecosystem."
            theme="dark"
          />

          <div className="mt-16 relative">
            {/* Center Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#4285F4] via-[#EA4335] to-[#34A853] opacity-30" />

            <div className="space-y-12">
              {timelineData.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const dotColorClass = {
                  blue: 'bg-[#4285F4] border-[#4285F4]/30',
                  red: 'bg-[#EA4335] border-[#EA4335]/30',
                  yellow: 'bg-[#FBBC05] border-[#FBBC05]/30',
                  green: 'bg-[#34A853] border-[#34A853]/30'
                }[item.color];

                return (
                  <div
                    key={item.year}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-6 sm:p-7 rounded-2xl bg-[#111726] border border-white/10 hover:border-slate-500/40 transition-all shadow-md"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-black text-white font-mono tracking-tight">
                            {item.year}
                          </span>
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                            {item.title}
                          </span>
                        </div>

                        <h4 className="text-sm font-semibold text-[#4285F4] mb-2">
                          {item.subtitle}
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <ul className="space-y-1.5 text-xs text-slate-400">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#34A853] shrink-0">✓</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Timeline Node in Center */}
                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-white/20 shadow-lg z-10">
                      <div className={`w-3.5 h-3.5 rounded-full ${dotColorClass}`} />
                    </div>

                    {/* Empty Space for symmetrical column */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 7 — HALL OF FAME (Dark Section)             */}
      {/* ================================================== */}
      <section className="relative py-24 bg-[#090d16] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Podium Finishes"
            title="Celebrating our builders."
            description="Highlighting students representing AIKTC at national hackathons, global solution challenges, and cloud certifications."
            theme="dark"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-6 rounded-2xl bg-[#111726] border border-white/10 hover:border-slate-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FBBC05]/15 text-[#FBBC05] border border-[#FBBC05]/30 flex items-center gap-1.5">
                      <Trophy className="w-3 h-3" />
                      {item.rank}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{item.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400">
                  <span className="font-medium text-slate-300">Builders: </span>
                  {item.members.join(', ')}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 8 — MEMBER STORIES (Light Section)         */}
      {/* ================================================== */}
      <section className="relative py-24 bg-slate-50 text-slate-900 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Community Voices"
            title="Built with GDGC."
            description="Authentic experiences from student builders whose engineering trajectories were shaped through chapter collaboration."
            theme="light"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {storiesData.map((story) => (
              <div
                key={story.id}
                className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800 italic mb-4 leading-relaxed">
                    "{story.quote}"
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {story.story}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <AppImage
                    src={story.image || story.avatar}
                    fallbackSrc={story.placeholderImage}
                    alt={story.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{story.name}</h4>
                    <p className="text-xs font-medium text-[#4285F4]">{story.role}</p>
                    <p className="text-[10px] text-slate-400">{story.batch}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* SECTION 9 — GALLERY (Masonry & Visual Memories)    */}
      {/* ================================================== */}
      <section className="relative py-24 bg-[#0b0f19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Moments"
            title="Campus energy in pictures."
            description="Snapshots from auditoriums, late-night hackathon sprints, mentoring circles, and stage demos at AIKTC."
            theme="dark"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryData.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-white/10"
              >
                <AppImage
                  src={item.image}
                  fallbackSrc={item.placeholderImage}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-semibold text-[#4285F4]">{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[11px] text-slate-300">{item.attendeesCount}</span>
                    <span className="p-1 rounded-full bg-white/10 group-hover:bg-[#4285F4] text-white transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Image Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <div className="relative max-w-4xl w-full bg-[#111726] rounded-2xl overflow-hidden border border-white/10 text-white">
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <AppImage
                src={selectedPhoto.image}
                fallbackSrc={selectedPhoto.placeholderImage}
                alt={selectedPhoto.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-[#4285F4] font-semibold mb-1">
                  <span>{selectedPhoto.category}</span>
                  <span>•</span>
                  <span>{selectedPhoto.date}</span>
                </div>
                <h3 className="text-xl font-bold">{selectedPhoto.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{selectedPhoto.attendeesCount}</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ================================================== */}
      {/* SECTION 10 — FINAL CTA (Dark Background)           */}
      {/* ================================================== */}
      <section className="relative py-24 bg-[#080c14] text-white border-t border-white/5 overflow-hidden">
        {/* Subtle Google accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#4285F4]/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <GoogleDots size={8} />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight font-sans">
            Ready to build something?
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Join GDGC AIKTC and learn, build and grow with a community of student developers.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenJoinModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#4285F4] hover:bg-[#3367D6] transition-all duration-200 shadow-xl shadow-[#4285F4]/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join GDGC</span>
            </button>

            <Link
              to="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12">
            <GoogleColorBar className="max-w-xs mx-auto rounded-full" size="sm" />
          </div>
        </div>
      </section>
    </div>
  );
};
