import React from 'react';
import { CreditCard, Wallet, Building2 } from 'lucide-react';

export default function PaymentMethods() {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100">
      <h2 className="text-xl font-bold mb-6">Payment Methods</h2>
      <div className="space-y-4">
        <div className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-600 transition-colors">
          <CreditCard className="h-6 w-6 text-blue-600" />
          <div className="ml-4">
            <h3 className="font-semibold">Credit / Debit Card</h3>
            <p className="text-sm text-gray-500">Instant processing with 128-bit encryption</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-600 transition-colors">
          <Wallet className="h-6 w-6 text-blue-600" />
          <div className="ml-4">
            <h3 className="font-semibold">Digital Wallet</h3>
            <p className="text-sm text-gray-500">Pay with PayPal, Apple Pay, or Google Pay</p>
          </div>
        </div>
        
        <div className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-600 transition-colors">
          <Building2 className="h-6 w-6 text-blue-600" />
          <div className="ml-4">
            <h3 className="font-semibold">Bank Transfer</h3>
            <p className="text-sm text-gray-500">Direct transfer from your bank account</p>
          </div>
        </div>
      </div>
    </div>
  );
}