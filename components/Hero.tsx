'use client'

import React from 'react'
import Button from './Button'

interface HeroProps {
  onPreOrderClick: () => void
}

// Cute illustrated turtle SVG component
const TurtleIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    {/* Shell body */}
    <ellipse cx="100" cy="110" rx="70" ry="50" className="fill-sage-400" />
    {/* Shell pattern - hexagonal segments */}
    <ellipse cx="100" cy="105" rx="55" ry="38" className="fill-sage-500" />
    <path
      d="M70 95 L85 80 L115 80 L130 95 L130 115 L115 130 L85 130 L70 115 Z"
      className="fill-sage-600 opacity-60"
    />
    <path
      d="M85 85 L100 75 L115 85 L115 100 L100 110 L85 100 Z"
      className="fill-sage-700 opacity-40"
    />
    {/* Shell shine */}
    <ellipse cx="80" cy="90" rx="12" ry="8" className="fill-white opacity-20" />

    {/* Head */}
    <ellipse cx="165" cy="105" rx="22" ry="18" className="fill-sage-300" />
    {/* Cheek blush */}
    <ellipse cx="170" cy="112" rx="6" ry="4" className="fill-terra-300 opacity-50" />

    {/* Eye */}
    <circle cx="172" cy="100" r="6" className="fill-ink" />
    <circle cx="174" cy="98" r="2" className="fill-white" />

    {/* Happy smile */}
    <path
      d="M168 110 Q172 115 178 112"
      stroke="#2D3032"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Front legs */}
    <ellipse cx="145" cy="140" rx="12" ry="8" className="fill-sage-300" transform="rotate(-20 145 140)" />
    <ellipse cx="55" cy="135" rx="12" ry="8" className="fill-sage-300" transform="rotate(20 55 135)" />

    {/* Back legs */}
    <ellipse cx="140" cy="80" rx="10" ry="7" className="fill-sage-300" transform="rotate(30 140 80)" />
    <ellipse cx="60" cy="85" rx="10" ry="7" className="fill-sage-300" transform="rotate(-30 60 85)" />

    {/* Tail */}
    <ellipse cx="30" cy="115" rx="8" ry="5" className="fill-sage-300" transform="rotate(-10 30 115)" />

    {/* Clock display on shell */}
    <rect x="80" y="95" width="40" height="25" rx="4" className="fill-cream-100 opacity-90" />
    <text x="100" y="113" textAnchor="middle" className="fill-ink text-[12px] font-display font-bold">7:00</text>

    {/* Decorative stars/sparkles */}
    <g className="animate-pulse">
      <path d="M50 60 L52 65 L57 65 L53 69 L55 74 L50 71 L45 74 L47 69 L43 65 L48 65 Z" className="fill-terra-300" />
      <path d="M160 55 L161 58 L164 58 L162 60 L163 63 L160 61 L157 63 L158 60 L156 58 L159 58 Z" className="fill-terra-300" />
    </g>
  </svg>
)

// Decorative blob shapes
const BlobDecoration = ({ className }: { className: string }) => (
  <div className={`absolute blob-shape ${className}`} />
)

// Wavy line decoration
const WavyLine = () => (
  <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path
      d="M0,50 C150,90 350,10 500,50 C650,90 850,10 1000,50 C1150,90 1350,10 1440,50 L1440,100 L0,100 Z"
      className="fill-white"
    />
  </svg>
)

export default function Hero({ onPreOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-8 pb-32 overflow-hidden bg-gradient-to-b from-cream-50 via-cream to-sage-50">
      {/* Background decorative elements */}
      <BlobDecoration className="w-96 h-96 bg-sage-100/60 -top-20 -left-20" />
      <BlobDecoration className="w-72 h-72 bg-terra-100/40 top-40 -right-10" />
      <BlobDecoration className="w-64 h-64 bg-sage-200/30 bottom-40 left-1/4" />

      {/* Dots pattern overlay */}
      <div className="absolute inset-0 bg-dots-pattern text-sage-200 opacity-30" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-sage-100">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sage-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-500"></span>
              </span>
              <span className="text-sage-700 text-sm font-medium">
                Join 2,000+ people reclaiming their mornings
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] mb-6">
              Wake Up{' '}
              <span className="relative inline-block">
                <span className="text-sage-600">Without</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path
                    d="M0,8 Q50,0 100,8 T200,8"
                    stroke="#b4cfa8"
                    strokeWidth="4"
                    fill="none"
                    className="squiggle-line"
                  />
                </svg>
              </span>
              <br />
              <span className="text-terra-500">the Scroll</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-ink-light mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Meet TurtleTime — the adorable alarm clock that helps you start your day
              present, not distracted. No notifications. No temptations. Just you,
              awake and ready.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="primary" size="lg" onClick={onPreOrderClick}>
                Pre-order Now — $49
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Trust line */}
            <div className="mt-6 flex items-center gap-6 justify-center lg:justify-start text-sm text-ink-muted">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Ships Spring 2025
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sage-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-day guarantee
              </span>
            </div>
          </div>

          {/* Product Illustration */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Glow behind turtle */}
              <div className="absolute inset-8 bg-gradient-to-br from-sage-200 via-sage-100 to-terra-100 rounded-full blur-3xl opacity-60" />

              {/* Main turtle illustration */}
              <div className="relative animate-float">
                <TurtleIllustration />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 right-8 animate-float-delayed">
                <div className="w-12 h-12 bg-terra-200 blob-shape flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
              </div>

              <div className="absolute bottom-12 -left-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-sage-200 blob-shape-2 flex items-center justify-center">
                  <span className="text-lg">🌿</span>
                </div>
              </div>

              <div className="absolute top-1/3 -right-8 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 bg-cream-200 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-sm">☀️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy bottom divider */}
      <WavyLine />
    </section>
  )
}
