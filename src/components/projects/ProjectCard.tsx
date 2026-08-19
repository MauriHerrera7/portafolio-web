'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Code2, Zap, Server, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { TechIcon } from './TechIcon';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'from-emerald-500 to-green-400';
      case 'COMPLETED': return 'from-blue-500 to-indigo-400';
      case 'ACTIVE': return 'from-cyan-500 to-blue-400';
      case 'BETA': return 'from-amber-500 to-orange-400';
      case 'PASANTÍA': return 'from-purple-600 to-indigo-500';
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('FULLSTACK')) return <Server className="w-3 h-3" />;
    if (category.includes('BACKEND') || category.includes('API')) return <Database className="w-3 h-3" />;
    if (category.includes('FRONTEND')) return <Globe className="w-3 h-3" />;
    if (category.includes('AI')) return <Zap className="w-3 h-3" />;
    return <Globe className="w-3 h-3" />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group relative bg-white/90 dark:bg-gray-900/50 backdrop-blur-xl border border-slate-200/90 dark:border-gray-800/60 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 cursor-pointer shadow-md shadow-slate-200/40 dark:shadow-xl hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between h-full"
    >
      <div>
        {/* Status & Category Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-1 px-2.5 py-0.5 bg-white/90 dark:bg-black/60 backdrop-blur-md rounded-full border border-slate-200 dark:border-white/10 shadow-xs">
            {getCategoryIcon(project.category)}
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-700 dark:text-gray-300 font-semibold">{project.category}</span>
          </div>
          <div className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold text-white bg-gradient-to-r ${getStatusColor(project.status)} shadow-xs`}>
            {project.status}
          </div>
        </div>

        {/* Image Section */}
        <div className="h-36 sm:h-40 md:h-44 relative overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          
          {/* Hover Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
             <div className="p-2.5 rounded-full bg-cyan-500/30 border border-cyan-500/60 backdrop-blur-md text-white shadow-md">
               <Code2 className="w-5 h-5 text-white" />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2 mb-3 leading-snug font-sans">
            {project.description}
          </p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3.5">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <div key={i} className="flex items-center gap-1 px-2 py-0.5 bg-slate-100 dark:bg-white/5 rounded-md border border-slate-200/80 dark:border-white/5 shadow-2xs">
                <TechIcon tech={tech} size={11} />
                <span className="text-[9px] font-mono text-slate-700 dark:text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
            {project.technologies.length > 3 && (
              <div className="px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-[9px] font-mono rounded-md">
                +{project.technologies.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links Footer */}
      <div className="p-4 sm:p-5 pt-0 mt-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={onClick}
            className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 text-slate-700 dark:text-gray-300 text-xs font-bold transition-all border border-slate-200 dark:border-white/5 cursor-pointer shadow-2xs"
          >
            VER DETALLES
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-slate-800 dark:text-white text-xs font-bold transition-all border border-slate-200 dark:border-transparent cursor-pointer shrink-0 shadow-2xs"
              title="Ver Código en GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>CODE</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1 px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-sm shadow-cyan-600/20 cursor-pointer shrink-0"
              title="Ver Demo En Vivo"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
