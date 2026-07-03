export const enHome = {
  hero: {
    badge: 'Systems Operational',
    title: 'Operational',
    accent: 'Architecture',
    intro:
      'Public interfaces, written frameworks, and working structures for complex work.',
    pattern: ['Systems', 'Writing', 'Architecture', 'Publications', 'Operations', 'Structure'],
    primaryCta: 'View Systems',
    secondaryCta: 'View Publications',
  },

  status: {
    label: 'Active Areas',
    items: [
      { label: 'Systems', href: '/systems' },
      { label: 'Publications', href: '/#writing' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  branches: {
    title: 'Two public branches. One operating spine.',
    intro:
      'Applied systems and public writing stay separated so each branch can grow without consuming the whole identity.',
    items: [
      {
        eyebrow: 'Systems',
        title: 'Operational infrastructure',
        desc: 'Practice infrastructure, intake paths, administrative flow, records, permissions, and modular implementation for complex work.',
        href: '/systems',
        action: 'View Systems',
        points: ['mapped', 'working', 'modular'],
      },
      {
        eyebrow: 'Writing',
        title: 'Publications and working texts',
        desc: 'Books, essays, stories, guides, jokes, public notes, and long-form materials presented only when they are ready to be read.',
        href: '/#writing',
        action: 'View Publications',
        points: ['selected', 'readable', 'public'],
      },
    ],
  },

  method: {
    title: 'How the work is built',
    intro:
      'The public surface stays simple because the work underneath is mapped, modular, and checked against what actually exists.',
    items: [
      {
        title: 'Map the real object',
        desc: 'Start with the operation, publication, audience, route, and constraint before choosing layout or tools.',
      },
      {
        title: 'Build the smallest working piece',
        desc: 'A section, route, or module is added only when its job is clear and its active links can be verified.',
      },
      {
        title: 'Keep what can be reused',
        desc: 'Successful patterns become shelf candidates only after they work in the public site without client-specific assumptions.',
      },
    ],
  },

  publications: {
    title: 'Writing and publications',
    intro:
      'This branch holds public-facing written work without turning the homepage into a catalogue or exposing private source machinery.',
    feature: {
      eyebrow: 'Publications',
      title: 'Books, essays, stories, jokes, guides, and notes',
      desc: 'Writing is treated as a primary branch of the public site. Items are surfaced when they are selected, readable, and cleanly presented.',
      items: ['Books', 'Essays', 'Stories', 'Guides', 'Jokes', 'Public notes'],
    },
    details: [
      {
        title: 'No dead catalogue',
        desc: 'Unreadable or unselected works are not advertised as active publications.',
      },
      {
        title: 'Clean public surface',
        desc: 'Source systems, internal status, and private editorial machinery stay out of the reader experience.',
      },
      {
        title: 'Ready to expand',
        desc: 'The structure can become a full Writing route once the catalogue and selected works are ready.',
      },
    ],
  },

  cta: {
    title: 'Start from the real structure.',
    body:
      'The next useful step is to identify the active branch, the route it needs, and the smallest working surface that can be trusted.',
    action: 'Contact',
  },
};
