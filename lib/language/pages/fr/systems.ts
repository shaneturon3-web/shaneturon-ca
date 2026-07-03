export const frSystems = {
  metadata: {
    title: 'Systemes — Shane Turon',
    description:
      'Infrastructure operationnelle, systemes de pratique et mise en oeuvre modulaire de sites publics.',
  },

  hero: {
    eyebrow: 'Systemes en operation',
    title: 'Architecture',
    accent: 'de Systemes',
    intro:
      'Infrastructure operationnelle pour accueil, communication, dossiers, surfaces editoriales et mise en oeuvre modulaire.',
    pattern: ['Accueil', 'Dossiers', 'Routage', 'Publication', 'Operations', 'Gouvernance'],
    primaryCta: 'Cartographier',
    secondaryCta: 'Voir les publications',
  },

  status: {
    label: 'Systemes actifs',
    items: [
      { label: 'PsyNova', href: '#psynova' },
      { label: 'Deploiement', href: '#deployment' },
      { label: 'Execution', href: '#execution' },
    ],
  },

  psynova: {
    title: 'PsyNova comme infrastructure de pratique',
    intro:
      'PsyNova est une branche appliquee: un wrapper de pratique professionnelle avec presence publique, accueil, horaire, communication, dossiers et flux administratif.',
    groups: [
      {
        title: 'Entree publique',
        desc: 'Une surface propre pour le premier contact et l orientation avant tout flux interne.',
        items: ['Presence', 'Contact', 'Capture', 'Routage'],
      },
      {
        title: 'Flux administratif',
        desc: 'Mouvement operationnel de base depuis la demande jusqu au suivi sans exposer la machinerie privee.',
        items: ['Horaire', 'Suivi', 'Statut', 'Taches'],
      },
      {
        title: 'Dossiers et autorite',
        desc: 'Limites, permissions et documentation restent visibles pour l operateur, pas pour la surface publique.',
        items: ['Confidentialite', 'Dossiers', 'Permissions', 'Limites'],
      },
    ],
  },

  deployment: {
    title: 'Mise en oeuvre sans reconstruire tout le site',
    intro:
      'Un site client doit etre assemble depuis moteur de base, wrapper, posture de marque, contenu et modules optionnels.',
    paths: {
      title: 'Chemins de mise en oeuvre',
      items: [
        {
          title: 'Construction cartographiee',
          desc: 'Cartographier l operation actuelle, definir le premier systeme utile et batir autour de ce qui existe deja.',
        },
        {
          title: 'Surface client',
          desc: 'La surface publique fonctionne sous marque, langue, comptes et contexte operationnel du client.',
        },
        {
          title: 'Wrapper white-label',
          desc: 'L architecture reusable reste stable pendant que presentation, texte et exposition des modules changent.',
        },
        {
          title: 'Extraction vers Shelf',
          desc: 'Seuls les modeles prouves deviennent des pieces reutilisables apres avoir fonctionne dans un site reel.',
        },
      ],
    },
    shapes: {
      title: 'Formes operationnelles',
      items: [
        { title: 'Solo', desc: 'Une personne professionnelle avec peu de capacite administrative et des besoins d accueil clairs.' },
        { title: 'Petit bureau', desc: 'Une equipe compacte qui partage clients, dossiers, horaire et communication.' },
        { title: 'Multirole', desc: 'Plusieurs roles ont besoin de routage, permissions, dossiers et statut partage.' },
        { title: 'Reseau', desc: 'Plusieurs lieux, marques, partenaires ou lignes de service ont besoin d une meme carte operationnelle.' },
      ],
    },
  },

  execution: {
    title: 'Systemes d execution',
    intro: 'Des systemes de soutien structurent projets, prototypes, connaissance et travail assiste controle sans faire de l automatisation le titre public.',
    items: [
      {
        title: 'Control Tower',
        desc: 'Orchestration de projets, etat des taches, points de revision et memoire operationnelle.',
      },
      {
        title: 'ShipYard',
        desc: 'Environnement de prototypes et de tests pour outils, flux de travail et experiences de deploiement.',
      },
      {
        title: 'Architecture de connaissance',
        desc: 'Systemes de reference pour decisions, dossiers, notes et actifs de connaissance reutilisables.',
      },
      {
        title: 'Pont editorial',
        desc: 'Chemin controle entre materiel ecrit, surfaces publiques et modeles reutilisables de mise en oeuvre.',
      },
    ],
  },

  cta: {
    title: 'Les systemes doivent clarifier le travail.',
    body:
      'Le but n est pas plus de logiciel. Le but est une facon plus claire d operer, de proteger le temps et de preserver l autorite.',
    action: 'Contact',
  },
};
