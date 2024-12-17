import CardManagement from '../components/CardManagement'

export default function PaymentMethodsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Payment Methods</h1>
      <CardManagement />
    </div>
  )
}

