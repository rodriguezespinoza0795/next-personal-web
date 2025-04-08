"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export default function Experience() {
  const { t } = useTranslation();

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Softtek (Concast Pipe Inc.)",
      position: "Software Engineer",
      period: "Jan 2025 - Present",
      description:
        "Developing and maintaining web application for a manufacturing company.",
      technologies: ["Next.js", "AWS", "Redux"],
    },
    {
      id: 2,
      company: "Softtek (Banorte Securities)",
      position: "Software Engineer",
      period: "Mar 2023 - Dec 2024",
      description:
        "Developed and maintained web application for a financial institution.",
      technologies: ["React", "AWS"],
    },
    {
      id: 3,
      company: "Kredfeed",
      position: "Full Stack Developer",
      period: "Sept 2021 - Feb 2023",
      description: "Created a web application for a financial institution.",
      technologies: ["React", "Node.js"],
    },
    {
      id: 4,
      company: "Beliveo",
      position: "Full Stack Developer",
      period: "Sept 2020 - Feb 2022",
      description:
        "Created and maintained a web application for a call center.",
      technologies: ["React", "Node.js", "Material-UI", "GraphQL"],
    },
    {
      id: 5,
      company: "Beliveo",
      position: "Management Information System",
      period: "Feb 2020 - Sep 2020",
      description: "Maintained and updated databases for a call center.",
      technologies: ["SQL Server", "SSIS", "MySQL", "Python", "Looker Studio"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("experience.title")}
          </h2>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                <Card className="hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-col space-y-1">
                      <CardTitle>{exp.position}</CardTitle>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-muted-foreground">
                          {exp.company}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
