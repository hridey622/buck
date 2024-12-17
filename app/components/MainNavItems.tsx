import Link from 'next/link'

export default function MainNavItems() {
  return (
    <>
      <Link href="/startups" className="py-4 px-2 text-gray-500 font-semibold hover:text-[#4169E1] transition duration-300">Startups</Link>
      <Link href="/startup-categories" className="py-4 px-2 text-gray-500 font-semibold hover:text-[#4169E1] transition duration-300">Categories</Link>
      <Link href="/investments" className="py-4 px-2 text-gray-500 font-semibold hover:text-[#4169E1] transition duration-300">My Investments</Link>
      <Link href="/payment-methods" className="py-4 px-2 text-gray-500 font-semibold hover:text-[#4169E1] transition duration-300">Payment Methods</Link>
      <Link href="/investment-insights" className="py-4 px-2 text-gray-500 font-semibold hover:text-[#4169E1] transition duration-300">Insights</Link>
      <Link href="/feedback" className="py-4 px-2 text-gray-500 font-semibold hover:text-[#4169E1] transition duration-300">Feedback</Link>
      <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-[#4169E1] transition duration-300">About</Link>
    </>
  )
}

