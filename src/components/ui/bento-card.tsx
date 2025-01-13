import React from "react"
import { motion } from "framer-motion"
import AnimatedGradient from "./animated-gradient"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
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
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="relative overflow-hidden h-full w-full bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 h-full flex flex-col p-8 lg:p-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <h3 className="text-base sm:text-lg text-gray-900 font-medium mb-1">
            {title}
          </h3>
        </motion.div>

        <motion.div className="mt-auto" variants={item}>
          <p className="text-4xl sm:text-6xl lg:text-7xl font-medium text-gray-900 tracking-tight">
            {value}
          </p>
          {subtitle && (
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              {subtitle}
            </p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default BentoCard 