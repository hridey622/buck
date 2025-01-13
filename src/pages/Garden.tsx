import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, Share2, Bookmark,
  TrendingUp, Rocket, Flame, Clock, ArrowUp,
  Filter, Plus, ChevronDown, User, MessageSquare
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { AnimatedButton } from '../components/ui/animated-button';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'all', label: 'All', icon: Filter },
  { id: 'trending', label: 'Trending', icon: TrendingUp },
  { id: 'newest', label: 'Newest', icon: Clock },
  { id: 'early', label: 'Early Stage', icon: Rocket },
];

const featuredStartups = [
  {
    title: 'AI-Powered Healthcare Assistant',
    description: 'Revolutionizing patient care with AI-driven personalized health monitoring and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500',
    category: 'Healthcare',
    raised: '$500K',
  },
  {
    title: 'Sustainable Urban Farming Network',
    description: 'Building a network of automated vertical farms in urban areas to provide fresh, locally-grown produce.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=500',
    category: 'AgriTech',
    raised: '$200K',
  },
  {
    title: 'Decentralized Energy Trading',
    description: 'Enabling peer-to-peer renewable energy trading using blockchain technology.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=500',
    category: 'CleanTech',
    raised: '$2.5M',
  },
];

const mockPosts = [
  {
    id: 1,
    title: 'AI-Powered Healthcare Assistant',
    description: 'Revolutionizing patient care with AI-driven personalized health monitoring and predictive analytics.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500',
    category: 'Healthcare',
    stage: 'Seed',
    raised: '$500K',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      role: 'Founder & CEO'
    },
    upvotes: 234,
    comments: 45,
    height: 'tall'
  },
  {
    id: 2,
    title: 'Sustainable Urban Farming Network',
    description: 'Building a network of automated vertical farms in urban areas to provide fresh, locally-grown produce.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=500',
    category: 'AgriTech',
    stage: 'Pre-seed',
    raised: '$200K',
    author: {
      name: 'Michael Torres',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      role: 'Co-founder'
    },
    upvotes: 189,
    comments: 32,
    height: 'medium'
  },
  {
    id: 3,
    title: 'Decentralized Energy Trading',
    description: 'Enabling peer-to-peer renewable energy trading using blockchain technology.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=500',
    category: 'CleanTech',
    stage: 'Series A',
    raised: '$2.5M',
    author: {
      name: 'Alex Rivera',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      role: 'CTO'
    },
    upvotes: 312,
    comments: 67,
    height: 'short'
  },
];

export default function Garden() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 mb-8">
            <MessageSquare className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-600">Startup Community</span>
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
            <span className="block text-gray-900">The</span>
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-violet-600/20 blur-lg" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">Garden</span>
            </span>
          </h1>

          <p className="text-xl text-gray-600">
            Discover and support promising startups building the future of technology
          </p>
        </div>

        {/* Categories */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-50 text-purple-600'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
          <Link to="/startup-application" className="w-full">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              
            Create Post
          </Button>
          </Link>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance] mb-8">
          {mockPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="break-inside-avoid mb-4"
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:border-purple-200 transition-colors">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-600 backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {post.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-xs text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="text-gray-600 hover:text-purple-600 transition-colors">
                        <ArrowUp className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-purple-600 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                      <button className="text-gray-600 hover:text-purple-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Load More
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}