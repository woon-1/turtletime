'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import PreOrder from '@/components/PreOrder'
import Footer from '@/components/Footer'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
    if (typeof window !== 'undefined') {
      console.log('Analytics: Pre-order CTA clicked')
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main>
      <Hero onPreOrderClick={handleOpenModal} />
      <ProblemSolution />
      <Features />
      <PreOrder
        isModalOpen={isModalOpen}
        onOpenModal={handleOpenModal}
        onCloseModal={handleCloseModal}
      />
      <Footer />
    </main>
  )
}
