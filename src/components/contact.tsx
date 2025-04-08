"use client";

import type React from "react";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("contact.title")}
          </h2>
        </motion.div>

        <div className="grid gap-8 max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  davidre0795@gmail.com
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="https://github.com/rodriguezespinoza0795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    github.com/rodriguezespinoza0795
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="https://linkedin.com/in/davidre0795/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/davidre0795/
                  </a>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/profile.pdf" download>
                      <FileText className="mr-2 h-4 w-4" />
                      {t("contact.download")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
