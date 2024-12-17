'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Flower } from 'lucide-react'
import MainNavItems from './MainNavItems'

export default function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <Flower className="h-8 w-8 text-[var(--color-primary)] mr-2" aria-hidden="true" />
                <span className="font-semibold text-gray-500 text-lg">Inventure</span>
                <span className="sr-only">Inventure Home</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            {isHomePage ? (
              <>
                <Link href="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link href="/signup">
                  <Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white">Sign Up</Button>
                </Link>
              </>
            ) : (
              <MainNavItems />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

