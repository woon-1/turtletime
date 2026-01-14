'use client'

import React, { useState } from 'react'
import Button from './Button'

interface PreOrderProps {
  isModalOpen: boolean
  onOpenModal: () => void
  onCloseModal: () => void
}

// Check item component
const IncludedItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-3">
    <span className="flex-shrink-0 w-5 h-5 bg-sage-100 rounded-full flex items-center justify-center">
      <svg className="w-3 h-3 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
    <span className="text-ink-light text-sm">{children}</span>
  </li>
)

// Trust badge component
const TrustBadge = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-2 text-ink-muted">
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{text}</span>
  </div>
)

// Testimonial component
const Testimonial = () => (
  <div className="bg-white rounded-2xl p-6 card-soft max-w-md mx-auto mb-8">
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-terra-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="text-ink-light text-sm leading-relaxed mb-3">
      &ldquo;I used to lose 30+ minutes every morning to Instagram. TurtleTime helped me take that time back. Now I actually eat breakfast.&rdquo;
    </p>
    <p className="text-ink-muted text-sm font-medium">— Sarah K., Early Adopter</p>
  </div>
)

// Stats bar component
const StatsBar = () => (
  <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-ink">40%</div>
      <div className="text-xs text-ink-muted">Less morning stress</div>
    </div>
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-ink">25min</div>
      <div className="text-xs text-ink-muted">Saved each day</div>
    </div>
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-ink">89%</div>
      <div className="text-xs text-ink-muted">Recommend to friends</div>
    </div>
  </div>
)

export default function PreOrder({ isModalOpen, onOpenModal, onCloseModal }: PreOrderProps) {
  const [checkoutStep, setCheckoutStep] = useState(1)
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    if (checkoutStep === 1) {
      setCheckoutStep(2)
    } else if (checkoutStep === 2) {
      // This is the "fake door" - instead of processing payment, capture email
      setIsSubmitted(true)
    }
  }

  const resetModal = () => {
    setCheckoutStep(1)
    setEmail('')
    setFormData({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      zip: '',
      cardNumber: '',
      expiry: '',
      cvc: '',
    })
    setIsSubmitted(false)
    onCloseModal()
  }

  const includedItems = [
    'TurtleTime alarm clock',
    'USB-C charging cable',
    'Quick start guide',
    '30-day money-back guarantee',
    'Free shipping (US)',
  ]

  return (
    <>
      {/* Pre-order Section */}
      <section id="preorder" className="relative py-20 px-4 bg-gradient-to-b from-cream-100 via-cream-50 to-sage-50 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-4">
            Pre-order{' '}
            <span className="text-sage-600">TurtleTime</span>
            {' '}Today
          </h2>

          <p className="text-lg text-ink-muted max-w-xl mx-auto mb-10">
            Be among the first to experience mornings without the scroll.
          </p>

          {/* Pricing Card */}
          <div className="relative bg-white rounded-[2rem] p-8 card-soft max-w-md mx-auto">
            {/* Early bird badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-terra-500 text-white text-sm font-medium rounded-full shadow-md">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Early Bird — Save $10
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-ink mb-2 mt-2">
              TurtleTime Alarm Clock
            </h3>

            {/* Pricing */}
            <div className="mb-2">
              <span className="text-ink-muted line-through text-lg">$59</span>
              <span className="font-display text-5xl font-bold text-ink ml-3">$49</span>
              <span className="text-ink-muted text-sm ml-1">USD</span>
            </div>

            {/* Scarcity indicator */}
            <p className="text-terra-600 text-sm font-medium mb-6">
              Only 153 left at this price
            </p>

            {/* Included items */}
            <ul className="text-left space-y-3 mb-8">
              {includedItems.map((item, index) => (
                <IncludedItem key={index}>{item}</IncludedItem>
              ))}
            </ul>

            {/* CTA Button */}
            <Button variant="primary" size="lg" onClick={onOpenModal} className="w-full">
              Pre-order Now — $49
            </Button>

            {/* Shipping note */}
            <p className="text-sm text-ink-muted mt-4">
              Ships Spring 2025 • Cancel anytime before shipping
            </p>
          </div>

          {/* Testimonial - moved below pricing for social proof at decision point */}
          <Testimonial />

          {/* Stats Bar */}
          <StatsBar />

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            <TrustBadge icon="🔒" text="Secure Checkout" />
            <TrustBadge icon="💳" text="All Major Cards" />
            <TrustBadge icon="↩️" text="30-Day Returns" />
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {!isSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="p-6 border-b border-cream-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink">
                        {checkoutStep === 1 ? 'Shipping Information' : 'Payment Details'}
                      </h3>
                      <p className="text-sm text-ink-muted">Step {checkoutStep} of 2</p>
                    </div>
                    <button
                      onClick={resetModal}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-cream-100 text-ink-muted hover:bg-cream-200 hover:text-ink transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 h-2 bg-cream-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sage-400 to-sage-500 rounded-full transition-all duration-500 ease-out"
                      style={{ width: checkoutStep === 1 ? '50%' : '100%' }}
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="px-6 py-4 bg-cream-50 border-b border-cream-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center">
                        <span className="text-2xl">🐢</span>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-ink">TurtleTime</div>
                        <div className="text-sm text-ink-muted">Qty: 1</div>
                      </div>
                    </div>
                    <div className="font-display text-xl font-bold text-ink">$49.00</div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleCheckout} className="p-6">
                  {checkoutStep === 1 ? (
                    // Step 1: Shipping
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-1.5">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-1.5">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ink mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-ink mb-1.5">
                          Shipping Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-1.5">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                            placeholder="San Francisco"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-1.5">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                            placeholder="94102"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Step 2: Payment
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-ink mb-1.5">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                          placeholder="4242 4242 4242 4242"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-ink mb-1.5">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-ink mb-1.5">
                            CVC
                          </label>
                          <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-cream-50 border border-cream-200 rounded-xl focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all font-body"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="mt-6">
                    <Button variant="primary" size="lg" type="submit" className="w-full">
                      {checkoutStep === 1 ? 'Continue to Payment' : 'Complete Pre-order — $49'}
                    </Button>
                  </div>

                  {/* Back button for step 2 */}
                  {checkoutStep === 2 && (
                    <button
                      type="button"
                      onClick={() => setCheckoutStep(1)}
                      className="w-full mt-3 text-ink-muted hover:text-ink text-sm transition-colors"
                    >
                      ← Back to shipping
                    </button>
                  )}
                </form>

                {/* Trust indicators */}
                <div className="px-6 pb-6 text-center text-sm text-ink-muted flex items-center justify-center gap-2">
                  <span>🔒</span>
                  <span>Secure 256-bit SSL encryption</span>
                </div>
              </>
            ) : (
              // Success / Fake Door Reveal
              <div className="p-10 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-sage-100 rounded-full flex items-center justify-center">
                  <span className="text-5xl">🐢</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-ink mb-4">
                  Thanks for Your Interest!
                </h3>

                <p className="text-ink-muted mb-8 leading-relaxed">
                  We&apos;re so excited you want to join the TurtleTime community!
                  We&apos;re putting the finishing touches on production and aren&apos;t
                  quite ready to take orders yet.
                </p>

                <div className="bg-sage-50 p-6 rounded-2xl mb-8">
                  <p className="text-sage-700 font-display font-medium mb-2">
                    Be the first to know when we launch:
                  </p>
                  <p className="text-ink font-medium text-lg">
                    {email || 'your email'}
                  </p>
                  <p className="text-sm text-ink-muted mt-3">
                    We&apos;ll send you an exclusive early-bird discount code.
                  </p>
                </div>

                <Button variant="secondary" onClick={resetModal}>
                  Back to Site
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
