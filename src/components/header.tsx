
"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import ScrollLink from './scroll-link';
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/', isScroll: false },
    { name: 'Sobre mí', href: '/#about', isScroll: true },
    { name: 'Proyectos', href: '/#projects', isScroll: true },
    { name: 'Contacto', href: '/contact', isScroll: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className={`relative px-6 py-3 rounded-2xl border transition-all duration-500 flex justify-between items-center ${
          scrolled 
            ? 'bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform duration-300">
               <span className="text-white font-black text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold leading-none tracking-tight">Mauricio</span>
              <span className="text-cyan-500 text-[10px] font-mono uppercase tracking-[0.2em] leading-none mt-1">Fullstack Dev</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isScroll ? (
                <ScrollLink 
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-1/2" />
                </ScrollLink>
              ) : (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-1/2" />
                </Link>
              )
            ))}
            
            <div className="w-[1px] h-4 bg-white/10 mx-4" />
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 px-6 md:hidden"
          >
            <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl">
               <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    link.isScroll ? (
                      <ScrollLink 
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold text-white flex items-center justify-between group"
                      >
                        {link.name}
                        <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </ScrollLink>
                    ) : (
                      <Link 
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-2xl font-bold text-white flex items-center justify-between group"
                      >
                        {link.name}
                        <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    )
                  ))}
               </div>
               
               <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
                  <div className="flex gap-4">
                    <a href="https://github.com/MauriHerrera7" className="p-2 bg-white/5 rounded-full text-gray-400"><Github className="w-5 h-5"/></a>
                    <a href="https://www.linkedin.com/in/mauricio-herrera-7b744b274" className="p-2 bg-white/5 rounded-full text-gray-400"><Linkedin className="w-5 h-5"/></a>
                  </div>
                  <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-500 rounded-full font-medium"
                  >
                    {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
