
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'blue' | 'magenta' | 'yellow' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, icon, variant = 'outline', className = "" }) => {
  const variants = {
    blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/30',
    magenta: 'bg-brand-pink/10 text-brand-pink border-brand-pink/30',
    yellow: 'bg-brand-yellow/10 text-brand-yellow border-brand-yellow/30',
    outline: 'border-slate-800 text-brand-gray bg-slate-900/50'
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase mb-4 transition-all hover:scale-105 ${variants[variant]} ${className}`}>
      {icon && <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>}
      {children}
    </div>
  );
};
