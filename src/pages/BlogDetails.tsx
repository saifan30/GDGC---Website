import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Tag, BookOpen, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { blogData } from '../data/blog';
import { BlogCard } from '../components/BlogCard';
import { AppImage } from '../components/AppImage';

export const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-[#090d16] text-white flex flex-col items-center justify-center px-4">
        <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">The article you were looking for does not exist.</p>
        <Link
          to="/blog"
          className="px-5 py-2.5 rounded-xl bg-[#4285F4] text-white text-xs font-semibold"
        >
          Back to Tech Blog
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = blogData.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 pb-20 bg-[#090d16] text-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4285F4]/15 text-[#4285F4] border border-[#4285F4]/30">
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5 text-[#FBBC05]" />
            {post.readTime}
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {post.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Author Strip */}
        <div className="mt-8 pb-8 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AppImage
              src={post.author.image || post.author.avatar}
              fallbackSrc={post.author.placeholderImage}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
            />
            <div>
              <h3 className="text-sm font-bold text-white">{post.author.name}</h3>
              <p className="text-xs text-[#4285F4] font-medium">{post.author.role}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            aria-label="Share article"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#34A853]" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-slate-900 border border-white/10">
          <AppImage
            src={post.image || post.coverImage}
            fallbackSrc={post.placeholderImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Highlight quote box */}
        <div className="my-8 p-6 rounded-2xl bg-white/[0.03] border-l-4 border-[#4285F4] text-white italic text-base">
          "The best way to understand cloud architectures or generative models is to deliberately build small, break them under load, and fix them with your peers."
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Author Bio Box */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 rounded-2xl bg-[#111726] border border-white/10 flex items-start gap-4">
          <AppImage
            src={post.author.image || post.author.avatar}
            fallbackSrc={post.author.placeholderImage}
            alt={post.author.name}
            className="w-14 h-14 rounded-2xl object-cover ring-1 ring-white/10 shrink-0"
          />
          <div>
            <h4 className="text-base font-bold text-white">Written by {post.author.name}</h4>
            <p className="text-xs text-[#4285F4] font-medium">{post.author.role}</p>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Leading developer initiatives and mentoring student software engineers at Anjuman-I-Islam’s Kalsekar Technical Campus.
            </p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">More from GDGC Tech Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <BlogCard key={rel.id} post={rel} theme="dark" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
