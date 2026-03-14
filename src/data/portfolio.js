// Fichier centralisant les données textuelles du portfolio.
// J'isole ces données ici pour faciliter les mises à jour sans risquer de casser la structure des composants Astro.

export const educationEvents = {
  fr: [
    {
      date: "2025 - 2028",
      title: "Ingénieur en Informatique",
      school: "Clermont-Auvergne INP - ISIMA",
      type: "Diplôme",
      desc: "Actuellement en 1ère année de diplôme d'ingénieur en informatique. Formation approfondie en informatique, modélisation mathématique et architectures logicielles. Projets pratiques et travail en équipe.",
      logo: import.meta.env.BASE_URL + "logo_isima.png",
      url: "https://www.isima.fr"
    },
    {
      date: "2023 - 2025",
      title: "Classe Préparatoire aux Grandes Ecoles (CPGE)",
      school: "Lycée Alphonse Daudet Nîmes",
      type: "Formation de préparation",
      desc: "Filière Physique et Science de l'ingénieur (PSI). Deux années de formation intensive en mathématiques, physique et sciences industrielles, préparant aux concours d'entrée des grandes écoles d'ingénieurs. Développement de la rigueur et de la capacité de travail.",
      logo: import.meta.env.BASE_URL + "psi.png",
      url: "https://alphonse-daudet-nimes.mon-ent-occitanie.fr/cpge/"
    },
    {
      date: "2023",
      title: "Baccalauréat Général",
      school: "Lycée Louis Feuillade",
      type: "Diplôme",
      desc: "Obtenu avec Mention Bien. Spécialités Mathématiques et Physique-Chimie.",
      logo: import.meta.env.BASE_URL + "louis.jpg",
      url: "https://louis-feuillade.mon-ent-occitanie.fr/"
    }
  ],
  en: [
    {
      date: "2025 - 2028",
      title: "Computer Engineering Degree",
      school: "Clermont-Auvergne INP - ISIMA",
      type: "Degree",
      desc: "Currently in 1st year of computer engineering degree. In-depth training in computer science, mathematical modeling, and software architectures. Practical projects and teamwork.",
      logo: import.meta.env.BASE_URL + "logo_isima.png",
      url: "https://www.isima.fr"
    },
    {
      date: "2023 - 2025",
      title: "Preparatory Classes for Grandes Ecoles (CPGE)",
      school: "Alphonse Daudet High School Nîmes",
      type: "Preparatory Training",
      desc: "Physics and Engineering Science (PSI). Two years of intensive training in mathematics, physics, and industrial sciences, preparing for competitive entrance exams to engineering schools. Development of rigor and work capacity.",
      logo: import.meta.env.BASE_URL + "psi.png",
      url: "https://alphonse-daudet-nimes.mon-ent-occitanie.fr/cpge/"
    },
    {
      date: "2023",
      title: "High School Diploma",
      school: "Louis Feuillade High School",
      type: "Degree",
      desc: "Graduated with Honors. Specializing in Mathematics and Physics-Chemistry.",
      logo: import.meta.env.BASE_URL + "louis.jpg",
      url: "https://louis-feuillade.mon-ent-occitanie.fr/"
    }
  ]
};

export const experienceEvents = {
  fr: [
    {
      date: "2025",
      title: "Certification ''Insights in Production Logistics''",
      company: "ISIMA - Borchum University",
      type: "Certification",
      desc: "Séminaire d'initiation à la logistique de production et l'optimisation des flux. Compréhension des enjeux d'optimisation d'une chaîne de production.",
      logo: import.meta.env.BASE_URL + "bo.jpg"
    }
  ],
  en: [
    {
      date: "2025",
      title: "''Insights in Production Logistics'' Certification",
      company: "ISIMA - Borchum University",
      type: "Certification",
      desc: "Introductory seminar to production logistics and flow optimization. Understanding the challenges of optimizing a production chain.",
      logo: import.meta.env.BASE_URL + "bo.jpg"
    }
  ]
};

export const skills = {
  fr: [
    { name: "C Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 50, desc: "Gestion mémoire & Pointeurs" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 35, desc: "Automation & Scripting" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 30, desc: "Structure Sémantique" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 30, desc: "Animations et style" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 20, desc: "Script dans le Web" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 50, desc: "Base de données" },
    { name: "Quantum", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/IBM_Quantum_System_One_logo.svg", level: 10, desc: "Algorithmes Quantique" }
  ],
  en: [
    { name: "C Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", level: 50, desc: "Memory Management & Pointers" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 35, desc: "Automation & Scripting" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 30, desc: "Semantic Structure" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 30, desc: "Animations & Styling" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 20, desc: "Web Scripting" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", level: 50, desc: "Database" },
    { name: "Quantum", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d7/IBM_Quantum_System_One_logo.svg", level: 10, desc: "Quantum Algorithms" }
  ]
};

export const projects = {
  fr: [
    {
      title: "Portfolio Personnel",
      year: "2026",
      desc: "Site vitrine conçu avec Astro et Tailwind CSS. Animations fluides sans framework JS lourd.",
      tags: ["Astro", "Tailwind", "Web"],
      repo: "https://github.com/lyko27/portfolio-site",
      doc: import.meta.env.BASE_URL + "fr/projets/portfolio/",
      color: "bg-green-50"
    }
  ],
  en: [
    {
      title: "Personal Portfolio",
      year: "2026",
      desc: "Showcase site built with Astro and Tailwind CSS. Smooth animations without heavy JS frameworks.",
      tags: ["Astro", "Tailwind", "Web"],
      repo: "https://github.com/lyko27/portfolio-site",
      doc: import.meta.env.BASE_URL + "en/projets/portfolio/",
      color: "bg-green-50"
    }
  ]
};