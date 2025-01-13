import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { User, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt={user.firstName}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-purple-600" />
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {user?.firstName} {user?.lastName}
              </h1>
              <p className="text-gray-600">{user?.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/settings">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-3"
                  >
                    <Settings className="w-5 h-5" />
                    Account Settings
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full border-2 border-gray-200 hover:bg-gray-50 text-gray-700 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-3"
                >
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </Button>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <p className="mt-1 text-gray-900">
                      {user?.firstName} {user?.lastName}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <p className="mt-1 text-gray-900">{user?.email}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Member Since</label>
                    <p className="mt-1 text-gray-900">January 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Investment Summary</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Total Invested</label>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">$25,000</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Active Investments</label>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">3</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Portfolio Value</label>
                    <p className="mt-1 text-2xl font-semibold text-gray-900">$28,500</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Total Returns</label>
                    <p className="mt-1 text-2xl font-semibold text-green-600">+14%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}