import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Cloud, Globe, Smartphone, Database, GitBranch, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import { resourceCategories } from '../data/resources';
import { GoogleDots } from '../components/GoogleColorBar';

export const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(resourceCategories[0].id);

  const currentCategory = resourceCategories.find((c) => c.id === activeCategory) || resourceCategories[0];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-genai':
        return <Sparkles className="w-4 h-4" />;
      case 'cloud':
        return <Cloud className="w-4 h-4" />;
      case 'web-dev':
        return <Globe className="w-4 h-4" />;
      case 'android':
        return <Smartphone className="w-4 h-4" />;
      case 'firebase':
        return <Database className="w-4 h-4" />;
      case 'git-github':
        return <GitBranch className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 bg-[#090d16] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FBBC05]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4"
          >
            <GoogleDots size={6} />
            <span>Developer Learning Tracks</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans"
          >
            GDGC <span className="text-[#FBBC05]">Learning Hub.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Structured curriculum paths, official Google codelabs, and student-curated blueprints to take you from hello-world to deployment.
          </motion.p>
        </div>
      </section>

      {/* Main Learning Hub Layout */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {resourceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#4285F4] text-white shadow-lg shadow-[#4285F4]/20'
                  : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Category Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Track Overview
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {currentCategory.name} Roadmap
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
            {currentCategory.description}
          </p>
        </div>

        {/* Two-Column: Left Roadmap Steps / Right Curated Codelabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Roadmap Levels */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">01</span>
              Step-by-Step Learning Path
            </h3>

            <div className="space-y-4">
              {currentCategory.learningPath.map((step) => {
                const levelColor = {
                  Beginner: 'text-[#34A853] bg-[#34A853]/15 border-[#34A853]/30',
                  Intermediate: 'text-[#FBBC05] bg-[#FBBC05]/15 border-[#FBBC05]/30',
                  Advanced: 'text-[#EA4335] bg-[#EA4335]/15 border-[#EA4335]/30'
                }[step.level] || 'text-[#4285F4] bg-[#4285F4]/15 border-[#4285F4]/30';

                return (
                  <div
                    key={step.step}
                    className="p-6 rounded-2xl bg-[#111726] border border-white/10 hover:border-slate-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center font-mono text-xs font-bold text-white">
                          {step.step}
                        </span>
                        <h4 className="text-base font-bold text-white">{step.title}</h4>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${levelColor}`}>
                        {step.level}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {step.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-white/5 text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Curated Codelabs & Interactive Labs */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">02</span>
              Recommended Codelabs & Labs
            </h3>

            <div className="space-y-4">
              {currentCategory.curatedLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-2xl bg-[#111726] border border-white/10 hover:border-[#4285F4]/50 hover:bg-[#151d30] transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-slate-300">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>{item.estimatedTime}</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-[#4285F4] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#4285F4] shrink-0" />
                  </h4>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Cloud Skill Boost Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#101b33] to-[#121927] border border-[#4285F4]/20">
              <h4 className="text-sm font-bold text-white">Need Free Google Cloud Credits?</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                GDGC AIKTC members get access to Google Cloud Skills Boost campaign vouchers during our study jams.
              </p>
              <a
                href="https://www.cloudskillsboost.google"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285F4] hover:text-[#3367D6]"
              >
                <span>Visit Cloud Skills Boost</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
