export const frSystems = {
  metadata: {
    title: 'Systèmes — Shane Turon',
    description:
      'Systèmes actifs, pilotes et infrastructure interne organisés par fonction opérationnelle.',
  },

  hero: {
    eyebrow: 'Infrastructure',
    title: 'Systèmes actifs',
    intro:
      'Systèmes actifs, pilotes et infrastructure interne organisés par fonction opérationnelle.',
  },

  psynova: {
    title: 'PsyNova',
    intro:
      'Infrastructure pour pratiques professionnelles : présence publique, accueil des demandes, horaire, communication, dossiers et flux administratif.',
    groups: [
      {
        title: 'Accueil des demandes',
        items: ['Présence publique', 'Chemins de contact', 'Capture des demandes', 'Orientation'],
      },
      {
        title: 'Flux administratif',
        items: ['Horaire', 'Suivi', 'Statut', 'Tâches'],
      },
      {
        title: 'Dossiers et autorité',
        items: ['Confidentialité', 'Dossiers', 'Permissions', 'Limites professionnelles'],
      },
    ],
    deployment: {
      title: 'Chemins d’implantation',
      items: [
        {
          title: 'Construction cartographiée',
          desc: 'Cartographier l’opération actuelle, définir le premier système utile et bâtir autour de ce qui existe déjà.',
        },
        {
          title: 'Système sous marque client',
          desc: 'Le système fonctionne sous la marque, les comptes et le contexte opérationnel du client.',
        },
        {
          title: 'Soutien géré',
          desc: 'Les améliorations, la documentation et la gouvernance du flux peuvent être maintenues comme service.',
        },
      ],
    },
    scale: {
      title: 'Formes d’opération',
      items: [
        { title: 'Professionnel autonome', desc: 'Une personne experte avec peu de capacité administrative et des besoins d’accueil clairs.' },
        { title: 'Petit bureau', desc: 'Une équipe compacte qui partage clients, dossiers, horaire et communication.' },
        { title: 'Équipe à plusieurs rôles', desc: 'Plusieurs rôles ont besoin d’orientation, de permissions, de dossiers et d’un statut partagé.' },
        { title: 'Opération en réseau', desc: 'Plusieurs lieux, marques, partenaires ou lignes de service ont besoin d’une même carte opérationnelle.' },
      ],
    },
  },

  execution: {
    title: 'Systèmes d’exécution',
    intro: 'Systèmes de soutien pour structurer projets, prototypes, connaissance et travail assisté par IA.',
    items: [
      {
        title: 'Control Tower',
        desc: 'Orchestration de projets et gouvernance d’exécution assistée par IA.',
      },
      {
        title: 'ShipYard',
        desc: 'Environnement de prototypes et de tests pour outils, flux de travail et expériences de déploiement.',
      },
      {
        title: 'Architecture de connaissance',
        desc: 'Systèmes de référence pour décisions, dossiers, notes et actifs de connaissance réutilisables.',
      },
      {
        title: 'Gouvernance IA',
        desc: 'Rôles définis, points de révision, chemins d’escalade et contrôle d’exécution pour le travail assisté par IA.',
      },
    ],
  },

  cta: {
    title: 'Les systèmes doivent clarifier le travail.',
    body:
      'Le but n’est pas plus de logiciel. Le but est une façon plus claire d’opérer la pratique, de protéger le temps et de préserver l’autorité professionnelle.',
    action: 'Contact',
  },
};
