import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Star, Code, CheckCircle2, Users, Layers, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects';
import { GoogleDots } from '../components/GoogleColorBar';
import { AppImage } from '../components/AppImage';

export const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#090d16] text-white flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-2">Project Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">The requested case study could not be located.</p>
        <Link
          to="/projects"
          className="px-5 py-2.5 rounded-xl bg-[#4285F4] text-white text-xs font-semibold"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Top Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Project Hero Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#111726]">
          {/* Banner visual */}
          <div className="relative h-64 sm:h-96 w-full overflow-hidden bg-slate-900">
            <AppImage
              src={project.image || project.previewImage}
              fallbackSrc={project.placeholderImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111726] via-[#111726]/40 to-transparent" />

            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white border border-white/20">
                {project.category}
              </span>
            </div>

            {project.stars && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 text-[#FBBC05] fill-[#FBBC05]" />
                <span>{project.stars} GitHub Stars</span>
              </div>
            )}
          </div>

          {/* Details header */}
          <div className="p-6 sm:p-10 -mt-10 relative z-10">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Quick Actions Bar */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#4285F4] hover:bg-[#3367D6] text-white text-xs font-semibold transition-colors shadow-lg shadow-[#4285F4]/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      {project.stats && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.stats.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#111726] border border-white/5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#4285F4] font-sans">
                  {s.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Case Study Details */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* The Problem */}
            <div className="p-7 rounded-2xl bg-[#111726] border border-white/10">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                The Problem
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-7 rounded-2xl bg-[#111726] border border-white/10">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                The Solution
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {project.solution}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div className="p-7 rounded-2xl bg-[#111726] border border-white/10">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC05]" />
                Key Technical Features
              </h2>
              <div className="space-y-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#34A853] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Contributors */}
            <div className="p-6 rounded-2xl bg-[#111726] border border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#4285F4]" />
                Student Builders
              </h3>
              <div className="space-y-3.5">
                {project.team.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <AppImage
                      src={m.image || m.avatar}
                      fallbackSrc={m.placeholderImage}
                      alt={m.name}
                      className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{m.name}</h4>
                      <p className="text-xs text-[#4285F4]">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Breakdown */}
            <div className="p-6 rounded-2xl bg-[#111726] border border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#34A853]" />
                Architecture Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/5 text-slate-200 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Contribute CTA */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <h4 className="text-sm font-bold text-white">Want to contribute?</h4>
              <p className="text-xs text-slate-400 mt-1">Fork the repository on GitHub or join our active project circles.</p>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Open Issue / PR</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
