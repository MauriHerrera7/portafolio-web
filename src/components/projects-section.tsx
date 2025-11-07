'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Code2, Zap, X, Play, Eye, Database, Server, Globe } from 'lucide-react'
import { 
  SiReact, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiExpress, SiMongodb, SiNodedotjs,
  SiPostgresql, SiNextdotjs, SiTypescript, SiTailwindcss, SiStripe, SiPython, SiThreedotjs,
  SiSocketdotio, SiTensorflow, SiPrisma, SiWebgl, SiNestjs, SiDocker, SiSwagger, SiCloudinary,
  SiJsonwebtokens, SiAuth0, SiRender
} from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: "CINETRACK",
    description: "Una aplicación web completa para el seguimiento de películas con sistema de usuarios, favoritos y recomendaciones personalizadas.",
    longDescription: "CineTrack es una plataforma moderna para cinéfilos que permite explorar, buscar y gestionar películas favoritas. Incluye autenticación de usuarios, sistema de favoritos, búsquedas avanzadas y una interfaz intuitiva desarrollada con tecnologías web modernas.",
    image: "https://res.cloudinary.com/dry6dvzoj/image/upload/v1756612095/WhatsApp_Image_2025-08-31_at_00.46.07_jfmxbe.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Express.js", "MongoDB", "Node.js"],
    github: "https://github.com/tuusuario/cinetrack",
    demo: "https://cinetrack-demo.com",
    status: "COMPLETED",
    category: "FULLSTACK",
    features: [
      "Sistema de autenticación completo",
      "Base de datos MongoDB para persistencia",
      "API RESTful con Express.js",
      "Interfaz responsive con Bootstrap",
      "Sistema de favoritos y listas personales",
      "Búsqueda avanzada de películas"
    ]
  },
  {
    id: 2,
    title: "ANIMAL",
    description: "Sistema de gestión de turnos para canchas deportivas desarrollado con React y PostgreSQL, con autenticación de usuarios y manejo completo de formularios.",
    longDescription: "Animal es una aplicación web completa para la gestión de turnos de canchas deportivas que permite a los usuarios registrarse, autenticarse y reservar canchas de manera eficiente. Incluye un sistema robusto de autenticación, gestión de reservas en tiempo real, manejo de formularios dinámicos y una base de datos PostgreSQL para persistencia de datos.",
    image: "https://res.cloudinary.com/dry6dvzoj/image/upload/v1756617348/image_1_fcfeez.jpg",
    technologies: ["React", "PostgreSQL", "Express.js", "Nodemon", "Node.js", "JavaScript", "CSS3"],
  github: "https://github.com/MauriHerrera7/Animal-Canchas",
    demo: "https://animal-turnos-demo.com",
    status: "COMPLETED",
    category: "FULLSTACK",
    features: [
      "Sistema de autenticación seguro",
      "Gestión de reservas de canchas",
      "Calendario de disponibilidad",
      "Manejo dinámico de formularios",
      "Base de datos PostgreSQL",
      "Panel de administración deportivo",
      "Interfaz responsive y moderna"
    ]
  },
  {
    id: 3,
    title: "ECOMMERCE API",
    description: "REST API completa para ecommerce desarrollada con NestJS, PostgreSQL y Docker, implementando mejores prácticas de desarrollo backend.",
    longDescription: "API REST robusta y escalable para ecommerce construida con NestJS y TypeScript. Incluye autenticación JWT, gestión de productos, manejo de imágenes con Cloudinary, documentación automática con Swagger y contenedorización con Docker. Diseñada siguiendo principios SOLID y arquitectura hexagonal.",
    image: "https://res.cloudinary.com/dry6dvzoj/image/upload/v1756619588/WhatsApp_Image_2025-08-31_at_02.52.51_jvpzoq.jpg",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "Swagger", "Cloudinary", "JWT"],
  github: "https://github.com/MauriHerrera7/E-commerce-api",
    demo: "https://ecommerce-api-docs.com",
    status: "COMPLETED",
    category: "BACKEND API",
    features: [
      "API RESTful con NestJS",
      "Base de datos PostgreSQL",
      "Autenticación JWT",
      "Documentación Swagger automática",
      "Gestión de imágenes con Cloudinary",
      "Contenedorización con Docker",
      "Arquitectura escalable y modular"
    ]
  },
  {
    id: 4,
    title: "PSYMATCH",
    description: "Plataforma integral para psicólogos con autenticación avanzada, gestión de turnos, pasarela de pagos, dashboards personalizados y panel administrativo completo.",
    longDescription: "PsyMatch es una plataforma moderna y completa para la gestión de servicios psicológicos que incluye autenticación tradicional y OAuth2, sistema de pagos integrado, gestión avanzada de usuarios y turnos, dashboards diferenciados para psicólogos y usuarios, panel administrativo con métricas y gráficos, sistema de aprobación/rechazo de psicólogos, control de accesos con sistema de baneo, y páginas estáticas optimizadas para SEO.",
    image: "https://res.cloudinary.com/dry6dvzoj/image/upload/v1756620795/WhatsApp_Image_2025-08-31_at_03.12.58_smmum5.jpg",
    technologies: ["Next.js", "TailwindCSS", "Flowbite", "TypeScript", "OAuth2", "Stripe", "Render"],
    github: "https://github.com/PsyMatch/PsyMatch-Frontend",
    demo: "https://psy-match-frontend.vercel.app/",
    status: "DEPLOYED",
    category: "FRONTEND",
    features: [
      "Autenticación tradicional y OAuth2",
      "Pasarela de pagos integrada",
      "Gestión completa de usuarios",
      "Sistema de gestión de turnos",
      "Dashboard para psicólogos con estadísticas",
      "Dashboard para usuarios con historial",
      "Panel administrativo con métricas",
      "Sistema de aprobación de psicólogos",
      "Control de accesos y baneo",
      "Páginas estáticas optimizadas",
      "Interfaz responsive moderna"
    ]
  },
  {
    id: 5,
    title: "PSYMATCH BACKEND",
    description: "API backend robusta para plataforma de salud mental que conecta pacientes con psicólogos, con recomendaciones personalizadas y sistema de pagos.",
    longDescription: "Plataforma digital enfocada en salud mental que conecta pacientes con psicólogos según sus necesidades específicas. Resuelve la dificultad actual de encontrar un profesional adecuado ofreciendo recomendaciones personalizadas basadas en síntomas, filtros detallados y agendamiento con pago online. Además, permite a los psicólogos gestionar eficientemente sus consultas y pacientes.",
    image: "https://res.cloudinary.com/dry6dvzoj/image/upload/v1756622023/WhatsApp_Image_2025-08-31_at_03.33.21_ipp7vr.jpg",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Swagger", "JWT", "Docker"],
    github: "https://github.com/PsyMatch/PsyMatch-Backend",
    demo: "https://psymatch-backend-app.onrender.com/api",
    status: "DEPLOYED",
    category: "BACKEND API",
    features: [
      "API RESTful con NestJS",
      "Sistema de recomendaciones personalizado",
      "Autenticación JWT segura",
      "Base de datos PostgreSQL",
      "Documentación Swagger automática",
      "Filtros detallados para psicólogos",
      "Sistema de agendamiento",
      "Integración de pagos online",
      "Gestión de consultas y pacientes",
      "Contenedorización con Docker"
    ]
  }
]

// Función para obtener el icono de una tecnología
const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  const iconProps = { size: 20, className: "text-cyan-600 dark:text-cyan-400" };
  
  if (techLower.includes('react')) return <SiReact {...iconProps} />;
  if (techLower.includes('javascript')) return <SiJavascript {...iconProps} />;
  if (techLower.includes('html')) return <SiHtml5 {...iconProps} />;
  if (techLower.includes('css')) return <SiCss3 {...iconProps} />;
  if (techLower.includes('bootstrap')) return <SiBootstrap {...iconProps} />;
  if (techLower.includes('express')) return <SiExpress {...iconProps} />;
  if (techLower.includes('mongodb')) return <SiMongodb {...iconProps} />;
  if (techLower.includes('node')) return <SiNodedotjs {...iconProps} />;
  if (techLower.includes('postgresql')) return <SiPostgresql {...iconProps} />;
  if (techLower.includes('next')) return <SiNextdotjs {...iconProps} />;
  if (techLower.includes('typescript')) return <SiTypescript {...iconProps} />;
  if (techLower.includes('tailwind')) return <SiTailwindcss {...iconProps} />;
  if (techLower.includes('stripe')) return <SiStripe {...iconProps} />;
  if (techLower.includes('python')) return <SiPython {...iconProps} />;
  if (techLower.includes('three')) return <SiThreedotjs {...iconProps} />;
  if (techLower.includes('socket')) return <SiSocketdotio {...iconProps} />;
  if (techLower.includes('tensorflow')) return <SiTensorflow {...iconProps} />;
  if (techLower.includes('prisma')) return <SiPrisma {...iconProps} />;
  if (techLower.includes('webgl')) return <SiWebgl {...iconProps} />;
  if (techLower.includes('nodemon')) return <SiNodedotjs {...iconProps} />;
  if (techLower.includes('nestjs') || techLower.includes('nest')) return <SiNestjs {...iconProps} />;
  if (techLower.includes('docker')) return <SiDocker {...iconProps} />;
  if (techLower.includes('swagger')) return <SiSwagger {...iconProps} />;
  if (techLower.includes('cloudinary')) return <SiCloudinary {...iconProps} />;
  if (techLower.includes('jwt')) return <SiJsonwebtokens {...iconProps} />;
  if (techLower.includes('flowbite')) return <Code2 {...iconProps} className="text-blue-600 dark:text-blue-500" />;
  if (techLower.includes('oauth2') || techLower.includes('oauth')) return <SiAuth0 {...iconProps} />;
  if (techLower.includes('render')) return <SiRender {...iconProps} />;
  if (techLower.includes('d3')) return <Code2 {...iconProps} />;
  if (techLower.includes('openai')) return <Zap {...iconProps} />;
  
  // Icono por defecto
  return <Code2 {...iconProps} />;
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setShowParticles(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'from-emerald-500 to-green-400'
      case 'COMPLETED': return 'from-blue-500 to-indigo-400'
      case 'ACTIVE': return 'from-cyan-500 to-blue-400'
      case 'BETA': return 'from-amber-500 to-orange-400'
      default: return 'from-gray-500 to-gray-400'
    }
  }

  const getCategoryIcon = (category: string) => {
    if (category.includes('FULLSTACK')) return <Server className="w-4 h-4" />
    if (category.includes('BACKEND') || category.includes('API')) return <Database className="w-4 h-4" />
    if (category.includes('DATA')) return <Database className="w-4 h-4" />
    if (category.includes('AI')) return <Zap className="w-4 h-4" />
    return <Globe className="w-4 h-4" />
  }

  return (
    <>
      <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
        {/* Futuristic background effects */}
        <div className="absolute inset-0">
          {/* Animated grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-600/20 dark:via-cyan-500/20 to-transparent animate-pulse"></div>
          </div>
          {/* Floating particles (solo en cliente) */}
          {showParticles && [...Array(50)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 11.7) % 100}%`,
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
          {/* Additional glowing particles */}
          {showParticles && [...Array(30)].map((_, i) => (
            <div
              key={`glow-${i}`}
              className="absolute w-2 h-2 bg-blue-600/30 dark:bg-blue-500/30 rounded-full animate-pulse"
              style={{
                left: `${(i * 13.7) % 100}%`,
                top: `${(i * 17.3) % 100}%`,
                animationDelay: `${(i * 0.133) % 4}s`,
                animationDuration: `${3 + (i % 2)}s`,
                filter: 'blur(1px)'
              }}
            />
          ))}
          {/* Micro particles */}
          {showParticles && [...Array(40)].map((_, i) => (
            <div
              key={`micro-${i}`}
              className="absolute w-0.5 h-0.5 bg-purple-600 dark:bg-purple-400 rounded-full animate-pulse"
              style={{
                left: `${(i * 9.1) % 100}%`,
                top: `${(i * 12.7) % 100}%`,
                animationDelay: `${(i * 0.125) % 5}s`,
                animationDuration: `${1 + (i % 2)}s`
              }}
            />
          ))}
          {/* Large floating orbs */}
          {showParticles && [...Array(8)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute w-3 h-3 bg-gradient-to-r from-cyan-600/20 dark:from-cyan-400/20 to-blue-600/20 dark:to-blue-500/20 rounded-full animate-pulse"
              style={{
                left: `${(i * 23.5) % 100}%`,
                top: `${(i * 31.7) % 100}%`,
                animationDelay: `${(i * 0.75) % 6}s`,
                animationDuration: `${4 + (i % 3)}s`,
                filter: 'blur(2px)'
              }}
            />
          ))}
          {/* Scanning lines */}
          <div className="absolute inset-0">
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-600/30 dark:via-cyan-500/30 to-transparent animate-scan"></div>
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-600/20 dark:via-purple-500/20 to-transparent animate-pulse" style={{ left: '20%' }}></div>
            <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-pink-600/20 dark:via-pink-500/20 to-transparent animate-pulse delay-1000" style={{ left: '80%' }}></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Futuristic header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="relative inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-400 via-blue-700 dark:via-blue-500 to-cyan-600 dark:to-cyan-400 mb-6 sm:mb-8 relative tracking-wider">
                PROYECTOS
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 dark:from-blue-500/20 via-blue-600/20 dark:via-blue-500/20 to-cyan-600/20 dark:to-cyan-500/20 blur-xl"></div>
              </h2>
            </div>
            <div className="font-mono text-blue-700 dark:text-cyan-300 text-sm sm:text-base lg:text-xl mb-4 sm:mb-6 animate-pulse tracking-widest">
              {'// INNOVATION THROUGH CODE'}
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-gray-600 dark:text-gray-400 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>SYSTEMS ONLINE</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-gray-400 dark:bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full animate-pulse delay-500"></div>
                <span>NEURAL NETWORKS ACTIVE</span>
              </div>
            </div>
          </div>
          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project) => (
              <div
                key={`project-${project.id}`}
                className="group relative bg-gradient-to-br from-white/80 via-gray-50/80 to-gray-100/80 dark:from-gray-900/80 dark:via-black/80 dark:to-gray-900/80 backdrop-blur-xl border border-gray-300/50 dark:border-gray-700/50 rounded-lg sm:rounded-xl overflow-hidden hover:border-cyan-600/50 dark:hover:border-cyan-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-600/20 dark:hover:shadow-cyan-500/20 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Status indicator */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${getStatusColor(project.status)} shadow-lg`}>
                    {project.status}
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
                  <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-full border border-gray-300/50 dark:border-gray-600/50">
                    {getCategoryIcon(project.category)}
                    <span className="text-xs font-mono text-gray-700 dark:text-gray-300 hidden sm:inline">{project.category}</span>
                  </div>
                </div>
                {/* Image section */}
                <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-800 dark:via-gray-900 dark:to-black relative overflow-hidden transition-colors duration-300">
                  {project.image !== "/api/placeholder/400/300" ? (
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Code2 className="w-20 h-20 text-cyan-600 dark:text-cyan-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                    </div>
                  )}
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Scan line */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-600 dark:via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan transition-opacity duration-500"></div>
                  </div>
                  {/* View demo button overlay */}
                  {!(project.title === "CINETRACK" || project.title === "ANIMAL" || project.title === "ECOMMERCE API") && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-95">
                      <div className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-cyan-600/50 dark:border-cyan-400/50 rounded-lg px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                        {(project.title === "PSYMATCH" || project.title === "PSYMATCH BACKEND") ? "VER PÁGINA" : "VER DEMO"}
                      </div>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-4 sm:p-6 relative">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 mb-2 sm:mb-3 group-hover:from-cyan-600 dark:group-hover:from-cyan-400 group-hover:to-purple-600 dark:group-hover:to-purple-400 transition-all duration-500 tracking-wide">
                    {project.title}
                  </h3>
                  {/* Description */}
                  <div className="bg-gray-100/40 dark:bg-black/40 border border-gray-300/50 dark:border-gray-700/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-5 backdrop-blur-sm group-hover:border-cyan-600/30 dark:group-hover:border-cyan-500/30 transition-colors duration-500">
                    <p className="text-gray-700 dark:text-gray-300 font-mono text-xs sm:text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <div className="text-cyan-600 dark:text-cyan-400 font-mono text-xs mb-2 sm:mb-3 flex items-center font-bold tracking-wider">
                      <Zap className="w-3 h-3 mr-1 sm:mr-2 animate-pulse" />
                      TECH STACK
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="px-2 py-1 bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-400/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 text-xs font-mono rounded hover:border-cyan-600/50 dark:hover:border-cyan-400/50 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all duration-300 flex items-center gap-1"
                        >
                          <div className="scale-75">
                            {getTechIcon(tech)}
                          </div>
                          <span className="hidden sm:inline">{tech}</span>
                        </div>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gradient-to-r from-purple-200/50 to-pink-200/50 dark:from-purple-800/50 dark:to-pink-800/50 border border-purple-400/50 dark:border-purple-600/50 text-purple-700 dark:text-purple-300 text-xs font-mono rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Action buttons */}
                  <div className="flex gap-2 sm:gap-3">
                    {project.title !== "CINETRACK" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`$${
                          project.title === "ANIMAL" || project.title === "ECOMMERCE API" 
                            ? "w-full" 
                            : "flex-1"
                        } group/btn relative overflow-hidden bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 hover:from-green-500 hover:to-emerald-500 border border-gray-400 dark:border-gray-600 hover:border-green-400 text-gray-700 dark:text-gray-300 hover:text-white font-mono font-bold text-xs sm:text-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all duration-500 flex items-center justify-center`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 relative z-10" />
                        <span className="relative z-10 hidden sm:inline">CODE</span>
                      </a>
                    )}
                    {!(project.title === "CINETRACK" || project.title === "ANIMAL" || project.title === "ECOMMERCE API") && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                        }}
                        className="flex-1 group/btn relative overflow-hidden bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-mono font-bold text-xs sm:text-sm rounded-lg px-3 sm:px-4 py-2 sm:py-3 transition-all duration-500 flex items-center justify-center shadow-lg shadow-cyan-500/25"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                        <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 relative z-10" />
                        <span className="relative z-10 hidden sm:inline">{(project.title === "PSYMATCH" || project.title === "PSYMATCH BACKEND") ? "PÁGINA" : "DEMO"}</span>
                        <span className="relative z-10 sm:hidden">{(project.title === "PSYMATCH" || project.title === "PSYMATCH BACKEND") ? "VER" : "DEMO"}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 modal-overlay" 
          style={{ cursor: 'default' }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 border border-cyan-600/50 dark:border-cyan-500/50 rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative text-gray-900 dark:text-white" 
            style={{ cursor: 'default' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 text-red-400 hover:text-red-300 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-300/50 dark:border-gray-700/50">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-3 sm:gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 dark:from-cyan-400 to-purple-600 dark:to-purple-400 mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-mono font-bold text-white bg-gradient-to-r ${getStatusColor(selectedProject.status)} w-fit`}>
                      {selectedProject.status}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-mono text-xs sm:text-sm">
                      {getCategoryIcon(selectedProject.category)}
                      {selectedProject.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-4 sm:p-6">
              {/* Image */}
              <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden border border-gray-300/50 dark:border-gray-700/50 relative h-48 sm:h-56 lg:h-64">
                {selectedProject.image !== "/api/placeholder/400/300" ? (
                  <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <Code2 className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-cyan-600 dark:text-cyan-400" />
                  </div>
                )}
              </div>
              
              {/* Description */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-2 sm:mb-3 font-mono">DESCRIPCIÓN COMPLETA</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-mono text-sm sm:text-base">
                  {selectedProject.longDescription}
                </p>
              </div>
              
              {/* Features */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400 mb-2 sm:mb-3 font-mono">CARACTERÍSTICAS</h3>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3 bg-gray-100/40 dark:bg-black/40 border border-gray-300/50 dark:border-gray-700/50 rounded-lg p-2 sm:p-3">
                      <div className="w-2 h-2 bg-cyan-600 dark:bg-cyan-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-mono text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400 mb-2 sm:mb-3 font-mono">TECNOLOGÍAS</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-200/50 to-gray-300/50 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-400/50 dark:border-gray-600/50 rounded-lg p-2 sm:p-3 hover:border-cyan-600/50 dark:hover:border-cyan-400/50 transition-all duration-300 group">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {getTechIcon(tech)}
                        </div>
                        <span className="text-gray-300 font-mono text-xs sm:text-sm font-bold flex-1 truncate">{tech}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className={`flex ${selectedProject.title === "CINETRACK" || selectedProject.title === "ANIMAL" || selectedProject.title === "ECOMMERCE API" ? "justify-center" : "flex-col sm:flex-row"} gap-3 sm:gap-4`}>
                {selectedProject.title !== "CINETRACK" ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${selectedProject.title === "ANIMAL" || selectedProject.title === "ECOMMERCE API" ? "max-w-sm" : "flex-1"} bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 hover:from-green-500 hover:to-emerald-500 border border-gray-400 dark:border-gray-600 hover:border-green-400 text-gray-700 dark:text-gray-300 hover:text-white font-mono font-bold text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3 cursor-pointer hover:scale-105`}
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    VER CÓDIGO
                  </a>
                ) : null}
                {!(selectedProject.title === "CINETRACK" || selectedProject.title === "ANIMAL" || selectedProject.title === "ECOMMERCE API") && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-mono font-bold text-sm sm:text-base lg:text-lg rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 transition-all duration-500 flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-cyan-500/25 cursor-pointer hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                    {(selectedProject.title === "PSYMATCH" || selectedProject.title === "PSYMATCH BACKEND") ? "VER PÁGINA" : "VER DEMO"}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
