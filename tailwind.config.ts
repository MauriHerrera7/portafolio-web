import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'retro': ['Orbitron', 'monospace'],
        'code': ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
        'mono': ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        retro: {
          green: '#00ff41',
          cyan: '#00ffff',
          amber: '#ffb000',
          pink: '#ff007f',
          purple: '#bf00ff',
        },
        neon: {
          green: '#39ff14',
          blue: '#1b03a3',
          purple: '#bc13fe',
          pink: '#ff10f0',
          cyan: '#00ffff',
        }
      },
      boxShadow: {
        'neon-green': '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
        'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
        'neon-pink': '0 0 5px #ff007f, 0 0 10px #ff007f, 0 0 15px #ff007f',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit-1': 'orbit-1 8s linear infinite',
        'orbit-2': 'orbit-2 12s linear infinite',
        'orbit-3': 'orbit-3 15s linear infinite',
        'orbit-reverse-1': 'orbit-reverse-1 10s linear infinite',
        'orbit-reverse-2': 'orbit-reverse-2 14s linear infinite',
        'orbit-reverse-3': 'orbit-reverse-3 18s linear infinite',
        'nucleus-glow': 'nucleus-glow 3s ease-in-out infinite',
        'particle-fall-1': 'particle-fall-1 3s linear infinite',
        'particle-fall-2': 'particle-fall-2 4s linear infinite',
        'particle-fall-3': 'particle-fall-3 5s linear infinite',
        'particle-fall-4': 'particle-fall-4 3.5s linear infinite',
        'particle-fall-5': 'particle-fall-5 4.5s linear infinite',
        'particle-glow': 'particle-glow 2s ease-in-out infinite alternate',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'neon-color-cycle': 'neon-color-cycle 4s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'scan-vertical': 'scan-vertical 4s ease-in-out infinite',
        'holographic-shift': 'holographic-shift 8s ease-in-out infinite',
        'data-flow': 'data-flow 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'holographic-glow': 'holographic-glow 6s ease-in-out infinite',
        'profile-pulse': 'profile-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #00ff41, 0 0 10px #00ff41' },
          '100%': { textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41' },
        },
        'orbit-1': {
          '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' },
        },
        'orbit-2': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(150px) rotate(-360deg)' },
        },
        'orbit-3': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        'orbit-reverse-1': {
          '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(200px) rotate(360deg)' },
        },
        'orbit-reverse-2': {
          '0%': { transform: 'rotate(0deg) translateX(150px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(150px) rotate(360deg)' },
        },
        'orbit-reverse-3': {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(100px) rotate(360deg)' },
        },
        'nucleus-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(6, 182, 212, 0.5), 0 0 90px rgba(6, 182, 212, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3), 0 0 60px rgba(6, 182, 212, 0.1)' 
          },
        },
        'particle-fall-1': {
          '0%': { transform: 'translateY(-100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(50px)', opacity: '0' },
        },
        'particle-fall-2': {
          '0%': { transform: 'translateY(-100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(-30px)', opacity: '0' },
        },
        'particle-fall-3': {
          '0%': { transform: 'translateY(-100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(20px)', opacity: '0' },
        },
        'particle-fall-4': {
          '0%': { transform: 'translateY(-100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(-40px)', opacity: '0' },
        },
        'particle-fall-5': {
          '0%': { transform: 'translateY(-100vh) translateX(0px)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(35px)', opacity: '0' },
        },
        'particle-glow': {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '100%': { boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor' },
        },
        'neon-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 30px #00f5ff, 0 0 60px #00f5ff, 0 0 90px #00f5ff, inset 0 0 20px rgba(0, 245, 255, 0.3)',
            transform: 'scale(1)',
            filter: 'brightness(1.1) saturate(1.2)',
          },
          '50%': {
            boxShadow: '0 0 40px #00ffff, 0 0 80px #00ffff, 0 0 120px #00ffff, inset 0 0 30px rgba(0, 255, 255, 0.4)',
            transform: 'scale(1.03)',
            filter: 'brightness(1.3) saturate(1.5)',
          }
        },
        'neon-color-cycle': {
          '0%': {
            boxShadow: '0 0 30px #00f5ff, 0 0 60px #00f5ff, 0 0 90px #00f5ff',
            filter: 'hue-rotate(0deg) brightness(1.2)',
          },
          '25%': {
            boxShadow: '0 0 30px #ff00ff, 0 0 60px #ff00ff, 0 0 90px #ff00ff',
            filter: 'hue-rotate(90deg) brightness(1.3)',
          },
          '50%': {
            boxShadow: '0 0 30px #00ff00, 0 0 60px #00ff00, 0 0 90px #00ff00',
            filter: 'hue-rotate(180deg) brightness(1.2)',
          },
          '75%': {
            boxShadow: '0 0 30px #ffff00, 0 0 60px #ffff00, 0 0 90px #ffff00',
            filter: 'hue-rotate(270deg) brightness(1.3)',
          },
          '100%': {
            boxShadow: '0 0 30px #00f5ff, 0 0 60px #00f5ff, 0 0 90px #00f5ff',
            filter: 'hue-rotate(360deg) brightness(1.2)',
          }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
