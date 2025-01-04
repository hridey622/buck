import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Coins, Cpu, Leaf, Globe, ArrowRight, ChevronRight } from 'lucide-react';
import ParticlesBackground from '../components/ui/ParticlesBackground';
import { useNavigate } from 'react-router-dom';

const sectors = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description: 'Transforming industries through advanced algorithms and deep learning',
    color: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    stats: {
      deals: '234+',
      growth: '127%',
      market: '$15.7T'
    },
    technologies: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Autonomous Systems',
      'Edge AI',
      'MLOps'
    ]
  },
  {
    icon: Heart,
    title: 'Digital Health',
    description: 'Revolutionary healthcare solutions improving patient care worldwide',
    color: 'from-rose-500 to-pink-500',
    bgGradient: 'from-rose-50 to-pink-50',
    stats: {
      deals: '156+',
      growth: '85%',
      market: '$8.3T'
    },
    technologies: [
      'Telemedicine',
      'Digital Therapeutics',
      'Health Analytics',
      'Remote Monitoring',
      'AI Diagnostics',
      'Mental Health Tech'
    ]
  },
  {
    icon: Coins,
    title: 'FinTech',
    description: 'Innovative solutions reshaping banking, payments, and investments',
    color: 'from-amber-500 to-yellow-500',
    bgGradient: 'from-amber-50 to-yellow-50',
    stats: {
      deals: '189+',
      growth: '92%',
      market: '$6.5T'
    },
    technologies: [
      'Digital Banking',
      'Blockchain',
      'Payment Processing',
      'RegTech',
      'InsurTech',
      'WealthTech'
    ]
  },
  {
    icon: Cpu,
    title: 'Enterprise Tech',
    description: 'B2B solutions powering business transformation and growth',
    color: 'from-violet-500 to-purple-500',
    bgGradient: 'from-violet-50 to-purple-50',
    stats: {
      deals: '167+',
      growth: '73%',
      market: '$4.2T'
    },
    technologies: [
      'Cloud Infrastructure',
      'DevOps',
      'Data Analytics',
      'Cybersecurity',
      'SaaS',
      'Low-Code'
    ]
  },
  {
    icon: Leaf,
    title: 'Climate Tech',
    description: 'Sustainable solutions for a better future and cleaner planet',
    color: 'from-emerald-500 to-green-500',
    bgGradient: 'from-emerald-50 to-green-50',
    stats: {
      deals: '145+',
      growth: '95%',
      market: '$7.1T'
    },
    technologies: [
      'Renewable Energy',
      'Carbon Capture',
      'Smart Grid',
      'Clean Transport',
      'AgTech',
      'Circular Economy'
    ]
  },
  {
    icon: Globe,
    title: 'Web3',
    description: 'Decentralized technologies powering the next internet era',
    color: 'from-fuchsia-500 to-purple-500',
    bgGradient: 'from-fuchsia-50 to-purple-50',
    stats: {
      deals: '178+',
      growth: '112%',
      market: '$3.9T'
    },
    technologies: [
      'Smart Contracts',
      'DeFi',
      'NFT Platforms',
      'DAOs',
      'Layer 2',
      'Web3 Identity'
    ]
  }
];

export default function Sectors() {
  const navigate = useNavigate();

  const handleSectorClick = () => {
    navigate('/forall');
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-bold tracking-tight mb-8">
            <span className="block text-text-primary">Investment</span>
            <span className="relative">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                Sectors
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
            </span>
          </h1>
          <p className="text-xl text-text-secondary">
            We invest in breakthrough technologies across high-growth sectors,
            backing visionary founders who are building tomorrow's industry leaders.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={handleSectorClick}
            >
              {/* Card */}
              <div className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm">
                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${sector.color} flex items-center justify-center text-white`}>
                        <sector.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-1">
                          {sector.title}
                        </h3>
                        <p className="text-text-secondary">
                          {sector.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-background-light/80 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-primary">{sector.stats.deals}</div>
                      <div className="text-sm text-text-secondary">Deals</div>
                    </div>
                    <div className="bg-background-light/80 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-emerald-500">+{sector.stats.growth}</div>
                      <div className="text-sm text-text-secondary">Growth</div>
                    </div>
                    <div className="bg-background-light/80 rounded-2xl p-4">
                      <div className="text-2xl font-bold text-text-primary">{sector.stats.market}</div>
                      <div className="text-sm text-text-secondary">TAM</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-4">Key Technologies</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {sector.technologies.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-2 text-text-secondary"
                        >
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <button className="flex items-center text-primary hover:text-primary-dark transition-colors">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${sector.color} opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl group-hover:opacity-10 transition-opacity duration-300`} />
                <div className={`absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr ${sector.color} opacity-5 rounded-full translate-y-32 -translate-x-32 blur-3xl group-hover:opacity-10 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}