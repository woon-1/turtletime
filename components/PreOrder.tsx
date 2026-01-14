'use client'

import React, { useState } from 'react'
import Button from './Button'

interface PreOrderProps {
  isModalOpen: boolean
  onOpenModal: () => void
  onCloseModal: () => void
}

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

  return (
    <>
      {/* Pre-order Section */}
      <section id="preorder" className="py-20 px-4 bg-gradient-to-b from-white to-turtle-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-coral-100 rounded-full">
            <span className="text-coral-700 text-sm font-medium">
              Limited Early Bird Pricing
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Pre-order TurtleTime Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Be among the first to experience mornings without the scroll.
            Pre-order now and save 20% off retail.
          </p>

          {/* Pricing Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-md mx-auto">
            <div className="text-6xl mb-4">🐢</div>
            <h3 className="font-display text-2xl font-bold text-charcoal mb-2">
              TurtleTime Alarm Clock
            </h3>

            <div className="mb-6">
              <span className="text-gray-400 line-through text-lg">$59</span>
              <span className="text-4xl font-bold text-charcoal ml-2">$49</span>
              <span className="text-gray-500 text-sm ml-1">USD</span>
            </div>

            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-turtle-500">✓</span>
                <span className="text-gray-700">TurtleTime alarm clock</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-turtle-500">✓</span>
                <span className="text-gray-700">USB-C charging cable</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-turtle-500">✓</span>
                <span className="text-gray-700">Quick start guide</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-turtle-500">✓</span>
                <span className="text-gray-700">30-day money-back guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-turtle-500">✓</span>
                <span className="text-gray-700">Free shipping (US)</span>
              </li>
            </ul>

            <Button variant="primary" size="lg" onClick={onOpenModal} className="w-full">
              Pre-order Now — $49
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              Ships Spring 2025 • Cancel anytime before shipping
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-8 mt-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span className="text-sm">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💳</span>
              <span className="text-sm">All Major Cards</span>
            </div>
            <div className="flex items-center gap-2">
              <span>↩️</span>
              <span className="text-sm">30-Day Returns</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {!isSubmitted ? (
              <>
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-display text-xl font-bold text-charcoal">
                        {checkoutStep === 1 ? 'Shipping Information' : 'Payment Details'}
                      </h3>
                      <p className="text-sm text-gray-500">Step {checkoutStep} of 2</p>
                    </div>
                    <button
                      onClick={resetModal}
                      className="text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-4 h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-turtle-500 rounded-full transition-all duration-300"
                      style={{ width: checkoutStep === 1 ? '50%' : '100%' }}
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">🐢</div>
                      <div>
                        <div className="font-semibold text-charcoal">TurtleTime</div>
                        <div className="text-sm text-gray-500">Qty: 1</div>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-charcoal">$49.00</div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleCheckout} className="p-6">
                  {checkoutStep === 1 ? (
                    // Step 1: Shipping
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Shipping Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                          placeholder="123 Main St"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                            placeholder="San Francisco"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            name="zip"
                            value={formData.zip}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                            placeholder="94102"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Step 2: Payment
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                          placeholder="4242 4242 4242 4242"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVC
                          </label>
                          <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-turtle-500 focus:border-transparent"
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
                      className="w-full mt-3 text-gray-500 hover:text-gray-700 text-sm"
                    >
                      ← Back to shipping
                    </button>
                  )}
                </form>

                {/* Trust indicators */}
                <div className="px-6 pb-6 text-center text-sm text-gray-400">
                  <span>🔒 Secure 256-bit SSL encryption</span>
                </div>
              </>
            ) : (
              // Success / Fake Door Reveal
              <div className="p-8 text-center">
                <div className="text-6xl mb-6">🐢💚</div>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                  Thanks for Your Interest!
                </h3>
                <p className="text-gray-600 mb-6">
                  We&apos;re so excited you want to join the TurtleTime community!
                  We&apos;re putting the finishing touches on production and aren&apos;t
                  quite ready to take orders yet.
                </p>
                <div className="bg-turtle-50 p-6 rounded-2xl mb-6">
                  <p className="text-turtle-700 font-medium mb-2">
                    Be the first to know when we launch:
                  </p>
                  <p className="text-charcoal">
                    {email || 'your email'}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
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
