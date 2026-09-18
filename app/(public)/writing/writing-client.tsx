'use client';

import { BookOpen, ArrowRight, CheckCircle2, FileText, Library } from 'lucide-react';
import { useLanguage } from '@/lib/language';
import {
  PublicCard,
  PublicPageHero,
  PublicPageShell,
  PublicSection,
  PublicSectionHeader,
  PublicButton,
} from '@/components/public';

export function WritingClient() {
  const { language } = useLanguage();
  const copy = language.pages.home.publications;

  return (
    <PublicPageShell>
      <PublicSection tone="grid">
        <PublicPageHero
          eyebrow={copy.feature.eyebrow}
          title={copy.title}
          description={copy.intro}
          actions={<PublicButton href="/#writing">Back to home <ArrowRight className="ml-2 h-4 w-4" /></PublicButton>}
        />
      </PublicSection>

      <PublicSection>
        <PublicSectionHeader title={copy.feature.title} description={copy.feature.desc} />
        <div className="grid gap-5 md:grid-cols-3">
          {copy.feature.items.map((item, index) => {
            const Icon = [BookOpen, FileText, Library][index % 3];
            return (
              <PublicCard key={item} icon={Icon} title={item} description={copy.details[index % copy.details.length].desc}>
                <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-primary/80">
                  <CheckCircle2 className="h-4 w-4" /> {copy.details[index % copy.details.length].title}
                </span>
              </PublicCard>
            );
          })}
        </div>
      </PublicSection>

      <PublicSection tone="muted">
        <PublicSectionHeader title={copy.details[2].title} description={copy.details[2].desc} />
      </PublicSection>
    </PublicPageShell>
  );
}
