import { Lightbulb, TrendingUp, ShieldCheck, BookOpen, Users, PieChart } from 'lucide-react'
import InvestmentTip from '../components/InvestmentTip'

export default function InvestmentInsightsPage() {
  const investmentTips = [
    {
      title: "Understand the Risks",
      description: "Startup investments are high-risk, high-reward. Be prepared for the possibility of losing your investment.",
      icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Diversify Your Portfolio",
      description: "Don't put all your eggs in one basket. Invest in multiple startups across different sectors.",
      icon: <PieChart className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Research Thoroughly",
      description: "Conduct due diligence on the startup, its market, competition, and founding team before investing.",
      icon: <BookOpen className="w-6 h-6 text-green-500" />
    },
    {
      title: "Start Small",
      description: "Begin with smaller investments to gain experience and understanding of the startup ecosystem.",
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Network and Learn",
      description: "Connect with other investors and entrepreneurs. Attend startup events and join investment groups.",
      icon: <Users className="w-6 h-6 text-red-500" />
    },
    {
      title: "Stay Informed",
      description: "Keep up with industry trends, new technologies, and market changes that could affect your investments.",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Inventure Investment Insights</h1>
      <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
        Investing in startups through Inventure can be exciting and potentially rewarding, but it's important to approach it with knowledge and caution. Here are some key insights to help you get started:
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {investmentTips.map((tip, index) => (
          <InvestmentTip key={index} {...tip} />
        ))}
      </div>
      <div className="mt-12 bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Investing with Inventure?</h2>
        <p className="mb-4">
          Remember, startup investing is not for everyone. It's important to consult with financial advisors and only invest what you can afford to lose. If you're ready to explore startup investments on Inventure:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Review our curated list of startups</li>
          <li>Set up your investor profile</li>
          <li>Start with a small investment to test the waters</li>
        </ul>
        <p>
          Happy investing, and may your portfolio flourish!
        </p>
      </div>
    </div>
  )
}

