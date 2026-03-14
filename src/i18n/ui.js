export const languages = {
  fr: 'Français',
  en: 'English',
};

export const defaultLang = 'fr';

export const ui = {
  fr: {
    // --- Navigation (Menu flottant) ---
    'nav.home': 'Accueil',
    'nav.parcours': 'Parcours',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.journal': 'Journal',

    // --- Éléments UI Globaux ---
    'btn.code': 'Voir le code',
    'btn.doc': 'Documentation',

    // --- Section 1 : Hero (Accueil) ---
    'hero.badge.student': 'Étudiant Ingénieur',
    'hero.badge.internship': 'Recherche de Stage',
    'hero.title.1': 'Informatique &',
    'hero.title.2': 'Modélisation',
    'hero.title.3': 'Mathématique.',
    'hero.subtitle': 'Je suis <strong class="text-[#233554]">Natéo Gadaix</strong>. Je conçois des systèmes mêlant rigueur mathématique et performance logicielle.',
    'hero.btn.works': 'Explorer mes travaux',
    'hero.btn.cv': 'CV.pdf',

    // --- Section 2 : Parcours ---
    'parcours.badge': 'Mon Profil',
    'parcours.title': 'Parcours & Expériences',
    'parcours.edu': 'Éducation',
    'parcours.exp': 'Expérience',

    // --- Section 3 : Compétences ---
    'skills.badge': 'Mon Arsenal',
    'skills.title': 'Compétences',
    'skills.toggle': 'Vue Détails',
    'skills.env': 'Environnement',
    'skills.lvl.expert': 'Expert',
    'skills.lvl.advanced': 'Avancé',
    'skills.lvl.intermediate': 'Intermédiaire',
    'skills.lvl.beginner': 'Débutant',

    // --- Section 4 : Projets ---
    'projects.badge': 'Sélection',
    'projects.title': 'Projets Récents',
    'projects.github': 'Voir tout sur GitHub',

    // --- Section 5 : Contact ---
    'contact.title.1': 'Un projet ?',
    'contact.title.2': 'Un café ?',
    'contact.subtitle': 'Élève ingénieur en informatique, je suis disponible pour un stage ou un projet.<br>Laissez-moi un message, je réponds vite !',
    'contact.email.label': 'Email',
    'contact.email.copy': 'Copier',
    'contact.email.copied': 'Adresse copiée !',

    // --- Pied de page (Footer) ---
    'footer.dev': 'Développé avec passion, caféine et <a href="https://astro.build/" target="_blank" class="text-[#233554] font-bold hover:underline">Astro</a>.',
    'footer.rights': 'Tous droits réservés.',

    // --- Page : Journal de bord ---
    'journal.badge': 'En Construction',
    'journal.title': 'Journal de bord',
    'journal.subtitle': 'En Construction.',
    'journal.desc': 'Je suis en train de compiler mes notes, articles et veilles technologiques. Cette section sera bientôt disponible.',
    'journal.back': 'Retour à l\'accueil',
  },
  en: {
    // --- Navigation (Menu flottant) ---
    'nav.home': 'Home',
    'nav.parcours': 'Journey',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.journal': 'Journal',

    // --- Éléments UI Globaux ---
    'btn.code': 'View Code',
    'btn.doc': 'Documentation',

    // --- Section 1 : Hero (Accueil) ---
    'hero.badge.student': 'Engineering Student',
    'hero.badge.internship': 'Seeking Internship',
    'hero.title.1': 'Computer',
    'hero.title.2': 'Science &',
    'hero.title.3': 'Modeling.',
    'hero.subtitle': 'I am <strong class="text-[#233554]">Natéo Gadaix</strong>. I learn how to design systems combining mathematical rigor and software performance.',
    'hero.btn.works': 'Explore my work',
    'hero.btn.cv': 'Resume.pdf',

    // --- Section 2 : Parcours ---
    'parcours.badge': 'My Profile',
    'parcours.title': 'Background & Experience',
    'parcours.edu': 'Education',
    'parcours.exp': 'Experience',

    // --- Section 3 : Compétences ---
    'skills.badge': 'My Tools',
    'skills.title': 'Technical Skills',
    'skills.toggle': 'Details View',
    'skills.env': 'Environment',
    'skills.lvl.expert': 'Expert',
    'skills.lvl.advanced': 'Advanced',
    'skills.lvl.intermediate': 'Intermediate',
    'skills.lvl.beginner': 'Beginner',

    // --- Section 4 : Projets ---
    'projects.badge': 'Selection',
    'projects.title': 'Recent Projects',
    'projects.github': 'View all on GitHub',

    // --- Section 5 : Contact ---
    'contact.title.1': 'A project?',
    'contact.title.2': 'A coffee?',
    'contact.subtitle': 'Computer engineering student, I am available for an internship or project.<br>Leave me a message, I reply fast!',
    'contact.email.label': 'Email',
    'contact.email.copy': 'Copy',
    'contact.email.copied': 'Address copied!',

    // --- Pied de page (Footer) ---
    'footer.dev': 'Developed with passion, caffeine and <a href="https://astro.build/" target="_blank" class="text-[#233554] font-bold hover:underline">Astro</a>.',
    'footer.rights': 'All rights reserved.',

    // --- Page : Journal de bord ---
    'journal.badge': 'Work in Progress',
    'journal.title': 'Dev Journal',
    'journal.subtitle': 'Under Construction.',
    'journal.desc': 'I am currently compiling my notes, articles, and tech watch. This section will be available soon.',
    'journal.back': 'Back to Home',
  },
};

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang]?.[key] || ui[defaultLang][key];
  }
}