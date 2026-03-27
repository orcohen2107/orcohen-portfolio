import type { Skill } from "@/types";

export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "React / Next.js", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend" },
    { name: "React Native", category: "frontend" },
    { name: "Framer Motion", category: "frontend" },
  ],
  backend: [
    { name: "Node.js / Express", category: "backend" },
    { name: "PostgreSQL / MongoDB", category: "backend" },
    { name: "Python / FastAPI", category: "backend" },
    { name: "GraphQL", category: "backend" },
    { name: "REST APIs", category: "backend" },
  ],
  devops: [
    { name: "AWS / Vercel", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "CI/CD Pipelines", category: "devops" },
    { name: "Firebase", category: "devops" },
  ],
  tools: [
    { name: "Git / GitHub", category: "tools" },
    { name: "Figma", category: "tools" },
    { name: "Jest / Cypress", category: "tools" },
    { name: "Postman", category: "tools" },
  ],
};

export const skillCategories = [
  {
    key: "frontend",
    label: "Frontend",
    icon: "web" as const,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    dotClass: "bg-primary/40",
  },
  {
    key: "backend",
    label: "Backend",
    icon: "database" as const,
    colorClass: "text-secondary",
    bgClass: "bg-secondary/10",
    dotClass: "bg-secondary/40",
  },
  {
    key: "devops",
    label: "DevOps",
    icon: "cloud" as const,
    colorClass: "text-tertiary",
    bgClass: "bg-tertiary/10",
    dotClass: "bg-tertiary/40",
  },
  {
    key: "tools",
    label: "Tools",
    icon: "terminal" as const,
    colorClass: "text-primary",
    bgClass: "bg-primary/10",
    dotClass: "bg-primary/40",
  },
];
