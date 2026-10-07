import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { BlogPost } from '../types';
import { AppImage } from './AppImage';

interface BlogCardProps {
  post: BlogPost;
  theme?: 'dark' | 'light';
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, theme = 'dark' }) => {
  const isDark = theme === 'dark';

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
      case 'Hackathons':
        return 'text-[#EA4335] bg-[#EA4335]/10 border-[#EA4335]/30';
      default:
        return 'text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/30';
    }
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`group flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 ${
        isDark
          ? 'bg-[#111726] border-white/10 hover:border-slate-500/50 hover:shadow-xl hover:shadow-black/50'
          : 'bg-white border-slate-200 hover:border-slate-400 hover:shadow-xl hover:shadow-slate-200'
      }`}
    >
      {/* Cover Image */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-900">
        <AppImage
          src={post.image || post.coverImage}
          fallbackSrc={post.placeholderImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border backdrop-blur-md ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex items-center gap-1 text-[11px] text-white/90 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md">
          <Clock className="w-3 h-3 text-[#FBBC05]" />
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              {post.date}
            </span>
          </div>

          <h3 className={`text-lg font-bold tracking-tight line-clamp-2 transition-colors ${
            isDark ? 'text-white group-hover:text-[#4285F4]' : 'text-slate-900 group-hover:text-[#4285F4]'
          }`}>
            {post.title}
          </h3>

          <p className={`mt-2 text-xs sm:text-sm line-clamp-2 leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {post.excerpt}
          </p>
        </div>

        {/* Author & Read Action */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AppImage
              src={post.author.image || post.author.avatar}
              fallbackSrc={post.author.placeholderImage}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-white/10"
            />
            <div className="flex flex-col">
              <span className={`text-xs font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {post.author.name}
              </span>
              <span className="text-[10px] text-slate-500 truncate max-w-[120px]">
                {post.author.role.split(',')[0]}
              </span>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#4285F4] hover:text-[#3367D6] transition-colors"
          >
            <span>Read</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
