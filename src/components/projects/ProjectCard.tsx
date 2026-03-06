
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
      default: return 'from-gray-500 to-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category.includes('FULLSTACK')) return <Server className="w-4 h-4" />;
    if (category.includes('BACKEND') || category.includes('API')) return <Database className="w-4 h-4" />;
    if (category.includes('FRONTEND')) return <Globe className="w-4 h-4" />;
    if (category.includes('AI')) return <Zap className="w-4 h-4" />;
    return <Globe className="w-4 h-4" />;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="group relative bg-white/5 dark:bg-gray-900/40 backdrop-blur-xl border border-white/10 dark:border-gray-800/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-cyan-500/10"
    >
      {/* Status & Category Badges */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-20">
        <div className="flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
          {getCategoryIcon(project.category)}
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-300">{project.category}</span>
        </div>
        <div className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-gradient-to-r ${getStatusColor(project.status)} shadow-lg`}>
          {project.status}
        </div>
      </div>

      {/* Image Section */}
      <div className="h-52 relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Hover Action Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
           <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 backdrop-blur-md">
             <Code2 className="w-6 h-6 text-cyan-400" />
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-mono">
          {project.description}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/5">
              <TechIcon tech={tech} size={14} />
              <span className="text-[10px] text-gray-400">{tech}</span>
            </div>
          ))}
          {project.technologies.length > 3 && (
            <div className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] rounded-md">
              +{project.technologies.length - 3}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold transition-all"
            >
              <Github className="w-4 h-4" />
              CODE
            </a>
          )}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-bold transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            LIVE
          </a>
        </div>
      </div>
    </motion.div>
  );
};
