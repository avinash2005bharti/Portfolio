import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, isActive = false }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);

  const showGlow = isActive || isImageHovered || isCardHovered;

  return (
    <motion.article
      layout
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 25,
      }}
      onHoverStart={() => setIsCardHovered(true)}
      onHoverEnd={() => setIsCardHovered(false)}
      className="group relative h-[500px] w-full overflow-hidden rounded-[24px] border p-3 transition-shadow duration-300"
      style={{
        backgroundColor: '#111328',
        borderColor: 'rgba(255, 255, 255, 0.08)',
        boxShadow: showGlow
          ? '0 20px 60px rgba(139, 92, 246, 0.35), 0 0 44px rgba(139, 92, 246, 0.22)'
          : '0 10px 30px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Image Container */}
      <div
        className="relative h-[320px] w-full overflow-hidden rounded-[16px] bg-slate-900"
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <motion.img
          src={project.image}
          alt={project.title}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover select-none"
          animate={{
            scale: isImageHovered ? 1.08 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent pointer-events-none" />

        {/* Glow Effect on Hover */}
        <motion.div
          animate={{ opacity: showGlow ? 0.18 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-purple-600/25 via-transparent to-cyan-400/10 pointer-events-none"
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content Container - ~30% of card height */}
      <div className="relative flex h-[144px] flex-col justify-between p-6">
        {/* Title and Description */}
        <div>
          <h3 className="mb-1 text-lg font-bold text-white leading-tight line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {project.shortSummary}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium text-slate-300 backdrop-blur-sm"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span
              className="inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium text-slate-300"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Buttons */}
        <motion.div
          className="flex gap-3"
          initial={false}
          animate={{ opacity: isCardHovered ? 1 : 0.85 }}
          transition={{ duration: 0.25 }}
        >
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors"
            style={{
              backgroundColor: 'rgba(59, 130, 246, 0.15)',
              color: '#60a5fa',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            }}
          >
            <ExternalLink size={16} /> Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-all"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
            }}
          >
            <FiGithub size={16} /> Code
          </motion.a>
        </motion.div>
      </div>

      {/* Hover Border Glow */}
      <motion.div
        animate={{ opacity: showGlow ? 1 : 0 }}
        className="absolute inset-0 rounded-[22px] pointer-events-none"
        style={{ boxShadow: 'inset 0 0 30px rgba(139, 92, 246, 0.2)' }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

export default ProjectCard;