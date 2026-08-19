'use client'

import { useRouter, usePathname } from 'next/navigation'

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Call the optional onClick handler first (e.g. close mobile menu)
    if (onClick) {
      onClick()
    }

    const isHomePage = pathname === '/'

    // Handle scroll to top (Inicio / Logo)
    if (href === '/' || href === '/#hero' || href === '/#top' || href === '#hero') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        router.push('/')
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 150)
      }
      return
    }

    // Check if it's a hash link (starts with /# or #)
    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.replace(/^\/?#/, '')
      
      if (isHomePage) {
        const element = document.getElementById(targetId)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      } else {
        router.push('/')
        setTimeout(() => {
          const element = document.getElementById(targetId)
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }
        }, 150)
      }
    } else {
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
