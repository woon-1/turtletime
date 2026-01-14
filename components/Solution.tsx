'use client'

import React from 'react'

export default function Solution() {
  const benefits = [
    {
      icon: '🐢',
      title: 'Adorably Analog',
      description: 'A physical alarm clock you actually want on your nightstand. No screens, no apps, no temptation.',
    },
    {
      icon: '🌅',
      title: 'Reclaim Your Mornings',
      description: 'Wake up on your terms. Start your day with intention instead of infinite scroll.',
    },
    {
      icon: '🧘',
      title: 'Build Better Habits',
      description: 'Remove the trigger. Without your phone within arm\'s reach, building a phone-free morning routine becomes natural.',
    },
    {
      icon: '💚',
      title: 'Designed for Delight',
      description: 'TurtleTime isn\'t just functional — it\'s a friendly companion that makes waking up a little more joyful.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-turtle-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-turtle-100 rounded-full">
            <span className="text-turtle-700 text-sm font-medium">
              The Solution
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Meet TurtleTime
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A delightfully simple alarm clock that helps you break free from your
            phone&apos;s grip — starting with the very first moment of your day.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-turtle-100 to-turtle-200 rounded-3xl flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-7xl mb-4">🐢</div>
                <p className="text-turtle-700 font-medium">Side View</p>
                <p className="text-turtle-600 text-sm">Image Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Key Message */}
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Your Phone&apos;s Job Is to Keep You Scrolling.
              <br />
              <span className="text-turtle-600">TurtleTime&apos;s Job Is to Set You Free.</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Tech companies spend billions engineering apps to capture your
              attention. TurtleTime is the counter-technology — a simple, beautiful
              object designed to protect your most important hours.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-turtle-500 text-xl">✓</span>
                <span className="text-gray-700">No notifications, ever</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-turtle-500 text-xl">✓</span>
                <span className="text-gray-700">No addictive algorithms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-turtle-500 text-xl">✓</span>
                <span className="text-gray-700">No blue light before bed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-turtle-500 text-xl">✓</span>
                <span className="text-gray-700">Just a friendly turtle, waking you up</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
