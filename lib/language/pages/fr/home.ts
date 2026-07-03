export const frHome = {
  hero: {
    badge: 'Systèmes actifs',
    title: 'Architecture opérationnelle pour le travail complexe',
    intro:
      'Interfaces publiques, cadres écrits et structures fonctionnelles pour rendre le travail complexe plus opérable.',
    pattern: ['Systèmes', 'Écriture', 'Architecture', 'Publications', 'Opérations', 'Structure'],
    primaryCta: 'Voir les systèmes',
    secondaryCta: 'Voir les publications',
  },

  status: {
    label: 'Domaines actifs',
    items: [
      { label: 'Systèmes', href: '/systems' },
      { label: 'Publications', href: '/#writing' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  branches: {
    title: 'Deux branches publiques. Une structure opérationnelle.',
    intro:
      'Les systèmes appliqués et l’écriture publique restent séparés afin que chaque branche puisse grandir sans absorber toute l’identité.',
    items: [
      {
        eyebrow: 'Systèmes',
        title: 'Infrastructure opérationnelle',
        desc: 'Infrastructure de pratique, chemins d’accueil, flux administratif, dossiers, permissions et mise en œuvre modulaire pour le travail complexe.',
        href: '/systems',
        action: 'Voir les systèmes',
        points: ['cartographiée', 'fonctionnelle', 'modulaire'],
      },
      {
        eyebrow: 'Écriture',
        title: 'Publications et textes en travail',
        desc: 'Livres, essais, histoires, guides, blagues, notes publiques et textes longs présentés seulement lorsqu’ils sont prêts à être lus.',
        href: '/#writing',
        action: 'Voir les publications',
        points: ['sélectionnée', 'lisible', 'publique'],
      },
    ],
  },

  method: {
    title: 'Comment le travail se construit',
    intro:
      'La surface publique reste simple parce que le travail sous-jacent est cartographié, modulaire et vérifié contre ce qui existe réellement.',
    items: [
      {
        title: 'Cartographier le véritable objet',
        desc: 'Commencer par l’opération, la publication, le public, la route et la contrainte avant de choisir la mise en page ou les outils.',
      },
      {
        title: 'Bâtir la plus petite pièce utile',
        desc: 'Une section, une route ou un module est ajouté seulement lorsque sa fonction est claire et que ses liens actifs peuvent être vérifiés.',
      },
      {
        title: 'Conserver ce qui peut être réutilisé',
        desc: 'Les modèles réussis deviennent candidats pour Shelf seulement après avoir fonctionné dans le site public sans hypothèses propres à un client.',
      },
    ],
  },

  publications: {
    title: 'Écriture et publications',
    intro:
      'Cette branche contient le travail écrit destiné au public sans transformer la page d’accueil en catalogue ni exposer la machinerie privée des sources.',
    feature: {
      eyebrow: 'Publications',
      title: 'Livres, essais, histoires, blagues, guides et notes',
      desc: 'L’écriture est traitée comme une branche principale du site public. Les éléments apparaissent lorsqu’ils sont sélectionnés, lisibles et présentés proprement.',
      items: ['Livres', 'Essais', 'Histoires', 'Guides', 'Blagues', 'Notes publiques'],
    },
    details: [
      {
        title: 'Aucun catalogue mort',
        desc: 'Les œuvres illisibles ou non sélectionnées ne sont pas annoncées comme publications actives.',
      },
      {
        title: 'Surface publique propre',
        desc: 'Les systèmes source, états internes et mécanismes éditoriaux privés restent hors de l’expérience du lecteur.',
      },
      {
        title: 'Prête à s’étendre',
        desc: 'La structure peut devenir une route Écriture complète lorsque le catalogue et les œuvres sélectionnées seront prêts.',
      },
    ],
  },

  cta: {
    title: 'Commencer par la vraie structure.',
    body:
      'La prochaine étape utile consiste à identifier la branche active, la route dont elle a besoin et la plus petite surface fonctionnelle fiable.',
    action: 'Contact',
  },
};
