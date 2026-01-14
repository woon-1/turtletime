'use client'

import React, { useState, useEffect } from 'react'
import Button from './Button'

interface StickyBarProps {
  onPreOrderClick: () => void
}

export default function StickyBar({ onPreOrderClick }: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~500px (below the hero fold)
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-sage-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Left: Product info */}
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐢</span>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-ink">TurtleTime</span>
              <span className="text-ink-muted ml-2">
                <span className="line-through text-sm">$59</span>
                <span className="font-bold text-ink ml-1">$49</span>
              </span>
            </div>
          </div>

          {/* Center: Urgency (desktop only) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-terra-600">
            <span className="inline-block w-2 h-2 bg-terra-400 rounded-full animate-pulse" />
            <span>Early bird pricing — limited spots</span>
          </div>

          {/* Right: CTA */}
          <Button variant="primary" size="sm" onClick={onPreOrderClick}>
            Pre-order — $49
          </Button>
        </div>
      </div>
    </div>
  )
}
