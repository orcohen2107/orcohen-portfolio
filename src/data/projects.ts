import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "smartshift",
    title: "SmartShift",
    description:
      "An intelligent shift management system with automated scheduling, constraints handling, and role-based assignments.",
    longDescription:
      "A comprehensive shift management platform designed for complex organizational needs. Features automatic shift assignment with constraint satisfaction, support for multiple role types, and smart conflict resolution. Built to handle real-world scheduling challenges at scale.",
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    images: [
      "/images/projects/smartshift.png",
      "/images/projects/smartshift-2.png",
      "/images/projects/smartshift-3.png",
    ],
    featured: true,
    category: "fullstack",
  },
  {
    id: "playsmart",
    title: "PlaySmart",
    description:
      "AI-powered coaching assistant that analyzes player statistics and recommends optimal lineups based on current fitness data.",
    longDescription:
      "A system that helps coaches make data-driven decisions for game lineups. Analyzes player performance statistics, current fitness levels, and historical data to provide AI-generated recommendations for the best team composition for each upcoming match.",
    technologies: ["Next.js", "Python", "AI/ML", "FastAPI"],
    images: [
      "/images/projects/playsmart.png",
      "/images/projects/playsmart-2.png",
      "/images/projects/playsmart-3.png",
    ],
    featured: false,
    category: "fullstack",
  },
  {
    id: "sportzone",
    title: "SportZone",
    description:
      "A social platform for sports fans to follow teams, players, and connect with fellow supporters through posts and community feeds.",
    longDescription:
      "A social media application tailored for sports enthusiasts. Users can follow their favorite teams and players, create posts on their personal feed or team pages, and engage with a community of like-minded fans. Supports both individual profiles and celebrity/team accounts.",
    technologies: ["React Native", "Firebase", "Node.js", "TypeScript"],
    images: [
      "/images/projects/sportzone.png",
      "/images/projects/sportzone-2.png",
      "/images/projects/sportzone-3.png",
    ],
    featured: false,
    category: "mobile",
  },
  {
    id: "poop-bags",
    title: "Poop Bags",
    description:
      "A community-driven app for dog owners to share and locate poop bag station locations, with social features and an interactive map.",
    longDescription:
      "A mobile application that creates a community for dog owners. Users can share poop bag station locations, post updates about stations, like and comment on posts, and view all stations on an interactive map. Makes daily dog walks easier for the whole community.",
    technologies: ["React Native", "Maps API", "Node.js", "MongoDB"],
    images: [
      "/images/projects/poopbags.png",
      "/images/projects/poopbags-2.png",
      "/images/projects/poopbags-3.png",
    ],
    featured: false,
    category: "mobile",
  },
];
