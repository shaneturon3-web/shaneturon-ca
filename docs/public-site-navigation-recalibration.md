# Public site navigation recalibration

Status: reversible migration plan, applied incrementally

## Public model

The website is a house with several rooms. The visitor should meet the person
and the work before being asked to understand the method.

```text
Home
├── Writing          read the work
├── Work             see projects and things brought into form
├── Systems          understand the connective method
├── Publisher        understand the editorial house and book architecture
├── Well Living      food, well-being, nourishment, cultivation, practice
├── About            understand the person
├── Now              see what is alive now
└── Contact          choose a way to connect
```

## Route ownership

- `Systems Architecture` belongs inside `Systems`; `Architecture` remains as a
  compatibility route while links and search signals are migrated.
- `Case Files` becomes a content format for `Work`, not a separate institution.
  The existing route remains available during migration.
- `Lab` may become `Experiments`; it stays secondary until it has real public
  experiments rather than future-state copy.
- `Now` stays personal and current, not an authority claim.
- `Publisher` is the editorial house; `Writing` is the reading surface.
- `Well Living` is the candidate umbrella for well-being and food/nutrition.
  No technical or health claims are implied by the category name.
- `Marketplace` is reserved for real books, objects, materials, products, or
  services. It must not appear as an empty shop.

## Reversible implementation rules

1. Keep legacy routes while new ownership is tested.
2. Add new navigation only when its destination has a truthful surface.
3. Add sitemap entries only for routes that are public, readable, and useful.
4. Do not redirect or delete `Architecture`, `Case Files`, `Lab`, or `Now` yet.
5. Move content before moving URLs.
6. Commit each route family separately so any step can be reverted cleanly.

## Applied in this slice

- `Publisher` is now exposed as a first-class public destination in navigation
  and footer links.
- `Publisher` is included in the sitemap.
- Existing routes remain intact; no redirect or deletion was performed.

