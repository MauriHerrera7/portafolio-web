
'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import HeroNeonParticles from "./hero-neon-particles";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-20 overflow-hidden bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white transition-colors duration-300">
      <HeroNeonParticles />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-14 xl:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.1] tracking-tight mb-5 sm:mb-6 text-slate-900 dark:text-white"
            >
              Construyendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Experiencias</span> <br className="hidden sm:inline" />
              Digitales.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              Soy <span className="text-slate-900 dark:text-white font-semibold">Mauricio Herrera</span>, un Desarrollador Full Stack enfocado en interfaces de alto rendimiento y estética impecable.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto max-w-md mx-auto lg:mx-0"
            >
              <Link 
                href="/contact"
                className="group relative px-6 py-3.5 sm:px-7 sm:py-3.5 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-100 font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 dark:shadow-cyan-500/10 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  CONTACTAR
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <a 
                href="/CV.pdf" 
                download
                className="px-6 py-3.5 sm:px-7 sm:py-3.5 bg-slate-200/70 hover:bg-slate-200 border border-slate-300/80 dark:bg-white/5 dark:border-white/10 dark:hover:border-white/20 text-slate-900 dark:text-white font-bold rounded-2xl transition-all dark:hover:bg-white/10 text-center flex items-center justify-center text-sm sm:text-base"
              >
                VER CV
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 border-t border-slate-200 dark:border-white/5 pt-6 sm:pt-8"
            >
               <a 
                href="https://github.com/MauriHerrera7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors p-1"
                aria-label="GitHub"
               >
                 <Github className="w-5 h-5 sm:w-6 sm:h-6" />
               </a>
               <a 
                href="https://www.linkedin.com/in/mauricio-herrera-7b744b274" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors p-1"
                aria-label="LinkedIn"
               >
                 <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
               </a>
               <a 
                href="mailto:mauriherrera457@gmail.com" 
                className="text-slate-500 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white transition-colors p-1"
                aria-label="Email"
               >
                 <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
               </a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex-1 flex items-center justify-center w-full"
          >
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] 2xl:w-[460px] 2xl:h-[460px] mx-auto">
               {/* Decorative rings */}
               <div className="absolute inset-[-12px] sm:inset-[-18px] border border-cyan-500/30 dark:border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
               <div className="absolute inset-[-24px] sm:inset-[-36px] border border-blue-500/20 dark:border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-full overflow-hidden group shadow-2xl shadow-cyan-500/10 dark:shadow-cyan-500/5">
                  <Image 
                    src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1756590188/profile-pic_2_bfzl6x.png" 
                    alt="Mauricio Herrera" 
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
