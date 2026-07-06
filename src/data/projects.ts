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
    name: "Vehicle Service Center Management System",
    description:
      "A full-stack vehicle service center management system that streamlines bookings, job card tracking, inventory control, invoicing, and customer management with real-time updates, role-based access, and integrated web and mobile applications.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React",
      "React Native",
      "Redux Toolkit",
      "Socket.io",
      "Swagger",
      "Docker",
      "Jest",
      "Supertest",
    ],
    githubLink:
      "https://github.com/malkiyasara/vehicle-service-center-management-System",
    image: shineDepotImg,
  },
  {
    name: "Smart Task Management System",
    description:
      "A full-stack task management system that helps users create, organize, and track tasks with smart priority suggestions, real-time dashboard insights, notifications, productivity analytics, and advanced search and filtering features.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "bcrypt",
      "Zod Validation",
      "Axios",
      "Jest",
    ],
    githubLink: "https://github.com/malkiyasara/Task-Management-System",
    image: shineDepotImg,
  },
  {
    name: "School Information Management System",
    description:
      "A web-based School Information Management System built with Spring Boot that manages students, teachers, classes, and school records with secure database integration and a simple Thymeleaf interface.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Web",
      "Spring Data JPA",
      "Spring Security (Crypto)",
      "Thymeleaf",
      "MySQL",
      "Maven",
      "HTML",
      "CSS",
    ],
    githubLink: "https://github.com/malkiyasara/SIMS",
    image: shineDepotImg,
  },
  {
    name: "Event Photography Booking System",
    description:
      "A web-based Event Photography Booking System built with Java Servlets and JSP that manages users and photographers with login, registration, and profile features, using text files for data storage instead of a database.",
    technologies: [
      "Java",
      "JSP",
      "Servlets",
      "HTML",
      "CSS",
      "JavaScript",
      "Apache Tomcat",
      "File Handling (Text Files)",
    ],
    githubLink: "https://github.com/malkiyasara/Photographers-Booking-System",
    image: shineDepotImg,
  },
  {
    name: "Coffee Shop",
    description:
      "A responsive front-end coffee shop interface featuring a product menu, seasonal offers, and smooth CSS animations for an engaging user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/malkiyasara/coffee-shop",
    image: shineDepotImg,
  },
];
