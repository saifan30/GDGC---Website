import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, MapPin, Mail, ArrowUpRight, MessageSquare } from 'lucide-react';
import { GoogleColorBar } from './GoogleColorBar';

export const Footer: React.FC<{ onOpenJoinModal: () => void }> = ({ onOpenJoinModal }) => {
  return (
    <footer className="bg-[#080c14] border-t border-white/5 text-slate-300 relative overflow-hidden">
      {/* 4-Color Google accent bar on the top edge */}
      <GoogleColorBar size="sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 border border-white/10">
                <span className="text-[#4285F4] font-mono font-bold text-xs">&lt;</span>
                <span className="text-[#EA4335] font-mono font-bold text-xs">/</span>
                <span className="text-[#34A853] font-mono font-bold text-xs">&gt;</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                GDGC <span className="text-[#4285F4]">AIKTC</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Google Developer Groups on Campus at Anjuman-I-Islam’s Kalsekar Technical Campus. A peer-led student developer community empowering young engineers to build, learn, and ship impactful software.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA4335] shrink-0 mt-0.5" />
                <span>Plot No. 2&3, Sector 16, Near Thana Naka, Khandagao, New Panvel, Navi Mumbai, Maharashtra 410206</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4285F4] shrink-0" />
                <a href="mailto:gdgc@aiktc.ac.in" className="hover:text-white transition-colors">
                  gdgc@aiktc.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">About GDGC</Link>
              </li>
              <li>
                <Link to="/events" className="text-slate-400 hover:text-white transition-colors">Events & Workshops</Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors">Projects Showcase</Link>
              </li>
              <li>
                <Link to="/team" className="text-slate-400 hover:text-white transition-colors">Core & Leads Team</Link>
              </li>
            </ul>
          </div>

          {/* Learning & Media */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
              Developer Hub
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-white transition-colors">Learning Resources</Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">GDGC Tech Blog</Link>
              </li>
              <li>
                <a
                  href="https://developers.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Google for Developers</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cloudskillsboost.google"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Google Cloud Skill Boost</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Join */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
              Connect
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/gdgc-aiktc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub Org</span>
              </a>
              <a
                href="https://linkedin.com/company/gdgc-aiktc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-[#4285F4] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#4285F4]" />
                <span>LinkedIn Chapter</span>
              </a>
              <a
                href="https://instagram.com/gdgc_aiktc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-[#EA4335] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#EA4335]" />
                <span>Instagram Updates</span>
              </a>
              <button
                onClick={onOpenJoinModal}
                className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/10 transition-colors"
              >
                Join Community
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© GDGC AIKTC. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Anjuman-I-Islam’s Kalsekar Technical Campus</span>
            <span>·</span>
            <span>Google Developer Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
