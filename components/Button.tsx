'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95'

  const variants = {
    primary: 'bg-coral-500 hover:bg-coral-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-turtle-500 hover:bg-turtle-600 text-white shadow-lg hover:shadow-xl',
    outline: 'border-2 border-turtle-500 text-turtle-600 hover:bg-turtle-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}
