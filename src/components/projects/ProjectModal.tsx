
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 dark:bg-black/90 backdrop-blur-md"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl z-10 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 bg-black/40 sm:bg-white/10 hover:bg-black/60 sm:hover:bg-white/20 rounded-full border border-white/20 text-white transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Image */}
          <div className="h-56 sm:h-80 relative overflow-hidden bg-slate-950">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-white/15 text-white border border-white/20 rounded-full text-[10px] sm:text-xs font-mono font-bold backdrop-blur-sm">
                  {project.status}
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white">{project.title}</h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-3 font-semibold">Descripción</h3>
                  <p className="text-slate-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-sans whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-4 font-semibold">Características Clave</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 sm:p-4 bg-slate-100/80 dark:bg-white/5 rounded-2xl border border-slate-200/80 dark:border-white/5">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-sans leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-4 font-semibold">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 hover:border-cyan-500/30 transition-colors">
                        <TechIcon tech={tech} size={16} />
                        <span className="text-xs text-slate-700 dark:text-gray-300 font-mono font-medium">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-white/10 space-y-3 sm:space-y-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-cyan-600/20 text-sm sm:text-base"
                    >
                      <ExternalLink className="w-5 h-5" />
                      VISITAR SITIO
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 py-3.5 sm:py-4 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold rounded-2xl dark:hover:bg-white/10 transition-colors text-sm sm:text-base"
                    >
                      <Github className="w-5 h-5" />
                      VER CÓDIGO
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
