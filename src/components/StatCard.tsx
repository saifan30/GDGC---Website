import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatCardProps {
  number: number;
  suffix?: string;
  label: string;
  description?: string;
  color: 'blue' | 'red' | 'yellow' | 'green';
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({
  number,
  suffix = '+',
  label,
  description,
  color,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * number);
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(number);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, number]);

  const colorStyles = {
    blue: {
      border: 'hover:border-[#4285F4]/40',
      text: 'text-[#4285F4]',
      glow: 'group-hover:shadow-[#4285F4]/10',
      accent: 'bg-[#4285F4]'
    },
    red: {
      border: 'hover:border-[#EA4335]/40',
      text: 'text-[#EA4335]',
      glow: 'group-hover:shadow-[#EA4335]/10',
      accent: 'bg-[#EA4335]'
    },
    yellow: {
      border: 'hover:border-[#FBBC05]/40',
      text: 'text-[#FBBC05]',
      glow: 'group-hover:shadow-[#FBBC05]/10',
      accent: 'bg-[#FBBC05]'
    },
    green: {
      border: 'hover:border-[#34A853]/40',
      text: 'text-[#34A853]',
      glow: 'group-hover:shadow-[#34A853]/10',
      accent: 'bg-[#34A853]'
    }
  }[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl ${colorStyles.glow} transition-all duration-300 hover:-translate-y-1.5`}
    >
      {/* Top subtle color indicator */}
      <div className={`w-8 h-1 rounded-full ${colorStyles.accent} mb-4`} />

      <div className="flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-sans">
          {displayValue}
        </span>
        <span className={`text-2xl sm:text-3xl font-bold ${colorStyles.text}`}>
          {suffix}
        </span>
      </div>

      <h3 className="text-base font-bold text-slate-800 mt-2 tracking-tight">
        {label}
      </h3>

      {description && (
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
