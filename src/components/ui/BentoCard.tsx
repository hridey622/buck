import React from "react";
import { motion } from "framer-motion";
import AnimatedGradient from "./AnimatedGradient";

interface BentoCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  colors: string[];
  delay: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full rounded-2xl bg-background-light/50 backdrop-blur-sm border border-white/[0.08]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 className="text-sm sm:text-base md:text-lg text-text-secondary" variants={item}>
          {title}
        </motion.h3>
        <motion.p
          className={`font-medium mb-4 text-text-primary ${
            value === "Coming Soon"
              ? "text-lg sm:text-xl md:text-2xl"
              : "text-2xl sm:text-4xl md:text-5xl"
          }`}
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p className="text-sm text-text-secondary opacity-80" variants={item}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BentoCard;