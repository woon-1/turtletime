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

// Mini turtle for pricing card
const MiniTurtle = () => (
  <svg viewBox="0 0 100 80" className="w-24 h-20" fill="none">
    <ellipse cx="50" cy="45" rx="35" ry="25" className="fill-sage-400" />
    <ellipse cx="50" cy="42" rx="28" ry="20" className="fill-sage-500" />
    <ellipse cx="42" cy="38" rx="8" ry="5" className="fill-white opacity-20" />
    <ellipse cx="78" cy="42" rx="12" ry="10" className="fill-sage-300" />
    <circle cx="84" cy="39" r="3" className="fill-ink" />
    <circle cx="85" cy="38" r="1" className="fill-white" />
    <ellipse cx="82" cy="46" rx="3" ry="2" className="fill-terra-300 opacity-40" />
    <path d="M80 47 Q84 50 88 48" stroke="#2D3032" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <ellipse cx="70" cy="60" rx="7" ry="4" className="fill-sage-300" transform="rotate(-10 70 60)" />
    <ellipse cx="30" cy="58" rx="6" ry="4" className="fill-sage-300" transform="rotate(10 30 58)" />
    <ellipse cx="22" cy="45" rx="5" ry="3" className="fill-sage-300" />
  </svg>
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
      <section id="preorder" className="relative py-24 px-4 bg-gradient-to-b from-cream-100 via-cream-50 to-sage-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-sage-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-terra-50 rounded-full opacity-30 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-terra-100 text-terra-700 rounded-full text-sm font-medium">
            <span>🎉</span>
            <span>Limited Early Bird Pricing</span>
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink mb-6">
            Pre-order{' '}
            <span className="relative inline-block">
              <span className="text-sage-600">TurtleTime</span>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                <path d="M0,4 Q50,0 100,4 T200,4" stroke="#b4cfa8" strokeWidth="3" fill="none" />
              </svg>
            </span>
            {' '}Today
          </h2>

          <p className="text-lg text-ink-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Be among the first to experience mornings without the scroll.
            Pre-order now and save 20% off retail.
          </p>

          {/* Pricing Card */}
          <div className="relative bg-white rounded-[2rem] p-8 sm:p-10 card-soft max-w-md mx-auto">
            {/* Decorative corner accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-sage-100 blob-shape opacity-60" />

            {/* Mini turtle illustration */}
            <div className="flex justify-center mb-4">
              <MiniTurtle />
            </div>

            <h3 className="font-display text-2xl font-bold text-ink mb-2">
              TurtleTime Alarm Clock
            </h3>

            {/* Pricing */}
            <div className="mb-8">
              <span className="text-ink-muted line-through text-lg">$59</span>
              <span className="font-display text-5xl font-bold text-ink ml-3">$49</span>
              <span className="text-ink-muted text-sm ml-1">USD</span>
            </div>

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

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10">
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
