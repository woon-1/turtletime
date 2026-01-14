import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'TurtleTime - Wake Up Without the Scroll',
  description: 'A friendly alarm clock designed to help you start your day present, not distracted. Join the movement to reclaim your mornings.',
  keywords: ['alarm clock', 'digital wellness', 'phone addiction', 'dumb phone', 'mindful mornings', 'screen time'],
  openGraph: {
    title: 'TurtleTime - Wake Up Without the Scroll',
    description: 'A friendly alarm clock designed to help you start your day present, not distracted.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
