'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectsCarouselProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  projects,
  onSelectProject,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouchOrMobile, setIsTouchOrMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine cards per view and detect mobile/tablet screen dynamically
  useEffect(() => {
    const updateResponsiveState = () => {
      const width = window.innerWidth;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      if (width < 768) {
        setCardsPerView(1);
        setIsTouchOrMobile(true);
      } else if (width < 1024) {
        setCardsPerView(2);
        setIsTouchOrMobile(true);
      } else {
        setCardsPerView(3);
        setIsTouchOrMobile(hasTouch && width < 1280);
      }
    };

    updateResponsiveState();
    window.addEventListener('resize', updateResponsiveState);
    return () => window.removeEventListener('resize', updateResponsiveState);
  }, []);

  // Reset index when projects list changes (e.g. category filtered)
  useEffect(() => {
    setCurrentIndex(0);
  }, [projects]);

  const maxIndex = Math.max(0, projects.length - cardsPerView);
  const totalSlides = maxIndex + 1;

  // Safe navigation functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput = activeEl?.tagName === 'INPUT' || activeEl?.tagName === 'TEXTAREA';
      if (isInput) return;

      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  // Handle drag / swipe release (only active on mobile/tablet)
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 40;
    if (info.offset.x < -swipeThreshold && currentIndex < maxIndex) {
      nextSlide();
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      prevSlide();
    }
    // Small delay to allow click vs drag differentiation
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  const handleCardClick = (project: Project) => {
    if (!isDragging) {
      onSelectProject(project);
    }
  };

  if (projects.length === 0) {
    return null;
  }

  // Calculate percentage of track shift per index
  const slidePercentage = 100 / cardsPerView;

  return (
    <div className="relative w-full select-none px-2 sm:px-4">
      {/* Left Navigation Arrow */}
      {projects.length > cardsPerView && (
        <button
          onClick={prevSlide}
          aria-label="Proyecto anterior"
          className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
        </button>
      )}

      {/* Right Navigation Arrow */}
      {projects.length > cardsPerView && (
        <button
          onClick={nextSlide}
          aria-label="Siguiente proyecto"
          className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
        </button>
      )}

      {/* Carousel Track Container */}
      <div
        ref={containerRef}
        className={`overflow-hidden py-2 -my-2 px-1 -mx-1 ${
          isTouchOrMobile ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
      >
        <motion.div
          drag={isTouchOrMobile ? 'x' : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={{
            x: `-${currentIndex * slidePercentage}%`,
          }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 30,
            mass: 0.8,
          }}
          className="flex"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                width: `${slidePercentage}%`,
                minWidth: `${slidePercentage}%`,
              }}
              className="px-2.5 sm:px-3 flex-shrink-0"
            >
              <ProjectCard
                project={project}
                onClick={() => handleCardClick(project)}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Pagination Dots */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === index
                  ? 'w-8 h-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/30'
                  : 'w-2.5 h-2.5 bg-slate-300 dark:bg-white/20 hover:bg-slate-400 dark:hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
