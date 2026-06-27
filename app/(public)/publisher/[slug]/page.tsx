import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getPublisherItemBySlug, publisherPublicItems } from '@/content/publisher/catalogue';
import { PublicButton, PublicPageShell, PublicSection } from '@/components/public';

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
        <article className="mx-auto max-w-3xl px-2 md:px-0">
          <div className="mb-10">
            <PublicButton href="/publisher" variant="ghost" className="px-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Publisher
            </PublicButton>
          </div>

          <header className="mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
              {item.publicLabel ?? item.kind}
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white md:text-7xl">
              {item.title}
            </h1>
            {item.subtitle ? (
              <p className="mt-6 text-lg leading-8 text-white/55 md:text-xl">{item.subtitle}</p>
            ) : null}
          </header>

          <div className="mb-12 border-y border-white/10 py-7">
            <p className="text-base leading-8 text-white/65">{item.description}</p>
          </div>

          {item.editorialContent?.length ? (
            <div className="space-y-7 pb-16">
              {item.editorialContent.map((block) => (
                <p key={block.text} className="text-[17px] leading-9 text-white/78">
                  {block.text}
                </p>
              ))}
            </div>
          ) : null}
        </article>
      </PublicSection>
    </PublicPageShell>
  );
}
