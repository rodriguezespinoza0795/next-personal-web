"use client";

import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import clsx from "clsx";
export default function About() {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // evitar render SSR incorrecto

  const technologies = [
    {
      name: "React.js",
      icon: "/technologies/react.svg",
      type: "Frontend Library",
      color: {
        background: "bg-blue-400/10",
        hover: "hover:bg-blue-400/20",
      },
    },
    {
      name: "Next.js",
      icon: "/technologies/next.svg",
      type: "Frontend Framework",
      color: {
        background: "bg-blue-400/10",
        hover: "hover:bg-blue-400/20",
      },
    },
    {
      name: "TypeScript",
      icon: "/technologies/typescript.svg",
      type: "Language",
      color: {
        background: "bg-red-400/10",
        hover: "hover:bg-red-400/20",
      },
    },
    {
      name: "Tailwind CSS",
      icon: "/technologies/tailwind.svg",
      type: "CSS Framework",
      color: {
        background: "bg-orange-400/10",
        hover: "hover:bg-orange-400/20",
      },
    },
    {
      name: "Git",
      icon: "/technologies/git.svg",
      type: "Version Control",
      color: {
        background: "bg-green-400/10",
        hover: "hover:bg-green-400/20",
      },
    },
    {
      name: "ESLint",
      icon: "/technologies/eslint.svg",
      type: "Linter",
      color: {
        background: "bg-violet-400/10",
        hover: "hover:bg-violet-400/20",
      },
    },
    {
      name: "PostgreSQL",
      icon: "/technologies/postgresql.svg",
      type: "Database",
      color: {
        background: "bg-lime-400/10",
        hover: "hover:bg-lime-400/20",
      },
    },
    {
      name: "Node.js",
      icon: "/technologies/node.svg",
      type: "Runtime Environment",
      color: {
        background: "bg-green-400/10",
        hover: "hover:bg-green-400/20",
      },
    },
    {
      name: "npm",
      icon: "/technologies/npm.svg",
      type: "Package Manager",
      color: {
        background: "bg-red-400/10",
        hover: "hover:bg-red-400/20",
      },
    },
    {
      name: "Shadcn UI",
      icon: "/technologies/shadcnui.svg",
      type: "UI Library",
      color: {
        background: "bg-orange-400/10",
        hover: "hover:bg-orange-400/20",
      },
    },
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
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto  ">
              {t("about.description.1")}
            </p>
            {showMore ? (
              <>
                <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t("about.description.2")}
                </p>
                <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t("about.description.3")}
                </p>
                <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t("about.description.4")}
                </p>
                <p className="text-sm md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t("about.description.5")}
                </p>
              </>
            ) : null}
            <Button
              variant="link"
              onClick={() => setShowMore(!showMore)}
              className="mx-auto mt-4"
            >
              {showMore ? t("about.seeLess") : t("about.seeMore")}
            </Button>
          </div>
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
                <Card
                  className={clsx(
                    "hover:border-primary/50 transition-colors",
                    tech.color.background,
                    tech.color.hover
                  )}
                >
                  <CardContent className="flex flex-col items-center justify-center p-4">
                    <div className="w-10 h-10 mb-2">
                      <Image
                        priority={false}
                        width={40}
                        height={40}
                        src={
                          theme === "dark"
                            ? tech.icon.replace(".svg", "-white.svg")
                            : tech.icon
                        }
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {tech.type}
                    </span>
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
