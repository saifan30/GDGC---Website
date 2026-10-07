import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Calendar, MapPin, Tag } from 'lucide-react';
import { EventCard } from '../components/EventCard';
import { SectionHeading } from '../components/SectionHeading';
import { GoogleDots } from '../components/GoogleColorBar';
import { eventsData } from '../data/events';

export const Events: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = ['All', 'Upcoming', 'Workshops', 'Study Jams', 'Hackathons', 'Competitions'];

  const filteredEvents = eventsData.filter((event) => {
    // Filter by type or status
    if (selectedFilter === 'Upcoming' && event.status !== 'upcoming') return false;
    if (selectedFilter === 'Workshops' && event.type !== 'Workshop') return false;
    if (selectedFilter === 'Study Jams' && event.type !== 'Study Jam') return false;
    if (selectedFilter === 'Hackathons' && event.type !== 'Hackathon') return false;
    if (selectedFilter === 'Competitions' && event.type !== 'Competition') return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = event.title.toLowerCase().includes(q);
      const matchDesc = event.shortDescription.toLowerCase().includes(q);
      const matchTags = event.tags.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTags;
    }

    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 bg-[#090d16] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#4285F4]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4"
          >
            <GoogleDots size={6} />
            <span>Campus Programs & Bootcamps</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans"
          >
            Events that turn <span className="text-[#4285F4]">learning into action.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            From intensive Google Cloud labs to weekend hackathons, join our live sessions led by peer leads, alumni, and industry architects.
          </motion.p>
        </div>
      </section>

      {/* Discovery & Filters */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, tag, or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111726] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#4285F4] transition-colors"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedFilter === filter
                    ? 'bg-[#4285F4] text-white shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Event Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} theme="dark" />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-[#111726] border border-white/10 text-slate-400">
            <Calendar className="w-10 h-10 mx-auto text-slate-600 mb-3" />
            <h3 className="text-base font-bold text-slate-200">No events matched your criteria</h3>
            <p className="text-xs text-slate-400 mt-1">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => {
                setSelectedFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};
