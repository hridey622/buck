import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 backdrop-blur-lg border-b border-border h-16">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-[#00A651] text-2xl font-bold">
              Seed
            </span>
          </Link>

          {/* Navigation Links - Only show when authenticated */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/sectors"
                className={`text-sm font-medium transition-colors ${
                  isActive('/sectors')
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Sectors
              </Link>
              <Link
                to="/investments"
                className={`text-sm font-medium transition-colors ${
                  isActive('/investments')
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Investments
              </Link>
              <Link
                to="/insights"
                className={`text-sm font-medium transition-colors ${
                  isActive('/insights')
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                Insights
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                About
              </Link>
            </div>
          )}

          {/* Auth Buttons / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {user?.firstName?.[0]?.toUpperCase()}
                      {user?.lastName?.[0]?.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-text-primary hidden sm:block">
                    {user?.firstName} {user?.lastName}
                  </span>
                </button>

                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border py-1 origin-top"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-text-secondary hover:bg-primary/5 hover:text-primary"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="block px-4 py-2 text-sm text-text-secondary hover:bg-primary/5 hover:text-primary"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-primary/5 hover:text-primary"
                      >
                        Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Sign in</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button - Only show when authenticated */}
          {isAuthenticated && (
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu - Only show when authenticated */}
        {isAuthenticated && isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background-light border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/sectors"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/sectors')
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-text-primary hover:bg-primary/5'
                }`}
              >
                Sectors
              </Link>
              <Link
                to="/investments"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/investments')
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-text-primary hover:bg-primary/5'
                }`}
              >
                Investments
              </Link>
              <Link
                to="/insights"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/insights')
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-text-primary hover:bg-primary/5'
                }`}
              >
                Insights
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about')
                    ? 'text-primary bg-primary/5'
                    : 'text-text-secondary hover:text-text-primary hover:bg-primary/5'
                }`}
              >
                About
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-border">
              <div className="px-2 space-y-1">
                <div className="flex items-center px-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">
                        {user?.firstName?.[0]?.toUpperCase()}
                        {user?.lastName?.[0]?.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-text-primary">
                      {user?.firstName} {user?.lastName}
                    </div>
                  </div>
                </div>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-primary/5"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-primary/5"
                >
                  Settings
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-primary/5"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile auth buttons - Only show when not authenticated */}
        {!isAuthenticated && isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background-light border-b border-border">
            <div className="px-2 py-3 space-y-1">
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-primary/5"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-primary/5"
              >
                Sign up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}