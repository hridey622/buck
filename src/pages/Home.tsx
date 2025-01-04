import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';
import ParticlesBackground from '../components/ui/ParticlesBackground';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-4rem)]">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl sm:text-7xl font-bold tracking-tight mb-8">
              <span className="block">Empowering the</span>
              <span className="relative inline-block">
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                  Next Generation
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
              </span>
              <span className="block">of Innovation</span>
            </h1>

            <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
              We partner with visionary founders and companies building breakthrough technologies
              that transform industries and improve lives.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {isAuthenticated ? (
                <>
                  <Link to="/sectors">
                    <Button className="group">
                      Explore Sectors
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button className="group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline">
                      Create Account
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}