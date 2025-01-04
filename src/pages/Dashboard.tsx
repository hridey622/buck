import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  ArrowUpRight,
  ArrowDownRight,
  Info
} from 'lucide-react';
import ParticlesBackground from '../components/ui/ParticlesBackground';

const portfolioStats = {
  totalValue: "₹2,45,000",
  totalReturn: "+12.5%",
  isPositive: true,
  monthlyChange: "+₹28,500",
  investedAmount: "₹2,00,000"
};

const investments = [
  {
    company: "TechFlow AI",
    amount: "₹50,000",
    equity: "0.4%",
    currentValue: "₹65,000",
    return: "+30%",
    isPositive: true,
    trend: [40, 35, 45, 42, 50, 65]
  },
  {
    company: "HealthMate",
    amount: "₹75,000",
    equity: "0.9%",
    currentValue: "₹82,500",
    return: "+10%",
    isPositive: true,
    trend: [75, 72, 78, 80, 79, 82.5]
  },
  {
    company: "CryptoVault",
    amount: "₹75,000",
    equity: "0.5%",
    currentValue: "₹67,500",
    return: "-10%",
    isPositive: false,
    trend: [75, 70, 65, 68, 66, 67.5]
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with gradient style */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-bold tracking-tight mb-8">
            <span className="block text-text-primary">Your</span>
            <span className="relative">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
                Dashboard
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-emerald-500/20 blur-lg" />
            </span>
          </h1>
          <p className="text-xl text-text-secondary">
            Track and manage your investment portfolio performance
          </p>
        </div>

        {/* Portfolio Overview Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Total Value Card */}
          <div className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-text-secondary mb-2">Total Value</div>
                <div className="text-4xl font-bold text-text-primary mb-2">
                  {portfolioStats.totalValue}
                </div>
                <div className={`flex items-center ${portfolioStats.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                  {portfolioStats.isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
                  {portfolioStats.totalReturn}
                </div>
              </div>
              <div className="bg-gradient-to-r from-primary to-emerald-500 rounded-2xl p-3">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-emerald-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
          </div>

          {/* Monthly Change Card */}
          <div className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-text-secondary mb-2">Monthly Change</div>
                <div className="text-4xl font-bold text-text-primary mb-2">
                  {portfolioStats.monthlyChange}
                </div>
                <div className="text-text-secondary">vs last month</div>
              </div>
              <div className="bg-gradient-to-r from-primary to-emerald-500 rounded-2xl p-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-emerald-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
          </div>

          {/* Invested Amount Card */}
          <div className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-text-secondary mb-2">Invested Amount</div>
                <div className="text-4xl font-bold text-text-primary mb-2">
                  {portfolioStats.investedAmount}
                </div>
                <div className="text-text-secondary">Total invested</div>
              </div>
              <div className="bg-gradient-to-r from-primary to-emerald-500 rounded-2xl p-3">
                <PieChart className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-emerald-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
          </div>
        </motion.div>

        {/* Investments Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-8">Your Investments</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-text-secondary border-b border-border">
                  <th className="pb-6 text-left">Company</th>
                  <th className="pb-6 text-right">Invested</th>
                  <th className="pb-6 text-right">Equity</th>
                  <th className="pb-6 text-right">Current Value</th>
                  <th className="pb-6 text-right">Return</th>
                </tr>
              </thead>
              <tbody>
                {investments.map((investment) => (
                  <tr key={investment.company} className="border-b border-border/50 last:border-0">
                    <td className="py-6">
                      <div className="font-medium text-text-primary">{investment.company}</div>
                    </td>
                    <td className="py-6 text-right text-text-secondary">{investment.amount}</td>
                    <td className="py-6 text-right text-text-secondary">{investment.equity}</td>
                    <td className="py-6 text-right font-medium text-text-primary">{investment.currentValue}</td>
                    <td className="py-6 text-right">
                      <div className={`inline-flex items-center ${investment.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                        {investment.isPositive ? 
                          <ArrowUpRight className="h-4 w-4 mr-1" /> : 
                          <ArrowDownRight className="h-4 w-4 mr-1" />
                        }
                        {investment.return}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-emerald-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary to-emerald-500 opacity-5 rounded-full translate-y-32 -translate-x-32 blur-3xl" />
        </motion.div>

        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm p-8"
        >
          <div className="flex items-start space-x-4">
            <div className="bg-gradient-to-r from-primary to-emerald-500 rounded-xl p-2">
              <Info className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-text-primary mb-2">Investment Disclaimer</h3>
              <p className="text-text-secondary">
                Past performance is not indicative of future results. Investment values can go up and down. 
                Please read all scheme related documents carefully.
              </p>
            </div>
          </div>
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary to-emerald-500 opacity-5 rounded-full -translate-y-32 translate-x-32 blur-3xl" />
        </motion.div>
      </div>
    </div>
  );
} 