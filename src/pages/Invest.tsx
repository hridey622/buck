import React, { useEffect, useId, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Bell, User, Menu, X,
  DollarSign, TrendingUp, Users, ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import GooglePayButton from '../components/payment/GooglePayButton';

interface Startup {
  name: string;
  logo: string;
  sector: string;
  description: string;
  raised: string;
  valuation: string;
  traction: string;
  location: string;
  stage: string;
  color: string;
  bgGradient: string;
}

const startups: Startup[] = [
  {
    name: 'EcoCharge',
    logo: '/startup-logos/ecocharge.png',
    sector: 'Climate Tech',
    description: 'Revolutionary EV charging infrastructure with smart grid integration',
    raised: '$2.5M',
    valuation: '$12M',
    traction: '50K+ Users',
    location: 'San Francisco, CA',
    stage: 'Series A',
    color: 'from-purple-500 to-violet-600',
    bgGradient: 'from-purple-50 to-violet-50',
  },
  {
    name: 'HealthAI',
    logo: '/startup-logos/healthai.png',
    sector: 'Digital Health',
    description: 'AI-powered diagnostics platform for early disease detection',
    raised: '$3.8M',
    valuation: '$18M',
    traction: '25+ Hospitals',
    location: 'Boston, MA',
    stage: 'Seed',
    color: 'from-fuchsia-500 to-purple-600',
    bgGradient: 'from-fuchsia-50 to-purple-50',
  },
  {
    name: 'CryptoFlow',
    logo: '/startup-logos/cryptoflow.png',
    sector: 'FinTech',
    description: 'Next-gen DeFi platform for institutional investors',
    raised: '$5.2M',
    valuation: '$25M',
    traction: '$100M TVL',
    location: 'New York, NY',
    stage: 'Series A',
    color: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
  },
  {
    name: 'DataSense',
    logo: '/startup-logos/datasense.png',
    sector: 'Enterprise Tech',
    description: 'Real-time data analytics platform for enterprise decisions',
    raised: '$4.1M',
    valuation: '$20M',
    traction: '100+ Enterprise Clients',
    location: 'Austin, TX',
    stage: 'Seed',
    color: 'from-indigo-500 to-purple-600',
    bgGradient: 'from-indigo-50 to-purple-50',
  },
  {
    name: 'AIAssist',
    logo: '/startup-logos/aiassist.png',
    sector: 'AI & ML',
    description: 'Generative AI platform for content creation',
    raised: '$6.5M',
    valuation: '$30M',
    traction: '1M+ Users',
    location: 'Seattle, WA',
    stage: 'Series A',
    color: 'from-purple-500 to-fuchsia-600',
    bgGradient: 'from-purple-50 to-fuchsia-50',
  },
  {
    name: 'MetaVerse',
    logo: '/startup-logos/metaverse.png',
    sector: 'Web3',
    description: 'Decentralized virtual world platform',
    raised: '$4.8M',
    valuation: '$22M',
    traction: '250K DAU',
    location: 'Miami, FL',
    stage: 'Seed',
    color: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50',
  }
];

export default function Invest() {
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const id = useId();

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle startup selection
  const handleStartupClick = (startup: Startup) => {
    setSelectedStartup(startup);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Invest in the Future
          </h1>
          <p className="text-xl text-gray-600">
            Support innovative startups and be part of their growth journey
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex-1 min-w-[240px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search startups..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-600">
              Stage
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-600">
              Sector
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-gray-200 text-gray-600 hover:text-purple-600 hover:border-purple-600">
              Location
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup) => (
            <motion.div
              key={startup.name}
              layoutId={`container-${startup.name}-${id}`}
              onClick={() => handleStartupClick(startup)}
              className="group cursor-pointer"
            >
              <div className="relative h-full rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-b ${startup.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                <div className="relative h-full bg-white border border-gray-200 p-6 rounded-2xl overflow-hidden group-hover:border-purple-200 transition-all duration-300">
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 mr-4">
                        <motion.h3
                          className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300"
                          layoutId={`title-${startup.name}-${id}`}
                        >
                          {startup.name}
                        </motion.h3>
                        <motion.span
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-600 group-hover:bg-purple-100 transition-colors duration-300"
                          layoutId={`sector-${startup.sector}-${id}`}
                        >
                          {startup.sector}
                        </motion.span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-300">{startup.raised}</div>
                        <div className="text-xs text-gray-600">{startup.stage}</div>
                      </div>
                    </div>

                    <motion.p
                      className="text-gray-600 mb-4 line-clamp-2"
                      layoutId={`description-${startup.name}-${id}`}
                    >
                      {startup.description}
                    </motion.p>

                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <DollarSign className="h-4 w-4 text-gray-600" />
                            <span className="text-sm text-gray-600">{startup.valuation}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <TrendingUp className="h-4 w-4 text-gray-600" />
                            <span className="text-sm text-gray-600">{startup.traction}</span>
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Modal */}
        <AnimatePresence>
          {isModalOpen && selectedStartup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                ref={modalRef}
                layoutId={`container-${selectedStartup.name}-${id}`}
                className="bg-white rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <motion.h2
                        layoutId={`title-${selectedStartup.name}-${id}`}
                        className="text-2xl font-bold text-gray-900 mb-2"
                      >
                        {selectedStartup.name}
                      </motion.h2>
                      <motion.div
                        layoutId={`sector-${selectedStartup.sector}-${id}`}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-600"
                      >
                        {selectedStartup.sector}
                      </motion.div>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Description */}
                  <motion.p
                    layoutId={`description-${selectedStartup.name}-${id}`}
                    className="text-gray-600 mb-8"
                  >
                    {selectedStartup.description}
                  </motion.p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <DollarSign className="h-4 w-4 mr-1.5" />
                        Valuation
                      </div>
                      <div className="text-xl sm:text-2xl font-medium text-gray-900">{selectedStartup.valuation}</div>
                      <div className="text-sm text-gray-600 mt-1">Current valuation</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <TrendingUp className="h-4 w-4 mr-1.5" />
                        Raised
                      </div>
                      <div className="text-xl sm:text-2xl font-medium text-gray-900">{selectedStartup.raised}</div>
                      <div className="text-sm text-gray-600 mt-1">Total funding</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <Users className="h-4 w-4 mr-1.5" />
                        Traction
                      </div>
                      <div className="text-xl sm:text-2xl font-medium text-gray-900">{selectedStartup.traction}</div>
                      <div className="text-sm text-gray-600 mt-1">User base</div>
                    </div>
                  </div>

                  {/* Company Details and Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-900 mb-4">Company Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-sm text-gray-600">Location</span>
                          <span className="text-sm text-gray-900">{selectedStartup.location}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-sm text-gray-600">Stage</span>
                          <span className="text-sm text-gray-900">{selectedStartup.stage}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-sm text-gray-600">Sector</span>
                          <span className="text-sm text-gray-900">{selectedStartup.sector}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-gray-900 mb-4">Investment Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-sm text-gray-600">Minimum Investment</span>
                          <span className="text-sm text-gray-900">$1,000</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-sm text-gray-600">Target Close</span>
                          <span className="text-sm text-gray-900">Dec 31, 2024</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-200">
                          <span className="text-sm text-gray-600">Investment Type</span>
                          <span className="text-sm text-gray-900">SAFE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Investment Form */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Make an Investment</h4>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="flex-1 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                      />
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Invest Now
                      </Button>
                    </div>
                    <div className="mt-4">
                      <GooglePayButton
                        amount={1000}
                        onSuccess={() => {
                          alert('Investment successful!');
                          setIsModalOpen(false);
                        }}
                        onError={(error) => {
                          console.error('Payment error:', error);
                          alert('Payment failed. Please try again.');
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}