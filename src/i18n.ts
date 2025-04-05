import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      "nav.home": "Inicio",
      "nav.about": "Sobre Mí",
      "nav.projects": "Proyectos",
      "nav.experience": "Experiencia",
      "nav.blog": "Blog",
      "nav.contact": "Contacto",
      "hero.title": "Hola, soy David Rodriguez",
      "hero.subtitle": "Desarrollador Full Stack",
      "hero.description": "Especializado en Next.js, NestJS y DevOps",
      "hero.cta": "Ver Mi Trabajo",
      "about.title": "Sobre Mí",
      "about.description":
        "Soy un desarrollador full stack apasionado con experiencia en tecnologías web modernas. Me encanta construir aplicaciones escalables y resolver problemas complejos.",
      "about.technologies": "Tecnologías con las que trabajo",
      "projects.title": "Mis Proyectos",
      "projects.filter.all": "Todos",
      "projects.filter.frontend": "Frontend",
      "projects.filter.backend": "Backend",
      "projects.filter.fullstack": "Full Stack",
      "experience.title": "Experiencia",
      "contact.title": "Contacto",
      "contact.name": "Nombre",
      "contact.email": "Correo",
      "contact.message": "Mensaje",
      "contact.send": "Enviar Mensaje",
      "contact.download": "Descargar CV",
      "footer.rights": "Todos los derechos reservados",
    },
  },
  en: {
    translation: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      "hero.title": "Hi, I'm David Rodriguez",
      "hero.subtitle": "Full Stack Developer",
      "hero.description": "Specialized in Next.js, NestJS and DevOps",
      "hero.cta": "View My Work",
      "about.title": "About Me",
      "about.description":
        "I'm a passionate full stack developer with expertise in modern web technologies. I love building scalable applications and solving complex problems.",
      "about.technologies": "Technologies I work with",
      "projects.title": "My Projects",
      "projects.filter.all": "All",
      "projects.filter.frontend": "Frontend",
      "projects.filter.backend": "Backend",
      "projects.filter.fullstack": "Full Stack",
      "experience.title": "Experience",
      "contact.title": "Get In Touch",
      "contact.name": "Name",
      "contact.email": "Email",
      "contact.message": "Message",
      "contact.send": "Send Message",
      "contact.download": "Download CV",
      "footer.rights": "All rights reserved",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
