import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface BackgroundEffectProps {
  variant?: 'default' | 'home' | 'auth';
}

export default function BackgroundEffect({ variant = 'default' }: BackgroundEffectProps) {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#050A44]" />

      {/* Animated shapes */}
      <div className="absolute inset-0">
        {/* Large glowing orb */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0A21C0] blur-3xl"
        />

        {/* Floating crosses */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              opacity: 0
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-16 h-16"
          >
            <div className="absolute inset-0 bg-[#0A21C0] rounded-lg rotate-45" />
            <div className="absolute inset-0 bg-[#0A21C0] rounded-lg -rotate-45" />
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, ${variant === 'auth' ? '#B3B4BD' : '#050A44'} 1px, transparent 1px),
                             linear-gradient(to bottom, ${variant === 'auth' ? '#B3B4BD' : '#050A44'} 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            opacity: 0.1
          }}
        />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
    </div>
  );
}