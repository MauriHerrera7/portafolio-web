
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
    if (category.includes('FULLSTACK')) return <Server className="w-3.5 h-3.5" />;
    if (category.includes('BACKEND') || category.includes('API')) return <Database className="w-3.5 h-3.5" />;
    if (category.includes('FRONTEND')) return <Globe className="w-3.5 h-3.5" />;
    if (category.includes('AI')) return <Zap className="w-3.5 h-3.5" />;
    return <Globe className="w-3.5 h-3.5" />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group relative bg-white/90 dark:bg-gray-900/50 backdrop-blur-xl border border-slate-200/90 dark:border-gray-800/60 rounded-3xl overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 cursor-pointer shadow-lg shadow-slate-200/50 dark:shadow-2xl hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
    >
      <div>
        {/* Status & Category Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between z-20 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/90 dark:bg-black/50 backdrop-blur-md rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
            {getCategoryIcon(project.category)}
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-700 dark:text-gray-300 font-semibold">{project.category}</span>
          </div>
          <div className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-gradient-to-r ${getStatusColor(project.status)} shadow-md`}>
            {project.status}
          </div>
        </div>

        {/* Image Section */}
        <div className="h-48 sm:h-52 relative overflow-hidden bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
          
          {/* Hover Action Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
             <div className="p-3 rounded-full bg-cyan-500/30 border border-cyan-500/60 backdrop-blur-md text-white shadow-lg">
               <Code2 className="w-6 h-6 text-white" />
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed font-sans">
            {project.description}
          </p>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-200/80 dark:border-white/5 shadow-xs">
                <TechIcon tech={tech} size={13} />
                <span className="text-[10px] font-mono text-slate-700 dark:text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
            {project.technologies.length > 3 && (
              <div className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-[10px] font-mono rounded-lg">
                +{project.technologies.length - 3}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Links Footer */}
      <div className="p-5 sm:p-6 pt-0">
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-slate-800 dark:text-white text-xs font-bold transition-all border border-slate-200 dark:border-transparent"
            >
              <Github className="w-4 h-4" />
              CODE
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all shadow-md shadow-cyan-600/20"
            >
              <ExternalLink className="w-4 h-4" />
              LIVE
            </a>
          )}
          {!project.github && !project.demo && (
            <button
              onClick={onClick}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 text-slate-700 dark:text-gray-300 text-xs font-bold transition-all border border-slate-200 dark:border-white/5"
            >
              VER DETALLES
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
