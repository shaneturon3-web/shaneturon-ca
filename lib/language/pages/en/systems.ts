export const enSystems = {
  metadata: {
    title: 'Systems — Shane Turon',
    description:
      'Operational infrastructure, practice systems, and modular public-site implementation.',
  },

  hero: {
    eyebrow: 'Systems Operational',
    title: 'Systems',
    accent: 'Architecture',
    intro:
      'Operational infrastructure for intake, communication, records, publishing surfaces, and modular implementation.',
    pattern: ['Intake', 'Records', 'Routing', 'Publishing', 'Operations', 'Governance'],
    primaryCta: 'Start a system map',
    secondaryCta: 'View Publications',
  },

  status: {
    label: 'Active Systems',
    items: [
      { label: 'PsyNova', href: '#psynova' },
      { label: 'Deployment', href: '#deployment' },
      { label: 'Execution', href: '#execution' },
    ],
  },

  psynova: {
    title: 'PsyNova as practice infrastructure',
    intro:
      'PsyNova is one applied branch: a professional-practice wrapper for public presence, intake, scheduling, communication, records, and administrative flow.',
    groups: [
      {
        title: 'Public entry',
        desc: 'A clean surface for first contact and orientation before any internal workflow begins.',
        items: ['Presence', 'Contact paths', 'Request capture', 'Routing'],
      },
      {
        title: 'Administrative flow',
        desc: 'Basic operational movement from request to follow-up without exposing private machinery.',
        items: ['Scheduling', 'Follow-up', 'Status', 'Tasks'],
      },
      {
        title: 'Records and authority',
        desc: 'Boundaries, permissions, and documentation stay visible to the operator, not to the public surface.',
        items: ['Privacy', 'Records', 'Permissions', 'Boundaries'],
      },
    ],
  },

  deployment: {
    title: 'Implementation without rebuilding the whole site',
    intro:
      'A client site should be assembled from a core engine, wrapper, brand posture, content, and optional modules.',
    paths: {
      title: 'Implementation paths',
      items: [
        {
          title: 'Mapped build',
          desc: 'Map the current operation, define the first useful system, and build around what already exists.',
        },
        {
          title: 'Client-owned surface',
          desc: 'The public surface runs under the client brand, language, accounts, and operating context.',
        },
        {
          title: 'White-label wrapper',
          desc: 'The reusable architecture stays stable while presentation, copy, and module exposure change.',
        },
        {
          title: 'Shelf extraction',
          desc: 'Only proven patterns become reusable pieces after they work in a real site.',
        },
      ],
    },
    shapes: {
      title: 'Operating shapes',
      items: [
        { title: 'Solo', desc: 'One professional with limited admin capacity and clear intake needs.' },
        { title: 'Small office', desc: 'A compact team sharing clients, records, scheduling, and communication.' },
        { title: 'Multi-role', desc: 'Several roles need routing, permissions, records, and shared status.' },
        { title: 'Networked', desc: 'Multiple locations, brands, partners, or service lines need one operating map.' },
      ],
    },
  },

  execution: {
    title: 'Execution systems',
    intro: 'Supporting systems structure projects, prototypes, knowledge, and controlled assisted work without making automation the public headline.',
    items: [
      {
        title: 'Control Tower',
        desc: 'Project orchestration, task state, review gates, and operating memory.',
      },
      {
        title: 'ShipYard',
        desc: 'Prototype and testing environment for tools, workflows, and deployment experiments.',
      },
      {
        title: 'Knowledge architecture',
        desc: 'Reference systems for decisions, records, notes, and reusable knowledge assets.',
      },
      {
        title: 'Publishing bridge',
        desc: 'A controlled path between written material, public surfaces, and reusable implementation patterns.',
      },
    ],
  },

  cta: {
    title: 'Systems should clarify the work.',
    body:
      'The goal is not more software. The goal is a clearer way to run the operation, protect time, and preserve authority.',
    action: 'Contact',
  },
};
