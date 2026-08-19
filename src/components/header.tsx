
"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import ScrollLink from './scroll-link';
import { Sun, Moon, Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTheme = mounted ? (resolvedTheme || theme) : 'dark';

  const navLinks = [
    { name: 'Inicio', href: '/#hero', isScroll: true },
    { name: 'Sobre mí', href: '/#about', isScroll: true },
    { name: 'Proyectos', href: '/#projects', isScroll: true },
    { name: 'Contacto', href: '/contact', isScroll: false },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl border transition-all duration-500 flex justify-between items-center ${
          scrolled 
            ? 'bg-white/85 dark:bg-black/50 backdrop-blur-xl border-slate-200/80 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]' 
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <ScrollLink href="/#hero" className="group flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform duration-300">
               <span className="text-white font-black text-lg sm:text-xl">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 dark:text-white font-bold leading-none tracking-tight text-sm sm:text-base">Mauricio</span>
              <span className="text-cyan-600 dark:text-cyan-400 text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.2em] leading-none mt-1">Fullstack Dev</span>
            </div>
          </ScrollLink>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isScroll ? (
                <ScrollLink 
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-1/2" />
                </ScrollLink>
              ) : (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-500 transition-all group-hover:w-1/2" />
                </Link>
              )
            ))}
            
            <div className="w-[1px] h-4 bg-slate-200 dark:bg-white/10 mx-4" />
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-slate-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
              aria-label="Alternar tema"
            >
              {mounted ? (
                currentTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-slate-700 dark:text-gray-300 hover:text-cyan-500 transition-colors rounded-lg"
              aria-label="Alternar tema"
            >
              {mounted && (
                currentTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-900 dark:text-white"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-3 px-4 sm:px-6 md:hidden"
          >
            <div className="bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
               <div className="flex flex-col gap-5">
                  {navLinks.map((link) => (
                    link.isScroll ? (
                      <ScrollLink 
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-between group"
                      >
                        {link.name}
                        <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </ScrollLink>
                    ) : (
                      <Link 
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-between group"
                      >
                        {link.name}
                        <span className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    )
                  ))}
               </div>
               
               <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 flex justify-between items-center">
                  <div className="flex gap-3">
                    <a 
                      href="https://github.com/MauriHerrera7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-100 dark:bg-white/5 rounded-full text-slate-700 dark:text-gray-400 hover:text-cyan-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5"/>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/mauricio-herrera-7b744b274" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-100 dark:bg-white/5 rounded-full text-slate-700 dark:text-gray-400 hover:text-cyan-500 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5"/>
                    </a>
                  </div>
                  <button
                    onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full font-medium text-sm"
                  >
                    {currentTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    <span>{currentTheme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}</span>
                  </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
