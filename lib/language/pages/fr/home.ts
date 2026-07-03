export const frHome = {
  hero: {
    badge: 'Systemes en operation',
    title: 'Architecture',
    accent: 'Operationnelle',
    intro:
      'Interfaces publiques, cadres ecrits et structures fonctionnelles pour le travail complexe.',
    pattern: ['Systemes', 'Ecriture', 'Architecture', 'Publications', 'Operations', 'Structure'],
    primaryCta: 'Voir les systemes',
    secondaryCta: 'Voir les publications',
  },

  status: {
    label: 'Domaines actifs',
    items: [
      { label: 'Systemes', href: '/systems' },
      { label: 'Publications', href: '/publisher' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  branches: {
    title: 'Deux branches publiques. Une structure operationnelle.',
    intro:
      'Les systemes appliques et l ecriture publique restent separes afin que chaque branche puisse grandir sans absorber toute l identite.',
    items: [
      {
        eyebrow: 'Systemes',
        title: 'Infrastructure operationnelle',
        desc: 'Infrastructure de pratique, chemins d accueil, flux administratif, dossiers, permissions et mise en oeuvre modulaire pour le travail complexe.',
        href: '/systems',
        action: 'Voir les systemes',
        points: ['cartographiee', 'fonctionnelle', 'modulaire'],
      },
      {
        eyebrow: 'Ecriture',
        title: 'Publications et textes en travail',
        desc: 'Livres, essais, histoires, guides, notes publiques et textes longs presentes seulement quand ils sont prets a etre lus.',
        href: '/publisher',
        action: 'Voir les publications',
        points: ['selectionnee', 'lisible', 'publique'],
      },
    ],
  },

  method: {
    title: 'Comment le travail se construit',
    intro:
      'La surface publique reste simple parce que le travail sous-jacent est cartographie, modulaire et verifie contre ce qui existe reellement.',
    items: [
      {
        title: 'Cartographier le veritable objet',
        desc: 'Commencer par l operation, la publication, le public, la route et la contrainte avant de choisir la mise en page ou les outils.',
      },
      {
        title: 'Batir la plus petite piece utile',
        desc: 'Une section, une route ou un module est ajoute seulement lorsque sa fonction est claire et que ses liens actifs peuvent etre verifies.',
      },
      {
        title: 'Conserver ce qui peut etre reutilise',
        desc: 'Les modeles reussis deviennent candidats pour Shelf seulement apres avoir fonctionne dans le site public sans hypotheses propres a un client.',
      },
    ],
  },

  publications: {
    title: 'Ecriture et publications',
    intro:
      'Cette branche contient le travail ecrit destine au public sans transformer la page d accueil en catalogue ni exposer la machinerie privee des sources.',
    feature: {
      eyebrow: 'Publications',
      title: 'Livres, essais, histoires, guides et notes',
      desc: 'L ecriture est traitee comme une branche principale du site public. Les elements apparaissent quand ils sont selectionnes, lisibles et presentes proprement.',
      items: ['Livres', 'Essais', 'Histoires', 'Guides', 'Notes publiques'],
    },
    details: [
      {
        title: 'Aucun catalogue mort',
        desc: 'Les textes non selectionnes ne sont pas annonces comme publications actives.',
      },
      {
        title: 'Surface publique propre',
        desc: 'Les systemes source, etats internes et mecanismes editoriaux prives restent hors de l experience du lecteur.',
      },
      {
        title: 'Prete a s etendre',
        desc: 'La structure a maintenant une route reelle de publications et peut ajouter les pages de texte une par une.',
      },
    ],
  },

  cta: {
    title: 'Commencer par la vraie structure.',
    body:
      'La prochaine etape utile consiste a identifier la branche active, la route dont elle a besoin et la plus petite surface fonctionnelle fiable.',
    action: 'Contact',
  },
};
