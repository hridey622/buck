import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Investment, Startup } from '../lib/types'

interface InvestmentCardProps {
  investment: Investment
  startup: Startup
}

export default function InvestmentCard({ investment, startup }: InvestmentCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{startup.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-2">{startup.category}</p>
        <p className="font-semibold">Amount Invested: ${investment.amount.toLocaleString()}</p>
        <p className="text-sm text-gray-500">Date: {new Date(investment.date).toLocaleDateString()}</p>
      </CardContent>
    </Card>
  )
}

