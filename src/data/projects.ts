import shineDepotImg from "../assets/images/Shine Depot.png";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveDemo?: string;
  image?: string;
}

export const projectData: Project[] = [
  {
    name: "Vehicle Service & Spare Parts Management System",
    description:
      "An industry-ready web and mobile ecosystem featuring interactive stock adjustment calculations, item categorizations, real-time invoices, and automated purchase order flows.",
    technologies: [
      "React Native",
      "Expo Router",
      "Node.js",
      "Express",
      "Mongoose",
      "Redux Toolkit",
    ],
    githubLink: "https://github.com",
    image: shineDepotImg,
  },
  {
    name: "Event Photography Booking System",
    description:
      "A comprehensive solution facilitating client photography bookings, interactive scheduling, custom package selections, and streamlined invoice generation utilities.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "MySQL"],
    githubLink: "https://github.com",
    image: shineDepotImg,
  },
  {
    name: "School Information Management System",
    description:
      "Centralized administrator dashboard tailored to manage academic tracking records, registration modules, student grading schemas, and personnel profiling dashboards.",
    technologies: ["Java", "IntelliJ IDEA", "MySQL"],
    githubLink: "https://github.com",
    image: shineDepotImg,
  },
  {
    name: "Coffee Shop Website",
    description:
      "A responsive front-end coffee shop interface featuring a product menu, seasonal offers, and smooth CSS animations for an engaging user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com",
    image: shineDepotImg,
  },
  {
    name: "Task Management System",
    description:
      "A full-stack task management application allowing users to create, read, update, and delete tasks with real-time status tracking.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com",
    image: shineDepotImg,
  },
];
