'use client'

import React from 'react'

// Step card component with organic connector
const StepCard = ({
  number,
  icon,
  title,
  description,
  isLast,
}: {
  number: string
  icon: string
  title: string
  description: string
  isLast: boolean
}) => (
  <div className="relative">
    {/* Connector line (hidden on mobile, visible between cards) */}
    {!isLast && (
      <div className="hidden lg:block absolute top-1/2 left-full w-full h-px z-0">
        <svg className="w-full h-8 -translate-y-4" viewBox="0 0 200 32" preserveAspectRatio="none">
          <path
            d="M0,16 Q50,8 100,16 T200,16"
            stroke="#d4e3cd"
            strokeWidth="3"
            strokeDasharray="8 6"
            fill="none"
          />
          {/* Arrow at the end */}
          <path
            d="M190,12 L200,16 L190,20"
            stroke="#d4e3cd"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )}

    <div className="group relative bg-white rounded-[2rem] p-8 card-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      {/* Step number badge */}
      <div className="absolute -top-5 left-6 w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <span className="font-display font-bold text-white text-lg">{number}</span>
      </div>

      {/* Decorative glow on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-sage-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

      {/* Content */}
      <div className="relative pt-4">
        {/* Icon container */}
        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cream-100 to-cream-200 rounded-2xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
          <span className="text-4xl">{icon}</span>
        </div>

        <h3 className="font-display text-xl font-bold text-ink mb-3 text-center">
          {title}
        </h3>
        <p className="text-ink-muted text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
)

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: '📱',
      title: 'Put Your Phone Away',
      description: 'Place your phone in another room or a drawer. Let TurtleTime be your only alarm.',
    },
    {
      number: '2',
      icon: '🐢',
      title: 'Set TurtleTime',
      description: 'Simple buttons, easy to use. Set your alarm in seconds — no apps required.',
    },
    {
      number: '3',
      icon: '☀️',
      title: 'Wake Up Present',
      description: 'When morning comes, reach for TurtleTime instead of your phone. Start fresh.',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 px-4 bg-cream-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sage-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-terra-50 rounded-full opacity-30 blur-3xl" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dots-pattern text-sage-200 opacity-20" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-terra-100 text-terra-700 rounded-full text-sm font-medium">
            Simple as 1-2-3
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
            How It{' '}
            <span className="relative inline-block">
              <span className="text-sage-600">Works</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,0 50,4 T100,4" stroke="#b4cfa8" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            No complicated setup. No app to download. Just a simple shift in your
            bedtime routine that transforms your mornings.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Result Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-sage-500 via-sage-600 to-sage-700 p-10 sm:p-14 rounded-[2rem] text-white">
          {/* Decorative pattern */}
          <div className="absolute inset-0 shell-pattern opacity-30" />

          {/* Glow accent */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sage-400 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-terra-400 rounded-full blur-3xl opacity-20" />

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-xl">✨</span>
              <span className="text-sm font-medium text-white/90">The Result</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Mornings That Feel Like{' '}
              <span className="relative inline-block">
                Yours
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,4 Q25,8 50,4 T100,4" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h3>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Users report feeling more focused, less anxious, and more in control of their day.
              All from one simple change.
            </p>

            {/* Mini stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="font-display text-3xl font-bold">40%</div>
                <div className="text-sm text-white/70">Less morning stress</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold">25min</div>
                <div className="text-sm text-white/70">Saved each day</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold">89%</div>
                <div className="text-sm text-white/70">Recommend to friends</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
