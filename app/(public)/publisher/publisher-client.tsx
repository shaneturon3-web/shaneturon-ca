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
  if (item.publicStatus === 'public') return 'available';
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
          {item.subtitle ? <div className="mt-1 line-clamp-2 text-sm text-white/45">{item.subtitle}</div> : null}
        </div>
      </div>
    </button>
  );
}

function EditorialStage({ item }: { item: PublisherContentItem }) {
  const Icon = kindIcons[item.kind] ?? FileText;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-2xl border border-primary/25 bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            {item.publicLabel ?? labelize(item.kind)}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            {item.title}
          </h2>
          {item.subtitle ? <p className="mt-4 max-w-2xl text-base leading-7 text-white/58">{item.subtitle}</p> : null}
        </div>
      </div>

      <p className="max-w-3xl text-base leading-8 text-white/70">{item.description}</p>

      {item.editorialContent?.length ? (
        <div className="mt-8 space-y-5 border-t border-white/10 pt-6">
          {item.editorialContent.map((block) => (
            <p key={block.text} className="max-w-3xl text-sm leading-8 text-white/65">
              {block.text}
            </p>
          ))}
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap gap-2">
        <PublicStatusPill tone="muted">{publicBadge(item)}</PublicStatusPill>
        {item.series ? <PublicStatusPill tone="muted">{item.series}</PublicStatusPill> : null}
        {item.tags.slice(0, 3).map((tag) => (
          <PublicStatusPill key={tag} tone="muted">
            {tag}
          </PublicStatusPill>
        ))}
      </div>

      {item.routeEnabled && item.href ? (
        <div className="mt-8">
          <PublicButton href={item.href}>
            Read <ArrowRight className="ml-2 h-4 w-4" />
          </PublicButton>
        </div>
      ) : null}
    </div>
  );
}

export function PublisherClient() {
  const { language } = useLanguage();
  const copy = language.pages.publisher;
  const [activeSurface, setActiveSurface] = useState<PublisherSurfaceId>('books');
  const activeItems = useMemo(() => getPublisherSurfaceItems(activeSurface), [activeSurface]);
  const [activeSlug, setActiveSlug] = useState<string>('the-order-matters-full');

  const activeSurfaceCopy = publisherSurfaces.find((surface) => surface.id === activeSurface) ?? publisherSurfaces[0];
  const activeItem =
    activeItems.find((item) => item.slug === activeSlug) ?? activeItems[0] ?? publisherCatalogue[0];

  function selectSurface(surface: PublisherSurfaceId) {
    const items = getPublisherSurfaceItems(surface);
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
            <div className="mb-6 border-b border-white/10 pb-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">{copy.console.status}</p>
              <h1 className="mt-3 text-4xl font-semibold text-white md:text-6xl">{copy.console.title}</h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/58">{copy.console.subtitle}</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.36fr_1.64fr]">
              <aside className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
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
              </aside>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                    {activeSurfaceCopy.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{activeSurfaceCopy.title}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">
                    {activeSurfaceCopy.description}
                  </p>
                </div>

                <div className="grid gap-5 xl:grid-cols-[0.72fr_1.28fr]">
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

                  <EditorialStage item={activeItem} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </PublicSection>
    </PublicPageShell>
  );
}
