'use client'

import React from 'react'

// Wavy transition from previous section
const WavyTop = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
    <svg className="relative block w-full h-16" viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path
        d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1350,10 1440,50 L1440,100 L0,100 Z"
        className="fill-white"
      />
    </svg>
  </div>
)

// Illustrated turtle from side angle
const TurtleSideView = () => (
  <svg viewBox="0 0 280 200" className="w-full h-full" fill="none">
    {/* Background glow */}
    <ellipse cx="140" cy="120" rx="100" ry="60" className="fill-sage-100 opacity-50" />

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

    {/* Little Zs for peaceful sleep */}
    <g className="opacity-60">
      <text x="250" y="70" className="fill-sage-400 text-[10px] font-display">z</text>
      <text x="260" y="60" className="fill-sage-400 text-[12px] font-display">z</text>
      <text x="272" y="48" className="fill-sage-400 text-[14px] font-display">z</text>
    </g>
  </svg>
)

// Benefit card component
const BenefitCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: string
  title: string
  description: string
  index: number
}) => (
  <div
    className="group relative bg-white rounded-3xl p-6 card-soft transition-all duration-500 hover:-translate-y-2 hover:bg-sage-50"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Floating icon background */}
    <div className="absolute -top-4 -left-2 w-16 h-16 bg-sage-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

    <div className="relative">
      <div className="w-14 h-14 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-ink mb-2">
        {title}
      </h3>
      <p className="text-ink-muted text-sm leading-relaxed">{description}</p>
    </div>
  </div>
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
      description: 'Remove the trigger. Without your phone nearby, a phone-free morning becomes natural.',
    },
    {
      icon: '💚',
      title: 'Designed for Delight',
      description: "TurtleTime isn't just functional — it's a friendly companion that makes waking up joyful.",
    },
  ]

  return (
    <section className="relative pt-20 pb-24 px-4 bg-gradient-to-b from-sage-50 via-cream to-cream-100 overflow-hidden">
      <WavyTop />

      {/* Background decorations */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-sage-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-terra-50 rounded-full opacity-20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
            The Solution
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Meet{' '}
            <span className="relative inline-block">
              <span className="text-sage-600">TurtleTime</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,4 Q50,0 100,4 T200,4" stroke="#b4cfa8" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            A delightfully simple alarm clock that helps you break free from your
            phone&apos;s grip — starting with the very first moment of your day.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-200 via-sage-100 to-cream-200 rounded-[3rem] blur-2xl opacity-60" />

              {/* Main illustration container */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-8 border border-sage-100">
                <div className="animate-float">
                  <TurtleSideView />
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-terra-100 blob-shape opacity-70" />
            </div>
          </div>

          {/* Key Message */}
          <div className="lg:pl-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 leading-tight">
              Your Phone&apos;s Job Is to Keep You Scrolling.
              <br />
              <span className="text-sage-600">TurtleTime&apos;s Job Is to Set You Free.</span>
            </h3>

            <p className="text-ink-muted mb-8 leading-relaxed">
              Tech companies spend billions engineering apps to capture your
              attention. TurtleTime is the counter-technology — a simple, beautiful
              object designed to protect your most important hours.
            </p>

            <ul className="space-y-4">
              <CheckItem>No notifications, ever</CheckItem>
              <CheckItem>No addictive algorithms</CheckItem>
              <CheckItem>No blue light before bed</CheckItem>
              <CheckItem>Just a friendly turtle, waking you up</CheckItem>
            </ul>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
