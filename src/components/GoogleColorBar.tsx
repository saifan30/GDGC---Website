import React from 'react';

interface GoogleColorBarProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const GoogleColorBar: React.FC<GoogleColorBarProps> = ({ className = '', size = 'md' }) => {
  const heightClass = size === 'sm' ? 'h-0.5' : size === 'lg' ? 'h-1.5' : 'h-1';
  
  return (
    <div className={`flex w-full overflow-hidden ${heightClass} ${className}`} aria-hidden="true">
      <div className="w-1/4 bg-[#4285F4]" />
      <div className="w-1/4 bg-[#EA4335]" />
      <div className="w-1/4 bg-[#FBBC05]" />
      <div className="w-1/4 bg-[#34A853]" />
    </div>
  );
};

export const GoogleDots: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 8 }) => {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <span style={{ width: size, height: size }} className="rounded-full bg-[#4285F4]" />
      <span style={{ width: size, height: size }} className="rounded-full bg-[#EA4335]" />
      <span style={{ width: size, height: size }} className="rounded-full bg-[#FBBC05]" />
      <span style={{ width: size, height: size }} className="rounded-full bg-[#34A853]" />
    </span>
  );
};
