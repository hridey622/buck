import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import { User, Mail, Calendar, Shield } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Profile Settings
            </h1>
            <p className="text-text-secondary">
              Manage your account settings and preferences
            </p>
          </motion.div>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-background-light/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8"
        >
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">
                {user?.firstName?.[0]}
                {user?.lastName?.[0]}
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                {user?.firstName} {user?.lastName}
              </h2>
              <p className="text-text-secondary">{user?.email}</p>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 text-text-secondary">
              <User className="h-5 w-5" />
              <span>Account Type: {user?.role}</span>
            </div>
            <div className="flex items-center space-x-4 text-text-secondary">
              <Mail className="h-5 w-5" />
              <span>Email verified</span>
            </div>
            <div className="flex items-center space-x-4 text-text-secondary">
              <Calendar className="h-5 w-5" />
              <span>Member since {new Date(user?.createdAt || '').toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-4 text-text-secondary">
              <Shield className="h-5 w-5" />
              <span>2FA enabled</span>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <Button className="w-full">
            Edit Profile
          </Button>
          <Button variant="outline" className="w-full">
            Change Password
          </Button>
          <Button variant="outline" className="w-full">
            Security Settings
          </Button>
          <Button variant="outline" className="w-full">
            Notification Preferences
          </Button>
        </motion.div>
      </div>
    </div>
  );
}