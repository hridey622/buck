import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    google?: {
      payments: {
        api: {
          PaymentsClient: new (config: any) => any;
          ButtonOptions: any;
          ButtonColor: any;
        };
      };
    };
  }
}

interface GooglePayButtonProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export default function GooglePayButton({ amount, onSuccess, onError }: GooglePayButtonProps) {
  const [isGooglePayAvailable, setIsGooglePayAvailable] = useState(false);
  const [paymentClient, setPaymentClient] = useState<any>(null);

  useEffect(() => {
    // Load Google Pay script
    const script = document.createElement('script');
    script.src = 'https://pay.google.com/gp/p/js/pay.js';
    script.async = true;
    script.onload = initializeGooglePay;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeGooglePay = async () => {
    if (!window.google?.payments?.api) {
      onError(new Error('Google Pay is not available'));
      return;
    }

    const client = new window.google.payments.api.PaymentsClient({
      environment: 'TEST', // Change to 'PRODUCTION' for live environment
    });

    // Check if Google Pay is available for the user
    const isReadyToPay = await client.isReadyToPay({
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
      }],
    });

    setIsGooglePayAvailable(isReadyToPay.result);
    setPaymentClient(client);
  };

  const handlePayment = async () => {
    if (!paymentClient) return;

    try {
      const paymentData = await paymentClient.loadPaymentData({
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleGatewayMerchantId',
            },
          },
        }],
        merchantInfo: {
          merchantId: '12345678901234567890', // Replace with your merchant ID
          merchantName: 'SEED Investment Platform',
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: amount.toFixed(2),
          currencyCode: 'USD',
        },
      });

      // Process the payment data with your backend
      // For now, we'll just simulate success
      onSuccess();
    } catch (error) {
      onError(error as Error);
    }
  };

  if (!isGooglePayAvailable) {
    return null;
  }

  return (
    <motion.button
      onClick={handlePayment}
      className="flex items-center justify-center gap-2 w-full p-3 rounded-lg bg-black hover:bg-gray-900 transition-colors text-white font-medium"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-sm">Pay with</span>
      <span className="font-semibold text-sm">
        <span className="text-blue-500">G</span>
        <span className="text-red-500">o</span>
        <span className="text-yellow-500">o</span>
        <span className="text-blue-500">g</span>
        <span className="text-green-500">l</span>
        <span className="text-red-500">e</span>
        <span className="ml-1">Pay</span>
      </span>
    </motion.button>
  );
} 