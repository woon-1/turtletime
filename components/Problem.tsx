'use client'

import React from 'react'

export default function Problem() {
  const stats = [
    { number: '96%', label: 'of people use their phone as an alarm clock' },
    { number: '80%', label: 'check their phone within 15 minutes of waking' },
    { number: '2.5hrs', label: 'average time lost to morning scrolling per week' },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Your Phone Is Stealing Your Mornings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            It starts innocently — you reach for your phone to turn off the alarm.
            Then you check &ldquo;just one notification.&rdquo; Before you know it,
            you&apos;ve spent 30 minutes in bed scrolling.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-coral-50 to-orange-50 rounded-3xl"
            >
              <div className="text-4xl md:text-5xl font-bold text-coral-600 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-3xl">
            <div className="text-4xl mb-4">😴</div>
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              The Morning Scroll Trap
            </h3>
            <p className="text-gray-600">
              You planned to wake up refreshed and start your day with intention.
              Instead, you&apos;re doom-scrolling Twitter before your feet even hit the floor.
              Sound familiar?
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              Notification Overload
            </h3>
            <p className="text-gray-600">
              The moment you pick up your phone to silence that alarm, you see 47
              notifications. Emails, texts, social media — all demanding your attention
              before you&apos;ve even said good morning.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl">
            <div className="text-4xl mb-4">😓</div>
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              Starting the Day Stressed
            </h3>
            <p className="text-gray-600">
              Instead of waking up calm and centered, you&apos;re immediately anxious
              about work emails, bad news, or FOMO from last night&apos;s group chat.
              Your day starts in reactive mode.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="font-display text-xl font-bold text-charcoal mb-2">
              Lost Time You Can&apos;t Get Back
            </h3>
            <p className="text-gray-600">
              Those &ldquo;quick checks&rdquo; add up. 20 minutes every morning becomes
              10+ hours a month — time you could spend exercising, reading, or just
              enjoying a peaceful breakfast.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
