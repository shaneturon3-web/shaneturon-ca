export const enPublisher = {
  metadata: {
    title: 'Writing — Shane Turon',
    description:
      'Public writing, publications, books, essays, stories, guides, jokes, and working texts.',
  },

  hero: {
    eyebrow: 'Publications Operational',
    title: 'Writing',
    accent: 'Surface',
    intro:
      'Books, essays, stories, guides, jokes, notes, and working texts presented as public material when they are ready.',
    pattern: ['Books', 'Essays', 'Stories', 'Guides', 'Notes', 'Jokes'],
    primaryCta: 'Discuss a work',
    secondaryCta: 'View Systems',
  },

  status: {
    label: 'Publication Areas',
    items: [
      { label: 'Categories', href: '#categories' },
      { label: 'Lanes', href: '#lanes' },
      { label: 'Rule', href: '#rule' },
    ],
  },

  categories: {
    title: 'Public categories',
    intro:
      'Categories are presentation lanes for readers. They are not source folders, internal status, or archive machinery.',
    items: [
      {
        eyebrow: 'Books',
        title: 'Books and long works',
        desc: 'Long-form projects, manuscript candidates, structured guides, and materials intended to stand as complete works.',
      },
      {
        eyebrow: 'Essays',
        title: 'Essays and articles',
        desc: 'Argument, reflection, explanation, public notes, white papers, and selected pieces that can be read independently.',
      },
      {
        eyebrow: 'Stories',
        title: 'Stories and fables',
        desc: 'Narrative pieces, fables, humor, character worlds, and short-form writing when prepared for public reading.',
      },
      {
        eyebrow: 'Archive',
        title: 'Archive and fragments',
        desc: 'Older public-safe material and recovered fragments held as quarry until they are selected and cleaned.',
      },
    ],
  },

  lanes: {
    title: 'How publication moves',
    intro:
      'The surface stays honest: no dead read buttons, no invisible articles, no source machinery presented as reader experience.',
    items: [
      {
        title: 'Selected works',
        desc: 'Only selected, clean, public-facing material becomes visible as a work.',
        tags: ['selected', 'public', 'readable'],
      },
      {
        title: 'Working catalogue',
        desc: 'The internal catalogue can track more than the public page shows, but the reader sees only stable presentation.',
        tags: ['catalogue', 'curated', 'controlled'],
      },
      {
        title: 'Future routes',
        desc: 'Individual work routes are added one by one when the work has clean copy, route ownership, and a real reading action.',
        tags: ['route-ready', 'one work', 'one page'],
      },
    ],
  },

  rule: {
    title: 'No dead catalogue.',
    body:
      'If a work cannot be opened, read, or explained cleanly, it should not be advertised as an active publication. The surface can be small, but it must be true.',
    action: 'Contact',
  },
};
