import { notFound } from 'next/navigation';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { getPublisherItemBySlug, publisherPublicItems } from '@/content/publisher/catalogue';
import {
  PublicButton,
  PublicPageShell,
  PublicSection,
  PublicStatusPill,
} from '@/components/public';

export function generateStaticParams() {
  return publisherPublicItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getPublisherItemBySlug(params.slug);

  if (!item || !item.routeEnabled || item.publicStatus !== 'public') {
    return {
      title: 'Publisher — Shane Turon',
    };
  }

  return {
    title: `${item.title} — Publisher`,
    description: item.description,
  };
}

export default function PublisherWorkPage({ params }: { params: { slug: string } }) {
  const item = getPublisherItemBySlug(params.slug);

  if (!item || !item.routeEnabled || item.publicStatus !== 'public') {
    notFound();
  }

  return (
    <PublicPageShell>
      <PublicSection tone="muted">
        <article className="mx-auto max-w-4xl rounded-3xl border border-primary/20 bg-black/30 p-6 shadow-2xl shadow-black/20 md:p-10">
          <div className="mb-8">
            <PublicButton href="/publisher" variant="ghost" className="px-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Publisher
            </PublicButton>
          </div>

          <header className="border-b border-white/10 pb-8">
            <div className="mb-5 inline-flex rounded-2xl border border-primary/25 bg-primary/10 p-3 text-primary">
              <BookOpen className="h-7 w-7" />
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              {item.publicLabel ?? item.kind}
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{item.title}</h1>
            {item.subtitle ? (
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/58">{item.subtitle}</p>
            ) : null}
          </header>

          <div className="py-8">
            <p className="text-base leading-8 text-white/70">{item.description}</p>

            {item.editorialContent?.length ? (
              <div className="mt-8 space-y-6">
                {item.editorialContent.map((block) => (
                  <p key={block.text} className="text-base leading-8 text-white/72">
                    {block.text}
                  </p>
                ))}
              </div>
            ) : null}
          </div>

          <footer className="flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {item.tags.slice(0, 5).map((tag) => (
              <PublicStatusPill key={tag} tone="muted">
                {tag}
              </PublicStatusPill>
            ))}
          </footer>
        </article>
      </PublicSection>
    </PublicPageShell>
  );
}
