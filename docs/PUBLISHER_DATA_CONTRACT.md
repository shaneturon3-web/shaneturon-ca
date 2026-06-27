# Publisher Data Contract

Publisher data is a catalogue of public-facing works.

The model may keep internal fields so the build system can preserve provenance and route readiness, but the public UI must not render internal/source machinery.

## Core file ownership

- `lib/publisher/types.ts` defines the data types.
- `content/publisher/catalogue.ts` owns the current catalogue records.
- `app/(public)/publisher/publisher-client.tsx` renders the clean public landing surface.
- `app/(public)/publisher/[slug]/page.tsx` renders individual work pages.

## Public display contract

The public surface may display:

- title
- subtitle
- description
- public presentation category
- public-facing status label
- tags when useful
- clean editorial content
- read action when the route exists

The public surface must not display:

- sourceType
- sourceLabel
- sourceStatus
- publicSafe
- routeEnabled
- audience
- internal/restricted status language
- Shelf/backstage/source-gate labels

## Category contract

Public categories are presentation categories:

- books
- essays
- stories
- archive

They are not ontology or production categories. Titles containing words like guide, tactical, delete, order, manual, or essay do not control routing.

## Route contract

A work may have a public work page when it has:

- a stable slug
- a public presentation category
- clean editorial description
- selected editorial content or a clean preview state

If a full text is not explicitly selected for publication, do not dump it from source systems.

## Source contract

External source systems can be used for discovery and architectural reconnaissance. They are not public content feeds unless a specific item is selected and cleanly entered into the catalogue.

## Current selected item note

`el-universo-cabe-en-una-servilleta` is entered using a short public title while retaining the longer source title internally. It is presented as an essay because that is the editorial presentation, even if the underlying form behaves as story/training material.