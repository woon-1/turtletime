'use client'

import React from 'react'

export default function SocialProof() {
  const testimonials = [
    {
      quote: "I used to lose 30+ minutes every morning to Instagram. TurtleTime helped me take that time back. Now I actually eat breakfast.",
      name: "Sarah K.",
      role: "Early Adopter",
      avatar: "👩",
    },
    {
      quote: "My sleep quality improved almost immediately. Not reaching for my phone first thing changed everything.",
      name: "Michael R.",
      role: "Beta Tester",
      avatar: "👨",
    },
    {
      quote: "It\'s such a simple idea, but it works. I\'m more present in my mornings than I\'ve been in years.",
      name: "Jamie L.",
      role: "Beta Tester",
      avatar: "🧑",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Movement Banner */}
        <div className="bg-gradient-to-r from-coral-500 via-coral-400 to-orange-400 p-8 md:p-12 rounded-3xl text-white text-center mb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Join the Digital Wellness Movement
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            From dumbphones to digital detoxes, millions are rethinking their
            relationship with technology. TurtleTime is the gentlest first step —
            starting with how you wake up.
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">2,147</div>
              <div className="text-sm opacity-80">Pre-orders</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">40%</div>
              <div className="text-sm opacity-80">Avg. phone time reduction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">4.9★</div>
              <div className="text-sm opacity-80">Beta rating</div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What Early Adopters Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from our beta testing community.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-turtle-50 to-white p-8 rounded-3xl border border-turtle-100"
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-charcoal">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Logos Placeholder */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-6">As featured in</p>
          <div className="flex justify-center items-center gap-8 md:gap-12 opacity-40">
            <div className="text-2xl font-bold text-gray-400">TechCrunch</div>
            <div className="text-2xl font-bold text-gray-400">Wired</div>
            <div className="text-2xl font-bold text-gray-400">The Verge</div>
            <div className="text-2xl font-bold text-gray-400">Fast Company</div>
          </div>
          <p className="text-xs text-gray-400 mt-2">(Placeholder — logos coming soon)</p>
        </div>
      </div>
    </section>
  )
}
