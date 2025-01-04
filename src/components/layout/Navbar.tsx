import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sparkles, Search, Bell, User, Menu, X,
  ChevronDown, Zap, TrendingUp, Settings
} from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-background-card/80' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
              <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all opacity-0 group-hover:opacity-100" />
            </div>
            <span className="ml-2 text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Inventure
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              ['Sectors', '/sectors'],
              ['Investments', '/investments'],
              ['Insights', '/insights'],
              ['About', '/about'],
            ].map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors duration-200 ${
                  isActive(path)
                    ? 'text-primary font-medium'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className={`relative hidden md:block transition-all duration-300 ${
              isSearchFocused ? 'w-80' : 'w-64'
            }`}>
              <Search className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                isSearchFocused ? 'text-primary' : 'text-text-secondary'
              }`} />
              <input
                type="text"
                placeholder="Search opportunities..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-background-light border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="relative group">
                <Bell className="h-6 w-6 text-text-secondary group-hover:text-primary transition-colors" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <Link
                to="/profile"
                className="relative group"
              >
                <User className="h-6 w-6 text-text-secondary group-hover:text-primary transition-colors" />
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-text-secondary" />
              ) : (
                <Menu className="h-6 w-6 text-text-secondary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 py-6 bg-background-card/95 backdrop-blur-lg border-t border-border">
          <nav className="space-y-4">
            {[
              ['Sectors', '/sectors'],
              ['Investments', '/investments'],
              ['Insights', '/insights'],
              ['About', '/about'],
            ].map(([name, path]) => (
              <Link
                key={String(path)}
                to={String(path)}
                className={`block px-4 py-2 rounded-lg ${
                  isActive(String(path))
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'hover:bg-background-light'
                }`}
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}