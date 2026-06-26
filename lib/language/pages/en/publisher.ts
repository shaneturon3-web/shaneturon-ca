export const enPublisher = {
  metadata: {
    title: 'Publisher — Shane Turon',
    description:
      'Publisher is Shane Turon’s public catalogue for editorial works, source-aware archives, and public-safe writing candidates.',
  },

  hero: {
    eyebrow: 'Publisher',
    title: 'Published work, held before release.',
    intro:
      'Publisher is the controlled catalogue for essays, books, guides, stories, fables, lectures, white papers, public notes, and source-aware work in development.',
  },

  catalogue: {
    title: 'Catalogue candidates',
    intro:
      'The catalogue shows what exists, what may become public, and what must stay parked until review. Existence is not publication permission.',
    empty: 'No catalogue entries are currently enabled for public routing.',
  },

  shelf: {
    title: 'Shelf logic',
    intro:
      'Shelf protects the site from becoming too small, too raw, or too public. Material enters Shelf before it enters Publisher or Systems unless already approved.',
  },

  forms: {
    title: 'Supported containers',
    intro:
      'Publisher is not a generic blog. It is a set of public containers with source status, public-safety gates, and future route readiness.',
    items: [
      {
        title: 'Books and manuscripts',
        desc: 'Long-form works such as TOM, companion material, and closed-spine manuscripts that need order before public routing.',
      },
      {
        title: 'Essays and articles',
        desc: 'Public pieces that can carry one argument, observation, or system insight without exposing the whole archive.',
      },
      {
        title: 'Guides and manuals',
        desc: 'Practical material for repeatable use, transfer, public teaching, or field operation.',
      },
      {
        title: 'Stories and fables',
        desc: 'Narrative containers for ideas that work better through encounter than explanation.',
      },
      {
        title: 'White papers and lectures',
        desc: 'Structured material for deeper argument, public proof, talks, and reference.',
      },
      {
        title: 'Assets and infographics',
        desc: 'Visual or project-linked content that must stay distinct from the project it describes.',
      },
    ],
  },

  labels: {
    routeDisabled: 'Route disabled',
    publicSafe: 'Public-safe',
    source: 'Source',
    status: 'Status',
    audience: 'Audience',
  },

  cta: {
    title: 'Build from the catalogue, not the quarry.',
    body:
      'The next step is to classify source material, promote only public-safe entries, and keep Blogger, Drive, Gmail, and old repo material behind the Publisher gate.',
    action: 'Contact Shane',
  },
};
