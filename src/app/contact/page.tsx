
'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { ContactForm } from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500/30">
      <Header />
      
      <main className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
           <div className="absolute top-[-10%] left-[-20%] w-[60%] h-[60%] bg-cyan-600/10 blur-[150px] rounded-full" />
           <div className="absolute bottom-[10%] right-[-20%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="max-w-3xl mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-cyan-500" />
              <span className="text-cyan-500 font-mono tracking-[0.3em] text-sm uppercase">Contacto</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-black mb-8"
            >
              Hagamos algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">épico</span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed max-w-2xl"
            >
              ¿Tienes una idea innovadora o un desafío técnico? Estoy listo para colaborar y convertir visiones en realidad digital de alto impacto.
            </motion.p>
          </div>

          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-2">
               <ContactInfo />
            </div>
            
            <div className="lg:col-span-3">
               <ContactForm />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
