'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Archive,
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileText,
  Layers,
  Library,
  Newspaper,
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
  PublicPageHero,
  PublicPageShell,
  PublicSection,
  PublicSectionHeader,
  PublicStatusPill,
} from '@/components/public';

const surfaceIcons = {
  works: BookOpen,
  series: Layers,
  notes: PenLine,
  manuals: ClipboardList,
  archive: Archive,
};

const kindIcons = {
  essay: PenLine,
  article: Newspaper,
  guide: ClipboardList,
  manual: ClipboardList,
  book: BookOpen,
  chapter: BookOpen,
  story: ScrollText,
  fable: ScrollText,
  joke: Sparkles,
  'white-paper': FileText,
  lecture: Library,
  note: FileText,
  infographic: ShieldCheck,
  'project-brief': ShieldCheck,
};

const visitorSurfaceSlugs = {
  works: ['failure-of-folders', 'sugar-cubes-white-paper', 'adhd-public-guide-candidate'],
  series: ['the-order-matters-full', 'tom-tactical', 'sugar-cubes-octonian'],
  notes: ['failure-of-folders', 'inspector-truffle-crime-syndicate'],
  manuals: ['tom-tactical', 'sugar-cubes-white-paper', 'adhd-public-guide-candidate'],
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

function CatalogueTile({ item }: { item: PublisherContentItem }) {
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
          <PublicStatusPill tone="muted">{publicBadge(item)}</PublicStatusPill>
          {item.series ? <PublicStatusPill tone="muted">{item.series}</PublicStatusPill> : null}
          {!item.routeEnabled ? <PublicStatusPill tone="muted">preview only</PublicStatusPill> : null}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.tags.slice(0, 4).map((tag) => (
            <PublicStatusPill key={tag} tone="muted">
              {tag}
            </PublicStatusPill>
          ))}
        </div>
      </div>
    </PublicCard>
  );
}

function findItems(surface: SurfaceId) {
  const slugs = visitorSurfaceSlugs[surface];
  return slugs
    .map((slug) => publisherCatalogue.find((item) => item.slug === slug))
    .filter((item): item is PublisherContentItem => Boolean(item));
}

export function PublisherClient() {
  const { language } = useLanguage();
  const copy = language.pages.publisher;
  const surfaces = copy.surfaces.items as SurfaceCopy[];
  const [activeSurface, setActiveSurface] = useState<SurfaceId>('works');

  const activeCopy = surfaces.find((surface) => surface.id === activeSurface) ?? surfaces[0];
  const activeItems = useMemo(() => findItems(activeSurface), [activeSurface]);
  const ActiveIcon = surfaceIcons[activeSurface] ?? BookOpen;

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
          className="space-y-8"
        >
          <div className="rounded-3xl border border-primary/20 bg-black/30 p-5 shadow-2xl shadow-black/20 md:p-7">
            <div className="mb-6 flex flex-col gap-5 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-primary/25 bg-primary/10 p-3 text-primary">
                  <Library className="h-7 w-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.console.title}</h2>
                    <PublicStatusPill>{copy.console.status}</PublicStatusPill>
                  </div>
                  <p className="mt-2 font-mono text-sm text-white/40">{copy.console.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs uppercase tracking-[0.16em] text-white/45">
                {copy.console.languageModules.map((module: string) => (
                  <div key={module} className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-2 text-primary">
                    {module}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-7 lg:grid-cols-[0.95fr_1.4fr]">
              <div className="space-y-3">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {copy.surfaces.title}
                </p>

                <div className="space-y-3">
                  {surfaces.map((surface) => {
                    const Icon = surfaceIcons[surface.id] ?? FileText;
                    const isActive = surface.id === activeSurface;

                    return (
                      <button
                        key={surface.id}
                        type="button"
                        onClick={() => setActiveSurface(surface.id)}
                        className={`w-full rounded-2xl border p-4 text-left transition ${
                          isActive
                            ? 'border-primary/45 bg-primary/10 text-white'
                            : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-primary/25 hover:text-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <Icon className={`mt-1 h-5 w-5 ${isActive ? 'text-primary' : 'text-white/35'}`} />
                          <div>
                            <div className="font-semibold">{surface.title}</div>
                            <div className="mt-1 text-sm text-white/45">{surface.desc}</div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start gap-3">
                    <ActiveIcon className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                        {activeCopy.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{activeCopy.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-white/60">{activeCopy.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-5 xl:grid-cols-2">
                  {activeItems.map((item) => (
                    <CatalogueTile key={item.slug} item={item} />
                  ))}
                </div>
              </div>
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
