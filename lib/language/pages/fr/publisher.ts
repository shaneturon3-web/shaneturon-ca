export const frPublisher = {
  metadata: {
    title: 'Ecriture — Shane Turon',
    description:
      'Ecriture publique, publications, livres, essais, histoires, guides, notes et textes en travail.',
  },

  hero: {
    eyebrow: 'Publications en operation',
    title: 'Surface',
    accent: 'd Ecriture',
    intro:
      'Livres, essais, histoires, guides, notes et textes en travail presentes comme materiel public quand ils sont prets.',
    pattern: ['Livres', 'Essais', 'Histoires', 'Guides', 'Notes', 'Humour'],
    primaryCta: 'Discuter une oeuvre',
    secondaryCta: 'Voir les systemes',
  },

  status: {
    label: 'Domaines editoriaux',
    items: [
      { label: 'Categories', href: '#categories' },
      { label: 'Lignes', href: '#lanes' },
      { label: 'Regle', href: '#rule' },
    ],
  },

  categories: {
    title: 'Categories publiques',
    intro:
      'Les categories sont des lignes de presentation pour lecteurs. Elles ne sont pas des dossiers source, statuts internes ou machinerie d archive.',
    items: [
      {
        eyebrow: 'Livres',
        title: 'Livres et oeuvres longues',
        desc: 'Projets longs, manuscrits candidats, guides structures et materiels concus comme oeuvres completes.',
      },
      {
        eyebrow: 'Essais',
        title: 'Essais et articles',
        desc: 'Argument, reflexion, explication, notes publiques, documents courts et pieces selectionnees lisibles seules.',
      },
      {
        eyebrow: 'Histoires',
        title: 'Histoires et fables',
        desc: 'Pieces narratives, fables, humour, mondes de personnages et ecriture courte preparee pour lecture publique.',
      },
      {
        eyebrow: 'Archive',
        title: 'Archive et fragments',
        desc: 'Materiel public et fragments recuperes gardes comme carriere jusqu a selection et nettoyage.',
      },
    ],
  },

  lanes: {
    title: 'Comment une publication avance',
    intro:
      'La surface reste honnete: pas de boutons morts, pas d articles invisibles, pas de machinerie source presentee comme experience lecteur.',
    items: [
      {
        title: 'Oeuvres selectionnees',
        desc: 'Seul le materiel selectionne, propre et oriente public devient visible comme oeuvre.',
        tags: ['selectionnee', 'publique', 'lisible'],
      },
      {
        title: 'Catalogue de travail',
        desc: 'Le catalogue interne peut suivre plus que la page publique, mais le lecteur voit seulement une presentation stable.',
        tags: ['catalogue', 'organise', 'controle'],
      },
      {
        title: 'Routes futures',
        desc: 'Les routes de texte sont ajoutees une par une quand il existe texte propre, propriete de route et action reelle de lecture.',
        tags: ['route prete', 'un texte', 'une page'],
      },
    ],
  },

  rule: {
    title: 'Aucun catalogue mort.',
    body:
      'Si un texte ne peut pas etre ouvert, lu ou explique clairement, il ne doit pas etre annonce comme publication active. La surface peut etre petite, mais elle doit etre vraie.',
    action: 'Contact',
  },
};
