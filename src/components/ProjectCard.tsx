import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { AppImage } from './AppImage';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'AI':
        return 'text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/30';
      case 'Cloud':
        return 'text-[#34A853] bg-[#34A853]/10 border-[#34A853]/30';
      case 'Web':
        return 'text-[#FBBC05] bg-[#FBBC05]/10 border-[#FBBC05]/30';
      case 'Android':
        return 'text-[#34A853] bg-[#34A853]/10 border-[#34A853]/30';
      default:
        return 'text-[#EA4335] bg-[#EA4335]/10 border-[#EA4335]/30';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#101726] border border-white/10 hover:border-slate-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      {/* Subtle top gradient glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Preview Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
        <AppImage
          src={project.image || project.previewImage}
          fallbackSrc={project.placeholderImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101726] via-transparent to-black/30" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border backdrop-blur-md ${getCategoryColor(project.category)}`}>
            {project.category}
          </span>
        </div>

        {/* GitHub Stars count */}
        {project.stars && (
          <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] font-medium bg-black/60 text-slate-200 px-2 py-0.5 rounded-full backdrop-blur-md border border-white/10">
            <Star className="w-3 h-3 text-[#FBBC05] fill-[#FBBC05]" />
            <span>{project.stars}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#4285F4] transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-slate-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Team Avatars */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex -space-x-1.5 overflow-hidden">
              {project.team.map((member, idx) => (
                <AppImage
                  key={idx}
                  src={member.image || member.avatar}
                  fallbackSrc={member.placeholderImage}
                  alt={member.name}
                  title={`${member.name} (${member.role})`}
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-[#101726] object-cover"
                />
              ))}
            </div>
            <span className="text-[11px] text-slate-400">
              {project.team.length} contributors
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285F4] group-hover:text-blue-400 transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
                className="p-1.5 rounded-lg text-slate-400 hover:text-[#4285F4] hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
