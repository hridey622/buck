import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-emerald-500/50 rounded-full opacity-0 group-hover:opacity-75 blur-lg group-hover:blur-xl transition-all duration-300" />
      <div className="relative flex items-center space-x-2">
        <div className="relative flex items-center justify-center w-7 h-7 bg-gradient-to-br from-primary to-emerald-500 rounded-lg transform group-hover:rotate-6 transition-transform">
          <div className="w-3.5 h-3.5 bg-white rounded-sm transform rotate-45" />
        </div>
        <span className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-500">
          Inventure
        </span>
      </div>
    </div>
  );
}