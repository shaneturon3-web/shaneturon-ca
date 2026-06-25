export const enArchitecture = {
      metadata: {
        title: 'Architecture — Shane Turon',
        description: 'System maps, technical infrastructure overview, and deployment topology.',
      },
      hero: {
        eyebrow: 'Infrastructure',
        titlePrefix: 'System',
        titleAccent: 'Architecture',
        intro:
          'How the systems connect. Visual-first, layered architecture with explicit boundaries and governance.',
      },
      layers: {
        title: 'Layered Architecture',
        items: [
          { id: 'institutional', label: 'Institutional Layer', desc: 'Public identity, portfolio surface, credibility architecture. Progressive disclosure from Trust → Capability → Depth → Doctrine.', systems: ['shaneturon.ca', 'Portfolio OS', 'Analytics'] },
          { id: 'operational', label: 'Operational Systems Layer', desc: 'Flagship products and execution infrastructure. PsyNova, Control Tower, and AI Orchestration running in production.', systems: ['PsyNova CoreSpine', 'Control Tower (10 subsystems)', 'AI Orchestration Stack'] },
          { id: 'orchestration', label: 'Orchestration Layer', desc: 'Multi-AI coordination, agent pipeline sequencing, context handshake protocols. Architect → TechnicalSpecialist → Closer → TacticalTranslator.', systems: ['Agent Registry', 'Escaleta Engine', 'Handoff Protocols', 'State-Sync'] },
          { id: 'knowledge', label: 'Knowledge Architecture Layer', desc: 'Semantic compression pipeline. Raw sessions → Grains → Cubes → Promoted Doctrine. Versioned, never-destructive, evidence-gated.', systems: ['Canon', 'Source of Truth', 'Grains Engine', 'Promotion Pipeline'] },
          { id: 'infrastructure', label: 'Infrastructure Layer', desc: 'Cloud-native deployment, edge distribution, asset storage, database systems. Multi-machine operations with zero-alternation guarantees.', systems: ['Edge Runtime', 'Object Storage', 'Database', 'Sync Engine'] },
        ],
      },
      governance: {
        title: 'Authority Hierarchy',
        intro: '6-level institutional governance with formal delegation and scope boundaries.',
        items: [
          { level: '01', name: 'Shane', role: 'Executive authority. All strategic decisions.' },
          { level: '02', name: 'SuperNova', role: 'AI coordination layer. Operational delegation.' },
          { level: '03', name: 'Control Tower', role: 'Execution orchestration. 10-subsystem framework.' },
          { level: '04', name: 'ShipYard', role: 'Build zone. Experimental runtime environment.' },
          { level: '05', name: 'PsyNova', role: 'Flagship product. Professional operational infrastructure.' },
          { level: '06', name: 'Institute', role: 'Knowledge systems. Doctrine and research.' },
        ],
      },
      psynova: {
        title: 'PsyNova Architecture',
        items: [
          { layer: 'Layer 1', name: 'CoreSpine', desc: 'Headless administrative engine. Intake, scheduling, billing, CRM/memory, orchestration.' },
          { layer: 'Layer 2', name: 'Compliance Wrapper', desc: 'Sector-specific regulatory shields. Thick (healthcare/Law 25), Light (accounting), Wellness (coaching).' },
          { layer: 'Layer 3', name: 'Operator Interface', desc: 'Role-based dashboards. Admin, Professional, Patient, Supervisor views.' },
        ],
      },
      agentPipeline: {
        title: 'Agent Pipeline',
        items: [
          { role: 'Architect', desc: 'Strategic structure' },
          { role: 'Technical Specialist', desc: 'Implementation depth' },
          { role: 'Closer', desc: 'Execution delivery' },
          { role: 'Tactical Translator', desc: 'External communication' },
        ],
      },
    };
