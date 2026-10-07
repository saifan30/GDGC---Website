import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Code, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleDots } from './GoogleColorBar';

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] rounded-lg"
            aria-label="GDGC AIKTC Home"
          >
            {/* Developer Brackets Symbol */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-white/10 group-hover:border-white/20 transition-all shadow-sm">
              <span className="text-[#4285F4] font-mono font-bold text-sm select-none">&lt;</span>
              <span className="text-[#EA4335] font-mono font-bold text-sm select-none">/</span>
              <span className="text-[#34A853] font-mono font-bold text-sm select-none">&gt;</span>
              {/* Subtle top indicator dot */}
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FBBC05]" />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white flex items-center gap-1.5 leading-none">
                GDGC <span className="text-[#4285F4]">AIKTC</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wide leading-tight mt-1">
                Google Developer Groups on Campus
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#4285F4]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action / Join Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenJoinModal}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#4285F4] hover:bg-[#3367D6] transition-all duration-200 shadow-md shadow-[#4285F4]/20 hover:shadow-[#4285F4]/40 hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
            >
              <span>Join GDGC</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenJoinModal}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#4285F4] hover:bg-[#3367D6] transition-colors"
            >
              Join
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden glass-nav border-b border-white/10 px-4 pt-2 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#4285F4]/15 text-[#4285F4] font-semibold border-l-4 border-[#4285F4]'
                        : 'text-slate-200 hover:bg-white/5'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </NavLink>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm text-white bg-[#4285F4] hover:bg-[#3367D6] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#4285F4]/20"
              >
                <Sparkles className="w-4 h-4" />
                Join GDGC AIKTC Community
              </button>

              <div className="flex items-center justify-center gap-2 pt-1">
                <GoogleDots size={6} />
                <span className="text-[11px] text-slate-400">Anjuman-I-Islam’s Kalsekar Technical Campus</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
