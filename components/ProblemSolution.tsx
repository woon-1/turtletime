'use client'

import React from 'react'

// Stat card
const StatCard = ({
  number,
  label,
  icon,
}: {
  number: string
  label: string
  icon: React.ReactNode
}) => (
  <div className="group relative bg-white rounded-3xl p-6 sm:p-8 card-soft transition-all duration-500 hover:-translate-y-1">
    <div className="relative">
      <div className="mb-3 text-terra-400">{icon}</div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-terra-500 mb-2">
        {number}
      </div>
      <p className="text-ink-muted text-sm leading-relaxed">{label}</p>
    </div>
  </div>
)

// Illustrated turtle from side angle
const TurtleSideView = () => (
  <svg viewBox="0 0 280 200" className="w-full h-full" fill="none">
    {/* Shell body from side */}
    <ellipse cx="130" cy="110" rx="85" ry="55" className="fill-sage-400" />

    {/* Shell dome pattern */}
    <ellipse cx="130" cy="100" rx="70" ry="45" className="fill-sage-500" />

    {/* Shell segments */}
    <path
      d="M90 85 Q110 70 130 85 Q150 70 170 85 L170 115 Q150 130 130 115 Q110 130 90 115 Z"
      className="fill-sage-600 opacity-50"
    />

    {/* Shell highlight */}
    <ellipse cx="105" cy="85" rx="18" ry="12" className="fill-white opacity-20" />

    {/* Clock display on shell */}
    <rect x="110" y="90" width="45" height="30" rx="5" className="fill-cream-50" />
    <rect x="113" y="93" width="39" height="24" rx="3" className="fill-sage-900 opacity-90" />
    <text x="132" y="112" textAnchor="middle" className="fill-sage-300 text-[14px] font-display font-bold">7:00</text>

    {/* Head */}
    <ellipse cx="220" cy="105" rx="28" ry="22" className="fill-sage-300" />

    {/* Eye */}
    <circle cx="232" cy="98" r="7" className="fill-ink" />
    <circle cx="234" cy="95" r="2.5" className="fill-white" />

    {/* Rosy cheek */}
    <ellipse cx="228" cy="112" rx="8" ry="5" className="fill-terra-300 opacity-40" />

    {/* Happy smile */}
    <path
      d="M224 113 Q232 120 240 115"
      stroke="#2D3032"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Front leg */}
    <ellipse cx="195" cy="150" rx="16" ry="10" className="fill-sage-300" transform="rotate(-15 195 150)" />

    {/* Back leg */}
    <ellipse cx="65" cy="140" rx="14" ry="9" className="fill-sage-300" transform="rotate(15 65 140)" />

    {/* Tail */}
    <ellipse cx="42" cy="115" rx="10" ry="6" className="fill-sage-300" />
  </svg>
)

// Check item component
const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 group">
    <span className="flex-shrink-0 w-6 h-6 bg-sage-100 rounded-full flex items-center justify-center group-hover:bg-sage-200 transition-colors">
      <svg className="w-3.5 h-3.5 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-ink-light group-hover:text-ink transition-colors">{children}</span>
  </li>
)

export default function ProblemSolution() {
  const stats = [
    {
      number: '96%',
      label: 'of people use their phone as an alarm clock',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      number: '80%',
      label: 'check their phone within 15 minutes of waking',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '2.5hrs',
      label: 'average time lost to morning scrolling per week',
      icon: (
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Problem Section */}
        <div className="text-center mb-12">
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
            You reach for your phone to turn off the alarm. Then you check
            &ldquo;just one notification.&rdquo; Before you know it, 30 minutes have vanished.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Solution Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Turtle Illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200 via-sage-100 to-cream-200 rounded-[3rem] blur-2xl opacity-50" />
              <div className="relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-6 border border-sage-100">
                <div className="animate-float">
                  <TurtleSideView />
                </div>
              </div>
            </div>
          </div>

          {/* Solution Message */}
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 leading-tight">
              There&apos;s a Better Way to{' '}
              <span className="text-sage-600">Wake Up</span>
            </h3>

            <p className="text-ink-muted mb-6 leading-relaxed">
              Meet TurtleTime — a delightfully simple alarm clock that helps you break free
              from your phone&apos;s grip, starting with the very first moment of your day.
            </p>

            <ul className="space-y-3">
              <CheckItem>No notifications, ever</CheckItem>
              <CheckItem>No addictive algorithms</CheckItem>
              <CheckItem>No blue light before bed</CheckItem>
              <CheckItem>Just a friendly turtle, waking you up</CheckItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
