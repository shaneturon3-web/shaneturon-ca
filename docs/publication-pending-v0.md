# Publication queue and blockers — V0

This is a reversible queue. No item in this file is published by the file
itself.

## Clear public candidates from Drive

### Essays

- **Sugar Cube – System Essay**
  - Drive file: `1VyLNhhgzm9xZYXaOg5bXv1GUL5CYzc3j`
  - type: plain text
  - created: `2026-04-29T18:36:31.746Z`
  - modified: `2026-04-29T18:36:31.801Z`
  - assessment: clearly reader-facing essay; no internal agent dialogue found
  - status: queued for Blogger publication

### TCSQ

- **TCSQ: The Crown in the Quarry**
  - Drive file: `12oYQ9RzPfmp9k4uKtY0EV6Lybzi2NKytsZUQHbR1iPc`
  - created: `2026-06-14T02:58:02.978Z`
  - modified: `2026-06-14T02:58:30.888Z`
  - assessment: reader-facing literary narrative; candidate for `TCSQ`
  - status: queued for Blogger publication

- **TCSQ: la traición de la reina del cantero**
  - Drive file: `1d_XT6-L5AEuEyzAuUQRRBTh2Fi-nGLPFgKUUiAqvVZg`
  - created: `2026-06-27T05:43:19.386Z`
  - modified: `2026-06-27T05:47:42.046Z`
  - assessment: title is literary, but content still requires a quick public-read check
  - status: queued pending content check

- **TCSQ: The Uncompromised Return Path**
  - Drive file: `1GFFFZUcmRN6-c84EjwXjsPloMbK6k5S9Vg5L2-hNTp8`
  - created: `2026-06-14T03:12:05.676Z`
  - modified: `2026-06-14T03:12:56.168Z`
  - assessment: reader-facing literary narrative; candidate for `TCSQ`
  - status: queued for Blogger publication

## TOM

The newest TOM results located by title are mostly engine, spine, roadmap,
field-tool, or editorial documents. They are not yet unambiguous public
literary pieces. Keep them out of Blogger until a reader-facing piece is
selected from the TOM-Full or TOM Polish folders.

## Blockers recorded

1. Blogger has no connected write API in the current tool surface.
2. The logged-in Blogger UI can be inspected, but long-form creation and label
   editing were not completed safely in this pass.
3. The Drive `essays` folder returned no direct children through the connector;
   search results are being used instead and may include files outside that
   folder.
4. Meta is available in Chrome; no Gemini browser session is currently
   available for an independent review.

## Safety rule

Do not publish system architecture, prompts, roadmaps, recovery packets,
classification reports, maps, or internal agent dialogue as essays or stories.
If a blocker appears, leave the item queued, record it here, and continue with
non-destructive reconciliation work.

## External review — Gemini, 2026-09-18

Gemini reviewed the supplied inventory in read-only mode. Its useful findings
were:

- Add **The Failure of Folders** and **Sugar Cube – Conceptual Continuity** to
  the essay candidate review, alongside **Sugar Cube – System Essay**.
- Treat **Lectures: SugarCubes, the Octonian Network, and Trans-Generational
  Responsibility** as a possible public lecture/essay, not automatically as
  an essay until its public framing is checked.
- Treat TOM's fable/`Cream` layer and reader-facing FieldTools as possible
  public interfaces; keep the mathematical, octonion, engine, and deep
  routing material in appendices or private documentation.
- Confirm **TCSQ: The Crown in the Quarry**, **The Uncompromised Return Path**,
  and **la traición de la reina del cantero** as reader-facing TCSQ candidates.
- Confirm `CreatorContextMemoirs07Jun26.docx` as a duplicate family by equal
  size (`233,573` bytes) and separate timestamps. Do not delete either copy;
  mark one obsolete only after content comparison.
- Keep dossiers, the AuADHD internal guide, PsyNova containment records,
  recovery packets, development logs, maps, spines, and protocol documents
  private.
- Gemini identified a TCSQ Drive-to-GitHub sync gap: the newer Drive material
  is not yet represented in the local `tcsq-quarry` checkout/package.

These are advisory findings, not publication authorization. Any item still
requires source inspection and a public-read decision before Blogger changes.

## External review — Meta AI, 2026-09-18

Meta reviewed the inventory in read-only mode, with GitHub access incomplete.
Its findings refine the queue rather than authorize publication:

- No retrieved TOM file was judged final reader-facing. `TOM_Engine`,
  `TOM_Spine`, `TOM_Roadmap_Handoff`, `EditorialMasterSUGARCUBES+TOM`, and
  the FieldTools remain core, derivative, or operational material. The public
  TOM layer still needs a deliberate extraction from the fable/reader layer.
- `SugarCubeTEDxConceptual07Jun26.docx` was identified as the strongest essay
  candidate, but it still has a public-safe gate and requires an editorial
  filter pass, including verification of marked citations.
- `TCSQ: The Crown in the Quarry` and `The Uncompromised Return Path` are
  reader-facing by form, but their current metadata says `Public-Safe: No`.
  They must not be published until that gate is resolved and their derivative
  class is recorded.
- `TCSQ: la traición de la reina del cantero` was not found by Meta's Drive
  search; its source location remains unresolved.
- The TCSQ Crown pair appears to be an export duplicate: same size,
  `10,059` bytes, with timestamps about 27 minutes apart.
- The Uncompromised Return Path pair differs by 26 bytes and is therefore a
  version family, not an exact duplicate.
- The Dossier `.docx` pair is an exact-size duplicate at `236,288` bytes;
  the Markdown file is a related condensed version, not necessarily the same
  content.
- `TOMClosedSpine` and `TOMDerivativesMap` have same-title Google Doc/DOCX
  families with materially different sizes; they require content diffing, not
  deletion by timestamp alone.

### Reconciled publication gate

Where Gemini classified an item as reader-facing but Meta found
`Public-Safe: No`, the stricter gate wins. The item remains queued and
unpublished until the public-safe metadata and editorial review agree.

## User publication authorization — 2026-09-18

The user authorizes publication of the reader-facing TCSQ stories and the
essays, in whichever source language is available. This supersedes the
previous editorial hold for those literary items, but does not authorize
publication of engines, prompts, spines, maps, recovery packets, dossiers,
internal dialogue, or operational documentation.

Approved publication queue:

- **Sugar Cube – System Essay**
- **SugarCubeTEDxConceptual07Jun26** after the editorial filter pass
- **TCSQ: The Crown in the Quarry**
- **TCSQ: The Uncompromised Return Path**
- **TCSQ: la traición de la reina del cantero**, if its source is recovered

Operational status: authorization recorded; Blogger write operation remains
pending because the current connected Blogger surface has not provided a safe
long-form create/edit control.

## Mail2Blogger publication pass — 2026-09-18

Mail2Blogger was enabled with **Publish email immediately**. The secret
recipient is intentionally not recorded here.

Verified public results after sending the authorized source texts:

- **Sugar Cube – System Essay** — published:
  `https://shaneturon.blogspot.com/2026/09/sugar-cube-system-essay.html`
- **TCSQ: The Uncompromised Return Path** — published:
  `https://shaneturon.blogspot.com/2026/09/tcsq-uncompromised-return-path.html`
- **TCSQ: The Crown in the Quarry** — email accepted by Gmail, but not yet
  visible in the public Blogger search/archive at verification time. Do not
  resend until Blogger's post list or sent-mail status confirms whether it was
  delayed, rejected, or created under a different slug.

No drafts were published by this pass and no duplicate resend was made.

## The Order Matters — Mail2Blogger pass — 2026-09-18

The title was initially missed because Drive contains a leading-space title
variant and several manuscript families. The selected source was the newest
reader-facing file:

- `The_Order_Matters_EDITADO_SIGLO_XX.docx`
- Drive id: `1RTL_elV2mCiO9ibZ9tNf6fH6wqaSHIl3`
- Modified: `2026-07-18T19:22:02Z`
- Size: `29,748` bytes

The file was sent through Mail2Blogger with the title:
`The Order Matters — Ensayo para fingir que el universo cabe en una servilleta manchada de salsa A1`.

Gmail accepted the message, but the public Blogger search did not yet expose
the post at verification time. No resend was made. Older manuscript drafts,
counterweights files, and working copies were not used.
