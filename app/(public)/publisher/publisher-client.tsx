'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Archive,
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileText,
  PenLine,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { publisherCatalogue, publisherShelfBuckets } from '@/content/publisher/catalogue';
import type { PublisherContentItem } from '@/lib/publisher/types';
import { useLanguage } from '@/lib/language';
import {
  PublicButton,
  PublicCard,
  PublicCtaBand,
  PublicPageShell,
  PublicSection,
  PublicSectionHeader,
  PublicStatusPill,
} from '@/components/public';

const surfaceIcons = {
  books: BookOpen,
  essays: PenLine,
  manuals: ClipboardList,
  stories: ScrollText,
  archive: Archive,
};

const kindIcons = {
  essay: PenLine,
  article: FileText,
  guide: ClipboardList,
  manual: ClipboardList,
  book: BookOpen,
  chapter: BookOpen,
  story: ScrollText,
  fable: ScrollText,
  joke: Sparkles,
  'white-paper': FileText,
  lecture: FileText,
  note: FileText,
  infographic: ShieldCheck,
  'project-brief': ShieldCheck,
};

const visitorSurfaceSlugs = {
  books: ['the-order-matters-full'],
  essays: ['failure-of-folders'],
  manuals: ['tom-tactical', 'adhd-public-guide-candidate'],
  stories: ['inspector-truffle-crime-syndicate', 'stories-archive'],
  archive: ['stories-archive', 'psynova-infographic'],
};

type SurfaceId = keyof typeof visitorSurfaceSlugs;

type SurfaceCopy = {
  id: SurfaceId;
  title: string;
  desc: string;
  eyebrow: string;
};

function labelize(value: string | boolean) {
  if (typeof value === 'boolean') return value ? 'available' : 'held';
  return value.replace(/-/g, ' ');
}

function publicBadge(item: PublisherContentItem) {
  if (item.publicStatus === 'public') return 'available';
  if (item.status === 'candidate' || item.status === 'reviewed') return 'in review';
  if (item.status === 'parked') return 'in development';
  if (item.status === 'internal' || item.status === 'restricted') return 'not listed';
  return labelize(item.status);
}

function findItems(surface: SurfaceId) {
  const slugs = visitorSurfaceSlugs[surface];
  return slugs
    .map((slug) => publisherCatalogue.find((item) => item.slug === slug))
    .filter((item): item is PublisherContentItem => Boolean(item));
}

function WorkListItem({
  item,
  isActive,
  onSelect,
}: {
  item: PublisherContentItem;
  isActive: boolean;
  onSelect: () => void;
}) {
  const Icon = kindIcons[item.kind] ?? FileText;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        isActive
          ? 'border-primary/45 bg-primary/10 text-white'
          : 'border-white/10 bg-white/[0.03] text-white/70 hover:border-primary/25 hover:text-white'
      }`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`mt-1 h-5 w-5 ${isActive ? 'text-primary' : 'text-white/35'}`} />
        <div className="min-w-0">
          <div className="font-semibold">{item.title}</div>
          {item.subtitle ? <div className="mt-1 text-sm text-white/45">{item.subtitle}</div> : null}
        </div>
      </div>
    </button>
  );
}

function WorkDetail({ item }: { item: PublisherContentItem }) {
  const Icon = kindIcons[item.kind] ?? FileText;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="rounded-xl border border-primary/25 bg-primary/10 p-2 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{labelize(item.kind)}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
          {item.subtitle ? <p className="mt-2 text-sm text-white/55">{item.subtitle}</p> : null}
        </div>
      </div>

      <p className="text-sm leading-7 text-white/65">{item.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <PublicStatusPill tone="muted">{publicBadge(item)}</PublicStatusPill>
        {item.series ? <PublicStatusPill tone="muted">{item.series}</PublicStatusPill> : null}
        {!item.routeEnabled ? <PublicStatusPill tone="muted">preview only</PublicStatusPill> : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.slice(0, 5).map((tag) => (
          <PublicStatusPill key={tag} tone="muted">
            {tag}
          </PublicStatusPill>
        ))}
      </div>
    </div>
  );
}

export function PublisherClient() {
  const { language } = useLanguage();
  const copy = language.pages.publisher;
  const surfaces = copy.surfaces.items as SurfaceCopy[];
  const [activeSurface, setActiveSurface] = useState<SurfaceId>('books');
  const activeItems = useMemo(() => findItems(activeSurface), [activeSurface]);
  const [activeSlug, setActiveSlug] = useState<string>('the-order-matters-full');

  const activeCopy = surfaces.find((surface) => surface.id === activeSurface) ?? surfaces[0];
  const activeItem =
    activeItems.find((item) => item.slug === activeSlug) ?? activeItems[0] ?? publisherCatalogue[0];

  function selectSurface(surface: SurfaceId) {
    const items = findItems(surface);
    setActiveSurface(surface);
    setActiveSlug(items[0]?.slug ?? 'failure-of-folders');
  }

  return (
    <PublicPageShell>
      <PublicSection tone="muted">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl border border-primary/20 bg-black/30 p-5 shadow-2xl shadow-black/20 md:p-7">
            <div className="mb-5 flex items-start gap-4 border-b border-white/10 pb-5">
              <div className="rounded-2xl border border-primary/25 bg-primary/10 p-3 text-primary">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-semibold text-white md:text-4xl">{copy.console.title}</h1>
                  <PublicStatusPill>{copy.console.status}</PublicStatusPill>
                </div>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">{copy.console.subtitle}</p>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.42fr_0.78fr_1.25fr]">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {copy.surfaces.title}
                </p>

                <div className="space-y-2">
                  {surfaces.map((surface) => {
                    const Icon = surfaceIcons[surface.id] ?? FileText;
                    const isActive = surface.id === activeSurface;
                    const count = visitorSurfaceSlugs[surface.id].length;

                    return (
                      <button
                        key={surface.id}
                        type="button"
                        onClick={() => selectSurface(surface.id)}
                        className={`flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left transition ${
                          isActive
                            ? 'border-primary/45 bg-primary/10 text-white'
                            : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-primary/25 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-white/35'}`} />
                          <span className="font-semibold">{surface.title}</span>
                        </span>
                        <span className="font-mono text-xs text-white/35">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                    {activeCopy.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{activeCopy.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/55">{activeCopy.desc}</p>
                </div>

                <div className="space-y-2">
                  {activeItems.map((item) => (
                    <WorkListItem
                      key={item.slug}
                      item={item}
                      isActive={item.slug === activeItem.slug}
                      onSelect={() => setActiveSlug(item.slug)}
                    />
                  ))}
                </div>
              </div>

              <WorkDetail item={activeItem} />
            </div>
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader title={copy.operating.title} description={copy.operating.intro} />

          <div className="grid gap-5 md:grid-cols-3">
            {copy.operating.items.map((item: { title: string; desc: string }, index: number) => {
              const icons = [ShieldCheck, Archive, ArrowRight];
              const Icon = icons[index] ?? ShieldCheck;

              return (
                <PublicCard key={item.title} icon={Icon} title={item.title} description={item.desc} />
              );
            })}
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection tone="muted">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader title={copy.archive.title} description={copy.archive.intro} />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publisherShelfBuckets.map((bucket) => (
              <PublicCard
                key={bucket.id}
                icon={Archive}
                eyebrow={copy.archive.eyebrow}
                title={bucket.title}
                description={bucket.description}
              />
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
