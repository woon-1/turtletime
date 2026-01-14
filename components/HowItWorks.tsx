'use client'

import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '🛏️',
      title: 'Put Your Phone Away',
      description: 'Place your phone in another room or a drawer. Let TurtleTime be your only alarm.',
    },
    {
      number: '02',
      icon: '🐢',
      title: 'Set TurtleTime',
      description: 'Simple buttons, easy to use. Set your alarm in seconds — no apps required.',
    },
    {
      number: '03',
      icon: '🌞',
      title: 'Wake Up Present',
      description: 'When morning comes, reach for TurtleTime instead of your phone. Start your day on your terms.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-coral-100 rounded-full">
            <span className="text-coral-700 text-sm font-medium">
              Simple Setup
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No complicated setup. No app to download. Just a simple shift in your
            bedtime routine that transforms your mornings.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-turtle-300 to-turtle-200" />
              )}

              <div className="relative bg-gradient-to-br from-turtle-50 to-white p-8 rounded-3xl border-2 border-turtle-100 hover:border-turtle-300 transition-colors duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-turtle-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>

                {/* Content */}
                <div className="text-center pt-4">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="mt-16 text-center bg-gradient-to-r from-turtle-500 to-turtle-600 p-8 md:p-12 rounded-3xl text-white">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            The Result?
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Mornings that feel calm, intentional, and yours. Users report feeling
            more focused, less anxious, and more in control of their day.
          </p>
        </div>
      </div>
    </section>
  )
}
