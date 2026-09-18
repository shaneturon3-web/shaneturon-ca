# Public site content audit

Status: review baseline

This is a structural audit of the current public website. It is not a deletion
list. Literary source material remains outside this pass until its canonical
home and public status are confirmed.

## Proposed authority map

| Surface | One public job | Current risk | Direction |
| --- | --- | --- | --- |
| `/` | orient a first-time visitor and route them to real branches | repeats Systems, Writing, and Publisher claims | keep short; link out rather than explain every branch |
| `/about` | explain who Shane is and how claims are separated by maturity | repeats Systems language and internal operating doctrine | retain identity, boundaries, and proof posture only |
| `/systems` | show active operational systems and their public relevance | overlaps Architecture and uses internal product language | make this the public systems index |
| `/architecture` | explain the visual/system map for readers who need structure | currently reads like an internal platform inventory | either narrow to a diagram-led explainer or park it |
| `/publisher` | act as the editorial home and publishing index | currently says “Writing” and advertises future routes | rename copy to Publishing; show only real editorial branches |
| `/writing` | provide the reading surface for selected works | currently acts as a placeholder and duplicates Publisher | keep as reader-facing work index/detail surface; feed it from Publisher records |
| `/case-files` | present verified public case studies | empty-state wording can weaken authority | keep only when a case file is readable and real; otherwise park from primary nav |
| `/lab` | show public experiments with a defined result | “experiments in progress” is a weak placeholder | park or replace with named, readable experiments |
| `/now` | show current public focus | dynamic status can imply activity without evidence | keep only with maintained records; otherwise remove from primary nav |
| `/contact` | provide one clear next action | currently mixes several service descriptions | retain and simplify |

## First-pass cuts

These phrases should not appear as public authority claims unless they link to
something a visitor can inspect:

- “future routes” and “check back soon” placeholders;
- internal orchestration roles and pipeline names;
- claims that systems are “in production” without a public proof surface;
- duplicate explanations of modularity, operational architecture, or publishing;
- status language that describes private Codex/Shelf operations as public products.

## Editorial vocabulary

Prefer concrete public language:

- `Publishing` for the editorial family;
- `Writing` for the reading surface or selected works;
- `Systems` for active operational work;
- `Architecture` only when the page explains relationships, not as another systems index;
- `Shelf` only as an internal operational handoff surface, never as public site copy.

Avoid exposing Codex, Shelf, internal branch names, private orchestration, or
unfinished module names to public visitors.

## Design audit questions

Before changing CSS, review every long page against these questions:

1. Does each section add a new claim or action?
2. Is the section's authority unique, or does another route own it?
3. Is the visual treatment helping the reader scan, or only making a placeholder look official?
4. Can a visitor reach the promised content in one more click?
5. Does the page still make sense when the data collection is empty?

Long pages are acceptable when they behave like a coherent reading surface.
Repeated claims, empty cards, and future-state banners are not content depth;
they are authority debt.

## Safe implementation order

1. Normalize public labels and remove internal wording from English first.
2. Apply the same semantic changes to Spanish and French without machine-like literal translations.
3. Reduce homepage repetition and make it a router.
4. Make Publisher the editorial home and Writing the reader surface.
5. Park or remove empty routes from primary navigation.
6. Recheck metadata, sitemap, links, and browser rendering.

