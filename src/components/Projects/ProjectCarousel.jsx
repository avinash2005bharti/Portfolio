import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const GAP = 24; // px gap between cards
const SPRING = { type: 'spring', stiffness: 300, damping: 32 };

const ProjectCarousel = forwardRef(({ projects }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [step, setStep] = useState(384); // card width + gap, measured live

  const trackRef = useRef(null);
  const outerRef = useRef(null);
  const wheelLockRef = useRef(false);
  const activeIndexRef = useRef(activeIndex);

  // Keep ref in sync so the wheel handler always sees the latest value
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const lastIndex = projects.length - 1;

  // --- Measure actual rendered card width so the math matches every breakpoint ---
  useLayoutEffect(() => {
    const measure = () => {
      const firstCard = trackRef.current?.children?.[0];
      if (firstCard) setStep(firstCard.getBoundingClientRect().width + GAP);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [projects.length]);

  // Finite navigation — clamp at boundaries
  const goNext = useCallback(
    () => setActiveIndex((i) => Math.min(i + 1, lastIndex)),
    [lastIndex]
  );
  const goPrev = useCallback(
    () => setActiveIndex((i) => Math.max(i - 1, 0)),
    []
  );
  const goTo = useCallback(
    (idx) => setActiveIndex(Math.max(0, Math.min(idx, lastIndex))),
    [lastIndex]
  );

  useImperativeHandle(ref, () => ({ next: goNext, prev: goPrev }));

  // --- Keyboard navigation, scoped to when the carousel is hovered/focused ---
  useEffect(() => {
    if (!isHovering) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHovering, goPrev, goNext]);

  // --- Mouse wheel horizontal scrolling (trackpad + vertical wheel fallback) ---
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return undefined;

    const handleWheel = (e) => {
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 15) return;

      // At boundaries, let the page scroll naturally
      const idx = activeIndexRef.current;
      if ((delta > 0 && idx >= lastIndex) || (delta < 0 && idx <= 0)) {
        return; // don't preventDefault — page scrolls
      }

      e.preventDefault();
      if (wheelLockRef.current) return;
      wheelLockRef.current = true;

      if (delta > 0) goNext();
      else goPrev();

      setTimeout(() => {
        wheelLockRef.current = false;
      }, 350);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [goNext, goPrev]);

  const handleDragStart = () => setIsDragging(true);

  const handleDragEnd = (_, info) => {
    const threshold = step / 4;
    if (info.offset.x < -threshold || info.velocity.x < -500) {
      goNext();
    } else if (info.offset.x > threshold || info.velocity.x > 500) {
      goPrev();
    }
    setIsDragging(false);
  };

  return (
    <div
      ref={outerRef}
      className="relative w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex"
          style={{ gap: `${GAP}px`, cursor: isDragging ? 'grabbing' : 'grab' }}
          drag="x"
          dragElastic={0.12}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={{ x: -activeIndex * step }}
          transition={SPRING}
          role="region"
          aria-label="Projects carousel"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[85%] sm:w-[320px] md:w-[340px] lg:w-[360px]"
            >
              <ProjectCard project={project} isActive={index === activeIndex} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-8">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => goTo(index)}
            aria-label={`Go to project ${index + 1}: ${project.title}`}
            className="relative p-1 group"
          >
            <motion.span
              className="block rounded-full"
              animate={{
                width: index === activeIndex ? 32 : 10,
                height: 10,
                backgroundColor:
                  index === activeIndex
                    ? 'rgba(139, 92, 246, 1)'
                    : 'rgba(255, 255, 255, 0.25)',
              }}
              whileHover={{
                backgroundColor:
                  index === activeIndex
                    ? 'rgba(139, 92, 246, 1)'
                    : 'rgba(255, 255, 255, 0.5)',
                scale: 1.15,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              style={{ borderRadius: 999 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
});

ProjectCarousel.displayName = 'ProjectCarousel';

export default ProjectCarousel;