import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  gradient?: boolean;
  shine?: boolean;
}

export function AnimatedText({ text, className, gradient = true, shine = true }: AnimatedTextProps) {
  return (
    <motion.span
      className={cn(
        'inline-block',
        gradient && 'bg-gradient-to-r from-primary via-emerald-500 to-primary bg-[length:200%_auto] bg-clip-text text-transparent',
        shine && 'animate-background-shine',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
}