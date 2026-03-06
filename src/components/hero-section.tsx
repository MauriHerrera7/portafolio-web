
'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import HeroNeonParticles from "./hero-neon-particles";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030303]">
      <HeroNeonParticles />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-500/10 blur-[180px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[180px] rounded-full animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Disponible para proyectos</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8"
            >
              Construyendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Experiencias</span> <br />
              Digitales.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0"
            >
              Soy <span className="text-white font-medium">Mauricio Herrera</span>, un Desarrollador Full Stack enfocado en interfaces de alto rendimiento y estética impecable.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Link 
                href="/contact"
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="relative z-10 flex items-center gap-2">
                  CONTACTAR
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <a 
                href="/CV.pdf" 
                download
                className="px-8 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white font-bold rounded-2xl transition-all hover:bg-white/10"
              >
                VER CV
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 border-t border-white/5 pt-10"
            >
               <a href="https://github.com/MauriHerrera7" className="text-gray-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
               <a href="https://www.linkedin.com/in/mauricio-herrera-7b744b274" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
               <a href="mailto:mauriherrera457@gmail.com" className="text-gray-500 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex-1"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] mx-auto">
               {/* Decorative rings */}
               <div className="absolute inset-[-20px] border border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
               <div className="absolute inset-[-40px] border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
               
               {/* Main Image Container */}
               <div className="relative w-full h-full rounded-full overflow-hidden group">
                  <Image 
                    src="https://res.cloudinary.com/dry6dvzoj/image/upload/v1756590188/profile-pic_2_bfzl6x.png" 
                    alt="Mauricio Herrera" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
