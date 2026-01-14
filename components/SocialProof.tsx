'use client'

import React from 'react'

// Testimonial card with unique styling
const TestimonialCard = ({
  quote,
  name,
  role,
  accentColor,
  rotation,
}: {
  quote: string
  name: string
  role: string
  accentColor: string
  rotation: string
}) => (
  <div
    className={`group relative bg-white rounded-[2rem] p-8 card-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${rotation}`}
  >
    {/* Quote mark decoration */}
    <div className={`absolute -top-4 -left-2 text-6xl font-serif ${accentColor} opacity-20`}>
      &ldquo;
    </div>

    {/* Accent corner blob */}
    <div className={`absolute top-4 right-4 w-16 h-16 ${accentColor} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500`} />

    <div className="relative">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-terra-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className="text-ink-light leading-relaxed mb-6 text-[15px]">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${accentColor} opacity-20 flex items-center justify-center`}>
          <span className="text-lg">🐢</span>
        </div>
        <div>
          <div className="font-display font-semibold text-ink text-sm">{name}</div>
          <div className="text-xs text-ink-muted">{role}</div>
        </div>
      </div>
    </div>
  </div>
)

// Stat counter component
const StatCounter = ({
  value,
  label,
  icon,
}: {
  value: string
  label: string
  icon: string
}) => (
  <div className="text-center group">
    <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
      <span className="text-2xl">{icon}</span>
    </div>
    <div className="font-display text-3xl sm:text-4xl font-bold">{value}</div>
    <div className="text-sm text-white/70 mt-1">{label}</div>
  </div>
)

export default function SocialProof() {
  const testimonials = [
    {
      quote: "I used to lose 30+ minutes every morning to Instagram. TurtleTime helped me take that time back. Now I actually eat breakfast.",
      name: "Sarah K.",
      role: "Early Adopter",
      accentColor: "bg-sage-400",
      rotation: "hover:rotate-1",
    },
    {
      quote: "My sleep quality improved almost immediately. Not reaching for my phone first thing changed everything.",
      name: "Michael R.",
      role: "Beta Tester",
      accentColor: "bg-terra-400",
      rotation: "hover:-rotate-1",
    },
    {
      quote: "It's such a simple idea, but it works. I'm more present in my mornings than I've been in years.",
      name: "Jamie L.",
      role: "Beta Tester",
      accentColor: "bg-sage-500",
      rotation: "hover:rotate-1",
    },
  ]

  const stats = [
    { value: "2,147", label: "Pre-orders", icon: "📦" },
    { value: "40%", label: "Less phone time", icon: "📵" },
    { value: "4.9", label: "Beta rating", icon: "⭐" },
  ]

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white via-cream-50 to-cream-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-sage-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-terra-50 rounded-full opacity-30 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Movement Banner */}
        <div className="relative overflow-hidden bg-gradient-to-br from-terra-400 via-terra-500 to-terra-600 p-10 sm:p-14 rounded-[2rem] text-white mb-20">
          {/* Decorative elements */}
          <div className="absolute inset-0 shell-pattern opacity-20" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-terra-300 rounded-full blur-3xl opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white rounded-full blur-3xl opacity-10" />

          <div className="relative">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm">
                <span>🌱</span>
                <span>Join the Movement</span>
              </span>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Digital Wellness Starts with{' '}
                <span className="relative inline-block">
                  Morning
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0,4 Q25,0 50,4 T100,4" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>

              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                From dumbphones to digital detoxes, millions are rethinking their
                relationship with technology. TurtleTime is the gentlest first step.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-10 sm:gap-16 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <StatCounter key={index} value={stat.value} label={stat.label} icon={stat.icon} />
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
            Testimonials
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
            What Early Adopters{' '}
            <span className="relative inline-block">
              <span className="text-sage-600">Are Saying</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,4 Q50,8 100,4 T200,4" stroke="#b4cfa8" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="text-lg text-ink-muted max-w-2xl mx-auto">
            Real feedback from our beta testing community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              accentColor={testimonial.accentColor}
              rotation={testimonial.rotation}
            />
          ))}
        </div>

        {/* Press Logos */}
        <div className="text-center">
          <p className="text-sm text-ink-muted mb-6">As seen in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {['TechCrunch', 'Wired', 'The Verge', 'Fast Company'].map((name, index) => (
              <div
                key={index}
                className="text-lg sm:text-xl font-display font-bold text-ink-muted/30 hover:text-ink-muted/50 transition-colors duration-300"
              >
                {name}
              </div>
            ))}
          </div>
          <p className="text-xs text-ink-muted/50 mt-3">(Press logos coming soon)</p>
        </div>
      </div>
    </section>
  )
}
