import React from 'react';
import { Link } from 'react-router-dom';

const navigation = {
  platform: [
    { name: 'Invest', href: '/invest' },
    { name: 'Insights', href: '/insights' },
    { name: 'Portfolio', href: '/investments' },
    { name: 'Dashboard', href: '/dashboard' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Security', href: '/security' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-medium text-gray-900">
              Seed
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Empowering the next generation of startups through community-driven investments.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-900 font-medium mb-4">
              Platform
            </h3>
            <ul className="space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-900 font-medium mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-gray-900 font-medium mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Seed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}