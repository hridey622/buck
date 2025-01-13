import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  delay?: number;
}

export default function TextGenerateEffect({
  words,
  className = "",
  delay = 0,
}: TextGenerateEffectProps) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Start animation immediately
    setComplete(true);
  }, []);

  const characters = words.split("").map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 1, y: 0 }}
      animate={complete ? {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.2,
          delay: delay + (i * 0.02), // Faster character reveal
          ease: [0.21, 0.47, 0.32, 0.98],
        }
      } : {}}
      className="inline-block font-helvetica"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));

  return (
    <div className={className}>
      <div className="relative">
        {/* Blurred version for glow effect */}
        <div
          className="absolute -inset-2 blur-lg bg-gradient-to-r from-primary/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ clipPath: "inset(10% 20%)" }}
        />

        {/* Actual text */}
        <div className="relative">
          {characters}
        </div>
      </div>
    </div>
  );
}