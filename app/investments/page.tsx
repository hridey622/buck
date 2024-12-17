import { investments, startups, currentUser } from '../lib/data'
import InvestmentCard from '../components/InvestmentCard'

export default function InvestmentsPage() {
  const userInvestments = investments.map(investment => ({
    ...investment,
    startup: startups.find(startup => startup.id === investment.startupId)!
  }))

  const totalInvested = userInvestments.reduce((total, inv) => total + inv.amount, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Investments</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-8">
        <p className="text-xl font-semibold">Total Invested: ${totalInvested.toLocaleString()}</p>
        <p>Number of Investments: {userInvestments.length}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userInvestments.map(investment => (
          <InvestmentCard 
            key={investment.id} 
            investment={investment} 
            startup={investment.startup} 
          />
        ))}
      </div>
    </div>
  )
}

