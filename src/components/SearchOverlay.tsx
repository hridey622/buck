import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowLeft } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Search Container */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 z-50 flex flex-col md:pt-20"
          >
            <div className="w-full max-w-3xl mx-auto md:px-4">
              {/* Search Header - Different for Mobile and Desktop */}
              <div className="flex items-center gap-4 bg-[#141414] md:rounded-t-2xl p-4 border-b border-white/10">
                {/* Back button for mobile */}
                <button 
                  onClick={onClose}
                  className="md:hidden p-1 -ml-1 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 text-gray-400" />
                </button>
                
                <Search className="h-5 w-5 text-gray-400 hidden md:block" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for startups..."
                  className="flex-1 bg-transparent text-white placeholder:text-gray-400 focus:outline-none text-base md:text-lg"
                  onClick={(e) => e.stopPropagation()}
                />
                {/* Close button only on desktop */}
                <button 
                  onClick={onClose}
                  className="hidden md:block p-2 hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-gray-400" />
                </button>
              </div>

              {/* Search Results */}
              <div className="bg-[#141414] md:rounded-b-2xl flex-1 overflow-y-auto">
                <div className="p-2">
                  <div className="px-3 py-2 text-sm text-gray-400">
                    Popular Categories
                  </div>
                  <div className="space-y-1">
                    {[
                      'AI & Machine Learning',
                      'FinTech',
                      'CleanTech',
                      'HealthTech',
                      'Web3',
                      'SaaS',
                      'E-commerce',
                      'EdTech'
                    ].map((category) => (
                      <button
                        key={category}
                        className="w-full px-3 py-2 text-left text-gray-400 hover:bg-white/5 rounded-lg transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center gap-3">
                          <Search className="h-4 w-4" />
                          <span>{category}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 