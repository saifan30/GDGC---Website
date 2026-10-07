import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogCard } from '../components/BlogCard';
import { GoogleDots } from '../components/GoogleColorBar';
import { blogData } from '../data/blog';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI', 'Cloud', 'Web', 'Android', 'Career', 'Hackathons'];

  const filteredPosts = blogData.filter((post) => {
    if (selectedCategory !== 'All' && post.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      return false;
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchTags = post.tags.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchExcerpt || matchTags;
    }

    return true;
  });

  const featuredPost = blogData[0];

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Hero */}
      <section className="relative py-16 bg-[#090d16] overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-[#EA4335]/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4"
          >
            <GoogleDots size={6} />
            <span>Developer Editorial & Case Studies</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white font-sans"
          >
            Learn from the <span className="text-[#EA4335]">community.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Technical write-ups, hackathon post-mortems, architectural breakdowns, and career navigation by AIKTC student builders.
          </motion.p>
        </div>
      </section>

      {/* Featured Article Hero Card */}
      {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="relative rounded-3xl overflow-hidden bg-[#111726] border border-white/10 hover:border-slate-500/50 transition-all group">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 relative h-64 lg:h-96 overflow-hidden">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#111726] opacity-80" />
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4285F4]/15 text-[#4285F4] border border-[#4285F4]/30">
                      Featured · {featuredPost.category}
                    </span>
                    <span className="text-xs text-slate-400">{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#4285F4] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-white">{featuredPost.author.name}</h4>
                      <p className="text-[10px] text-slate-400">{featuredPost.date}</p>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4285F4] group-hover:text-[#3367D6]"
                  >
                    <span>Read Full Post</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Discovery & Filters */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111726] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#EA4335] transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#EA4335] text-white shadow-md'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} theme="dark" />
          ))}
        </div>
      </section>
    </div>
  );
};
