import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiPostman,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiJest,
} from "react-icons/si";

type StarNode = { x: number; y: number; skill: string };
type SmallStar = { x: number; y: number; size: number; delay: number };

const iconMap: Record<string, React.ReactNode> = {
  React: <SiReact size={24} className="text-blue-400" />,
  JavaScript: <SiJavascript size={24} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={24} className="text-blue-500" />,
  "Node.js": <SiNodedotjs size={24} className="text-green-500" />,
  Express: <SiExpress size={24} className="text-gray-300" />,
  MongoDB: <SiMongodb size={24} className="text-green-400" />,
  MySQL: <SiMysql size={24} className="text-blue-300" />,
  Tailwind: <SiTailwindcss size={24} className="text-cyan-400" />,
  Docker: <SiDocker size={24} className="text-blue-600" />,
  GitHub: <SiGithub size={24} className="text-white" />,
  Postman: <SiPostman size={24} className="text-orange-500" />,
  SpringBoot: <SiSpringboot size={24} className="text-green-600" />,
  Jest: <SiJest size={24} className="text-red-500" />,
};

const constellationStars: StarNode[] = [
  { x: 80, y: 320, skill: "React" },
  { x: 170, y: 250, skill: "JavaScript" },
  { x: 140, y: 140, skill: "TypeScript" },
  { x: 270, y: 230, skill: "SpringBoot" },
  { x: 360, y: 180, skill: "Node.js" },
  { x: 340, y: 100, skill: "Express" },
  { x: 480, y: 200, skill: "MongoDB" },
  { x: 430, y: 100, skill: "MySQL" },
  { x: 580, y: 90, skill: "Tailwind" },
  { x: 600, y: 220, skill: "Docker" },
  { x: 700, y: 270, skill: "Jest" },
  { x: 800, y: 320, skill: "Postman" },
  { x: 580, y: 350, skill: "GitHub" },
];

const constellationLines = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [4, 5],
  [6, 7],
  [6, 8],
  [6, 9],
  [9, 10],
  [10, 11],
  [9, 12],
];

/* Expanded Mini Stars with grouped patterns */
const smallStars: SmallStar[] = [
  /* TOP MINI CONSTELLATION 01 */

  { x: 120, y: 35, size: 3, delay: 0.2 },
  { x: 160, y: 15, size: 4, delay: 0.4 },
  { x: 200, y: 35, size: 3, delay: 0.6 },
  { x: 160, y: 60, size: 5, delay: 0.8 },

  /* TOP MINI CONSTELLATION 02 */

  { x: 330, y: 40, size: 3, delay: 0.3 },
  { x: 370, y: 20, size: 4, delay: 0.5 },
  { x: 410, y: 40, size: 3, delay: 0.7 },

  /* TOP RIGHT MINI CONSTELLATION */

  { x: 600, y: 35, size: 4, delay: 0.4 },
  { x: 640, y: 5, size: 3, delay: 0.6 },
  { x: 680, y: 45, size: 5, delay: 0.8 },
  { x: 650, y: 84, size: 3, delay: 1 },

  /* EXISTING PENTAGON */
  { x: 900, y: 50, size: 4, delay: 0.3 },
  { x: 950, y: 80, size: 3, delay: 0.5 },
  { x: 930, y: 130, size: 5, delay: 0.7 },
  { x: 870, y: 130, size: 3, delay: 0.9 },
  { x: 850, y: 80, size: 4, delay: 1.1 },

  /* EXISTING PENTAGON */
  { x: 360, y: 295, size: 3, delay: 0.2 },
  { x: 400, y: 275, size: 4, delay: 0.4 },
  { x: 440, y: 295, size: 3, delay: 0.6 },
  { x: 400, y: 320, size: 5, delay: 0.8 },
];

const miniLines = [
  /* TOP LEFT DIAMOND */

  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],

  /* TOP CENTER TRIANGLE */

  [4, 5],
  [5, 6],
  [6, 4],

  /* TOP RIGHT DIAMOND */

  [7, 8],
  [8, 9],
  [9, 10],
  [10, 7],

  /* OLD PENTAGON */

  [11, 12],
  [12, 13],
  [13, 14],
  [14, 15],
  [15, 11],

  [16, 17],
  [17, 18],
  [18, 19],
  [19, 16],
];

export const Constellation: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [autoPopup, setAutoPopup] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    let cancelled = false;

    const startLoop = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1800));

      while (!cancelled) {
        for (const node of constellationStars) {
          if (cancelled) return;

          setAutoPopup(node.skill);
          await new Promise((resolve) => setTimeout(resolve, 800));

          setAutoPopup(null);
          await new Promise((resolve) => setTimeout(resolve, 250));
        }

        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    };

    startLoop();

    return () => {
      cancelled = true;
      setAutoPopup(null);
    };
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[420px] w-full overflow-visible"
    >
      <div className="hidden md:block relative w-full h-[420px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 850 420"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Mini Lines */}
          {miniLines.map(([a, b], i) => {
            const s1 = smallStars[a];
            const s2 = smallStars[b];
            return (
              <motion.line
                key={"mini" + i}
                x1={s1.x}
                y1={s1.y}
                x2={s2.x}
                y2={s2.y}
                stroke="#38BDF8"
                strokeWidth="0.8"
                opacity=".35"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { opacity: 0.35, pathLength: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            );
          })}
          {/* Small Stars */}
          {smallStars.map((star, i) => (
            <motion.circle
              key={"smallStar" + i}
              cx={star.x}
              cy={star.y}
              r={star.size}
              fill="white"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] } : {}
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
          {/* Main Lines */}
          {constellationLines.map(([a, b], i) => {
            const s1 = constellationStars[a];
            const s2 = constellationStars[b];
            return (
              <motion.line
                key={i}
                x1={s1.x}
                y1={s1.y}
                x2={s2.x}
                y2={s2.y}
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{ pointerEvents: "none" }}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { opacity: 0.65, pathLength: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.4 }}
              />
            );
          })}
          {/* Main Nodes */}
          {constellationStars.map((node, index) => (
            <motion.g
              key={node.skill}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.3 }}
              onMouseEnter={() => setHoveredSkill(node.skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{ cursor: "pointer" }}
            >
              <circle cx={node.x} cy={node.y} r="14" fill="transparent" />
              <foreignObject
                x={node.x - 14}
                y={node.y - 14}
                width="28"
                height="28"
              >
                <Star
                  size={26}
                  strokeWidth={2.5}
                  className="fill-white text-white drop-shadow-[0_0_2px_white]"
                />
              </foreignObject>
              <AnimatePresence>
                {(hoveredSkill === node.skill || autoPopup === node.skill) && (
                  <motion.foreignObject
                    x={node.x - 55}
                    y={node.y - 100}
                    width="100"
                    height="80"
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <div className="bg-slate-900/95 border border-white/20 rounded-xl p-3 flex flex-col items-center shadow-xl">
                      {iconMap[node.skill]}
                      <span className="text-white text-[10px] mt-2 uppercase font-bold">
                        {node.skill}
                      </span>
                    </div>
                  </motion.foreignObject>
                )}
              </AnimatePresence>
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="md:hidden relative w-full h-[320px]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 850 420"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Mini Lines */}
          {miniLines.map(([a, b], i) => {
            const s1 = smallStars[a];
            const s2 = smallStars[b];

            return (
              <motion.line
                key={"mini-mobile" + i}
                x1={s1.x}
                y1={s1.y}
                x2={s2.x}
                y2={s2.y}
                stroke="#38BDF8"
                strokeWidth="0.6"
                opacity="0.25"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { opacity: 0.25, pathLength: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.08 }}
              />
            );
          })}

          {/* Small Stars */}
          {smallStars.map((star, i) => (
            <motion.circle
              key={"small-mobile" + i}
              cx={star.x}
              cy={star.y}
              r={star.size * 0.8}
              fill="white"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] } : {}
              }
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}

          {/* Main Lines */}
          {constellationLines.map(([a, b], i) => {
            const s1 = constellationStars[a];
            const s2 = constellationStars[b];

            return (
              <motion.line
                key={"line-mobile" + i}
                x1={s1.x}
                y1={s1.y}
                x2={s2.x}
                y2={s2.y}
                stroke="#60A5FA"
                strokeWidth="1"
                strokeLinecap="round"
                style={{ pointerEvents: "none" }}
                initial={{ opacity: 0, pathLength: 0 }}
                animate={isInView ? { opacity: 0.5, pathLength: 1 } : {}}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            );
          })}

          {constellationStars.map((node, index) => (
            <motion.g
              key={"mobile-node" + node.skill}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={
                isInView
                  ? {
                      scale: 0.9,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                delay: index * 0.05,
              }}
              onMouseEnter={() => setHoveredSkill(node.skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                cursor: "pointer",
              }}
            >
              <circle cx={node.x} cy={node.y} r="14" fill="transparent" />

              {/* Star */}

              <foreignObject
                x={node.x - 12}
                y={node.y - 12}
                width="24"
                height="24"
              >
                <Star
                  size={22}
                  strokeWidth={2.2}
                  className="
                    fill-white
                    text-white
                    drop-shadow-[0_0_12px_white]
                    "
                />
              </foreignObject>

              {/* SAME DESKTOP POPUP */}

              <AnimatePresence>
                {(hoveredSkill === node.skill || autoPopup === node.skill) && (
                  <motion.foreignObject
                    x={node.x - 55}
                    y={node.y - 100}
                    width="110"
                    height="80"
                    initial={{
                      opacity: 0,

                      scale: 0.8,

                      y: 10,
                    }}
                    animate={{
                      opacity: 1,

                      scale: 1,

                      y: -50,
                    }}
                    exit={{
                      opacity: 0,

                      scale: 0.8,
                    }}
                  >
                    <div
                      className="
                        bg-slate-900/95
                        border
                        border-white/20
                        rounded-xl
                        p-3
                        flex
                        flex-col
                        items-center
                        shadow-xl
                        "
                    >
                      {iconMap[node.skill]}

                      <span
                        className="
                          text-white
                          text-[10px]
                          mt-2
                          uppercase
                          font-bold
                          "
                      >
                        {node.skill}
                      </span>
                    </div>
                  </motion.foreignObject>
                )}
              </AnimatePresence>
            </motion.g>
          ))}
        </svg>
      </div>
    </div>
  );
};
