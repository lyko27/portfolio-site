# Documentation du Portfolio (Natéo Gadaix)

Ce fichier rassemble l'ensemble des choix techniques, la structure architecturale et la logique de fonctionnement de ce portfolio développé en Astro.js.

## 1. Contexte et Objectifs
L'objectif de ce projet est de présenter mon profil une vitrine web.
Le site est conçu comme un "One-Page" fluide, avec une DA mélangeant le sérieux 
(Blueprint, Terminal) et une "modernité typographique".

## 2. Choix Technologiques
J'ai opté pour une stack volontairement minimaliste et moderne :
- **Framework :** Astro.js. Ce choix garantit un rendu serveur optimal. Le site produit du pur HTML/CSS, avec un score de performance parfait.
- **Styling :** Tailwind CSS. L'utilisation des valeurs arbitraires Tailwind (ex: `shadow-[6px_6px_0px_0px_#233554]`) m'a permis de coder la DA Brutaliste directement dans le HTML sans poluer les fichiers de feuilles de style externes.
- **Interactivité :** Vanilla JavaScript (Aucun React ou Vue). Les scripts sont isolés à la fin de chaque composant via la balise `<script>`.

## 3. Architecture du Code
L'architecture repose sur la séparation des préoccupations.

```text
/src
├── components/        # Blocs isolés (Lego)
│   ├── Contact.astro
│   ├── Hero.astro
│   ├── Parcours.astro
│   ├── ProjectCard.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   └── TimelineCard.astro
├── i18n/              # Logique d'internationalisation (i18n)
│   └── ui.js          # Dictionnaire de traductions statiques (FR/EN)
├── data/              # Données isolées
│   └── portfolio.js   # Unique source de vérité pour les textes/données, classées par langue
├── layouts/
│   └── baseLayouts.astro # Squelette HTML, Menu flottant, et configuration
└── pages/
    └── [lang]/
        └── index.astro   # Assembleur final des composants
```

### Le fichier Index (`pages/fr/index.astro`)
J'ai réduit ce fichier à sa plus stricte utilité : il importe les composants et les empile. Il ne contient aucune logique, aucune donnée, ce qui le rend parfaitement lisible.

### Le fichier Données (`data/portfolio.js`)
Tous les textes, projets, expériences et compétences sont stockés sous forme de tableaux d'objets. Si je dois ajouter un projet ou une certification à l'avenir, je modifie *uniquement* ce fichier.

## 4. Logiques Métiers et Fonctionnalités (Vanilla JS)
Voici comment j'ai géré l'interactivité sans framework client :

### A. Le Smart Header (`baseLayouts.astro`)
J'utilise un écouteur d'événement sur `window.scrollY`. 
- Au delà de 50px de défilement, le logo et la navigation se détachent du flux normal pour devenir des "bulles flottantes" fixes.
- Un système d'Intersection basique calcule la position relative des balises `<section>` pour mettre en surbrillance l'onglet actif dans le menu (`.nav-active`).

### B. Animation du Terminal (`Hero.astro`)
C'est l'élément central du storytelling. 
Le script simule l'utilisation d'un terminal en modifiant séquentiellement `element.textContent` avec des délais artificiels (promesses JS `setTimeout`). Les changements de hauteur (`h-16` à `h-48`) sont assurés par des transitions de classes Tailwind.

### C. Toggle de Compétences (`Skills.astro`)
J'ai implémenté un système de bascule entre deux vues :
1. Vue "Cluster" (bulles animées).
2. Vue "Grille" (détails techniques).
L'état local est maintenu via un booléen simple dans l'écouteur d'événement du bouton principal. La transition est effectuée en basculant des classes `opacity-0`/`opacity-100` et `absolute`/`relative` pour masquer sans détruire le DOM.

### D. Copie dans le presse-papier (`Contact.astro`)
J'ai utilisé l'API moderne `navigator.clipboard.writeText()` couplée à des `setTimeout()` pour offrir un retour visuel (changement d'icône SVG et de couleur du texte) confirmant l'action à l'utilisateur.

## 5. Maintenance et Évolutivité
Pour maintenir le projet proprement, je m'applique ces règles d'ingénierie logicielle :
- **Lisibilité :** Mon code est aéré. Je reviens à la ligne sur les attributs trop longs (HTML/Tailwind) pour permettre une lecture facile sans scroll horizontal.
- **Commentaires :** Factuels, courts, rédigés à la première personne. Pas de pavés inutiles.
- **Ajouter un projet :** Éditer `src/data/portfolio.js` (tableau `projects`). La clé `doc` doit pointer vers la route du futur fichier Markdown (ex: `/fr/projets/mon-nouveau-projet`).
- **Rédiger une documentation projet :** Les routes de documentation seront gérées par Astro en créant simplement un fichier dans `src/pages/fr/projets/nom-du-projet.md`. Le rendu utilise `MarkdownLayout.astro`, qui intègre automatiquement à la fin de l'article un effet visuel "ticket de caisse" des dents
comme si il était dechiré.
- **Modifier une compétence :** Éditer le tableau `skills`. Les couleurs s'adapteront automatiquement grâce à l'helper basé sur le score (la clé `level`).

Je me suis assuré que le code soit strictment structuré pour pouvoir être repris facilement, même après une longue pause dans le développement.

Natéo :-)