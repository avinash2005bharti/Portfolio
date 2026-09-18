import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';
import { projects } from './projectData';

const ProjectsSection = () => {
  const carouselRef = useRef(null);

  // NOTE: the carousel no longer exposes a raw scrollable DOM node — it's
  // driven by a Framer Motion value internally so drag/wheel/keyboard/autoplay
  // all agree on position. The ref now exposes { next, prev } instead of a
  // container to call scrollBy() on.
  const goPrev = () => carouselRef.current?.prev();
  const goNext = () => carouselRef.current?.next();

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden pt-24 md:pt-32 lg:pt-40 pb-20"
      style={{ backgroundColor: '#090A16' }}
    >
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container">
        {/* Section Header with Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
            <div className="flex-1 max-w-[650px]">
              <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-purple-300/80">
                Featured Work
              </p>
              <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Premium projects crafted for ambitious teams
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Thoughtfully designed full-stack applications demonstrating modern development practices, AI integration, and scalable architecture.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3 flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={goPrev}
                className="h-11 w-11 rounded-full border transition-all duration-300 flex items-center justify-center"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                }}
                aria-label="Previous projects"
              >
                <ChevronLeft size={20} className="text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={goNext}
                className="h-11 w-11 rounded-full border transition-all duration-300 flex items-center justify-center"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.12)',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                }}
                aria-label="Next projects"
              >
                <ChevronRight size={20} className="text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Carousel */}
        <ProjectCarousel ref={carouselRef} projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsSection;