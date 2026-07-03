import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { GraduationCap, Target, Code2, CircleQuestionMark } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(
      ".interactive-glow-card",
    );

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    });
  };

  return (
    <section
      id="about"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-8 pb-24 border-t border-white/5 overflow-visible scroll-mt-15"
    >
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 w-72 h-72 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none animate-pulse [animation-delay:2s]" />

      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          About{" "}
          <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]">
            Me
          </span>
        </h2>
        <div className="h-1 w-16 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"></div>
      </div>

      <motion.div
        variants={containerVariants as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10"
      >
        <div className="lg:col-span-6 h-full">
          <Tilt
            glareEnable
            glareMaxOpacity={0.05}
            glareColor="#60a5fa"
            glarePosition="all"
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1000}
            scale={1.01}
            className="h-full"
          >
            <motion.div
              variants={itemVariants as any}
              className="interactive-glow-card group/profile h-full relative p-[1px] rounded-3xl bg-white/[0.08] overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(180px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),#a855f7_0%,#3b82f6_50%,transparent_100%)] before:opacity-0 hover:before:opacity-100 shadow-2xl"
            >
              <div className="relative z-10 w-full h-full bg-[#0d1224] rounded-[23px] p-8 md:p-10 flex flex-col justify-between space-y-5 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(300px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.06),transparent_80%)] before:opacity-0 group-hover/profile:before:opacity-100 before:transition-opacity before:duration-300">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-400/5 border border-blue-400/10 text-blue-300 text-xs font-mono tracking-wider uppercase w-fit">
                  <CircleQuestionMark className="w-3 h-3 text-blue-400" /> Who
                  Am I
                </div>
                <p className="text-gray-300 text-base md:text-lg font-normal leading-relaxed relative z-10">
                  I am a Software Engineering undergraduate passionate about
                  building modern, scalable, and user-centered software
                  solutions. I specialize in exploring full-stack and mobile
                  development, combining strong problem-solving skills with
                  clean architecture and thoughtful user experiences.
                </p>
                <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-normal relative z-10">
                  I enjoy transforming ideas into functional digital products
                  through efficient coding practices, continuous learning, and
                  the use of emerging technologies. I am driven by curiosity,
                  innovation, and the goal of creating software that delivers
                  meaningful real-world impact.
                </p>
              </div>
            </motion.div>
          </Tilt>
        </div>

        <div className="lg:col-span-6 space-y-6 w-full">
          <Tilt
            glareEnable
            glareMaxOpacity={0.05}
            glareColor="#3b82f6"
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1000}
            scale={1.01}
          >
            <motion.div
              variants={itemVariants as any}
              className="interactive-glow-card group/item p-[1px] rounded-2xl bg-white/[0.06] relative overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(150px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),#a855f7_0%,#3b82f6_50%,transparent_100%)] before:opacity-0 hover:before:opacity-100 cursor-pointer shadow-md"
            >
              <div className="relative z-10 w-full h-full bg-[#0d1224] rounded-[15px] p-6 flex gap-5 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(220px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.06),transparent_80%)] before:opacity-0 group-hover/item:before:opacity-100 before:transition-opacity before:duration-300">
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-300 shrink-0 border border-blue-400/10 group-hover/item:rotate-6 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/30 transition-all duration-300 relative z-10">
                  <Target className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold mb-1.5 tracking-wide uppercase text-xs font-mono text-blue-300/70 group-hover/item:text-blue-300 transition-colors duration-300">
                    Goals
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed font-normal">
                    To grow as a professional software engineer by developing
                    high-quality, scalable applications, contributing to
                    innovative projects, and creating technology-driven
                    solutions that improve everyday experiences.
                  </p>
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt
            glareEnable
            glareMaxOpacity={0.08}
            glareColor="#3b82f6"
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            perspective={1000}
            scale={1.015}
          >
            <motion.div
              variants={itemVariants as any}
              className="interactive-glow-card group/item p-[1px] rounded-2xl bg-white/[0.06] relative overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(150px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),#a855f7_0%,#3b82f6_50%,transparent_100%)] before:opacity-0 hover:before:opacity-100 cursor-pointer shadow-md"
            >
              <div className="relative z-10 w-full h-full bg-[#0d1224] rounded-[15px] p-6 flex gap-5 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(220px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.06),transparent_80%)] before:opacity-0 group-hover/item:before:opacity-100 before:transition-opacity before:duration-300">
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-300 shrink-0 border border-blue-400/10 group-hover/item:rotate-6 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/30 transition-all duration-300 relative z-10">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="w-full relative z-10">
                  <h4 className="font-bold mb-1 tracking-wide uppercase text-xs font-mono text-blue-300/70 group-hover/item:text-blue-300 transition-colors duration-300">
                    Education
                  </h4>

                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm font-medium tracking-wide">
                      2024 - Present
                    </span>
                  </div>

                  <p className="text-blue-300 text-xs font-semibold mb-1.5">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    BSc (Hons) in Information Technology Specializing in
                    Software Engineering.
                  </p>
                </div>
              </div>
            </motion.div>
          </Tilt>

          <Tilt
            glareEnable
            glareMaxOpacity={0.05}
            glareColor="#3b82f6"
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1000}
            scale={1.01}
          >
            <motion.div
              variants={itemVariants as any}
              className="interactive-glow-card group/item p-[1px] rounded-2xl bg-white/[0.06] relative overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(150px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),#a855f7_0%,#3b82f6_50%,transparent_100%)] before:opacity-0 hover:before:opacity-100 cursor-pointer shadow-md"
            >
              <div className="relative z-10 w-full h-full bg-[#0d1224] rounded-[15px] p-6 flex gap-5 overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(220px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.06),transparent_80%)] before:opacity-0 group-hover/item:before:opacity-100 before:transition-opacity before:duration-300">
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-300 shrink-0 border border-blue-400/10 group-hover/item:rotate-6 group-hover/item:bg-blue-500/20 group-hover/item:border-blue-400/30 transition-all duration-300 relative z-10">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold mb-1 tracking-wide uppercase text-xs font-mono text-blue-300/70 group-hover/item:text-blue-300 transition-colors duration-300">
                    Technical Focus
                  </h4>
                  <p className="text-blue-300 text-xs font-semibold mb-1.5">
                    Full-Stack & Mobile Development
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Building responsive web interfaces and cross-platform mobile
                    apps. Focused on modular architectures, backend API design,
                    relational/non-relational database design, and structured
                    state management.
                  </p>
                </div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </motion.div>
    </section>
  );
};

export default About;