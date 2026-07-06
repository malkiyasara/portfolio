import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import IconCloud from "./IconCloud";
import { Constellation } from "./Constellation";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiDocker,
  SiVercel,
  SiRailway,
  SiFigma,
  SiGithub,
  SiGit,
  SiJira,
  SiPostman,
} from "react-icons/si";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nodedotjs",
  "express",
  "github",
  "postman",
  "springboot",
  "mongodb",
  "mysql",
  "tailwindcss",
  "docker",
  "jest",
  "expo",
  "vercel",
  "railway",
  "html5",
  "css3",
  "jira",
  "figma",
  "intellijidea",
  "vite",
  "git",
  "virtualbox",
  "jupyter",
  "python",
];

const skillGroups = {
  Frontend: [
    {
      name: "React",
      icon: <SiReact color="#61DAFB" size={22} />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript color="#F7DF1E" size={22} />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178C6" size={22} />,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 color="#E34F26" size={22} />,
    },

    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss color="#06B6D4" size={22} />,
    },
  ],

  Backend: [
    {
      name: "Node.js",
      icon: <SiNodedotjs color="#339933" size={22} />,
    },
    {
      name: "Express",
      icon: <SiExpress color="#FFFFFF" size={22} />,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot color="#6DB33F" size={22} />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb color="#47A248" size={22} />,
    },
    {
      name: "MySQL",
      icon: <SiMysql color="#4479A1" size={22} />,
    },
  ],

  "UI / UX": [
    {
      name: "Figma",
      icon: <SiFigma color="#F24E1E" size={22} />,
    },
    {
      name: "Responsive UI",
      icon: <SiTailwindcss color="#06B6D4" size={22} />,
    },
  ],

  Cloud: [
    {
      name: "Docker",
      icon: <SiDocker color="#2496ED" size={22} />,
    },
    {
      name: "Vercel",
      icon: <SiVercel color="#FFFFFF" size={22} />,
    },
    {
      name: "Railway",
      icon: <SiRailway color="#7B4DFF" size={22} />,
    },
  ],

  Tools: [
    {
      name: "GitHub",
      icon: <SiGithub color="#FFFFFF" size={22} />,
    },
    {
      name: "Git",
      icon: <SiGit color="#F05032" size={22} />,
    },
    {
      name: "Jira",
      icon: <SiJira color="#0052CC" size={22} />,
    },
    {
      name: "Postman",
      icon: <SiPostman color="#FF6C37" size={22} />,
    },
  ],
};

type SkillCardProps = {
  title: string;
  items: { name: string; icon: React.ReactNode }[];
};
const SkillCard = ({ title, items }: SkillCardProps) => (
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="interactive-glow-card group w-60 p-[1px] rounded-2xl bg-white/[0.06] relative overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(150px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),#a855f7_0%,#3b82f6_50%,transparent_100%)] before:opacity-0 hover:before:opacity-100 shadow-md"
    >
      <div className="relative z-10 w-full h-full bg-[#0d1224] rounded-[15px] p-6 flex flex-col overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(220px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(255,255,255,0.06),transparent_80%)] before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300">
        <h3 className="text-blue-300/70 font-bold text-xs tracking-[0.18em] uppercase text-center mb-6 font-mono">
          {title}
        </h3>

        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-white/5 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 12, scale: 1.25 }}
                transition={{ type: "spring", stiffness: 350 }}
                className="flex items-center justify-center shrink-0"
              >
                {item.icon}
              </motion.div>
              <span className="text-gray-200 text-sm">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(
      ".interactive-glow-card",
    );
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      (card as HTMLElement).style.setProperty(
        "--mouse-x",
        `${e.clientX - rect.left}px`,
      );
      (card as HTMLElement).style.setProperty(
        "--mouse-y",
        `${e.clientY - rect.top}px`,
      );
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    if (scrollWidth === clientWidth) return;
    const scrollRatio = scrollLeft / (scrollWidth - clientWidth);
    let index = Math.round(scrollRatio * 4);
    if (index < 0) index = 0;
    if (index > 4) index = 4;
    setActiveIndex(index);
  };

  return (
    <section
      id="skills"
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-24 border-t border-white/5 scroll-mt-16"
    >
      <div className="absolute top-1/4 left-1/4 -z-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-200 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col xl:flex-row items-center justify-center gap-10 mt-2 xl:mt-0 xl:-mt-10">
          {/* DESKTOP CARDS LEFT (Hidden on Mobile) */}
          <div className="hidden xl:flex xl:flex-col justify-center gap-6 xl:w-auto">
            <SkillCard title="Frontend" items={skillGroups.Frontend} />
            <SkillCard title="Backend" items={skillGroups.Backend} />
          </div>

          {/* SKILL BALL - First on Mobile, Middle on Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-first xl:order-none relative w-full max-w-[430px] aspect-square flex items-center justify-center my-4 xl:my-0 xl:-translate-y-30"
          >
            <IconCloud iconSlugs={slugs} />
          </motion.div>

          {/* DESKTOP CARDS RIGHT (Hidden on Mobile) */}
          <div className="hidden xl:flex xl:flex-col justify-center gap-6 xl:w-auto">
            <SkillCard title="UI / UX" items={skillGroups["UI / UX"]} />
            <SkillCard title="Cloud" items={skillGroups.Cloud} />
            <SkillCard title="Tools" items={skillGroups.Tools} />
          </div>

          {/* MOBILE SWIPEABLE CARDS (Hidden on Desktop) */}
          <div className="xl:hidden w-full flex flex-col items-center">
            <div
              onScroll={handleScroll}
              className="w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] -mx-6 md:-mx-12 px-6 md:px-12 overflow-x-auto flex gap-6 snap-x snap-mandatory pt-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="snap-center shrink-0">
                <SkillCard title="Frontend" items={skillGroups.Frontend} />
              </div>
              <div className="snap-center shrink-0">
                <SkillCard title="Backend" items={skillGroups.Backend} />
              </div>
              <div className="snap-center shrink-0">
                <SkillCard title="UI / UX" items={skillGroups["UI / UX"]} />
              </div>
              <div className="snap-center shrink-0">
                <SkillCard title="Cloud" items={skillGroups.Cloud} />
              </div>
              <div className="snap-center shrink-0">
                <SkillCard title="Tools" items={skillGroups.Tools} />
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4 mb-4">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? "w-6 bg-blue-400"
                      : "w-1.5 bg-blue-500/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONSTELLATION - Absolute at bottom for Desktop, Relative at bottom for Mobile */}
      <div className="xl:absolute xl:inset-x-0 xl:bottom-0 relative w-full h-[365px] overflow-hidden pointer-events-none opacity-60 z-99 mt-12 xl:mt-0 xl:translate-y-0">
        <Constellation />
      </div>
    </section>
  );
};
