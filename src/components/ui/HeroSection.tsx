import React from 'react';
import GradientText from './GradientText';

interface HeroSectionProps {
  title: string;
  gradientText: string;
  description: string;
  variant?: 'default' | 'insights' | 'about' | 'investments';
  children?: React.ReactNode;
}

export default function HeroSection({
  title,
  gradientText,
  description,
  variant = 'default',
  children
}: HeroSectionProps) {
  const variants = {
    default: "bg-gradient-to-br from-background-dark to-background-dark/90",
    insights: "bg-gradient-to-br from-emerald-900 to-emerald-800",
    about: "bg-gradient-to-br from-indigo-900 to-indigo-800",
    investments: "bg-gradient-to-br from-blue-900 to-blue-800"
  };

  const patterns = {
    default: "background-pattern-1",
    insights: "background-pattern-2",
    about: "background-pattern-3",
    investments: "background-pattern-4"
  };

  return (
    <div className={`relative overflow-hidden ${variants[variant]} py-24 -mt-24 mb-16`}>
      <div className={`absolute inset-0 opacity-5 ${patterns[variant]}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            {title}
            <br />
            <GradientText>{gradientText}</GradientText>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}