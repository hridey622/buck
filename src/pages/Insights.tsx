import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowUpRight, Tag, TrendingUp, Bookmark, Share2 } from 'lucide-react';
import ParticlesBackground from '../components/ui/ParticlesBackground';

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
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center bg-primary/5 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
            <BookOpen className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Market Intelligence</span>
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-text-primary mb-8">
            <span className="block text-text-primary">Market</span>
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
              <span className="relative text-primary">Intelligence</span>
            </span>
          </h1>

          <p className="text-xl text-text-secondary">
            In-depth analysis and perspectives on the evolving landscape of venture capital and innovation
          </p>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group mb-32"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
          <div className="relative bg-background-light/50 p-8 rounded-3xl border border-border backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-text-primary">
                    {featuredInsight.title}
                    <span className="block text-2xl text-text-secondary mt-2">{featuredInsight.subtitle}</span>
                  </h2>
                  <p className="text-text-secondary text-lg mb-8">{featuredInsight.excerpt}</p>

                  <div className="flex items-center space-x-6 mb-8">
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Clock className="h-4 w-4" />
                      <span>{featuredInsight.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Tag className="h-4 w-4" />
                      <span>Featured</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-background-light/80" />
                    <div>
                      <div className="font-medium text-text-primary">{featuredInsight.author.name}</div>
                      <div className="text-sm text-text-secondary">{featuredInsight.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                      <Bookmark className="h-5 w-5 text-text-secondary" />
                    </button>
                    <button className="p-2 hover:bg-primary/5 rounded-full transition-colors">
                      <Share2 className="h-5 w-5 text-text-secondary" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-background-light/80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-emerald-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative bg-background-light/50 p-6 rounded-2xl border border-border backdrop-blur-sm">
                {/* Image */}
                <div className="relative h-48 rounded-xl overflow-hidden bg-background-light/80 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emerald-500/5" />
                </div>

                {/* Content */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                  <div className="text-sm text-text-secondary">{article.date}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-text-secondary mb-6 line-clamp-2">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-text-secondary">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.readTime}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
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
          <div className="inline-flex items-center bg-primary/5 rounded-full px-4 py-2 mb-8">
            <TrendingUp className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Stay Informed</span>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-text-primary">Subscribe to Our Newsletter</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Get the latest insights and analysis delivered straight to your inbox
          </p>

          <div className="flex items-center justify-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-xl bg-background-light/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 w-full max-w-md text-text-primary placeholder:text-text-secondary"
            />
            <button className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}