import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Bell, Lock, Eye, Moon, Globe, Zap } from 'lucide-react';

const settings = [
  {
    category: 'Account Preferences',
    icon: Lock,
    items: [
      { name: 'Two-Factor Authentication', description: 'Add an extra layer of security', enabled: true },
      { name: 'Login History', description: 'View your recent login activity', enabled: false },
      { name: 'Password Requirements', description: 'Set password complexity rules', enabled: true }
    ]
  },
  {
    category: 'Notifications',
    icon: Bell,
    items: [
      { name: 'Email Notifications', description: 'Updates about your account', enabled: true },
      { name: 'Push Notifications', description: 'Real-time alerts on your device', enabled: false },
      { name: 'Newsletter', description: 'Weekly investment insights', enabled: true }
    ]
  },
  {
    category: 'Privacy',
    icon: Eye,
    items: [
      { name: 'Profile Visibility', description: 'Control who can see your profile', enabled: true },
      { name: 'Data Sharing', description: 'Manage how your data is used', enabled: false },
      { name: 'Activity Status', description: 'Show when you are active', enabled: true }
    ]
  },
  {
    category: 'Appearance',
    icon: Moon,
    items: [
      { name: 'Dark Mode', description: 'Toggle dark/light theme', enabled: true },
      { name: 'Compact View', description: 'Reduce spacing in the interface', enabled: false },
      { name: 'Animations', description: 'Enable/disable animations', enabled: true }
    ]
  },
  {
    category: 'Language & Region',
    icon: Globe,
    items: [
      { name: 'Language', description: 'Choose your preferred language', enabled: true },
      { name: 'Time Zone', description: 'Set your local time zone', enabled: true },
      { name: 'Date Format', description: 'Customize date display', enabled: false }
    ]
  },
  {
    category: 'Performance',
    icon: Zap,
    items: [
      { name: 'Auto-Loading', description: 'Load content automatically', enabled: true },
      { name: 'Data Saver', description: 'Reduce data usage', enabled: false },
      { name: 'Cache Management', description: 'Clear temporary data', enabled: true }
    ]
  }
];

export default function Settings() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
              Settings
            </h1>
            <p className="text-gray-600">
              Customize your experience and manage your preferences
            </p>
          </motion.div>
        </div>

        {/* Settings Grid */}
        <div className="grid gap-8">
          {settings.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              {/* Section Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                  <section.icon className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {section.category}
                </h2>
              </div>

              {/* Settings Items */}
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={item.enabled}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex justify-end space-x-4"
        >
          <Button variant="outline" className="border-purple-900/50 text-gray-400 hover:bg-purple-900/20 hover:text-purple-400">
            Reset to Default
          </Button>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">
            Save Changes
          </Button>
        </motion.div>
      </div>
    </div>
  );
}