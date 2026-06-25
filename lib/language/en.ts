export const en = {
  brand: {
    name: 'SHANE TURON',
    footerLine: 'Operational Systems Architecture',
  },

  nav: {
    menuToggle: 'Toggle menu',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/systems', label: 'Systems' },
      { href: '/case-files', label: 'Case Files' },
      { href: '/architecture', label: 'Architecture' },
      { href: '/lab', label: 'Lab' },
      { href: '/now', label: 'Now' },
    ],
    contact: {
      href: '/contact',
      label: 'Contact',
    },
  },

  footer: {
    links: [
      { href: '/systems', label: 'Systems' },
      { href: '/case-files', label: 'Case Files' },
      { href: '/now', label: 'Now' },
      { href: '/contact', label: 'Contact' },
    ],
  },

  statusStrip: {
    label: 'Systems Online',
    defaultStatus: 'ACTIVE',
    items: [
      { name: 'PsyNova', status: 'ACTIVE' },
      { name: 'Control Tower', status: 'ACTIVE' },
      { name: 'ShipYard', status: 'ACTIVE' },
      { name: 'Knowledge Systems', status: 'ACTIVE' },
      { name: 'AI Orchestration', status: 'ACTIVE' },
    ],
  },

  pages: {
    lab: {
      metadata: {
        title: 'Lab — Shane Turon',
        description: 'Experimental work, prototypes, and technical explorations.',
      },
      hero: {
        eyebrow: 'Experimental',
        titlePrefix: 'Lab',
        titleSuffix: '/ ShipYard',
        intro:
          'Controlled experimentation. Prototypes, AI workflows, agent systems, and automation tests. Safely separated from the institutional layer.',
      },
      project: {
        defaultStatus: 'EXPERIMENTAL',
        viewDemo: 'View Demo',
      },
      empty: {
        message: 'Lab experiments are in progress. Check back soon.',
      },
    },

    now: {
      metadata: {
        title: '/now — Shane Turon',
        description: 'Current focus, recent activity, and operational status.',
      },
      hero: {
        eyebrow: '/now',
        titlePrefix: 'Current',
        titleAccent: 'Focus',
        intro: 'Real-time operational focus. What the systems are doing right now.',
      },
      empty: {
        message: 'Status updates loading...',
      },
      note: {
        body: 'This page is updated regularly through the private intelligence dashboard.',
      },
    },

    contact: {
      metadata: {
        title: 'Contact — Shane Turon',
        description:
          'Engagement inquiry. Operational architecture, workflow intelligence, and systems consultation.',
      },
      hero: {
        eyebrow: 'Connect',
        titlePrefix: 'Engagement',
        titleAccent: 'Inquiry',
        intro: 'Operational architecture. Workflow intelligence. Systems consultation.',
      },
      success: {
        title: 'Inquiry Received',
        body: 'Thank you. A response will follow within 48 hours.',
      },
      form: {
        labels: {
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
        },
        placeholders: {
          name: 'Full name',
          email: 'email@example.com',
          subject: 'Engagement type (optional)',
          message: 'Describe the operational challenge or engagement scope...',
        },
        sending: 'Sending...',
        submit: 'Submit Inquiry',
        errorGeneric: 'Something went wrong.',
        errorNetwork: 'Network error. Please try again.',
        privacy: 'Inquiry data is stored securely. No data is shared with third parties.',
      },
    },

    architecture: {
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
    },

    home: {
      hero: {
        badge: 'Systems Operational',
        titlePrefix: 'Operational Systems',
        titleAccent: 'Architect',
        intro:
          'Designing AI-assisted execution environments, workflow intelligence systems, and operational architectures for complex organizations.',
        exploreSystems: 'Explore Systems',
        viewCaseFiles: 'View Case Files',
      },

      valueProps: {
        title: 'Structured Execution Under Complexity',
        intro: 'Evidence-driven infrastructure that recovers lost operational capacity.',
        items: [
          {
            title: 'Operational Recovery',
            desc: 'Professionals lose ~6 hours per week to administrative fragmentation. Infrastructure that gives it back.',
            metric: '6',
            metricLabel: 'hours/week recovered',
          },
          {
            title: 'Structured Execution',
            desc: 'Complex projects fail from coordination collapse, not lack of talent. Execution architectures with built-in governance.',
            metric: '10',
            metricLabel: 'orchestration subsystems',
          },
          {
            title: 'AI-Augmented Operations',
            desc: 'AI without architecture is noise. Orchestration systems where AI agents have defined roles, boundaries, and accountability.',
            metric: '14',
            metricLabel: 'coordinated AI agents',
          },
        ],
      },

      systems: {
        title: 'Active Systems',
        intro: 'Operational infrastructure currently running.',
        viewAll: 'View all',
        psynovaFeatureTags: ['CoreSpine', 'Compliance Wrapper', 'Operator Interface'],
        exploreArchitecture: 'Explore architecture',
      },

      caseFiles: {
        title: 'Case Files',
        intro: 'Structured operational analysis. Problem → Design → Results.',
        viewAll: 'View all',
        defaultCategory: 'Case File',
        process: 'Problem → Analysis → Design → Results',
      },

      now: {
        title: 'Current Focus',
        viewNow: 'View /now →',
      },

      cta: {
        title: 'Structured Operational Intelligence',
        body:
          'Infrastructure that translates operational reality into deployable workflows. Not theoretical — grounded in how work actually happens.',
        action: 'Engagement Inquiry',
      },
    },

    about: {
      metadata: {
        title: 'About — Shane Turon',
        description:
          'Operational Systems Architect. Designing execution infrastructure for professionals, clinics, and complex organizations.',
      },
      hero: {
        eyebrow: 'About',
        titlePrefix: 'Operational Systems',
        titleAccent: 'Architect',
        intro:
          'Building the operational infrastructure that professionals need but can’t articulate — the systems layer between “I have tools” and “my practice actually runs smoothly.”',
      },
      cognitive: {
        title: 'Cognitive Approach',
        paragraphs: [
          'Every problem decomposes into layers, phases, authorities, and boundaries.',
          'This isn’t “I use AI” — it’s “I architect systems where AI has governance.” Not theoretical. Grounded in operational reality. Every claim tagged NOW, PILOT, or FUTURE. Every deploy requires tunneled demo verification. Anti-vaporware by design.',
          'Systems built for cognitive clarity produce better outcomes for everyone. High signal-to-noise ratio. Information density over decorative padding. Status indicators over narrative explanations.',
        ],
      },
      capabilities: {
        title: 'Capability Domains',
        intro: 'What the systems actually do.',
        items: [
          { title: 'Systems Architecture', desc: 'Multi-layer modular systems (Spine → Wrapper → Interface) enabling scalable infrastructure across professional verticals.' },
          { title: 'AI Orchestration', desc: 'Formal protocols for multi-AI coordination with defined roles, boundaries, and accountability structures.' },
          { title: 'Compliance-Aware Design', desc: 'Healthcare, legal, and financial regulatory navigation built into architecture, not bolted on after.' },
          { title: 'Execution Engineering', desc: 'PMO-grade orchestration frameworks with agent sequencing, phase gates, and mandatory verification.' },
          { title: 'Knowledge Architecture', desc: 'Semantic compression methodologies that extract reusable, citable knowledge units from raw operational data.' },
          { title: 'Multilingual Systems', desc: 'EN/FR/ES operational surfaces designed at the architecture level, not just the translation layer.' },
        ],
      },
      principles: {
        title: 'Operating Principles',
        items: [
          'Operational coherence over feature expansion.',
          'Growth that collapses the operator is not scalable infrastructure.',
          'Clinical judgment always remains with the licensed professional.',
          'The public should never need to decode the internal ontology.',
          'Infrastructure that translates operational reality into deployable workflows.',
          'Buy the commodity, build the differentiator.',
        ],
      },
      differentiators: {
        title: 'What Makes This Different',
        items: [
          { title: 'Systems-first, not features-first', desc: 'Solves structural problems, not surface symptoms.' },
          { title: 'Built-in governance', desc: 'Handles regulated environments without bolting on compliance later.' },
          { title: 'AI as architecture', desc: 'Not “uses AI” — designed formal protocols for multi-AI coordination.' },
          { title: 'Operational realism', desc: 'NOW/PILOT/FUTURE honesty. Mandatory demo gates. Anti-vaporware.' },
        ],
      },
      cta: {
        body:
          'The systems used to manage this work are the same caliber of systems offered to clients. The portfolio IS the proof.',
        action: 'Explore the Systems',
      },
    },

    systems: {
      metadata: {
        title: 'Systems — Shane Turon',
        description:
          'Active operational systems and infrastructure. PsyNova, Control Tower, Knowledge Systems, AI Orchestration Stack.',
      },

      hero: {
        eyebrow: 'Infrastructure',
        titlePrefix: 'Active',
        titleAccent: 'Systems',
        intro:
          'Operational infrastructure currently running. Each system solves a distinct architectural problem.',
      },

      sections: {
        otherSystems: 'Other Systems',
      },

      card: {
        overview: 'Overview',
        capabilities: 'Capabilities',
        architecture: 'Architecture',
      },

      psynova: {
        architecture: {
          heading: 'Architecture',
          layers: [
            {
              label: 'Operator Interface',
              sublabel: 'Role-based dashboards',
              items: ['Admin', 'Professional', 'Patient', 'Supervisor'],
            },
            {
              label: 'Compliance Wrapper',
              sublabel: 'Sector-specific regulatory shields',
              items: ['Law 25 / PIPEDA', 'Healthcare', 'Accounting', 'Wellness'],
            },
            {
              label: 'CoreSpine',
              sublabel: 'Headless administrative engine',
              items: ['Intake', 'Scheduling', 'Billing', 'CRM / Memory', 'Orchestration'],
            },
          ],
        },

        scalePath: {
          heading: 'Scale Path',
          items: [
            { label: 'SoloSpine', desc: 'Solo professional' },
            { label: 'ClinicSpine', desc: 'Multi-provider clinic' },
            { label: 'BureauForge', desc: 'Institutional PMO' },
          ],
        },

        overview: {
          heading: 'Overview',
        },

        deploymentModes: {
          heading: 'Deployment Modes',
          items: [
            { label: 'Ghost Mode', desc: 'White-label infrastructure service' },
            { label: 'Brand Mode', desc: 'Managed platform deployment' },
          ],
        },

        languageModules: {
          heading: 'Language Modules',
          items: ['EN', 'FR', 'ES'],
        },
      },
    },
  },
};

export type EnglishLanguage = typeof en;
