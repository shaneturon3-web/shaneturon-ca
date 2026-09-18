# Public Site Build Law

## Purpose

This repository builds the public website for Shane Turon.

The site is not a PsyNova-only site.
The site is Shane's public presentation surface.

Primary public branches:

1. PsyNova / Systems
2. Publisher / Writing

Everything else is secondary, parked, or optional unless explicitly promoted.

The first rebuild priority is public visibility and crawler clarity. The site is
already visible in search, so broken styling, missing routes, or unclear
metadata are public-facing defects.

## Current primary navigation

Use this as the public navigation target:

- Home
- About
- Systems
- Writing
- Contact

Park for now:

- Architecture
- Case Files
- Lab
- Now

Do not delete parked routes unless instructed.
Remove them from primary nav/footer when simplifying public navigation.

Parked routes may remain crawlable when they are harmless and already public,
but primary navigation should keep the user on the five active routes above.
If a parked route becomes private, experimental, or misleading, remove it from
the sitemap before deployment.

## Core positioning

Shane is the center.

PsyNova is one applied branch.
Publisher / Writing is one applied branch.

The common thread is Shane's work:
designing, building, publishing, explaining, operating, and applying systems.

Do not make the site orbit only PsyNova.
Do not make Systems consume the whole identity.
Do not make Writing sound like filler.

## Systems rule

Systems answers:

What exists?
What can be used?
What kind of operational infrastructure can be built?

Systems may include:

- PsyNova
- professional practice infrastructure
- intake/request capture
- scheduling
- communication
- records
- permissions
- administrative flow
- future operational systems

Systems may contain architecture concepts only when public-safe:

- modular design
- adaptive implementation
- client-specific shape
- localized / tropicalized implementation
- scalable growth
- reusable modules
- swappable language/configuration packages
- expansion without changing the core

Do not create a standalone Architecture priority unless explicitly instructed.

Avoid public use of internal doctrine terms:

- CoreSpine
- Compliance Wrapper
- Operator Interface
- Ghost Mode
- Brand Mode
- internal hierarchy
- AI pipeline role names
- console language
- doctrine
- SoloSpine / ClinicSpine / BureauForge as public scale labels

## Writing / Publisher rule

Writing answers:

What has Shane written, published, edited, or developed as public material?

Writing / Publisher should support:

- books
- articles
- guides
- manuals
- readings
- white papers
- essays
- jokes
- fables
- stories
- short pieces
- public notes

Publisher is not a generic blog.
Publisher is not a private archive.
Publisher is not PsyNova.
Publisher is a primary public branch.

## Module ownership rule

Each module owns only its own files.

A module may own:

- its route
- its page component
- its client component
- its content model
- its dictionary keys
- its local presentation components

A module must not own:

- global language runtime
- unrelated routes
- arbitrary DOM rewriting
- other pages
- admin
- API
- Prisma
- analytics
- deployment config unless explicitly instructed

Language is a configuration layer, not a rescue patch.

Use stable dictionary keys.
Do not use visible English source text as translation keys.
Every public copy addition must exist in:

- English
- Spanish
- French

The language package is the first interchangeable module test. Treat it as the
model for future module extraction: explicit ownership, stable inputs, and no
side effects outside the module boundary.

## Implementation rule

Patch plans come before patches.

Every implementation task must start with:

1. Files to modify
2. Files to create
3. Routes changed
4. Navigation/footer changes
5. Risks

Do not bulk-copy old projects.
Do not import Astro.
Do not restart from old repos.
Do not rewrite unrelated pages.
Do not patch broadly.

Prefer small, inspectable Next.js changes that preserve the clean public
foundation. Pull reusable ideas from PsyNova V2 or Shelf only after identifying
the module boundary and confirming the website core does not need to absorb the
old project's structure.

## Public route rule

Public routes must be deliberate.

Primary routes:

- `/`
- `/about`
- `/systems`
- `/writing`
- `/contact`

Crawler support:

- `app/sitemap.ts` must list intended public routes.
- `app/robots.ts` must point to `https://shaneturon.ca/sitemap.xml`.
- Each primary route needs route-level metadata when practical.
- Metadata should describe the public job of the page, not internal doctrine.

When adding or promoting a public route, check all of:

1. Navigation
2. Footer
3. Sitemap
4. Route metadata
5. Mobile rendering
6. Search-facing copy

## Visual rule

Preserve useful visual language from the clean Next.js public foundation:

- dark restrained layout
- green accent
- strong spacing
- cards
- pills
- modular sections
- calm technical feel

Do not import the old Astro blue PsyNova prototype.
That prototype is not a design source for this public site.

If the site suddenly looks unstyled, suspect local build/dev state before
rewriting UI. Do not run `next build` against the same `.next` directory while
`next dev` is serving. Stop the dev server, run the build, then restart dev.
After restart, verify CSS and JS assets return `200`, not just that HTML loads.

## Editorial rule

Public material must be:

- calm
- precise
- useful
- restrained
- clear about what it does
- clear about why it matters
- clear about the next action

Avoid:

- internal doctrine
- self-explaining systems
- overbuilt theory
- vague claims
- excessive architecture language
- pages that try to carry the entire universe

One block, one job.

## Git rule

Main is the clean baseline.

Each task should become a small feature branch and a small feature commit.

Examples:

- feat(public): add writing publisher page
- feat(public): simplify public navigation
- feat(public): restore systems visual pattern
- feat(public): add psynova module
- fix(public): remove architecture from nav
- docs(public): add public site build law

Rollback must stay simple.

Before closing a branch:

1. `git status --short --branch` must be understood.
2. No untracked work should remain unless intentionally parked.
3. `npm run build` should pass after stopping the dev server.
4. Restart preview with `npm run dev -- --hostname 0.0.0.0 --port 3000` when mobile review is needed.
5. Verify at least the homepage, `/systems`, `/writing`, `/robots.txt`, and `/sitemap.xml`.
6. Commit documentation updates separately when they capture operating law.
7. Push only after the local branch is coherent and the user approves publication.

## Current stage note

The July 2026 public recovery branch established:

- crawlable public Writing route
- route metadata for Writing and Systems
- aligned crawler map for public routes
- modular Systems copy describing reusable expansion
- local preview reachable on the LAN for mobile review
- plotter experiments moved out of the website repo into Shelf

Known follow-up backlog:

- revise public text
- add public-safe VOIP module language for VoIP.ms and Telnyx
- keep SIP credentials and operational secrets out of the public website
