import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Footer from '../Footer';
import ScrollToTop from '../ui/scroll-to-top';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const hideFooterPaths = ['/login', '/register'];
  const showFooter = !hideFooterPaths.includes(location.pathname);
  
  return (
    <div className={`min-h-screen flex flex-col ${isAuthenticated ? 'pt-16' : ''}`}>
      {children}
      {showFooter && <div className="mt-24"><Footer /></div>}
      <ScrollToTop />
    </div>
  );
}