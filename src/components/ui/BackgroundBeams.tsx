import React from 'react';
import { cn } from './cn';

export default function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/40 to-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-background-dark/40 to-background-dark/10 blur-3xl" />
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-16 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  );
}