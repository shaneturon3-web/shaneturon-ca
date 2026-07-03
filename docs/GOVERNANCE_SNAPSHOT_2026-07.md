# Governance Snapshot — 2026-07

Status: operational snapshot
Project: shaneturon.ca
Canonical governance location: Google Drive `/shaneturon.ca/00 Governance`
Branch: `docs-public-governance-2026-07`

## Purpose

This file gives the GitHub repository a compact operational pointer to the current governance kit. The canonical editable governance documents are native Google Docs in Google Drive. GitHub keeps the build-facing summary and project log so maintainers can orient themselves from the repo.

## Canonical Google Drive Governance Folder

`/shaneturon.ca/00 Governance`

Folder ID: `1S06L_mAap8zquX-72yt0ESpLNnBmHFU2`

## Governance Documents

1. `01 — Project Constitution — v2026-07 Original`
   - Purpose: durable laws, ownership, build rules, editorial rules, Git rules, recovery, and version lifecycle.
   - URL: https://docs.google.com/document/d/1h6S3xy_CCUxsyqsttDnZDpP1bU7DoN6Ha9I20LUKQn0/edit?usp=drivesdk

2. `02 — Public Website Architecture — v2026-07 Original`
   - Purpose: information architecture, navigation, module map, landing grammar, wrappers, Shelf contract, and deployment topology.
   - URL: https://docs.google.com/document/d/1l-X3UnHMS2nug9H0WBxuo2GJenofjlDaKcx6jvoAor0/edit?usp=drivesdk

3. `03 — Design Language — v2026-07 Original`
   - Purpose: visual rules, typography, spacing, cards, pills, icons, glow, motion, actions, accessibility, and reusable design contract.
   - URL: https://docs.google.com/document/d/1jRwghjt16aUwSBtepLUYFGR5dL3CBUd-T1iemQ5FDvU/edit?usp=drivesdk

4. `04 — Operations Manual — v2026-07 Original`
   - Purpose: Git workflow, feature policy, validation, deployment, rollback, backups, Shelf workflow, release, and consolidation.
   - URL: https://docs.google.com/document/d/1QFhMO8TEOtFXLusuZ-YxEaqhfMjR2yQDq8sv5Qq935A/edit?usp=drivesdk

5. `05 — Project Record — v2026-07 Current`
   - Purpose: append-only project log, architectural decisions, milestones, debt, roadmap, and release notes.
   - URL: https://docs.google.com/document/d/1aRmQWPi1ckZwSxWO9EBH_h9s36-CCxWR_Q9aTOUxvxw/edit?usp=drivesdk

6. `06 — References — v2026-07 Current`
   - Purpose: supporting references, research, source notes, screenshots, historic context, and future Shelf links.
   - URL: https://docs.google.com/document/d/1QTtLgFjWYXNQtWkn0UD1dqMOeO1QyBDGAEzfm22yOPI/edit?usp=drivesdk

## Binding Rules for Implementation

- `main` is the clean baseline.
- Each task gets a small feature branch and a small feature commit.
- Patch plans come before patches.
- Every implementation task starts with: files to modify, files to create, routes changed, navigation/footer changes, and risks.
- Active means functional.
- No mock infrastructure on public surfaces.
- No implementation leaks on public surfaces.
- Shane Turon is the root identity; Systems and Writing are primary branches.
- PsyNova and Publisher are applied branches, not whole-site identities.
- Google Drive owns governance and source material.
- GitHub owns executable implementation state.
- Shelf owns reusable patterns, wrappers, modules, components, tokens, examples, and reference implementations.

## Next Implementation Gate

Before editing the homepage or Publisher:

1. Read the Constitution.
2. Read the Public Website Architecture.
3. Read the Design Language.
4. Start with the required task header.
5. Implement one small feature branch.
