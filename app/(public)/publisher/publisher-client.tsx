'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileText,
  Layers,
  Newspaper,
  PenLine,
  ScrollText,
  ShieldCheck,
  Smile,
} from 'lucide-react';
import {
  publisherCandidateItems,
  publisherParkedItems,
  publisherShelfBuckets,
} from '@/content/publisher/catalogue';
import type { PublisherContentItem } from '@/lib/publisher/types';
import { useLanguage } from '@/lib/language';
import {
  PublicButton,
  PublicCard,
  PublicCtaBand,
  PublicPageHero,
  PublicPageShell,
  PublicSection,
  PublicSectionHeader,
  PublicStatusPill,
} from '@/components/public';

const kindIcons = {
  essay: PenLine,
  article: Newspaper,
  guide: ClipboardList,
  manual: ClipboardList,
  book: BookOpen,
  chapter: BookOpen,
  story: ScrollText,
  fable: ScrollText,
  joke: Smile,
  'white-paper': FileText,
  lecture: Layers,
  note: FileText,
  infographic: ShieldCheck,
  'project-brief': ShieldCheck,
};

function labelize(value: string | boolean) {
  if (typeof value === 'boolean') return value ? 'yes' : 'no';
  return value.replace(/-/g, ' ');
}

function CatalogueCard({ item, labels }: { item: PublisherContentItem; labels: Record<string, string> }) {
  const Icon = kindIcons[item.kind] ?? FileText;

  return (
    <PublicCard
      icon={Icon}
      eyebrow={labelize(item.kind)}
      title={item.title}
      description={item.description}
      href={item.routeEnabled ? item.href : undefined}
    >
      <div className="space-y-4">
        {item.subtitle ? <p className="text-sm text-white/55">{item.subtitle}</p> : null}

        <div className="flex flex-wrap gap-2">
          <PublicStatusPill tone="muted">
            {labels.status}: {labelize(item.status)}
          </PublicStatusPill>
          <PublicStatusPill tone="muted">
            {labels.publicSafe}: {labelize(item.publicSafe)}
          </PublicStatusPill>
          <PublicStatusPill tone="muted">
            {labels.audience}: {labelize(item.audience)}
          </PublicStatusPill>
          {!item.routeEnabled ? (
            <PublicStatusPill tone="muted">{labels.routeDisabled}</PublicStatusPill>
          ) : null}
        </div>

        <div className="border-t border-white/10 pt-4 text-xs uppercase tracking-[0.18em] text-white/40">
          {labels.source}: {labelize(item.sourceType)} · {labelize(item.sourceStatus)}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <PublicStatusPill key={tag} tone="muted">
              {tag}
            </PublicStatusPill>
          ))}
        </div>
      </div>
    </PublicCard>
  );
}

export function PublisherClient() {
  const { language } = useLanguage();
  const copy = language.pages.publisher;

  return (
    <PublicPageShell>
      <PublicSection>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PublicPageHero
            eyebrow={copy.hero.eyebrow}
            title={copy.hero.title}
            description={copy.hero.intro}
          />
        </motion.div>
      </PublicSection>

      <PublicSection tone="muted">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.catalogue.title}
            description={copy.catalogue.intro}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {publisherCandidateItems.map((item) => (
              <CatalogueCard key={item.slug} item={item} labels={copy.labels} />
            ))}
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader title={copy.shelf.title} description={copy.shelf.intro} />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publisherShelfBuckets.map((bucket) => (
              <PublicCard
                key={bucket.id}
                icon={ShieldCheck}
                eyebrow={labelize(bucket.target)}
                title={bucket.title}
                description={bucket.description}
              />
            ))}
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection tone="muted">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader title={copy.forms.title} description={copy.forms.intro} />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.forms.items.map((item, index) => {
              const icons = [BookOpen, Newspaper, ClipboardList, ScrollText, FileText, ShieldCheck];
              const Icon = icons[index] ?? FileText;

              return (
                <PublicCard
                  key={item.title}
                  icon={Icon}
                  title={item.title}
                  description={item.desc}
                />
              );
            })}
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title="Parked / internal signals"
            description="These records shape the catalogue model but are not public routes. They prevent private, raw, or project-linked material from leaking into the site."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {publisherParkedItems.slice(0, 3).map((item) => (
              <CatalogueCard key={item.slug} item={item} labels={copy.labels} />
            ))}
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection container="default">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicCtaBand
            title={copy.cta.title}
            description={copy.cta.body}
            action={
              <PublicButton href="/contact">
                {copy.cta.action} <ArrowRight className="ml-2 h-4 w-4" />
              </PublicButton>
            }
          />
        </motion.div>
      </PublicSection>
    </PublicPageShell>
  );
}
