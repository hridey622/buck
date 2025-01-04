import React from 'react';
import { cn } from './cn';

export default function GradientBackground({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden bg-background-light/50", className)}>
      {/* Main rotating gradient */}
      <div className="absolute -top-[40vh] -left-[40vw] w-[150vw] h-[150vh] animate-slow-spin">
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 via-primary-light/5 to-primary/10 blur-3xl" />
      </div>

      {/* Accent gradients */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/[0.08] to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-light/[0.08] to-transparent" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] [background-image:url('/noise.png')]" />

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </div>
  );
}