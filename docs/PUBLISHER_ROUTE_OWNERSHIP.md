# Publisher Route Ownership

Publisher owns the public writing catalogue routes.

## Active routes for this pass

- `/publisher`
- `/publisher/[slug]`

## Reserved route names

The following names are public category names and must not be used as work slugs:

- `books`
- `essays`
- `stories`
- `archive`

## Planned category routes

The following category routes may be implemented later if the landing page needs direct URLs for catalogue filters:

- `/publisher/books`
- `/publisher/essays`
- `/publisher/stories`
- `/publisher/archive`

They are not required for the current pass.

## Explicitly disallowed routes

- `/publisher/manuals`
- `/publisher/backstage`

Manual-like works belong under Books when presented as books. Backstage/source-gate/internal material does not belong on the clean public website surface.

## Slug route rule

The human route model may be described as `/publisher/:slug`, but the Next.js App Router implementation is:

```text
app/(public)/publisher/[slug]/page.tsx
```

## Work page rule

A work page may render clean editorial content for selected public works. It must not expose source labels, Drive/Gmail/Blogger machinery, internal status fields, source status, public safety fields, or route gate fields.

## Conflict rule

If a proposed work slug conflicts with a reserved category name, rename the slug. Do not route around the conflict with aliases.