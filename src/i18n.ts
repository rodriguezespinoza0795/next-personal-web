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
      "hero.description":
        "Especializado en desarrollo web fullstack con React.js y Node.js.",
      "hero.cta": "Ver Mi Trabajo",

      "about.title": "Sobre Mí",
      "about.description.1":
        "Desarrollador Full Stack con más de 5 años de experiencia construyendo aplicaciones web. Mi enfoque principal ha sido el desarrollo frontend con React.js y el backend con Node.js, utilizando bases de datos relacionales como MySQL.",
      "about.description.2":
        "A lo largo de mi carrera he trabajado en proyectos de distintas escalas, desde landing pages hasta aplicaciones empresariales complejas, manteniendo siempre una mentalidad orientada a la calidad del código, la colaboración y la mejora continua.",
      "about.description.3":
        "Actualmente, estoy profundizando mis conocimientos en Next.js, NestJS y prácticas modernas de DevOps. También he trabajado con tecnologías en la nube, especialmente AWS, y tengo experiencia en la implementación de pruebas automatizadas para asegurar la calidad de mis desarrollos.",
      "about.description.4":
        "Me entusiasma seguir aprendiendo, y uno de mis próximos objetivos es adentrarme en el desarrollo móvil utilizando React Native, para poder crear experiencias multiplataforma con un solo stack de tecnologías.",
      "about.description.5":
        "Disfruto experimentar con nuevas herramientas que me permitan crear soluciones más eficientes y robustas. Mi objetivo es seguir creciendo como desarrollador, aportar valor real a los proyectos en los que participo y eventualmente compartir lo aprendido en el camino.",
      "about.technologies": "Tecnologías con las que trabajo",
      "about.seeMore": "Ver Más",
      "about.seeLess": "Ver Menos",

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
      "hero.description":
        "Specialized in fullstack web development with React.js and Node.js.",
      "hero.cta": "View My Work",

      "about.title": "About Me",
      "about.description.1":
        "Full Stack Developer with over 5 years of experience building web applications. My main focus has been frontend development with React.js and backend development with Node.js, working with relational databases like MySQL.",
      "about.description.2":
        "Throughout my career, I've worked on projects of various scales, from landing pages to complex enterprise applications, always with a strong focus on code quality, collaboration, and continuous improvement.",
      "about.description.3":
        "I'm currently deepening my knowledge in Next.js, NestJS, and modern DevOps practices. I also have experience working with cloud technologies, particularly AWS, and implementing automated testing to ensure the reliability of my applications.",
      "about.description.4":
        "I'm passionate about learning, and one of my next goals is to explore mobile development using React Native, aiming to create cross-platform experiences with a unified tech stack.",
      "about.description.5":
        "I enjoy experimenting with new tools that help me build more efficient and robust solutions. My goal is to continue growing as a developer, bring real value to the projects I work on, and eventually share what I learn along the way.",
      "about.technologies": "Technologies I work with",
      "about.seeMore": "See More",
      "about.seeLess": "See Less",

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
