export interface SkillCategory {
  category: string;
  items: string[];
}

export const skillData: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
  },
];
