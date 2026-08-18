import projectDataJson from "./projects.json";
import shineDepotImg from "../assets/images/Shine Depot.png";
import taskTerminalImg from "../assets/images/Task Terminal.jpg";
import SIMS from "../assets/images/SIMS.jpg";
import CoffeeShop from "../assets/images/CoffeeShop.png";
import Photography from "../assets/images/Photography.jpg";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveDemo?: string;
  image?: string;
  imageKey?: string;
}

const imageMap = {
  shineDepot: shineDepotImg,
  taskTerminal: taskTerminalImg,
  SIMS: SIMS,
  CoffeeShop: CoffeeShop,
  Photography: Photography,
} as const;

export const projectData: Project[] = (projectDataJson as Project[]).map(
  (project) => ({
    ...project,
    image: project.imageKey
      ? imageMap[project.imageKey as keyof typeof imageMap]
      : undefined,
  }),
);
