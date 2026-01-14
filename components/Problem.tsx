'use client'

import React from 'react'

// Animated number counter display
const StatCard = ({
  number,
  label,
  icon,
  delay,
}: {
  number: string
  label: string
  icon: React.ReactNode
  delay: string
}) => (
  <div
    className="group relative bg-white rounded-3xl p-8 card-soft transition-all duration-500 hover:-translate-y-2"
    style={{ animationDelay: delay }}
  >
    {/* Decorative corner accent */}
    <div className="absolute top-4 right-4 w-16 h-16 bg-terra-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

    <div className="relative">
      <div className="mb-4 text-terra-400">{icon}</div>
      <div className="font-display text-4xl sm:text-5xl font-bold text-terra-500 mb-2">
        {number}
      </div>
      <p className="text-ink-muted text-sm leading-relaxed">{label}</p>
    </div>
  </div>
)

// Pain point card with icon
const PainCard = ({
  icon,
  title,
  description,
  accentColor,
}: {
  icon: string
  title: string
  description: string
  accentColor: string
}) => (
  <div className="group relative bg-cream-100 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:bg-cream-200">
    {/* Side accent bar */}
    <div className={`absolute left-0 top-6 bottom-6 w-1 ${accentColor} rounded-full opacity-60 group-hover:opacity-100 transition-opacity`} />

    <div className="pl-4">
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0">{icon}</span>
        <div>
          <h3 className="font-display text-lg font-bold text-ink mb-2">
            {title}
          </h3>
          <p className="text-ink-muted leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default function Problem() {
  const stats = [
    {
      number: '96%',
      label: 'of people use their phone as an alarm clock',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      number: '80%',
      label: 'check their phone within 15 minutes of waking',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '2.5hrs',
      label: 'average time lost to morning scrolling per week',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ]

  const painPoints = [
    {
      icon: '😴',
      title: 'The Morning Scroll Trap',
      description:
        "You planned to wake up refreshed and start your day with intention. Instead, you're doom-scrolling before your feet even hit the floor.",
      accentColor: 'bg-terra-400',
    },
    {
      icon: '🔔',
      title: 'Notification Overload',
      description:
        'The moment you silence that alarm, you see 47 notifications. Emails, texts, social media — all demanding your attention before you\'ve said good morning.',
      accentColor: 'bg-terra-500',
    },
    {
      icon: '😓',
      title: 'Starting the Day Stressed',
      description:
        "Instead of waking up calm and centered, you're immediately anxious about work emails, bad news, or FOMO. Your day starts in reactive mode.",
      accentColor: 'bg-terra-400',
    },
    {
      icon: '⏰',
      title: 'Lost Time You Can\'t Get Back',
      description:
        'Those "quick checks" add up. 20 minutes every morning becomes 10+ hours a month — time you could spend on yourself.',
      accentColor: 'bg-terra-500',
    },
  ]

  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-dots-pattern text-sage-100 opacity-40" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-terra-100 text-terra-700 rounded-full text-sm font-medium">
            The Problem
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Your Phone Is{' '}
            <span className="relative inline-block">
              <span className="text-terra-500">Stealing</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,4 Q50,8 100,4 T200,4" stroke="#f8b49e" strokeWidth="3" fill="none" />
              </svg>
            </span>
            {' '}Your Mornings
          </h2>

          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            It starts innocently — you reach for your phone to turn off the alarm.
            Then you check &ldquo;just one notification.&rdquo; Before you know it,
            30 minutes have vanished.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>

        {/* Pain Points Heading */}
        <div className="text-center mb-10">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
            Sound familiar? 🙋
          </h3>
        </div>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {painPoints.map((point, index) => (
            <PainCard
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
              accentColor={point.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
