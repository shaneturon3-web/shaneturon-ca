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
