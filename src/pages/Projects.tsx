import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, FolderGit2, Sparkles, Filter } from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { GoogleDots } from '../components/GoogleColorBar';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterOptions = ['All', 'AI', 'Cloud', 'Web', 'Android', 'Data'];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter !== 'All' && project.category.toLowerCase() !== selectedFilter.toLowerCase()) {
      return false;
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchDesc = project.shortDescription.toLowerCase().includes(q);
      const matchTags = project.tags.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchTags;
    }

    return true;
  });

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 bg-[#090d16] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#34A853]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4"
          >
            <GoogleDots size={6} />
            <span>Open Source & Solution Challenge</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans"
          >
            Built by <span className="text-[#34A853]">GDGC AIKTC.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Explore actual applications and open-source systems engineered by student squads at Anjuman-I-Islam’s Kalsekar Technical Campus.
          </motion.p>
        </div>
      </section>

      {/* Discovery Interface */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111726] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#34A853] transition-colors"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedFilter === filter
                    ? 'bg-white text-slate-900 shadow-md font-bold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl bg-[#111726] border border-white/10 text-slate-400">
            <FolderGit2 className="w-10 h-10 mx-auto text-slate-600 mb-3" />
            <h3 className="text-base font-bold text-slate-200">No projects found</h3>
            <p className="text-xs text-slate-400 mt-1">Try searching for other terms or reset your filters.</p>
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
