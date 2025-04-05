"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {t("hero.title")}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
          {t("hero.subtitle")}
        </h2>
        <p className="text-xl text-muted-foreground max-w-md">
          {t("hero.description")}
        </p>
        <div className="pt-4">
          <Button size="lg" className="group" asChild>
            <Link href="#projects" scroll={true}>
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 flex justify-center md:justify-end"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src="/profile.png"
            alt="Developer portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
