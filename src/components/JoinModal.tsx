import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ExternalLink, Sparkles, MessageSquare, Users, Code } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoogleDots } from './GoogleColorBar';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'Computer Engineering',
    year: 'FE (First Year)',
    interest: 'AI & GenAI'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire festive confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4285F4', '#EA4335', '#FBBC05', '#34A853']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-[#0f172a] border border-slate-750 border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden text-slate-100 z-10 my-8"
          >
            {/* Top Google color bar */}
            <div className="flex h-1.5 w-full">
              <div className="w-1/4 bg-[#4285F4]" />
              <div className="w-1/4 bg-[#EA4335]" />
              <div className="w-1/4 bg-[#FBBC05]" />
              <div className="w-1/4 bg-[#34A853]" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-2 mb-2">
                    <GoogleDots size={8} />
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                      Community Membership
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                    Join GDGC AIKTC
                  </h2>
                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    Be the first to hear about upcoming hackathons, Google Cloud study jams, hands-on workshops, and project collaboration circles.
                  </p>

                  {/* Direct Fast Links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    <a
                      href="https://gdg.community.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-white/5 hover:border-[#4285F4]/40 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Users className="w-4 h-4 text-[#4285F4]" />
                        <span className="text-xs font-medium text-slate-200">Official Chapter Portal</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#4285F4] transition-colors" />
                    </a>

                    <a
                      href="https://chat.whatsapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-white/5 hover:border-[#34A853]/40 transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <MessageSquare className="w-4 h-4 text-[#34A853]" />
                        <span className="text-xs font-medium text-slate-200">WhatsApp Community</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#34A853] transition-colors" />
                    </a>
                  </div>

                  {/* Quick Sign-up Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Saif Sayed"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        College Email / Personal Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@aiktc.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#4285F4] focus:ring-1 focus:ring-[#4285F4] transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Engineering Year
                        </label>
                        <select
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-[#4285F4] transition-colors"
                        >
                          <option>FE (First Year)</option>
                          <option>SE (Second Year)</option>
                          <option>TE (Third Year)</option>
                          <option>BE (Final Year)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Primary Tech Interest
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-[#4285F4] transition-colors"
                        >
                          <option>AI & GenAI</option>
                          <option>Google Cloud & DevOps</option>
                          <option>Modern Web (React/Next)</option>
                          <option>Android (Kotlin/Compose)</option>
                          <option>UI/UX & Design</option>
                          <option>Competitive Hacking</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-[#4285F4] hover:bg-[#3367D6] transition-all duration-200 shadow-lg shadow-[#4285F4]/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      Complete Membership Registration
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#34A853]/15 border border-[#34A853]/30 flex items-center justify-center mx-auto text-[#34A853]">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">Welcome to GDGC AIKTC!</h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                    You're now an official member of the Anjuman-I-Islam’s Kalsekar Technical Campus Google Developer Group. We have recorded your interest in <span className="text-[#4285F4] font-medium">{formData.interest}</span>.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-800/60 border border-white/5 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex items-center gap-2 text-slate-300 font-medium">
                      <Code className="w-4 h-4 text-[#FBBC05]" />
                      Next Steps for You:
                    </div>
                    <p className="text-slate-400">1. Check your email for our welcome package & Discord invite link.</p>
                    <p className="text-slate-400">2. Explore upcoming workshops and register for free study jam tracks.</p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors"
                    >
                      Done & Explore Portal
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
