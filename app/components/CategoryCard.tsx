import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, GraduationCap, PiggyBank, Users, Stethoscope, Home, Factory, Landmark, HelpCircle } from 'lucide-react'

interface CategoryCardProps {
  name: string
  description: string
}

const categoryIcons: { [key: string]: React.ReactNode } = {
  "B2B": <Building2 className="w-8 h-8" />,
  "Education": <GraduationCap className="w-8 h-8" />,
  "Fintech": <PiggyBank className="w-8 h-8" />,
  "Consumer": <Users className="w-8 h-8" />,
  "Healthcare": <Stethoscope className="w-8 h-8" />,
  "Real Estate and Construction": <Home className="w-8 h-8" />,
  "Industrials": <Factory className="w-8 h-8" />,
  "Government": <Landmark className="w-8 h-8" />,
  "Unspecified": <HelpCircle className="w-8 h-8" />,
}

export default function CategoryCard({ name, description }: CategoryCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center space-x-4">
        {categoryIcons[name] || <HelpCircle className="w-8 h-8" />}
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

