import React, { useRef, useState } from "react";
import { Code2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { projectData } from "../../data/projects";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    if (scrollWidth === clientWidth) return;
    const scrollRatio = scrollLeft / (scrollWidth - clientWidth);
    const maxIndex = projectData.length - 1;
    let index = Math.round(scrollRatio * maxIndex);
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    setActiveMobileIndex(index);
  };

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projectData.length / itemsPerPage);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest(
      ".interactive-glow-card",
    ) as HTMLElement | null;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);

    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const currentProjects = projectData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative z-10 w-full max-w-6xl mx-auto px-10 md:px-16 pt-8 pb-24 border-t border-white/5 overflow-visible scroll-mt-15"
    >
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          My{" "}
          <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">
            Projects
          </span>
        </h2>

        <div className="h-1 w-16 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"></div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden md:block relative group/projects">
        <button
          onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="
            absolute
            left-[-70px]
            top-1/2
            -translate-y-1/2
            z-40
            w-12
            h-12
            rounded-full
            border
            border-white/20
            bg-[#111827]/90
            backdrop-blur
            flex
            items-center
            justify-center
            text-white
            opacity-0
            group-hover/projects:opacity-100
            transition-all
            duration-300
            hover:scale-110
            hover:border-blue-400
            hover:bg-blue-500/20
            disabled:opacity-20
          "
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="
            absolute
            right-[-70px]
            top-1/2
            -translate-y-1/2
            z-40
            w-12
            h-12
            rounded-full
            border
            border-white/20
            bg-[#111827]/90
            backdrop-blur
            flex
            items-center
            justify-center
            text-white
            opacity-0
            group-hover/projects:opacity-100
            transition-all
            duration-300
            hover:scale-110
            hover:border-blue-400
            hover:bg-blue-500/20
            disabled:opacity-20
          "
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 20, transition: { duration: 0.25 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
            >
              {currentProjects.map((project, index) => (
                <Tilt
                  key={project.name}
                  glareEnable
                  glareMaxOpacity={0.05}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  className="h-full"
                >
                  <motion.div
                    variants={itemVariants}
                    layout
                    exit={{
                      opacity: 0,
                      y: -30,
                      transition: { duration: 0.25 },
                    }}
                    className="
              interactive-glow-card
              group/card
              relative
              h-full
              overflow-hidden
              rounded-2xl
              bg-white/[0.08]
              p-[1px]
              shadow-2xl
              before:absolute
              before:inset-0
              before:pointer-events-none
              before:opacity-0
              before:transition-opacity
              before:duration-300
              before:bg-[radial-gradient(170px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(59,130,246,0.8),transparent_70%)]
              hover:before:opacity-100
            "
                  >
                    <div className="relative z-10 flex h-full flex-col rounded-[15px] bg-[#0d1224] p-6">
                      <div className="relative mb-6 h-40 overflow-hidden rounded-xl border border-white/5 bg-blue-500/5">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.name}
                            className="
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-500
                                    group-hover/card:scale-110
                                  "
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <span className="text-4xl font-bold text-white/10">
                              {String(
                                currentPage * itemsPerPage + index + 1,
                              ).padStart(2, "0")}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex-grow">
                        <h3
                          className="
                                  mb-3
                                  text-xl
                                  font-bold
                                  text-white
                                  transition-colors
                                  duration-300
                                  group-hover/card:text-blue-400
                                "
                        >
                          {project.name}
                        </h3>

                        <p className="mb-6 text-sm text-gray-400 leading-7">
                          {project.description}
                        </p>
                      </div>

                      <div className="mt-auto border-t border-white/10 pt-4">
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="
                                      rounded
                                      border
                                      border-blue-500/20
                                      bg-blue-500/10
                                      px-2
                                      py-1
                                      text-[10px]
                                      uppercase
                                      tracking-wider
                                      text-blue-300
                                    "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                                  flex
                                  items-center
                                  gap-2
                                  text-xs
                                  font-mono
                                  text-gray-400
                                  transition-colors
                                  hover:text-white
                                "
                        >
                          <Code2 className="h-4 w-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="hidden md:flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            aria-label={`Go to page ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentPage === idx
                ? "w-8 bg-blue-500"
                : "w-2 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
      {/* MOBILE SWIPEABLE CARDS */}
      <div className="md:hidden w-full flex flex-col items-center mt-6">
        <div
          onScroll={handleMobileScroll}
          className="w-[calc(100%+3rem)] -mx-6 px-6 overflow-x-auto flex gap-6 snap-x snap-mandatory pt-4 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projectData.map((project, index) => (
            <div
              key={`mobile-${project.name}`}
              className="snap-center shrink-0 w-[85vw] max-w-[320px] h-full flex flex-col"
            >
              <div
                className="
                  interactive-glow-card
                  relative
                  flex-grow
                  overflow-hidden
                  rounded-2xl
                  bg-white/[0.08]
                  p-[1px]
                  shadow-xl
                "
              >
                <div className="relative z-10 flex h-full flex-col rounded-[15px] bg-[#0d1224] p-6 text-left">
                  <div className="relative mb-6 h-48 overflow-hidden rounded-xl border border-white/5 bg-blue-500/5 shrink-0">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-4xl font-bold text-white/10">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {project.name}
                    </h3>
                    <p className="mb-6 text-sm text-gray-400 leading-7">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-white/10 pt-4 shrink-0">
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] uppercase tracking-wider text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-gray-400 transition-colors hover:text-white"
                    >
                      <Code2 className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS PAGINATION */}
        <div className="flex justify-center flex-wrap gap-2 mt-2 mb-4 px-4 w-full">
          {projectData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeMobileIndex === idx
                  ? "w-6 bg-blue-400"
                  : "w-1.5 bg-blue-500/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
