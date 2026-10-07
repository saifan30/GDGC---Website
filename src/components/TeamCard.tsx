import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { TeamMember } from '../types';
import { AppImage } from './AppImage';

interface TeamCardProps {
  member: TeamMember;
  accentColor?: 'blue' | 'red' | 'yellow' | 'green';
}

export const TeamCard: React.FC<TeamCardProps> = ({ member, accentColor = 'blue' }) => {
  const borderHover = {
    blue: 'hover:border-[#4285F4]/60 hover:shadow-[#4285F4]/15',
    red: 'hover:border-[#EA4335]/60 hover:shadow-[#EA4335]/15',
    yellow: 'hover:border-[#FBBC05]/60 hover:shadow-[#FBBC05]/15',
    green: 'hover:border-[#34A853]/60 hover:shadow-[#34A853]/15'
  }[accentColor];

  const dotColor = {
    blue: 'bg-[#4285F4]',
    red: 'bg-[#EA4335]',
    yellow: 'bg-[#FBBC05]',
    green: 'bg-[#34A853]'
  }[accentColor];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group relative flex flex-col rounded-2xl overflow-hidden bg-[#111726] border border-white/10 ${borderHover} hover:shadow-xl transition-all duration-300 p-5`}
    >
      {/* Avatar Container */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 mb-4">
        <AppImage
          src={member.image}
          fallbackSrc={member.placeholderImage}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Social Overlay Bar at bottom of photo */}
        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 transition-all duration-200">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} LinkedIn`}
            className="p-1.5 rounded-lg bg-black/70 hover:bg-[#4285F4] text-white backdrop-blur-md transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} GitHub`}
              className="p-1.5 rounded-lg bg-black/70 hover:bg-slate-700 text-white backdrop-blur-md transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Member Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className={`w-2 h-2 rounded-full ${dotColor}`} />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              {member.department}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
            {member.name}
          </h3>

          <p className="text-xs font-semibold text-[#4285F4] mt-0.5">
            {member.role}
          </p>

          <p className="text-[11px] text-slate-400 mt-0.5">
            {member.year}
          </p>

          <p className="mt-2.5 text-xs text-slate-300 line-clamp-3 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1">
          {member.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
