'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { projects, Project } from '../data/projects'
import { ProjectsCarousel } from './projects/ProjectsCarousel'
import { ProjectModal } from './projects/ProjectModal'

const categories = ['ALL', 'FULLSTACK', 'FRONTEND', 'BACKEND API', 'AI'] as const;

export default function ProjectsSection() {
  const [filter, setFilter] = useState<typeof categories[number]>('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (filter === 'ALL') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === filter));
    }
  }, [filter]);

  return (
    <section id="projects" className="py-10 sm:py-14 md:py-16 relative overflow-hidden bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2 sm:mb-3"
          >
            <div className="h-[2px] w-8 sm:w-10 bg-cyan-500" />
            <span className="text-cyan-600 dark:text-cyan-400 font-mono tracking-[0.3em] text-xs uppercase">Mis Trabajos</span>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <motion.h2 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white"
            >
              Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Destacados</span>
            </motion.h2>

            {/* Filters */}
            <motion.div 
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="flex flex-wrap gap-1.5 sm:gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer ${
                    filter === cat 
                      ? 'bg-cyan-500 border-cyan-500 text-white shadow-md shadow-cyan-500/25' 
                      : 'bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-white shadow-xs dark:shadow-none'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Projects Carousel */}
        {filteredProjects.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectsCarousel
              projects={filteredProjects}
              onSelectProject={(project) => setSelectedProject(project)}
            />
          </motion.div>
        ) : (
          <div className="py-12 text-center">
             <Filter className="w-10 h-10 text-slate-400 dark:text-gray-600 mx-auto mb-3 opacity-50" />
             <p className="text-slate-500 dark:text-gray-400 font-mono text-sm">No se encontraron proyectos en esta categoría.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  )
}
