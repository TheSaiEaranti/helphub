'use client';

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to HelpHub</h1>

      <Link href="/post" className="text-blue-500 underline text-lg block">
        Post a Help Request →
      </Link>

      <Link href="/tasks" className="text-blue-500 underline text-lg block">
        View Available Tasks →
      </Link>
    </main>
  )
}
