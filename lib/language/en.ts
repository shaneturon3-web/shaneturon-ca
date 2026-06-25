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
