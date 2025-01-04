import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white p-8 rounded-2xl border border-border/5 hover:border-primary/20 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}