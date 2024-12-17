import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface InvestmentTipProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function InvestmentTip({ title, description, icon }: InvestmentTipProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {icon}
          <span className="ml-2">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

