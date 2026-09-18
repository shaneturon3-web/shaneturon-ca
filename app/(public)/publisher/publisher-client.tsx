'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, Library, MessageSquare, PenLine, ScrollText } from 'lucide-react';
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

const categoryIcons = [BookOpen, FileText, ScrollText, MessageSquare];
const laneIcons = [Library, PenLine, FileText];

export function PublisherClient() {
  const { language } = useLanguage();
  const copy = language.pages.publisher;

  return (
    <PublicPageShell>
      <PublicSection tone="grid" className="overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-20 hidden justify-center px-6 sm:flex"
        >
          <div className="flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-mono uppercase tracking-[0.36em] text-primary/15">
            {copy.hero.pattern.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary status-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {copy.hero.eyebrow}
            </span>
          </div>

          <PublicPageHero
            title={copy.hero.title}
            accent={copy.hero.accent}
            description={copy.hero.intro}
            actions={
              <>
                <PublicButton href="/contact">
                  {copy.hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                </PublicButton>
                <PublicButton href="/systems" variant="secondary">
                  {copy.hero.secondaryCta}
                </PublicButton>
              </>
            }
          />

          <div className="mt-10 max-w-4xl rounded-full border border-border/40 bg-background/70 px-4 py-3 backdrop-blur">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <PublicStatusPill>{copy.status.label}</PublicStatusPill>
              {copy.status.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))] transition-transform group-hover:scale-125" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection>
        <motion.div
          id="categories"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.categories.title}
            description={copy.categories.intro}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {copy.categories.items.map((item, index) => {
              const Icon = categoryIcons[index] ?? BookOpen;

              return (
                <PublicCard
                  key={item.title}
                  icon={Icon}
                  eyebrow={item.eyebrow}
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
          id="lanes"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.lanes.title}
            description={copy.lanes.intro}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {copy.lanes.items.map((item, index) => {
              const Icon = laneIcons[index] ?? Library;

              return (
                <PublicCard key={item.title} icon={Icon} title={item.title} description={item.desc}>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <PublicStatusPill key={tag} tone="muted">
                        {tag}
                      </PublicStatusPill>
                    ))}
                  </div>
                </PublicCard>
              );
            })}
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection>
        <motion.div
          id="rule"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicCtaBand
            title={copy.rule.title}
            description={copy.rule.body}
            action={
              <PublicButton href="/contact">
                {copy.rule.action} <ArrowRight className="ml-2 h-4 w-4" />
              </PublicButton>
            }
          />
        </motion.div>
      </PublicSection>
    </PublicPageShell>
  );
}
