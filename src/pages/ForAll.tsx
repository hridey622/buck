import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, ArrowLeft } from 'lucide-react';
import ParticlesBackground from '../components/ui/ParticlesBackground';
import { useNavigate } from 'react-router-dom';

const companyInfo = {
  name: "For All",
  founded: "2024",
  location: "Delhi, India",
  teamSize: "5",
  description: "For All is a technology company focused on building innovative solutions across multiple sectors. We leverage cutting-edge technologies to solve complex problems and create value for our customers.",
  linkedin: "https://linkedin.com/company/for-all",
  twitter: "https://twitter.com/forall",
  founders: [
    {
      name: "Jane Doe",
      role: "CEO & Co-founder",
      linkedin: "https://linkedin.com/in/janedoe",
      bio: "10+ years of experience in technology and entrepreneurship"
    },
    {
      name: "John Smith",
      role: "CTO & Co-founder",
      linkedin: "https://linkedin.com/in/johnsmith",
      bio: "Expert in AI and machine learning with multiple patents"
    }
  ]
};

const ForAllSymbol = () => (
  <span className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
    ∀
  </span>
);

export default function Company() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary mb-8 hover:text-primary-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Sectors
        </button>

        {/* Header with gradient effect and logo */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex flex-col items-center mb-6">
            <ForAllSymbol />
          </div>
          <h1 className="text-6xl font-bold tracking-tight mb-8">
            <span className="relative">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
              {companyInfo.name}
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
            </span>
          </h1>
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href={companyInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={companyInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <p className="text-xl text-text-secondary">
            {companyInfo.description}
          </p>
        </div>

        {/* Company Info with gradient backgrounds */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <div className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Company Overview</h2>
              <div className="space-y-4">
                <div className="bg-background-light/80 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-primary">{companyInfo.founded}</div>
                  <div className="text-sm text-text-secondary">Founded</div>
                </div>
                <div className="bg-background-light/80 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-emerald-500">{companyInfo.location}</div>
                  <div className="text-sm text-text-secondary">Location</div>
                </div>
                <div className="bg-background-light/80 rounded-2xl p-4">
                  <div className="text-2xl font-bold text-text-primary">{companyInfo.teamSize}</div>
                  <div className="text-sm text-text-secondary">Team Members</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-emerald-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary to-emerald-500 opacity-5 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-6">What We Do</h2>
              <p className="text-text-secondary leading-relaxed">
                {companyInfo.description}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-5 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
          </div>
        </motion.div>

        {/* Founders Section with matching style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary">{founder.name}</h3>
                      <p className="text-lg text-text-secondary">{founder.role}</p>
                    </div>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{founder.bio}</p>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500 to-purple-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-violet-500 to-purple-500 opacity-5 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}