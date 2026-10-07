import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Event } from '../types';
import { AppImage } from './AppImage';

interface EventCardProps {
  event: Event;
  theme?: 'dark' | 'light';
}

export const EventCard: React.FC<EventCardProps> = ({ event, theme = 'dark' }) => {
  const isDark = theme === 'dark';

  // Badge color based on type
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'Hackathon':
        return 'bg-[#EA4335]/15 text-[#EA4335] border-[#EA4335]/30';
      case 'Study Jam':
        return 'bg-[#4285F4]/15 text-[#4285F4] border-[#4285F4]/30';
      case 'Workshop':
        return 'bg-[#34A853]/15 text-[#34A853] border-[#34A853]/30';
      case 'Competition':
        return 'bg-[#FBBC05]/20 text-[#FBBC05] border-[#FBBC05]/40';
      default:
        return 'bg-slate-500/15 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
        isDark
          ? 'bg-[#111726] border-white/10 hover:border-[#4285F4]/50 hover:shadow-xl hover:shadow-[#4285F4]/10'
          : 'bg-white border-slate-200/90 hover:border-[#4285F4]/50 hover:shadow-xl hover:shadow-slate-300/40'
      }`}
    >
      {/* Cover Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-900">
        <AppImage
          src={event.image || event.coverImage}
          fallbackSrc={event.placeholderImage}
          alt={event.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md ${getTypeBadge(event.type)}`}>
            {event.type}
          </span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/60 text-slate-200 backdrop-blur-md border border-white/10">
            {event.mode}
          </span>
        </div>

        {/* RSVP counter */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/90 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-md">
          <Users className="w-3.5 h-3.5 text-[#4285F4]" />
          <span>{event.rsvpCount} registered</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          {/* Date & Location */}
          <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
            <span className="flex items-center gap-1 text-[#4285F4] font-medium">
              <Calendar className="w-3.5 h-3.5" />
              {event.date}
            </span>
            <span>•</span>
            <span className="truncate flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
              <span className="truncate">{event.location.split(',')[0]}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className={`text-lg font-bold tracking-tight line-clamp-2 transition-colors ${
            isDark ? 'text-white group-hover:text-[#4285F4]' : 'text-slate-900 group-hover:text-[#4285F4]'
          }`}>
            {event.title}
          </h3>

          {/* Short description */}
          <p className={`mt-2 text-xs sm:text-sm line-clamp-2 leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {event.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {event.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                  isDark
                    ? 'bg-white/5 text-slate-300 border border-white/5'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Footer */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <Link
            to={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285F4] group-hover:text-[#3367D6] transition-colors"
          >
            <span>View Details & Agenda</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {event.status === 'upcoming' && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#34A853]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse" />
              RSVP Open
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};
