import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Sparkles, ArrowRight } from 'lucide-react';
import { TeamCard } from '../components/TeamCard';
import { GoogleDots } from '../components/GoogleColorBar';
import { teamData } from '../data/team';

export const Team: React.FC<{ onOpenJoinModal: () => void }> = ({ onOpenJoinModal }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Core Team', 'Technical Team', 'Design Team', 'PR & Outreach', 'Operations'];

  const filteredTeam = teamData.filter((member) => {
    if (selectedDept === 'All') return true;
    return member.department === selectedDept;
  });

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 bg-[#090d16] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[#EA4335]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4"
          >
            <GoogleDots size={6} />
            <span>Community Leadership 2025–2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans"
          >
            Meet the people <span className="text-[#4285F4]">behind GDGC.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Engineers, designers, organizers, and campus leads dedicated to fostering developer talent at Anjuman-I-Islam’s Kalsekar Technical Campus.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedDept === dept
                  ? 'bg-[#4285F4] text-white shadow-md'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTeam.map((member, idx) => {
            const colors: ('blue' | 'red' | 'yellow' | 'green')[] = ['blue', 'red', 'yellow', 'green'];
            const accent = colors[idx % colors.length];

            return (
              <TeamCard key={member.id} member={member} accentColor={accent} />
            );
          })}
        </div>

        {/* Join the Team Callout */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 to-[#111726] border border-white/10 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FBBC05] mb-2 block">
              Leadership Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Want to join the GDGC AIKTC Core Crew?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              We open applications each academic semester for Domain Leads, Technical Mentors, Event Coordinators, and Creative Designers. No prior lead experience required—just commitment and hunger to learn.
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={onOpenJoinModal}
                className="px-6 py-3 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#4285F4]/20 cursor-pointer"
              >
                Apply for Core / Volunteer Circle
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
