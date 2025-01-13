import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/Button';
import {
  TrendingUp,
  Users,
  DollarSign,
  BarChart,
  ArrowUpRight,
  ArrowDownRight,
  Briefcase,
  LineChart,
  PieChart,
  Activity
} from 'lucide-react';

export default function Dashboard() {
  const { user } = useAuth();

  const metrics = [
    {
      id: 'total-invested',
      label: 'Total Invested',
      value: '$50,000',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign
    },
    {
      id: 'active-investments',
      label: 'Active Investments',
      value: '5',
      change: '+1',
      trend: 'up',
      icon: Briefcase
    },
    {
      id: 'portfolio-value',
      label: 'Portfolio Value',
      value: '$58,750',
      change: '+17.5%',
      trend: 'up',
      icon: LineChart
    },
    {
      id: 'total-returns',
      label: 'Total Returns',
      value: '$8,750',
      change: '-2.3%',
      trend: 'down',
      icon: TrendingUp
    }
  ];

  const portfolioDistribution = [
    { sector: 'Technology', percentage: 40 },
    { sector: 'Healthcare', percentage: 25 },
    { sector: 'Finance', percentage: 20 },
    { sector: 'Energy', percentage: 15 }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'Investment',
      company: 'AI Solutions Inc.',
      amount: '$10,000',
      date: '2 days ago',
      status: 'Completed'
    },
    {
      id: 2,
      type: 'Return',
      company: 'Green Energy Co.',
      amount: '$2,500',
      date: '1 week ago',
      status: 'Received'
    },
    {
      id: 3,
      type: 'Investment',
      company: 'FinTech Startup',
      amount: '$15,000',
      date: '2 weeks ago',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="text-gray-600">Here's an overview of your investment portfolio.</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className={`flex items-center ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span className="text-sm font-medium">{metric.change}</span>
                    {metric.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 ml-1" />
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.label}</h3>
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Distribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-600" />
                <h2 className="text-lg font-semibold text-gray-900">Portfolio Distribution</h2>
              </div>
              <Button variant="outline" className="text-sm">
                View Details
              </Button>
            </div>
            <div className="space-y-4">
              {portfolioDistribution.map((item) => (
                <div key={item.sector}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">{item.sector}</span>
                    <span className="text-sm font-medium text-gray-900">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <Button variant="outline" className="text-sm">
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.company}</p>
                    <p className="text-xs text-gray-600">
                      {activity.type} • {activity.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{activity.amount}</p>
                    <p className="text-xs text-purple-600">{activity.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}