import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm sage green palette - more organic and cozy
        sage: {
          50: '#f6f9f4',
          100: '#e8f0e4',
          200: '#d4e3cd',
          300: '#b4cfa8',
          400: '#8fb67d',
          500: '#6a9a56',
          600: '#527b42',
          700: '#426236',
          800: '#374f2e',
          900: '#2f4228',
        },
        // Warm terracotta coral - earthier, cozier
        terra: {
          50: '#fef6f3',
          100: '#fdeae3',
          200: '#fcd5c7',
          300: '#f8b49e',
          400: '#f28b6a',
          500: '#e86b45',
          600: '#d54d2a',
          700: '#b23d22',
          800: '#933521',
          900: '#7a2f20',
        },
        // Warm creamy backgrounds
        cream: {
          DEFAULT: '#FBF8F3',
          50: '#FEFDFB',
          100: '#FBF8F3',
          200: '#F5EFE6',
          300: '#EDE4D6',
        },
        // Warm charcoal for text
        ink: {
          DEFAULT: '#2D3032',
          light: '#4A4E50',
          muted: '#6B7075',
        },
      },
      fontFamily: {
        display: ['var(--font-comfortaa)', 'system-ui', 'sans-serif'],
        body: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'blob': '60% 40% 70% 30% / 40% 50% 50% 60%',
        'blob-2': '40% 60% 30% 70% / 50% 40% 60% 50%',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'draw': 'draw 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 70% 30% / 40% 50% 50% 60%' },
          '50%': { borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        'dots': "radial-gradient(circle, currentColor 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
export default config
