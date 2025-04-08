"use client";

import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectType = "frontend" | "backend" | "fullstack";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  type: ProjectType;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const ProjectContainer = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all">
            <div className="relative h-48 w-full px-4">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{project.title}</CardTitle>
                <Badge variant="outline" className="capitalize">
                  {project.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              {project.demoUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
export default function Projects() {
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      id: 1,
      title: "Invoice dashboard",
      description:
        "Dashboard for managing invoices, with a focus on simplicity and ease of use.",
      image: "/projects/dashboard.png",
      type: "frontend",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn UI"],
      githubUrl: "https://github.com/rodriguezespinoza0795/next-dashboard",
      demoUrl: "https://next-dashboard-alpha-ebon.vercel.app/dashboard",
    },
    {
      id: 2,
      title: "Auth Cognito Core",
      description: "A complete authentication system using Cognito and AWS.",
      image: "/projects/auth-cognito-core.png",
      type: "backend",
      technologies: [
        "Nest.js",
        "TypeScript",
        "Railway",
        "Jest",
        "Swagger",
        "Amazon IAM",
        "Amazon Cognito",
      ],
      githubUrl: "https://github.com/rodriguezespinoza0795/auth-cognito-core",
      demoUrl: "https://auth-cognito-core-production.up.railway.app/api",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("projects.title")}
          </h2>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">{t("projects.filter.all")}</TabsTrigger>
              <TabsTrigger value="frontend">
                {t("projects.filter.frontend")}
              </TabsTrigger>
              <TabsTrigger value="backend">
                {t("projects.filter.backend")}
              </TabsTrigger>
              <TabsTrigger value="fullstack">
                {t("projects.filter.fullstack")}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <ProjectContainer projects={projects} />
          </TabsContent>
          <TabsContent value="frontend" className="mt-0">
            <ProjectContainer
              projects={projects.filter(
                (project) => project.type === "frontend"
              )}
            />
          </TabsContent>
          <TabsContent value="backend" className="mt-0">
            <ProjectContainer
              projects={projects.filter(
                (project) => project.type === "backend"
              )}
            />
          </TabsContent>
          <TabsContent value="fullstack" className="mt-0">
            <ProjectContainer
              projects={projects.filter(
                (project) => project.type === "fullstack"
              )}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
