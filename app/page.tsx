'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import SocialProof from '@/components/SocialProof'
import PreOrder from '@/components/PreOrder'
import Footer from '@/components/Footer'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    // Track pre-order click for analytics
    if (typeof window !== 'undefined') {
      console.log('Analytics: Pre-order CTA clicked')
      // Add your analytics tracking here, e.g.:
      // gtag('event', 'preorder_click', { ... })
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main>
      <Hero onPreOrderClick={handleOpenModal} />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <SocialProof />
      <PreOrder
        isModalOpen={isModalOpen}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
      />
      <Footer />
    </main>
  )
}
