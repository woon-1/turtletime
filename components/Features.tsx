'use client'

import React, { useState } from 'react'

// Feature card component
const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) => (
  <div
    className="group relative bg-white rounded-2xl p-5 card-soft transition-all duration-500 hover:-translate-y-1 hover:bg-sage-50"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="flex gap-4 items-start">
      {/* Icon */}
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sage-100 to-sage-200 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="font-display font-bold text-ink mb-1">
          {title}
        </h3>
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
      {/* Shadow */}
      <ellipse cx="100" cy="165" rx="60" ry="10" className="fill-ink opacity-10" />

      {/* Shell body */}
      <ellipse cx="100" cy="100" rx="75" ry="55" className={colors.main} />

      {/* Shell dome */}
      <ellipse cx="100" cy="92" rx="60" ry="42" className={colors.dark} />

      {/* Shell hexagon pattern */}
      <path
        d="M75 82 L87 70 L113 70 L125 82 L125 102 L113 114 L87 114 L75 102 Z"
        className="fill-sage-600 opacity-40"
      />

      {/* Shell shine */}
      <ellipse cx="78" cy="80" rx="14" ry="10" className="fill-white opacity-25" />

      {/* Clock display */}
      <rect x="82" y="82" width="36" height="26" rx="4" className="fill-cream-50" />
      <rect x="85" y="85" width="30" height="20" rx="2" className="fill-ink opacity-90" />
      <text x="100" y="99" textAnchor="middle" className="fill-sage-300 text-[11px] font-display font-bold">7:00</text>

      {/* Head */}
      <ellipse cx="170" cy="95" rx="24" ry="20" className={colors.light} />

      {/* Eye */}
      <circle cx="180" cy="90" r="6" className="fill-ink" />
      <circle cx="182" cy="88" r="2" className="fill-white" />

      {/* Blush */}
      <ellipse cx="176" cy="100" rx="6" ry="4" className="fill-terra-300 opacity-40" />

      {/* Smile */}
      <path d="M172 102 Q178 108 184 104" stroke="#2D3032" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Legs */}
      <ellipse cx="150" cy="140" rx="14" ry="9" className={colors.light} transform="rotate(-15 150 140)" />
      <ellipse cx="50" cy="135" rx="12" ry="8" className={colors.light} transform="rotate(15 50 135)" />
      <ellipse cx="145" cy="70" rx="10" ry="7" className={colors.light} transform="rotate(25 145 70)" />
      <ellipse cx="55" cy="75" rx="10" ry="7" className={colors.light} transform="rotate(-25 55 75)" />

      {/* Tail */}
      <ellipse cx="28" cy="105" rx="9" ry="5" className={colors.light} />

      {/* Control buttons on shell */}
      <circle cx="125" cy="105" r="4" className="fill-white opacity-60" />
      <circle cx="75" cy="105" r="4" className="fill-white opacity-60" />
    </svg>
  )
}

// Color swatch component
const ColorSwatch = ({
  color,
  label,
  isSelected,
  onClick,
}: {
  color: string
  label: string
  isSelected: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`group relative w-10 h-10 rounded-full transition-all duration-300 ${
      isSelected ? 'ring-2 ring-offset-2 ring-ink scale-110' : 'hover:scale-105'
    }`}
    title={label}
  >
    <div className={`w-full h-full rounded-full ${color} shadow-md`} />
    {isSelected && (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-4 h-4 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    )}
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
      icon: <span className="text-2xl">⚡</span>,
      title: 'USB-C Charging',
      description: 'Modern charging with months of battery life. No hunting for weird cables.',
    },
    {
      icon: <span className="text-2xl">🎨</span>,
      title: 'Adorable Design',
      description: 'Available in Sea Green, Sunset Coral, and Cloud White. Perfect for any nightstand.',
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
    { id: 'sage', color: 'bg-sage-400', label: 'Sea Green' },
    { id: 'terra', color: 'bg-terra-400', label: 'Sunset Coral' },
    { id: 'cream', color: 'bg-cream-300 border border-cream-200', label: 'Cloud White' },
  ]

  const specs = [
    { label: 'Size', value: '4" × 3.5" × 2.5"' },
    { label: 'Battery', value: '3+ months standby' },
    { label: 'Display', value: 'Soft LED, dimmable' },
    { label: 'Materials', value: 'Recycled plastic' },
  ]

  return (
    <section className="relative py-24 px-4 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-sage-50 rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-terra-50 rounded-full opacity-40 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
            Features
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Everything You Need,{' '}
            <span className="relative inline-block">
              <span className="text-sage-600">Nothing You Don&apos;t</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" preserveAspectRatio="none">
                <path d="M0,4 Q75,8 150,4 T300,4" stroke="#b4cfa8" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed">
            TurtleTime does one thing really well: wake you up without pulling
            you into the attention economy. Here&apos;s what&apos;s inside.
          </p>
        </div>

        {/* Product Display Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          {/* Product Visualization */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-cream-100 to-terra-50 rounded-[3rem] blur-xl opacity-70" />

              {/* Main container */}
              <div className="relative bg-white/70 backdrop-blur-sm rounded-[2.5rem] p-8 border border-sage-100 card-soft">
                <div className="animate-float">
                  <TurtleDetailView selectedColor={selectedColor} />
                </div>
              </div>

              {/* Decorative blob */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sage-200 blob-shape-2 opacity-60" />
            </div>

            {/* Color selector */}
            <div className="mt-8 flex items-center gap-6">
              <span className="text-sm text-ink-muted font-medium">Color:</span>
              <div className="flex gap-3">
                {colorOptions.map((option) => (
                  <ColorSwatch
                    key={option.id}
                    color={option.color}
                    label={option.label}
                    isSelected={selectedColor === option.id}
                    onClick={() => setSelectedColor(option.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Specs Bar */}
        <div className="relative overflow-hidden bg-gradient-to-br from-ink via-ink to-ink-light p-8 sm:p-10 rounded-[2rem] text-white">
          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-dots-pattern text-white opacity-5" />

          <div className="relative">
            <h3 className="font-display text-lg font-bold mb-6 text-center text-white/90">
              Technical Specifications
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((spec, index) => (
                <div key={index} className="text-center">
                  <div className="text-sage-300 text-sm mb-1">{spec.label}</div>
                  <div className="font-display font-semibold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
