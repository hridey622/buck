import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Startup } from '../lib/types'

export default function StartupCard({ startup }: { startup: Startup }) {
  const progress = (startup.currentFunding / startup.fundingGoal) * 100

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{startup.name}</CardTitle>
        <CardDescription>{startup.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{startup.description}</p>
        <Progress value={progress} className="w-full" />
        <p className="text-sm text-gray-500 mt-2">
          ${startup.currentFunding.toLocaleString()} raised of ${startup.fundingGoal.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/startups/${startup.id}`}>
          <Button>Learn More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

