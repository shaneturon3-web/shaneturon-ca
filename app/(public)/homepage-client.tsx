'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle2, ClipboardList, MessageSquare, Route, ShieldCheck, Sparkles, Users } from 'lucide-react';
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

const mapIcons = [ClipboardList, Users, CheckCircle2];
const organizeIcons = [Sparkles, Route, MessageSquare, ClipboardList, CheckCircle2, ShieldCheck];

export function HomepageClient({
  systems,
  caseFiles,
  nowItems,
}: {
  systems: any[];
  caseFiles: any[];
  nowItems: any[];
}) {
  const { language } = useLanguage();
  const copy = language.pages.home;
  const safeCF = caseFiles ?? [];
  const featuredCase = safeCF[0];

  return (
    <PublicPageShell>
      <PublicSection tone="grid" className="min-h-[82vh] flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <PublicPageHero
            align="center"
            eyebrow={copy.hero.badge}
            title={copy.hero.title}
            description={copy.hero.intro}
            actions={
              <>
                <PublicButton href="/systems">
                  {copy.hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                </PublicButton>
                <PublicButton href="/case-files" variant="secondary">
                  {copy.hero.secondaryCta}
                </PublicButton>
              </>
            }
          />

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border/40 bg-background/70 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <PublicStatusPill>{copy.status.label}</PublicStatusPill>
              {copy.status.items.map((item) => (
                <span key={item} className="text-xs text-muted-foreground">
                  {item}
                </span>
              ))}
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
          <PublicSectionHeader
            align="center"
            title={copy.map.title}
            description={copy.map.intro}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {copy.map.items.map((item, index) => {
              const Icon = mapIcons[index] ?? ClipboardList;

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

      <PublicSection tone="muted">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.organize.title}
            description={copy.organize.intro}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.organize.items.map((item, index) => {
              const Icon = organizeIcons[index] ?? CheckCircle2;

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
            title={copy.proof.title}
            description={copy.proof.intro}
            action={
              <PublicButton href="/case-files" variant="ghost">
                {copy.proof.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
              </PublicButton>
            }
          />

          <Link
            href={featuredCase ? `/case-files/${featuredCase?.slug ?? featuredCase?.id}` : '/case-files'}
            prefetch={false}
            className="block"
          >
            <PublicCard
              icon={BookOpen}
              eyebrow={featuredCase?.category ?? copy.proof.defaultCategory}
              title={featuredCase?.title ?? copy.proof.emptyTitle}
              description={featuredCase?.subtitle ?? copy.proof.emptySubtitle}
              className="p-8 sm:p-10"
            >
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {featuredCase?.problem ?? copy.proof.emptyDesc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {(featuredCase?.tags
                  ? String(featuredCase.tags).split(',').map((tag) => tag.trim()).filter(Boolean)
                  : copy.proof.tags
                ).map((tag) => (
                  <PublicStatusPill key={tag} tone="muted">
                    {tag}
                  </PublicStatusPill>
                ))}
              </div>
            </PublicCard>
          </Link>
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
