import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, minDuration = 1400 }) => {
  const [phase, setPhase] = useState<'converge' | 'symbol' | 'reveal' | 'done'>('converge');

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase('symbol');
    }, 450);

    const t2 = setTimeout(() => {
      setPhase('reveal');
    }, 950);

    const t3 = setTimeout(() => {
      setPhase('done');
      setTimeout(onComplete, 400);
    }, minDuration);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#090d16] text-white overflow-hidden select-none"
        >
          {/* Subtle background ambient glow */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
          <div className="absolute w-96 h-96 rounded-full bg-[#4285F4]/10 blur-3xl pointer-events-none" />

          <div className="relative flex flex-col items-center">
            {/* Center animated symbol area */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Converging 4 Google Color dots into the brackets */}
              {phase === 'converge' && (
                <div className="relative w-20 h-20">
                  {/* Blue: Top Left */}
                  <motion.span
                    initial={{ x: -40, y: -40, opacity: 0, scale: 0.6 }}
                    animate={{ x: -10, y: -10, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute w-3.5 h-3.5 rounded-full bg-[#4285F4] shadow-lg shadow-[#4285F4]/40"
                  />
                  {/* Red: Top Right */}
                  <motion.span
                    initial={{ x: 40, y: -40, opacity: 0, scale: 0.6 }}
                    animate={{ x: 10, y: -10, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute w-3.5 h-3.5 rounded-full bg-[#EA4335] shadow-lg shadow-[#EA4335]/40"
                  />
                  {/* Yellow: Bottom Left */}
                  <motion.span
                    initial={{ x: -40, y: 40, opacity: 0, scale: 0.6 }}
                    animate={{ x: -10, y: 10, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute w-3.5 h-3.5 rounded-full bg-[#FBBC05] shadow-lg shadow-[#FBBC05]/40"
                  />
                  {/* Green: Bottom Right */}
                  <motion.span
                    initial={{ x: 40, y: 40, opacity: 0, scale: 0.6 }}
                    animate={{ x: 10, y: 10, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute w-3.5 h-3.5 rounded-full bg-[#34A853] shadow-lg shadow-[#34A853]/40"
                  />
                </div>
              )}

              {/* Developer < > symbol formation */}
              {(phase === 'symbol' || phase === 'reveal') && (
                <motion.div
                  initial={{ scale: 0.7, opacity: 0, rotate: -6 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="flex items-center gap-2"
                >
                  {/* Left Bracket '<' formed with Blue and Yellow strokes */}
                  <div className="relative flex items-center justify-center">
                    <svg width="40" height="48" viewBox="0 0 40 48" fill="none" className="drop-shadow-md">
                      <path
                        d="M32 6L10 24L32 42"
                        stroke="url(#blue-gradient)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient id="blue-gradient" x1="10" y1="6" x2="32" y2="42" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#4285F4" />
                          <stop offset="1" stopColor="#34A853" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Slash / Center Accent */}
                  <div className="w-1.5 h-7 rounded-full bg-[#FBBC05] rotate-12 mx-0.5 opacity-90 shadow-sm shadow-[#FBBC05]/50" />

                  {/* Right Bracket '>' formed with Red and Green strokes */}
                  <div className="relative flex items-center justify-center">
                    <svg width="40" height="48" viewBox="0 0 40 48" fill="none" className="drop-shadow-md">
                      <path
                        d="M8 6L30 24L8 42"
                        stroke="url(#red-gradient)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient id="red-gradient" x1="8" y1="6" x2="30" y2="42" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#EA4335" />
                          <stop offset="1" stopColor="#FBBC05" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Typography entrance */}
            <div className="mt-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: phase === 'reveal' || phase === 'symbol' ? 1 : 0, y: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="flex items-center justify-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight text-white font-sans">
                    GDGC <span className="text-[#4285F4]">AIKTC</span>
                  </h1>
                </div>
                <p className="text-xs font-medium tracking-wide text-slate-400 mt-1 uppercase">
                  Google Developer Groups on Campus
                </p>
              </motion.div>
            </div>

            {/* Bottom 4-color indicator line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex h-0.5 overflow-hidden rounded-full"
            >
              <div className="w-1/4 bg-[#4285F4]" />
              <div className="w-1/4 bg-[#EA4335]" />
              <div className="w-1/4 bg-[#FBBC05]" />
              <div className="w-1/4 bg-[#34A853]" />
            </motion.div>
          </div>

          {/* Quick skip affordance for user convenience */}
          <button
            onClick={() => {
              setPhase('done');
              onComplete();
            }}
            className="absolute bottom-6 text-[11px] text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest px-3 py-1 rounded border border-white/5 bg-white/5"
          >
            Skip Intro
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
