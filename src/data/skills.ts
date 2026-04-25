import type { Skill } from "@/types";

export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "Angular", category: "frontend" },
    { name: "React", category: "frontend" },
    { name: "Next.js", category: "frontend" },
    { name: "React Native", category: "frontend" },
    { name: "TypeScript", category: "frontend" },
  ],
  backend: [
    { name: "Node.js", category: "backend" },
    { name: "Express", category: "backend" },
    { name: "REST APIs", category: "backend" },
    { name: "PostgreSQL", category: "backend" },
    { name: "MongoDB", category: "backend" },
  ],
  devops: [
    { name: "Jenkins", category: "devops" },
    { name: "Docker", category: "devops" },
    { name: "CI/CD", category: "devops" },
    { name: "Vercel", category: "devops" },
    { name: "Firebase", category: "devops" },
  ],
  tools: [
    { name: "Git / GitHub", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "Tailwind CSS", category: "tools" },
    { name: "SQL", category: "tools" },
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
