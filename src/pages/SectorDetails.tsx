import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Users, TrendingUp, Briefcase, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import ParticlesBackground from '../components/ui/ParticlesBackground';

// Mock data - Replace with actual data from your backend
const sectorsData = {
  'ai-machine-learning': {
    id: 'ai-machine-learning',
    name: 'AI & Machine Learning',
    description: 'Transforming industries through advanced algorithms and deep learning',
    stats: {
      companies: 45,
      totalFunding: '$15.7T',
      avgGrowth: '127%',
      jobs: '12,000+'
    },
    color: '#8b5cf6',
    startups: [
      {
        id: 1,
        name: 'Neural Dynamics',
        description: 'Advanced AI models for predictive analytics',
        funding: '$25M',
        stage: 'Series A',
        employees: '50-100',
        growth: '+85%',
        logo: '🧠'
      },
      {
        id: 2,
        name: 'DeepTech Solutions',
        description: 'Enterprise AI automation platform',
        funding: '$42M',
        stage: 'Series B',
        employees: '100-200',
        growth: '+120%',
        logo: '🤖'
      },
      {
        id: 3,
        name: 'Cognitive Systems',
        description: 'AI-powered decision making tools',
        funding: '$18M',
        stage: 'Series A',
        employees: '25-50',
        growth: '+65%',
        logo: '💡'
      }
    ]
  },
  'digital-health': {
    id: 'digital-health',
    name: 'Digital Health',
    description: 'Revolutionary healthcare solutions improving patient care worldwide',
    stats: {
      companies: 32,
      totalFunding: '$8.3T',
      avgGrowth: '85%',
      jobs: '8,500+'
    },
    color: '#ec4899',
    startups: [
      {
        id: 1,
        name: 'HealthTech Solutions',
        description: 'AI-powered diagnostic platform',
        funding: '$30M',
        stage: 'Series A',
        employees: '75-100',
        growth: '+92%',
        logo: '🏥'
      },
      {
        id: 2,
        name: 'MindWell',
        description: 'Digital mental health platform',
        funding: '$28M',
        stage: 'Series B',
        employees: '50-100',
        growth: '+78%',
        logo: '🔋'
      }
    ]
  },
  'fintech': {
    id: 'fintech',
    name: 'FinTech',
    description: 'Innovative solutions reshaping banking, payments, and investments',
    stats: {
      companies: 38,
      totalFunding: '$6.5T',
      avgGrowth: '92%',
      jobs: '9,200+'
    },
    color: '#f59e0b',
    startups: [
      {
        id: 1,
        name: 'PayFlow',
        description: 'Next-gen payment infrastructure',
        funding: '$45M',
        stage: 'Series B',
        employees: '100-150',
        growth: '+125%',
        logo: '💳'
      },
      {
        id: 2,
        name: 'WealthWise',
        description: 'AI-powered investment platform',
        funding: '$22M',
        stage: 'Series A',
        employees: '25-50',
        growth: '+82%',
        logo: '📈'
      }
    ]
  },
  'enterprise-tech': {
    id: 'enterprise-tech',
    name: 'Enterprise Tech',
    description: 'B2B solutions powering business transformation and growth',
    stats: {
      companies: 42,
      totalFunding: '$4.2T',
      avgGrowth: '73%',
      jobs: '10,500+'
    },
    color: '#8b5cf6',
    startups: [
      {
        id: 1,
        name: 'CloudOps',
        description: 'Cloud infrastructure automation',
        funding: '$38M',
        stage: 'Series B',
        employees: '75-100',
        growth: '+95%',
        logo: '☁️'
      },
      {
        id: 2,
        name: 'SecureNet',
        description: 'Enterprise cybersecurity platform',
        funding: '$32M',
        stage: 'Series A',
        employees: '50-75',
        growth: '+68%',
        logo: '🔒'
      }
    ]
  },
  'climate-tech': {
    id: 'climate-tech',
    name: 'Climate Tech',
    description: 'Sustainable solutions for a better future and cleaner planet',
    stats: {
      companies: 35,
      totalFunding: '$7.1T',
      avgGrowth: '95%',
      jobs: '9,800+'
    },
    color: '#10b981',
    startups: [
      {
        id: 1,
        name: 'GreenGrid',
        description: 'Smart grid optimization technology',
        funding: '$42M',
        stage: 'Series B',
        employees: '100-150',
        growth: '+115%',
        logo: '⚡'
      },
      {
        id: 2,
        name: 'CarbonCapture',
        description: 'Direct air carbon capture solutions',
        funding: '$35M',
        stage: 'Series A',
        employees: '50-100',
        growth: '+88%',
        logo: '🌱'
      }
    ]
  },
  'web3': {
    id: 'web3',
    name: 'Web3',
    description: 'Decentralized technologies powering the next internet era',
    stats: {
      companies: 40,
      totalFunding: '$3.9T',
      avgGrowth: '112%',
      jobs: '8,900+'
    },
    color: '#c026d3',
    startups: [
      {
        id: 1,
        name: 'ChainFlow',
        description: 'Layer 2 scaling solutions',
        funding: '$48M',
        stage: 'Series B',
        employees: '75-100',
        growth: '+135%',
        logo: '⛓️'
      },
      {
        id: 2,
        name: 'MetaVerse',
        description: 'Web3 identity and authentication',
        funding: '$28M',
        stage: 'Series A',
        employees: '25-50',
        growth: '+92%',
        logo: '🌐'
      }
    ]
  }
};

export default function SectorDetails() {
  const { sectorId } = useParams();
  const sector = sectorsData[sectorId as keyof typeof sectorsData];

  if (!sector) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Sector not found</h1>
          <Link to="/sectors">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Sectors
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative pt-8">
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/sectors" className="inline-flex items-center text-sm text-text-secondary hover:text-primary mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sectors
        </Link>

        {/* Sector Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4">{sector.name}</h1>
            <p className="text-xl text-text-secondary max-w-3xl">
              {sector.description}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
          >
            <div className="bg-background-light/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <Building2 className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{sector.stats.companies}</div>
              <div className="text-sm text-text-secondary">Companies</div>
            </div>
            <div className="bg-background-light/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <Briefcase className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{sector.stats.totalFunding}</div>
              <div className="text-sm text-text-secondary">Total Funding</div>
            </div>
            <div className="bg-background-light/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <TrendingUp className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{sector.stats.avgGrowth}</div>
              <div className="text-sm text-text-secondary">Avg. Growth</div>
            </div>
            <div className="bg-background-light/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <Users className="h-5 w-5 text-primary mb-2" />
              <div className="text-2xl font-bold">{sector.stats.jobs}</div>
              <div className="text-sm text-text-secondary">Jobs Created</div>
            </div>
          </motion.div>
        </div>

        {/* Startups List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6">Portfolio Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sector.startups.map((startup, index) => (
              <motion.div
                key={startup.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative overflow-hidden rounded-xl bg-background-light/50 backdrop-blur-sm border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                      {startup.logo}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {startup.name}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {startup.description}
                      </p>
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-5 w-5 text-primary" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-text-secondary">Funding</div>
                    <div className="font-medium">{startup.funding}</div>
                  </div>
                  <div>
                    <div className="text-text-secondary">Stage</div>
                    <div className="font-medium">{startup.stage}</div>
                  </div>
                  <div>
                    <div className="text-text-secondary">Team</div>
                    <div className="font-medium">{startup.employees}</div>
                  </div>
                  <div>
                    <div className="text-text-secondary">Growth</div>
                    <div className="font-medium text-emerald-500">{startup.growth}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}