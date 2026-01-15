import type { Metadata } from 'next'
import { Comfortaa, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
  weight: ['300', '400', '500', '600', '700'],
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300', '400', '500', '600', '700'],
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
    <html lang="en" className={`${comfortaa.variable} ${nunito.variable}`}>
      <body className="font-body antialiased bg-cream text-ink overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
