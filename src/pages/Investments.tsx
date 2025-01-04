import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Shield, CheckCircle, RefreshCcw } from 'lucide-react';
import ParticlesBackground from '../components/ui/ParticlesBackground';

interface MerchantInfo {
  merchantId: string;
  merchantName: string;
}

interface BaseGooglePayRequest {
  apiVersion: number;
  apiVersionMinor: number;
  allowedPaymentMethods: Array<{
    type: string;
    parameters: {
      allowedAuthMethods: string[];
      allowedCardNetworks: string[];
    };
    tokenizationSpecification: {
      type: string;
      parameters: {
        gateway: string;
        gatewayMerchantId: string;
      };
    };
  }>;
  merchantInfo: MerchantInfo;
}

const companies = [
  {
    name: "TechFlow AI",
    id: 1,
    price: 10000,
    sector: "AI & Machine Learning",
    description: "Building next-generation AI tools for enterprise automation",
    valuation: "$12M",
    equityOffered: "8%",
    raisingAmount: "$960K",
    teamSize: "15",
    location: "Bangalore, India",
    stage: "Seed",
    highlights: [
      "500K+ API calls monthly",
      "40% MoM growth",
      "Enterprise clients: 12"
    ]
  },
  {
    name: "HealthMate",
    id: 2,
    price: 10000,
    sector: "Digital Health",
    description: "AI-powered personal health monitoring and diagnostics platform",
    valuation: "$8M",
    equityOffered: "12%",
    raisingAmount: "$960K",
    teamSize: "8",
    location: "Mumbai, India",
    stage: "Pre-seed",
    highlights: [
      "50K+ active users",
      "85% user retention",
      "FDA approval in process"
    ]
  },
  {
    name: "CryptoVault",
    id: 3,
    price: 10000,
    sector: "FinTech",
    description: "Institutional-grade crypto custody and trading solutions",
    valuation: "$15M",
    equityOffered: "6%",
    raisingAmount: "$900K",
    teamSize: "12",
    location: "Delhi, India",
    stage: "Series A",
    highlights: [
      "$10M assets under custody",
      "25+ institutional clients",
      "Military-grade security"
    ]
  },
  {
    name: "GreenEnergy",
    id: 4,
    price: 10000,
    sector: "Climate Tech",
    description: "Revolutionary solar energy storage solutions",
    valuation: "$20M",
    equityOffered: "5%",
    raisingAmount: "$1M",
    teamSize: "20",
    location: "Hyderabad, India",
    stage: "Series A",
    highlights: [
      "3 granted patents",
      "90% cost reduction",
      "Pilot with major utility"
    ]
  }
];

export default function Investments() {
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'GPay' | 'Bank'>('GPay');
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const merchantInfo: MerchantInfo = {
    merchantId: 'BCR2DN4T262IN4JI', // Replace with your merchant ID
    merchantName: 'Seed'
  };

  const baseGooglePayRequest: BaseGooglePayRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId'
          }
        }
      }
    ],
    merchantInfo
  };

  const getGooglePaymentsClient = () => {
    if (!paymentsClient.current) {
      paymentsClient.current = new google.payments.api.PaymentsClient({
        environment: 'TEST', // Change to 'PRODUCTION' when ready
        merchantInfo,
        paymentDataCallbacks: {
          onPaymentAuthorized: onPaymentAuthorized,
          onPaymentDataChanged: onPaymentDataChanged
        },
      });
    }
    return paymentsClient.current;
  };

  const onPaymentAuthorized = async (paymentData: google.payments.api.PaymentData) => {
    setIsProcessing(true);
    console.log("Payment authorized:", paymentData);
    
    try {
      // Here you would typically send the payment data to your server
      // For demo, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPaymentStatus('success');
      return { transactionState: 'SUCCESS' };
    } catch (error) {
      setPaymentStatus('failed');
      return {
        transactionState: 'ERROR',
        error: {
          intent: 'PAYMENT_AUTHORIZATION',
          message: 'Payment failed',
          reason: 'PAYMENT_DATA_INVALID'
        }
      };
    } finally {
      setIsProcessing(false);
    }
  };

  const onPaymentDataChanged = async (
    intermediatePaymentData: google.payments.api.IntermediatePaymentData
  ) => {
    return {};
  };

  const handleGooglePayment = async () => {
    if (!amount) return;

    const paymentDataRequest = {
      ...baseGooglePayRequest,
      transactionInfo: {
        countryCode: 'IN',
        currencyCode: 'INR',
        totalPriceStatus: 'FINAL',
        totalPrice: amount,
      },
    };

    try {
      setIsProcessing(true);
      const paymentData = await getGooglePaymentsClient().loadPaymentData(paymentDataRequest);
      console.log('Payment Data:', paymentData);
      const paymentToken = paymentData.paymentMethodData.tokenizationData.token;
      // Process payment token with your backend
      setPaymentStatus('success');
    } catch (err) {
      console.error('Error loading payment data:', err);
      setPaymentStatus('failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBankTransfer = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setPaymentStatus('success');
      setIsProcessing(false);
    }, 3000);
  };

  const handlePayment = () => {
    if (paymentMethod === 'GPay') {
      handleGooglePayment();
    } else {
      handleBankTransfer();
    }
  };

  useEffect(() => {
    const initGooglePay = async () => {
      try {
        const response = await getGooglePaymentsClient().isReadyToPay(baseGooglePayRequest);
        if (!response.result) {
          console.log("Google Pay is not available");
          setPaymentMethod('Bank');
        }
      } catch (err) {
        console.error('Error checking Google Pay availability:', err);
        setPaymentMethod('Bank');
      }
    };

    initGooglePay();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden pt-24">
      <ParticlesBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-text-primary mb-8">Investment Opportunities</h2>
        <div className="grid grid-cols-1 gap-8 mb-20">
          {companies.map((company) => (
            <div key={company.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm"
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="text-3xl font-bold text-text-primary mb-2">{company.name}</h2>
                      <p className="text-primary mb-4">{company.sector}</p>
                      <p className="text-text-secondary mb-6">{company.description}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <span className="text-text-secondary">{company.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-text-secondary">{company.teamSize} people</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-text-secondary">{company.stage}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {company.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <span className="text-text-secondary">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:border-l lg:border-border lg:pl-8">
                      <div className="space-y-6">
                        <div>
                          <div className="text-3xl font-bold text-primary">{company.valuation}</div>
                          <div className="text-text-secondary">Valuation</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-emerald-500">{company.equityOffered}</div>
                          <div className="text-text-secondary">Equity Offered</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-text-primary">{company.raisingAmount}</div>
                          <div className="text-text-secondary">Raising</div>
                        </div>
                        <button
                          onClick={() => setSelectedCompanyId(company.id)}
                          className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-primary-dark text-white rounded-xl px-6 py-3 transition-colors"
                        >
                          <span>Invest Now</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {selectedCompanyId === company.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="relative overflow-hidden rounded-3xl bg-background-light/50 border border-border backdrop-blur-sm p-8 mt-4"
                >
                  <h2 className="text-xl font-bold text-text-primary mb-4">Invest in {company.name}</h2>
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
                        <span>{paymentMethod === 'GPay' ? 'Pay with Google Pay' : 'Transfer from Bank'}</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
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
                  <div className="bg-background/50 rounded-2xl p-4 mt-4">
                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Your payment information is secure</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}