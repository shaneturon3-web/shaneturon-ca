export const enArchitecture = {
      metadata: {
        title: 'Architecture — Shane Turon',
        description: 'A concise map of how the public branches relate to one another.',
      },
      hero: {
        eyebrow: 'Map',
        titlePrefix: 'How the public',
        titleAccent: 'branches connect',
        intro:
          'Systems, publishing, and practice have different jobs. This map shows their relationship without exposing private implementation detail.',
      },
      layers: {
        title: 'Public structure',
        items: [
          { id: 'identity', label: 'Public identity', desc: 'The visible home: who the work is for and where a visitor begins.', systems: ['Home', 'About', 'Contact'] },
          { id: 'systems', label: 'Systems', desc: 'The operational branch: how work is mapped, supported, and made clearer.', systems: ['PsyNova', 'Implementation', 'Operations'] },
          { id: 'publishing', label: 'Publishing', desc: 'The editorial branch: selected work presented with a clear route into reading.', systems: ['Publisher', 'Writing', 'Media'] },
        ],
      },
      governance: {
        title: 'Boundaries',
        intro: 'Public pages describe outcomes and relationships, not private operating machinery.',
        items: [
          { level: '01', name: 'Public', role: 'Clear routes, readable work, and claims a visitor can inspect.' },
          { level: '02', name: 'Operational', role: 'Systems and workflows that support real work.' },
          { level: '03', name: 'Private', role: 'Internal tools and handoffs stay outside the public surface.' },
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
