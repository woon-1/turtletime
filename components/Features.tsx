'use client'

import React from 'react'

export default function Features() {
  const features = [
    {
      icon: '🔊',
      title: 'Gentle Wake Sounds',
      description: 'Choose from soft nature sounds, gentle chimes, or a classic alarm. Wake up peacefully.',
    },
    {
      icon: '🌙',
      title: 'Soft Night Light',
      description: 'A warm amber glow for those middle-of-the-night moments. No harsh blue light.',
    },
    {
      icon: '⚡',
      title: 'USB-C Charging',
      description: 'Modern charging with months of battery life. No need to hunt for weird cables.',
    },
    {
      icon: '🎨',
      title: 'Adorable Design',
      description: 'Available in Sea Green, Sunset Coral, and Cloud White. Looks great on any nightstand.',
    },
    {
      icon: '🔇',
      title: 'Snooze Button',
      description: 'We\'re realistic — everyone needs a snooze button. Tap the shell for 9 more minutes.',
    },
    {
      icon: '📱',
      title: 'Completely Offline',
      description: 'No WiFi, no Bluetooth, no data collection. Just an alarm clock that respects your privacy.',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-turtle-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-turtle-100 rounded-full">
            <span className="text-turtle-700 text-sm font-medium">
              Features
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TurtleTime does one thing really well: wake you up without pulling
            you into the attention economy. Here&apos;s what&apos;s inside.
          </p>
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-charcoal mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Product Image Placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-turtle-200 to-turtle-300 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🐢</div>
                  <p className="text-turtle-700 font-medium">Detail View</p>
                  <p className="text-turtle-600 text-sm">Image Coming Soon</p>
                </div>
              </div>
              {/* Color options */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
                <div className="w-8 h-8 rounded-full bg-turtle-400 border-2 border-white shadow cursor-pointer" title="Sea Green" />
                <div className="w-8 h-8 rounded-full bg-coral-400 border-2 border-white shadow cursor-pointer" title="Sunset Coral" />
                <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-200 shadow cursor-pointer" title="Cloud White" />
              </div>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="bg-charcoal text-white p-8 md:p-12 rounded-3xl">
          <h3 className="font-display text-xl font-bold mb-6 text-center">
            Technical Specifications
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-turtle-300 text-sm mb-1">Size</div>
              <div className="font-semibold">4&quot; × 3.5&quot; × 2.5&quot;</div>
            </div>
            <div>
              <div className="text-turtle-300 text-sm mb-1">Battery</div>
              <div className="font-semibold">3+ months standby</div>
            </div>
            <div>
              <div className="text-turtle-300 text-sm mb-1">Display</div>
              <div className="font-semibold">Soft LED, dimmable</div>
            </div>
            <div>
              <div className="text-turtle-300 text-sm mb-1">Materials</div>
              <div className="font-semibold">Recycled plastic</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
