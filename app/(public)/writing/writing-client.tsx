'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';
import {
  PublicCard,
  PublicPageHero,
  PublicPageShell,
  PublicSection,
  PublicButton,
} from '@/components/public';

const publishedWorks = [
  {
    title: 'Sugar Cube — System Essay',
    description: 'An essay about systems, pressure, and the shapes we make under constraint.',
    href: 'https://shaneturon.blogspot.com/2026/09/sugar-cube-system-essay.html',
  },
  {
    title: 'The Uncompromised Return Path',
    description: 'A TCSQ story about consequence, return, and the cost of changing course.',
    href: 'https://shaneturon.blogspot.com/2026/09/tcsq-uncompromised-return-path.html',
  },
];

export function WritingClient() {

  return (
    <PublicPageShell>
      <PublicSection tone="grid">
        <PublicPageHero
          eyebrow="Writing"
          title="Published work"
          description="A small, verified reading shelf. More appears here only when it is ready to be read."
          actions={<PublicButton href="/#writing">Back to home <ArrowRight className="ml-2 h-4 w-4" /></PublicButton>}
        />
      </PublicSection>

      <PublicSection className="pt-12 sm:pt-16">
        <div className="grid gap-4 md:grid-cols-2">
          {publishedWorks.map((work) => (
            <PublicCard
              key={work.href}
              title={work.title}
              description={work.description}
              href={work.href}
              target="_blank"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-primary/80">
                Read on Blogger <ExternalLink className="h-4 w-4" />
              </span>
            </PublicCard>
          ))}
        </div>
      </PublicSection>

    </PublicPageShell>
  );
}
