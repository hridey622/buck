import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Smartphone, ArrowRight, Shield, CheckCircle, RefreshCcw } from 'lucide-react';
import ParticlesBackground from '../components/ui/ParticlesBackground';

const Wallet = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'GPay' | 'Bank'>('GPay');
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      // Simulate a successful payment
      setPaymentStatus('success');
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add Funds Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-4">Add Money to Wallet</h2>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-text-primary mb-2">Amount (₹)</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter amount"
            />
          </div>

          {/* Payment Method Selection */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setPaymentMethod('GPay')}
              className={`flex-1 p-3 rounded-xl border-2 transition-all ${paymentMethod === 'GPay' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
            >
              <Smartphone className={`h-5 w-5 ${paymentMethod === 'GPay' ? 'text-primary' : 'text-text-secondary'}`} />
              <span className={paymentMethod === 'GPay' ? 'text-primary' : 'text-text-secondary'}>Google Pay</span>
            </button>
            <button
              onClick={() => setPaymentMethod('Bank')}
              className={`flex-1 p-3 rounded-xl border-2 transition-all ${paymentMethod === 'Bank' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
            >
              <span className={paymentMethod === 'Bank' ? 'text-primary' : 'text-text-secondary'}>Bank Transfer</span>
            </button>
          </div>

          {/* Google Pay Button */}
          {paymentMethod === 'GPay' && (
            <button
              onClick={handlePayment}
              disabled={!amount || isProcessing}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white rounded-xl px-6 py-4 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <RefreshCcw className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Smartphone className="h-5 w-5" />
                  <span>Pay with Google Pay</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          )}

          {/* Bank Transfer Button */}
          {paymentMethod === 'Bank' && (
            <button
              onClick={handlePayment}
              disabled={!amount || isProcessing}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white rounded-xl px-6 py-4 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <>
                  <RefreshCcw className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Transfer from Bank</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          )}

          {/* Payment Status */}
          {paymentStatus && (
            <div className={`mt-4 p-4 rounded-xl ${paymentStatus === 'success' ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
              <div className="flex items-center space-x-3">
                {paymentStatus === 'success' ? (
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                ) : (
                  <RefreshCcw className="h-5 w-5 text-red-500" />
                )}
                <span className={paymentStatus === 'success' ? 'text-emerald-500' : 'text-red-500'}>
                  {paymentStatus === 'success' ? 'Payment Successful!' : 'Payment Failed. Please try again.'}
                </span>
              </div>
            </div>
          )}

          {/* Security Info */}
          <div className="bg-background/50 rounded-2xl p-4 mt-4">
            <div className="flex items-center space-x-2 text-text-secondary">
              <Shield className="h-4 w-4 text-primary" />
              <span>Your payment information is secure</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Wallet;