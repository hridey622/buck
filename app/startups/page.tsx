import { startups } from '../lib/data'
import StartupCard from '../components/StartupCard'

export default function StartupsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Featured Startups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  )
}

