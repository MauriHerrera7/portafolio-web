import Image from "next/image";
import Link from "next/link";
import HeroNeonParticles from "./hero-neon-particles";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Neon Particles Background */}
      <HeroNeonParticles />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen py-20 lg:py-0">
        {/* Left side - Content */}
        <div className="w-full lg:max-w-2xl text-center lg:text-left mb-12 lg:mb-0">
          <p className="text-cyan-600 dark:text-cyan-400 text-base sm:text-lg mb-4">Hola Mundo, Soy Mauricio</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900 dark:text-white">Desarrollador Web</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 dark:from-cyan-400 to-blue-600 dark:to-blue-400">Full Stack</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            Apasionado por crear soluciones digitales innovadoras y funcionales 
            que impacten positivamente al usuario final.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-sm sm:text-base text-white">
              Descargar CV
            </button>
            <Link href="/contact" className="border border-gray-400 dark:border-gray-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:border-cyan-600 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 text-sm sm:text-base text-center">
              Contáctame
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
            <a href="https://www.linkedin.com/in/mauricio-herrera-7b744b274" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/MauriHerrera7" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:mauricio@ejemplo.com" className="text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right side - Profile Photo */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-center xl:justify-end">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[420px] xl:h-[420px]">
            {/* Scanner line futurista */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-600 dark:via-cyan-400 to-transparent opacity-80 animate-scan-vertical"></div>
            </div>
            
            {/* Profile photo with holographic effect */}
            <div className="relative w-full h-full rounded-full group">
              <Image 
                src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1756590188/profile-pic_2_bfzl6x.png" 
                alt="Mauricio Herrera" 
                width={420}
                height={420}
                className="w-full h-full object-cover rounded-full border-2 border-cyan-600/80 dark:border-cyan-400/80 relative z-10"
                style={{
                  animation: 'holographic-glow 6s ease-in-out infinite, profile-pulse 3s ease-in-out infinite',
                  filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.8)) drop-shadow(0 0 30px rgba(0, 255, 255, 0.4)) drop-shadow(0 0 45px rgba(59, 130, 246, 0.6))',
                  boxShadow: `
                    0 0 20px rgba(0, 255, 255, 0.6),
                    0 0 40px rgba(0, 255, 255, 0.4),
                    0 0 60px rgba(59, 130, 246, 0.3),
                    0 0 80px rgba(168, 85, 247, 0.2),
                    inset 0 0 20px rgba(0, 255, 255, 0.1)
                  `
                }}
              />
              
              {/* Overlay holográfico */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-600/10 dark:from-cyan-400/10 via-blue-600/5 dark:via-blue-400/5 to-purple-600/10 dark:to-purple-400/10 pointer-events-none animate-holographic-shift"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
