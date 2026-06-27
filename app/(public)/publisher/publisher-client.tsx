'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Archive,
  ArrowRight,
  BookOpen,
  FileText,
  PenLine,
  ScrollText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import {
  getPublisherSurfaceItems,
  publisherCatalogue,
  publisherSurfaces,
} from '@/content/publisher/catalogue';
import type { PublisherContentItem, PublisherSurfaceId } from '@/lib/publisher/types';
import { useLanguage } from '@/lib/language';
import {
  PublicButton,
  PublicPageShell,
  PublicSection,
  PublicStatusPill,
} from '@/components/public';

const surfaceIcons = {
  books: BookOpen,
  essays: PenLine,
  stories: ScrollText,
  archive: Archive,
};

const kindIcons = {
  essay: PenLine,
  article: FileText,
  guide: BookOpen,
  manual: BookOpen,
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

function labelize(value: string | boolean) {
  if (typeof value === 'boolean') return value ? 'available' : 'held';
  return value.replace(/-/g, ' ');
}

function publicBadge(item: PublisherContentItem) {
  if (item.publicStatus === 'public') return 'readable';
  if (item.publicStatus === 'candidate') return 'in progress';
  if (item.publicStatus === 'parked') return 'listed';
  return labelize(item.publicStatus);
}

function WorkButton({
  item,
  isActive,
  onSelect,
}: {
  item: PublisherContentItem;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`w-full rounded-xl border px-3 py-3 text-left transition ${
        isActive
          ? 'border-white/20 bg-white/[0.06] text-white'
          : 'border-white/10 bg-transparent text-white/45 hover:border-white/15 hover:text-white/75'
      }`}
    >
      <div className="text-sm font-semibold leading-5">{item.title}</div>
      {item.publicLabel ? (
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/28">
          {item.publicLabel}
        </div>
      ) : null}
    </button>
  );
}

function EditorialStage({ item }: { item: PublisherContentItem }) {
  const Icon = kindIcons[item.kind] ?? FileText;
  const preview = item.editorialContent?.slice(0, 4) ?? [];

  return (
    <article className="min-h-[68vh] rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 md:p-10 lg:p-12">
      <div className="mb-8 flex items-center gap-3 text-primary">
        <Icon className="h-5 w-5" />
        <p className="font-mono text-xs uppercase tracking-[0.24em]">
          {item.publicLabel ?? labelize(item.kind)}
        </p>
      </div>

      <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl lg:text-7xl">
        {item.title}
      </h2>

      {item.subtitle ? (
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58 md:text-xl">{item.subtitle}</p>
      ) : null}

      <p className="mt-8 max-w-3xl text-base leading-8 text-white/72">{item.description}</p>

      {preview.length ? (
        <div className="mt-10 max-w-3xl space-y-5 border-t border-white/10 pt-7">
          {preview.map((block) => (
            <p key={block.text} className="text-[15px] leading-8 text-white/68">
              {block.text}
            </p>
          ))}
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        <PublicStatusPill tone="muted">{publicBadge(item)}</PublicStatusPill>
        {item.series ? <PublicStatusPill tone="muted">{item.series}</PublicStatusPill> : null}
        {item.tags.slice(0, 3).map((tag) => (
          <PublicStatusPill key={tag} tone="muted">
            {tag}
          </PublicStatusPill>
        ))}
      </div>

      {item.routeEnabled && item.href ? (
        <div className="mt-9">
          <PublicButton href={item.href}>
            Read <ArrowRight className="ml-2 h-4 w-4" />
          </PublicButton>
        </div>
      ) : null}
    </article>
  );
}

export function PublisherClient() {
  const { language } = useLanguage();
  const copy = language.pages.publisher;
  const [activeSurface, setActiveSurface] = useState<PublisherSurfaceId>('stories');
  const activeItems = useMemo(() => getPublisherSurfaceItems(activeSurface), [activeSurface]);
  const [activeSlug, setActiveSlug] = useState<string>('');

  const activeItem =
    activeItems.find((item) => item.slug === activeSlug) ?? activeItems[0] ?? publisherCatalogue[0];

  function selectSurface(surface: PublisherSurfaceId) {
    const items = getPublisherSurfaceItems(surface);
    setActiveSurface(surface);
    setActiveSlug(items[0]?.slug ?? '');
  }

  return (
    <PublicPageShell>
      <PublicSection tone="muted">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{copy.console.status}</p>
              <h1 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{copy.console.title}</h1>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/48">{copy.console.subtitle}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.34fr_1.66fr]">
            <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {copy.surfaces.title}
                </p>
                <div className="space-y-2">
                  {publisherSurfaces.map((surface) => {
                    const Icon = surfaceIcons[surface.id] ?? FileText;
                    const isActive = surface.id === activeSurface;
                    const count = getPublisherSurfaceItems(surface.id).length;

                    return (
                      <button
                        key={surface.id}
                        type="button"
                        onClick={() => selectSurface(surface.id)}
                        className={`flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left transition ${
                          isActive
                            ? 'border-primary/45 bg-primary/10 text-white'
                            : 'border-white/10 bg-white/[0.025] text-white/55 hover:border-primary/25 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon className={`h-4 w-4 ${isActive ? 'text-primary' : 'text-white/30'}`} />
                          <span className="font-semibold">{surface.title}</span>
                        </span>
                        <span className="font-mono text-xs text-white/32">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-white/35">Works</p>
                <div className="space-y-2">
                  {activeItems.map((item) => (
                    <WorkButton
                      key={item.slug}
                      item={item}
                      isActive={item.slug === activeItem.slug}
                      onSelect={() => setActiveSlug(item.slug)}
                    />
                  ))}
                </div>
              </div>
            </aside>

            <EditorialStage item={activeItem} />
          </div>
        </motion.div>
      </PublicSection>
    </PublicPageShell>
  );
}
