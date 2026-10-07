import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { eventsData } from '../data/events';
import { GoogleDots, GoogleColorBar } from '../components/GoogleColorBar';
import { AppImage } from '../components/AppImage';
import confetti from 'canvas-confetti';

export const EventDetails: React.FC<{ onOpenJoinModal: () => void }> = ({ onOpenJoinModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);
  const [copied, setCopied] = useState(false);

  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#090d16] text-white flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-2">Event Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">The requested event could not be found or has been moved.</p>
        <Link
          to="/events"
          className="px-5 py-2.5 rounded-xl bg-[#4285F4] text-white text-xs font-semibold"
        >
          Back to Events
        </Link>
      </div>
    );
  }

  const handleRegister = () => {
    setRegistered(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
    });
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Top Breadcrumb & Back */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/events"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Events</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111726]">
          {/* Cover image banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
            <AppImage
              src={event.image || event.coverImage}
              fallbackSrc={event.placeholderImage}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-[#111726]/40 to-transparent" />

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4285F4] text-white shadow-md">
                {event.type}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md border border-white/10">
                {event.mode}
              </span>
            </div>

            <button
              onClick={handleShare}
              aria-label="Share event"
              className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 text-white backdrop-blur-md hover:bg-black border border-white/10 transition-colors text-xs flex items-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>

          {/* Details header */}
          <div className="p-6 sm:p-10 -mt-12 relative z-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {event.title}
            </h1>

            {/* Meta Strip */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#4285F4]" />
                <div>
                  <p className="text-slate-400 font-medium">Date</p>
                  <p className="text-white font-semibold">{event.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FBBC05]" />
                <div>
                  <p className="text-slate-400 font-medium">Time</p>
                  <p className="text-white font-semibold">{event.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA4335]" />
                <div>
                  <p className="text-slate-400 font-medium">Location</p>
                  <p className="text-white font-semibold truncate">{event.location}</p>
                </div>
              </div>
            </div>

            {/* Quick RSVP CTA strip */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Users className="w-4 h-4 text-[#34A853]" />
                <span>
                  <strong>{event.rsvpCount}</strong> seats claimed of <strong>{event.capacity}</strong> capacity
                </span>
              </div>

              <div>
                {!registered ? (
                  <button
                    onClick={handleRegister}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#4285F4] hover:bg-[#3367D6] transition-all shadow-lg shadow-[#4285F4]/20 cursor-pointer"
                  >
                    Register / RSVP For Free
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#34A853]/15 text-[#34A853] border border-[#34A853]/30 text-xs font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>You're Registered! QR sent to email.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Description & Agenda */}
          <div className="lg:col-span-2 space-y-10">
            {/* About the Event */}
            <div className="p-7 rounded-2xl bg-[#111726] border border-white/10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
                About This Event
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {event.fullDescription}
              </p>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Agenda Breakdown */}
            {event.agenda && event.agenda.length > 0 && (
              <div className="p-7 rounded-2xl bg-[#111726] border border-white/10">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FBBC05]" />
                  Schedule & Agenda
                </h2>
                <div className="space-y-6">
                  {event.agenda.map((slot, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-4 border-b border-white/5 last:border-b-0 last:pb-0">
                      <span className="px-2.5 py-1 rounded-lg bg-white/5 font-mono text-xs font-semibold text-[#FBBC05] shrink-0">
                        {slot.time}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">{slot.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{slot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Speakers & Prerequisites */}
          <div className="space-y-6">
            {/* Speakers / Leads */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#111726] border border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
                  Speakers & Mentors
                </h3>
                <div className="space-y-4">
                  {event.speakers.map((spk, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <AppImage
                        src={spk.image || spk.avatar}
                        fallbackSrc={spk.placeholderImage}
                        alt={spk.name}
                        className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/10 shrink-0"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-white">{spk.name}</h4>
                        <p className="text-xs font-medium text-[#4285F4]">{spk.role}</p>
                        {spk.company && (
                          <p className="text-[10px] text-slate-400">{spk.company}</p>
                        )}
                        <p className="text-xs text-slate-300 mt-1 leading-tight">{spk.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prerequisites */}
            {event.prerequisites && (
              <div className="p-6 rounded-2xl bg-[#111726] border border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                  Prerequisites
                </h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {event.prerequisites.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#34A853] font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Need Help Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <h4 className="text-sm font-bold text-white">Have questions about this event?</h4>
              <p className="text-xs text-slate-400 mt-1">Connect with our event coordinators on our Discord or WhatsApp group.</p>
              <button
                onClick={onOpenJoinModal}
                className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                Join Community Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
