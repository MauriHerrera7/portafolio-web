'use client'

import { useRouter } from 'next/navigation'

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Call the optional onClick handler first (for closing mobile menu, etc.)
    if (onClick) {
      onClick()
    }

    // Check if it's a hash link (starts with /#)
    if (href.startsWith('/#')) {
      const targetId = href.slice(2) // Remove '/#'
      
      // If we're already on the home page, just scroll
      if (window.location.pathname === '/') {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      } else {
        // Navigate to home page first, then scroll
        router.push('/')
        
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 100)
      }
    } else {
      // Regular navigation
      router.push(href)
    }
  }

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
