'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { FaCreditCard } from 'react-icons/fa'

interface PaymentCard {
  id: string;
  last4: string;
  brand: string;
  expMonth: string;
  expYear: string;
}

export default function CardManagement() {
  const [cards, setCards] = useState<PaymentCard[]>([
    { id: '1', last4: '4242', brand: 'Visa', expMonth: '12', expYear: '2024' },
    { id: '2', last4: '1234', brand: 'Mastercard', expMonth: '06', expYear: '2025' },
  ])
  const [showAddCard, setShowAddCard] = useState(false)
  const [newCard, setNewCard] = useState({ number: '', expiry: '', cvc: '' })

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your payment processor
    // and only save the returned token or card ID
    const [expMonth, expYear] = newCard.expiry.split('/')
    const newPaymentCard: PaymentCard = {
      id: Date.now().toString(),
      last4: newCard.number.slice(-4),
      brand: 'New Card', // In reality, this would be determined by the payment processor
      expMonth,
      expYear: `20${expYear}`,
    }
    setCards([...cards, newPaymentCard])
    setNewCard({ number: '', expiry: '', cvc: '' })
    setShowAddCard(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Your Payment Methods</h2>
        <Button onClick={() => setShowAddCard(!showAddCard)}>
          {showAddCard ? 'Cancel' : 'Add New Card'}
        </Button>
      </div>

      {showAddCard && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Card</CardTitle>
            <CardDescription>Enter your card details below</CardDescription>
          </CardHeader>
          <form onSubmit={handleAddCard}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={newCard.number}
                  onChange={(e) => setNewCard({ ...newCard, number: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={newCard.expiry}
                    onChange={(e) => setNewCard({ ...newCard, expiry: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input
                    id="cvc"
                    placeholder="123"
                    value={newCard.cvc}
                    onChange={(e) => setNewCard({ ...newCard, cvc: e.target.value })}
                    required
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Add Card</Button>
            </CardFooter>
          </form>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FaCreditCard className="mr-2" />
                {card.brand}
              </CardTitle>
              <CardDescription>**** **** **** {card.last4}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Expires: {card.expMonth}/{card.expYear}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={() => console.log(`Remove card ${card.id}`)}>
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

