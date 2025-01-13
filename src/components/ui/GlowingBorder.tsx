import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingBorder({ children, className }: GlowingBorderProps) {
  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-emerald-500 to-primary opacity-75 blur-lg"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className={cn('relative bg-background/80 backdrop-blur-xl rounded-xl p-8', className)}>
        {children}
      </div>
    </div>
  );
}