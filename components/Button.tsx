'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
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
  const baseStyles = `
    font-display font-semibold rounded-full
    transition-all duration-300 ease-out
    transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-offset-2
    relative overflow-hidden btn-glow
  `

  const variants = {
    primary: `
      bg-gradient-to-br from-terra-400 via-terra-500 to-terra-600
      text-white
      shadow-lg shadow-terra-500/25
      hover:shadow-xl hover:shadow-terra-500/30
      focus:ring-terra-400
    `,
    secondary: `
      bg-gradient-to-br from-sage-400 via-sage-500 to-sage-600
      text-white
      shadow-lg shadow-sage-500/25
      hover:shadow-xl hover:shadow-sage-500/30
      focus:ring-sage-400
    `,
    outline: `
      border-2 border-sage-400
      text-sage-600
      hover:bg-sage-50
      hover:border-sage-500
      focus:ring-sage-400
    `,
    ghost: `
      text-ink-light
      hover:text-ink
      hover:bg-cream-200
      focus:ring-sage-300
    `,
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg tracking-wide',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}
