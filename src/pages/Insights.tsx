import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowUpRight, Tag, TrendingUp, Bookmark, Share2 } from 'lucide-react';

const articles = [
  {
    title: 'The Future of AI in Investment Decision Making',
    excerpt: 'How artificial intelligence is revolutionizing the way we evaluate and select investment opportunities.',
    category: 'Technology',
    readTime: '8 min read',
    date: 'Mar 15, 2024',
    image: '/ai-investment.jpg'
  },
  {
    title: 'Sustainable Investing: Beyond the Buzzwords',
    excerpt: 'A deep dive into the real impact of ESG investing and what it means for the future of venture capital.',
    category: 'Sustainability',
    readTime: '6 min read',
    date: 'Mar 12, 2024',
    image: '/sustainable-investing.jpg'
  },
  {
    title: 'The Rise of Digital Health Startups',
    excerpt: 'Exploring the transformative potential of technology in healthcare and the opportunities it presents.',
    category: 'Healthcare',
    readTime: '10 min read',
    date: 'Mar 8, 2024',
    image: '/digital-health.jpg'
  }
];

const featuredInsight = {
  title: 'The Next Wave of Innovation',
  subtitle: 'Emerging Technologies Reshaping Industries',
  excerpt: 'From quantum computing to synthetic biology, we explore the breakthrough technologies that will define the next decade of innovation and investment opportunities.',
  author: {
    name: 'Sarah Chen',
    role: 'Principal, Technology Investments',
    image: '/author.jpg'
  },
  readTime: '12 min read',
  date: 'Mar 18, 2024',
  image: '/featured-insight.jpg'
};

export default function Insights() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 mb-8">
            <BookOpen className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-600">Market Insights</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Stay Ahead of the Curve
          </h1>
          <p className="text-xl text-gray-600">
            Discover the latest trends, analysis, and insights from our investment experts
          </p>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group mb-32"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
          <div className="relative bg-white p-8 rounded-3xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                    {featuredInsight.title}
                    <span className="block text-2xl text-gray-600 mt-2">{featuredInsight.subtitle}</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8">{featuredInsight.excerpt}</p>

                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{featuredInsight.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Tag className="h-4 w-4" />
                      <span>Featured</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100" />
                    <div>
                      <div className="font-medium text-gray-900">{featuredInsight.author.name}</div>
                      <div className="text-sm text-gray-600">{featuredInsight.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
                      <Bookmark className="h-5 w-5 text-gray-600 hover:text-purple-600" />
                    </button>
                    <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
                      <Share2 className="h-5 w-5 text-gray-600 hover:text-purple-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="relative h-48 bg-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-fuchsia-500/5" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-600">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-600">{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{article.date}</span>
                    <ArrowUpRight className="h-5 w-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center bg-purple-50 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-600">Stay Informed</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-900">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest insights and analysis delivered straight to your inbox
          </p>

          <div className="flex items-center justify-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/20 w-full max-w-md text-gray-900 placeholder:text-gray-500"
            />
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}