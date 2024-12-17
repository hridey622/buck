import { Startup, Investment, User } from './types'

export const startups: Startup[] = [
  {
    id: '1',
    name: 'EcoTech Solutions',
    description: 'Developing sustainable energy solutions for urban environments.',
    fundingGoal: 1000000,
    currentFunding: 750000,
    category: 'Clean Energy',
  },
  {
    id: '2',
    name: 'HealthAI',
    description: 'AI-powered health diagnostics and personalized treatment plans.',
    fundingGoal: 2000000,
    currentFunding: 1200000,
    category: 'Healthcare',
  },
  {
    id: '3',
    name: 'SpaceX Junior',
    description: 'Miniaturized satellite technology for improved global communications.',
    fundingGoal: 5000000,
    currentFunding: 3500000,
    category: 'Space Technology',
  },
]

export const investments: Investment[] = [
  { id: '1', startupId: '1', amount: 5000, date: '2023-06-15' },
  { id: '2', startupId: '2', amount: 10000, date: '2023-07-01' },
  { id: '3', startupId: '3', amount: 15000, date: '2023-07-10' },
]

export const currentUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
}

