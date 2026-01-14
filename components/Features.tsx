'use client'

import React, { useState } from 'react'

// Feature card component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) => (
  <div className="group relative bg-white rounded-2xl p-5 card-soft transition-all duration-300 hover:-translate-y-1 hover:bg-sage-50">
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sage-100 to-sage-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-bold text-ink mb-1">{title}</h3>
        <p className="text-ink-muted text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
)

// Detailed turtle illustration for features
const TurtleDetailView = ({ selectedColor }: { selectedColor: string }) => {
  const shellColors: Record<string, { main: string; dark: string; light: string }> = {
    sage: { main: 'fill-sage-400', dark: 'fill-sage-500', light: 'fill-sage-300' },
    terra: { main: 'fill-terra-400', dark: 'fill-terra-500', light: 'fill-terra-300' },
    cream: { main: 'fill-cream-300', dark: 'fill-cream-200', light: 'fill-cream-100' },
  }

  const colors = shellColors[selectedColor] || shellColors.sage

  return (
    <svg viewBox="0 0 200 180" className="w-full h-full" fill="none">
      <ellipse cx="100" cy="165" rx="60" ry="10" className="fill-ink opacity-10" />
      <ellipse cx="100" cy="100" rx="75" ry="55" className={colors.main} />
      <ellipse cx="100" cy="92" rx="60" ry="42" className={colors.dark} />
      <path
        d="M75 82 L87 70 L113 70 L125 82 L125 102 L113 114 L87 114 L75 102 Z"
        className="fill-sage-600 opacity-40"
      />
      <ellipse cx="78" cy="80" rx="14" ry="10" className="fill-white opacity-25" />
      <rect x="82" y="82" width="36" height="26" rx="4" className="fill-cream-50" />
      <rect x="85" y="85" width="30" height="20" rx="2" className="fill-ink opacity-90" />
      <text x="100" y="99" textAnchor="middle" className="fill-sage-300 text-[11px] font-display font-bold">7:00</text>
      <ellipse cx="170" cy="95" rx="24" ry="20" className={colors.light} />
      <circle cx="180" cy="90" r="6" className="fill-ink" />
      <circle cx="182" cy="88" r="2" className="fill-white" />
      <ellipse cx="176" cy="100" rx="6" ry="4" className="fill-terra-300 opacity-40" />
      <path d="M172 102 Q178 108 184 104" stroke="#2D3032" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="150" cy="140" rx="14" ry="9" className={colors.light} transform="rotate(-15 150 140)" />
      <ellipse cx="50" cy="135" rx="12" ry="8" className={colors.light} transform="rotate(15 50 135)" />
      <ellipse cx="145" cy="70" rx="10" ry="7" className={colors.light} transform="rotate(25 145 70)" />
      <ellipse cx="55" cy="75" rx="10" ry="7" className={colors.light} transform="rotate(-25 55 75)" />
      <ellipse cx="28" cy="105" rx="9" ry="5" className={colors.light} />
      <circle cx="125" cy="105" r="4" className="fill-white opacity-60" />
      <circle cx="75" cy="105" r="4" className="fill-white opacity-60" />
    </svg>
  )
}

// Color swatch component
const ColorSwatch = ({
  color,
  isSelected,
  onClick,
}: {
  color: string
  isSelected: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`w-9 h-9 rounded-full transition-all duration-300 ${
      isSelected ? 'ring-2 ring-offset-2 ring-ink scale-110' : 'hover:scale-105'
    }`}
  >
    <div className={`w-full h-full rounded-full ${color} shadow-md`} />
  </button>
)

export default function Features() {
  const [selectedColor, setSelectedColor] = useState('sage')

  const features = [
    {
      icon: <span className="text-2xl">🔊</span>,
      title: 'Gentle Wake Sounds',
      description: 'Choose from soft nature sounds, gentle chimes, or a classic alarm. Wake up peacefully.',
    },
    {
      icon: <span className="text-2xl">🌙</span>,
      title: 'Soft Night Light',
      description: 'A warm amber glow for those middle-of-the-night moments. No harsh blue light.',
    },
    {
      icon: <span className="text-2xl">👆</span>,
      title: 'Shell Snooze',
      description: "We're realistic — everyone needs a snooze button. Tap the shell for 9 more minutes.",
    },
    {
      icon: <span className="text-2xl">🔒</span>,
      title: 'Completely Offline',
      description: 'No WiFi, no Bluetooth, no data collection. Privacy by design.',
    },
  ]

  const colorOptions = [
    { id: 'sage', color: 'bg-sage-400' },
    { id: 'terra', color: 'bg-terra-400' },
    { id: 'cream', color: 'bg-cream-300 border border-cream-200' },
  ]

  return (
    <section className="relative py-20 px-4 bg-cream-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Everything You Need,{' '}
            <span className="text-sage-600">Nothing You Don&apos;t</span>
          </h2>
          <p className="text-lg text-ink-muted max-w-xl mx-auto">
            TurtleTime does one thing really well: wake you up without pulling
            you into the attention economy.
          </p>
        </div>

        {/* Product Display Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Features List - 2x2 grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Product Visualization */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-cream-100 to-terra-50 rounded-[3rem] blur-xl opacity-60" />
              <div className="relative bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-6 border border-sage-100 card-soft">
                <div className="animate-float">
                  <TurtleDetailView selectedColor={selectedColor} />
                </div>
              </div>
            </div>

            {/* Color selector */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-sm text-ink-muted">Color:</span>
              <div className="flex gap-2">
                {colorOptions.map((option) => (
                  <ColorSwatch
                    key={option.id}
                    color={option.color}
                    isSelected={selectedColor === option.id}
                    onClick={() => setSelectedColor(option.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
