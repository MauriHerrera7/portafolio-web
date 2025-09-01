'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative p-3 bg-black border-2 border-retro-cyan hover:border-retro-pink text-retro-cyan hover:text-retro-pink rounded-lg hover:shadow-neon-cyan transition-all duration-300 font-code text-xs group"
      aria-label="Toggle theme"
    >
      <div className="flex items-center space-x-2">
        {theme === 'dark' ? (
          <>
            <Sun className="h-4 w-4" />
            <span className="hidden sm:block">{'[LIGHT]'}</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4" />
            <span className="hidden sm:block">{'[DARK]'}</span>
          </>
        )}
      </div>
      
      {/* Terminal-style indicator */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-retro-green rounded-full animate-pulse group-hover:bg-retro-pink"></div>
    </button>
  )
}
