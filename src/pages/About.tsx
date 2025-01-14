import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Globe, Award, ArrowRight, BookOpen } from 'lucide-react';

const stats = [
  {
    label: 'Portfolio Companies',
    value: '45+',
    description: 'Innovative startups backed'
  },
  {
    label: 'Total Investments',
    value: '$50M+',
    description: 'Capital deployed'
  },
  {
    label: 'Success Rate',
    value: '89%',
    description: 'Companies still active'
  },
  {
    label: 'Global Network',
    value: '20+',
    description: 'Countries represented'
  }
];

const values = [
  {
    icon: Users,
    title: 'Founder First',
    description: 'We believe in empowering visionary founders who are building the future.'
  },
  {
    icon: TrendingUp,
    title: 'Long-term Growth',
    description: 'Our focus is on sustainable growth and lasting impact in every investment.'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We seek opportunities that can scale globally and transform industries.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 mb-8">
            <BookOpen className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-600">Our Story</span>
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
            <span className="block text-gray-900">About</span>
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-fuchsia-600/20 blur-lg" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">Seed</span>
            </span>
          </h1>

          <p className="text-xl text-gray-600">
            We're a venture capital firm focused on backing exceptional founders
            building breakthrough technologies that transform industries.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-white p-6 rounded-2xl border border-gray-200">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-purple-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12">
              To empower the next generation of technology companies by providing
              capital, expertise, and a global network of resources.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-32">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're a diverse team of investors, operators, and technologists working
            together to help founders build extraordinary companies.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 transition-colors group">
            Meet the Team
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}