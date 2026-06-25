export const frCaseFiles = {
  metadata: {
    title: 'Cas — Shane Turon',
    description:
      'Analyse opérationnelle structurée. Problème → Contraintes → Analyse → Conception → Résultats → Leçons.',
  },
  list: {
    hero: {
      eyebrow: 'Analyse',
      titlePrefix: 'Cas',
      titleAccent: 'Opérationnels',
      intro:
        'Analyse opérationnelle structurée. Chaque cas suit le format : Problème → Contraintes → Analyse → Conception → Résultats → Leçons.',
    },
    defaultCategory: 'Cas',
    empty: 'Les cas sont en cours de compilation. Revenez bientôt.',
  },
  detail: {
    back: 'Retour aux Cas',
    defaultCategory: 'Cas',
    sections: [
      { key: 'problem', label: 'Problème' },
      { key: 'constraints', label: 'Contraintes' },
      { key: 'analysis', label: 'Analyse Systèmes' },
      { key: 'design', label: 'Conception Architecturale' },
      { key: 'results', label: 'Résultat Opérationnel' },
      { key: 'lessons', label: 'Leçons Apprises' },
    ],
  },
};
