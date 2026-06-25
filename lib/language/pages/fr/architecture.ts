export const frArchitecture = {
  metadata: {
    title: 'Architecture — Shane Turon',
    description: 'Cartes système, aperçu de l’infrastructure technique et topologie de déploiement.',
  },
  hero: {
    eyebrow: 'Infrastructure',
    titlePrefix: 'Architecture',
    titleAccent: 'Système',
    intro:
      'Comment les systèmes se connectent. Architecture visuelle par couches avec limites et gouvernance explicites.',
  },
  layers: {
    title: 'Architecture par Couches',
    items: [
      { id: 'institutional', label: 'Couche Institutionnelle', desc: 'Identité publique, surface portfolio, architecture de crédibilité. Divulgation progressive de Confiance → Capacité → Profondeur → Doctrine.', systems: ['shaneturon.ca', 'Portfolio OS', 'Analytics'] },
      { id: 'operational', label: 'Couche de Systèmes Opérationnels', desc: 'Produits principaux et infrastructure d’exécution. PsyNova, Control Tower et AI Orchestration en production.', systems: ['PsyNova CoreSpine', 'Control Tower (10 sous-systèmes)', 'AI Orchestration Stack'] },
      { id: 'orchestration', label: 'Couche d’Orchestration', desc: 'Coordination multi-IA, séquençage de pipelines d’agents, protocoles de passage de contexte. Architect → TechnicalSpecialist → Closer → TacticalTranslator.', systems: ['Agent Registry', 'Escaleta Engine', 'Handoff Protocols', 'State-Sync'] },
      { id: 'knowledge', label: 'Couche d’Architecture de Connaissance', desc: 'Pipeline de compression sémantique. Sessions brutes → Grains → Cubes → Doctrine Promue. Versionné, non destructif, fondé sur preuves.', systems: ['Canon', 'Source of Truth', 'Grains Engine', 'Promotion Pipeline'] },
      { id: 'infrastructure', label: 'Couche Infrastructure', desc: 'Déploiement cloud-native, distribution edge, stockage d’actifs et systèmes de base de données. Opérations multi-machines avec garanties de zéro alternance.', systems: ['Edge Runtime', 'Object Storage', 'Database', 'Sync Engine'] },
    ],
  },
  governance: {
    title: 'Hiérarchie d’Autorité',
    intro: 'Gouvernance institutionnelle à 6 niveaux avec délégation formelle et limites de portée.',
    items: [
      { level: '01', name: 'Shane', role: 'Autorité exécutive. Toutes les décisions stratégiques.' },
      { level: '02', name: 'SuperNova', role: 'Couche de coordination IA. Délégation opérationnelle.' },
      { level: '03', name: 'Control Tower', role: 'Orchestration d’exécution. Cadre de 10 sous-systèmes.' },
      { level: '04', name: 'ShipYard', role: 'Zone de construction. Environnement runtime expérimental.' },
      { level: '05', name: 'PsyNova', role: 'Produit principal. Infrastructure opérationnelle professionnelle.' },
      { level: '06', name: 'Institute', role: 'Systèmes de connaissance. Doctrine et recherche.' },
    ],
  },
  psynova: {
    title: 'Architecture PsyNova',
    items: [
      { layer: 'Couche 1', name: 'CoreSpine', desc: 'Moteur administratif headless. Admission, planification, facturation, CRM/mémoire, orchestration.' },
      { layer: 'Couche 2', name: 'Compliance Wrapper', desc: 'Protections réglementaires par secteur. Thick (santé/Law 25), Light (comptabilité), Wellness (coaching).' },
      { layer: 'Couche 3', name: 'Operator Interface', desc: 'Tableaux de bord par rôle. Vues Admin, Professionnel, Patient, Superviseur.' },
    ],
  },
  agentPipeline: {
    title: 'Pipeline d’Agents',
    items: [
      { role: 'Architect', desc: 'Structure stratégique' },
      { role: 'Technical Specialist', desc: 'Profondeur d’implémentation' },
      { role: 'Closer', desc: 'Livraison d’exécution' },
      { role: 'Tactical Translator', desc: 'Communication externe' },
    ],
  },
};
