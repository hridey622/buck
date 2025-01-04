//=============================================================================
// Configuration
//=============================================================================

// The DOM element that the Google Pay button will be rendered into
const GPAY_BUTTON_CONTAINER_ID = 'gpay-container';

// Update the `merchantId` and `merchantName` properties with your own values.
// Your real info is required when the environment is `PRODUCTION`.
const merchantInfo = {
  merchantId: '12345678901234567890',
  merchantName: 'Example Merchant'
};

// This is the base configuration for all Google Pay payment data requests.
const baseGooglePayRequest = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [
    {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: [
          "PAN_ONLY", "CRYPTOGRAM_3DS"
        ],
        allowedCardNetworks: [
          "AMEX", "DISCOVER", "INTERAC", "JCB", "MASTERCARD", "VISA"
        ]
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

// Prevent accidental edits to the base configuration. Mutations will be
// handled by cloning the config using deepCopy() and modifying the copy.
Object.freeze(baseGooglePayRequest);
//=============================================================================
// Google Payments client singleton
//=============================================================================

let paymentsClient = null;

function getGooglePaymentsClient() {
  if (paymentsClient === null) {
    paymentsClient = new google.payments.api.PaymentsClient({
      environment: 'TEST',
      merchantInfo,
      // todo: paymentDataCallbacks (codelab pay-web-201)
    });
  }

  return paymentsClient;
}
