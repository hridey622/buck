import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Users, DollarSign, BarChart3, PieChart, LineChart, Activity, ArrowUpRight, Calendar, Target, Award } from 'lucide-react';
import ParticlesBackground from '../components/ui/ParticlesBackground';
import AnimatedGradient from '../components/ui/AnimatedGradient';
import BentoCard from '../components/ui/BentoCard';

const investments = [
  {
    name: 'TechVision AI',
    amount: '$2.5M',
    stage: 'Series A',
    sector: 'AI & ML',
    growth: '+45%',
    trend: [40, 45, 50, 48, 55, 60, 58, 65],
    status: 'active',
    details: {
      valuation: '$25M',
      ownership: '12%',
      investmentDate: 'Mar 2024',
      team: '28 employees'
    }
  },
  {
    name: 'GreenEnergy Solutions',
    amount: '$1.8M',
    stage: 'Seed',
    sector: 'Climate Tech',
    growth: '+32%',
    trend: [30, 32, 35, 38, 36, 40, 42, 45],
    status: 'active',
    details: {
      valuation: '$12M',
      ownership: '15%',
      investmentDate: 'Feb 2024',
      team: '15 employees'
    }
  },
  {
    name: 'HealthTech Innovations',
    amount: '$3.2M',
    stage: 'Series A',
    sector: 'Digital Health',
    growth: '+28%',
    trend: [45, 48, 50, 52, 54, 53, 56, 58],
    status: 'active',
    details: {
      valuation: '$32M',
      ownership: '10%',
      investmentDate: 'Jan 2024',
      team: '42 employees'
    }
  }
];

const stats = [
  { label: 'Total Invested', value: '$50M+', icon: DollarSign },
  { label: 'Portfolio Companies', value: '45+', icon: Users },
  { label: 'Average Growth', value: '35%', icon: TrendingUp },
  { label: 'Success Rate', value: '89%', icon: BarChart2 }
];

function TrendLine({ data, color = 'primary' }: { data: number[], color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((value - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg className="w-full h-8" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.polyline
        points={points}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`stroke-${color}`}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

export default function Investments() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center bg-primary/5 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <BarChart3 className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Portfolio Overview</span>
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-text-primary mb-8">
            <span className="block text-text-primary">Investment</span>
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
              <span className="relative text-primary">Portfolio</span>
            </span>
          </h1>

          <p className="text-xl text-text-secondary">
            Track our active investments and their performance metrics across our portfolio companies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <BentoCard
              key={stat.label}
              title={stat.label}
              value={stat.value}
              colors={['#3b82f6', '#2563eb']}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="space-y-8">
          {investments.map((investment, index) => (
            <div
              key={investment.name}
              className="relative overflow-hidden rounded-2xl bg-background-light/50 backdrop-blur-sm border border-white/[0.08]"
            >
              <AnimatedGradient
                colors={[
                  investment.sector === 'AI & ML' ? '#8b5cf6' : investment.sector === 'Climate Tech' ? '#ec4899' : '#3b82f6',
                  investment.sector === 'AI & ML' ? '#6d28d9' : investment.sector === 'Climate Tech' ? '#db2777' : '#1d4ed8'
                ]}
                speed={0.05}
                blur="medium"
              />
              <div className="relative z-10 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold mb-2 text-text-primary">
                      {investment.name}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                      <span>{investment.sector}</span>
                      <span>•</span>
                      <span>{investment.stage}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-text-secondary">Investment</div>
                        <div className="font-medium text-text-primary">{investment.amount}</div>
                      </div>
                      <div>
                        <div className="text-sm text-text-secondary">Growth</div>
                        <div className="font-medium text-emerald-500">{investment.growth}</div>
                      </div>
                    </div>
                  </div>

                  {/* Investment Details */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      <div>
                        <div className="flex items-center text-sm text-text-secondary mb-1">
                          <Target className="h-4 w-4 mr-1" />
                          <span>Valuation</span>
                        </div>
                        <div className="font-medium text-text-primary">{investment.details.valuation}</div>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-text-secondary mb-1">
                          <PieChart className="h-4 w-4 mr-1" />
                          <span>Ownership</span>
                        </div>
                        <div className="font-medium text-text-primary">{investment.details.ownership}</div>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-text-secondary mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>Investment Date</span>
                        </div>
                        <div className="font-medium text-text-primary">{investment.details.investmentDate}</div>
                      </div>
                      <div>
                        <div className="flex items-center text-sm text-text-secondary mb-1">
                          <Users className="h-4 w-4 mr-1" />
                          <span>Team Size</span>
                        </div>
                        <div className="font-medium text-text-primary">{investment.details.team}</div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Trend */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-text-secondary">Performance</div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                        <span className="text-sm text-text-secondary">Active</span>
                      </div>
                    </div>
                    <TrendLine data={investment.trend} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: LineChart, title: 'Growth Metrics', description: 'Track portfolio company performance over time', colors: ['#8b5cf6', '#6d28d9'] },
            { icon: PieChart, title: 'Sector Distribution', description: 'Analyze investment allocation across sectors', colors: ['#ec4899', '#db2777'] },
            { icon: Activity, title: 'Risk Analysis', description: 'Monitor and assess investment risk factors', colors: ['#f59e0b', '#d97706'] }
          ].map((chart, index) => (
            <BentoCard
              key={chart.title}
              title={chart.title}
              value="Coming Soon"
              subtitle={chart.description}
              colors={chart.colors}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}