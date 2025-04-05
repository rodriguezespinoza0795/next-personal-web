"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  const technologies = [
    { name: "Next.js", icon: "/placeholder.svg?height=40&width=40" },
    { name: "React", icon: "/placeholder.svg?height=40&width=40" },
    { name: "NestJS", icon: "/placeholder.svg?height=40&width=40" },
    { name: "TypeScript", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Node.js", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Docker", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Kubernetes", icon: "/placeholder.svg?height=40&width=40" },
    { name: "AWS", icon: "/placeholder.svg?height=40&width=40" },
    { name: "PostgreSQL", icon: "/placeholder.svg?height=40&width=40" },
    { name: "MongoDB", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Tailwind CSS", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Git", icon: "/placeholder.svg?height=40&width=40" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("about.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            {t("about.technologies")}
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div key={index} variants={item}>
                <Card className="hover:border-primary/50 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="w-10 h-10 mb-2">
                      <img
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
