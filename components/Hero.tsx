'use client'

import React from 'react'
import Button from './Button'

interface HeroProps {
  onPreOrderClick: () => void
}

export default function Hero({ onPreOrderClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-cream to-turtle-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <div className="inline-block mb-4 px-4 py-2 bg-turtle-100 rounded-full">
            <span className="text-turtle-700 text-sm font-medium">
              Join 2,000+ people reclaiming their mornings
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
            Wake Up Without{' '}
            <span className="text-turtle-600">the Scroll</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Meet TurtleTime — the adorable alarm clock that helps you start your day
            present, not distracted. No notifications. No temptations. Just you,
            awake and ready.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="primary" size="lg" onClick={onPreOrderClick}>
              Pre-order Now — $49
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}>
              See How It Works
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Ships Spring 2025 • 30-day money-back guarantee
          </p>
        </div>

        {/* Product Image Placeholder */}
        <div className="relative flex justify-center">
          <div className="animate-float">
            {/* Placeholder for turtle product image */}
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-turtle-200 to-turtle-300 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-8xl mb-4">🐢</div>
                <p className="text-turtle-700 font-medium">TurtleTime</p>
                <p className="text-turtle-600 text-sm">Product Image Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-coral-200 rounded-full opacity-60 animate-pulse-soft" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-turtle-100 rounded-full opacity-40" />
        </div>
      </div>
    </section>
  )
}
