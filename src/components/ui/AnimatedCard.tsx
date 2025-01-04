import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from './cn';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
  hover?: boolean;
  delay?: number;
  spotlight?: boolean;
}

export default function AnimatedCard({
  children,
  className,
  gradient = false,
  hover = true,
  delay = 0,
  spotlight = true,
}: AnimatedCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = React.useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  const background = useMotionTemplate`radial-gradient(
    250px circle at ${mouseX}px ${mouseY}px,
    var(--spotlight-color) 0%,
    transparent 80%
  )`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      whileHover={hover ? {
        y: -5,
        transition: { duration: 0.2 }
      } : undefined}
      onMouseMove={spotlight ? handleMouseMove : undefined}
      className={cn(
        "group relative rounded-2xl border border-border/5 p-8",
        "transition-all duration-300 will-change-transform",
        hover && "hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/10",
        gradient && "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className
      )}
      style={{
        '--spotlight-color': 'rgba(46, 148, 82, 0.05)',
      } as React.CSSProperties}
    >
      {/* Spotlight overlay */}
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      )}

      {/* Glass effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-[2px]" />

      {/* Border glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-emerald-500/5"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.1 }}
        className="relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}