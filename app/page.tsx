import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Inventure</h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-600">
        Discover and invest in the next generation of groundbreaking startups. 
        Be part of the future of innovation and technology.
      </p>
      <div className="flex space-x-4">
        <Link href="/signup">
          <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white text-lg px-6 py-3">
            Sign Up
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline" className="text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white text-lg px-6 py-3">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  )
}

