'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Layers,
  MessageSquare,
  Route,
  Sparkles,
} from 'lucide-react';
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

const branchIcons = [Layers, BookOpen];
const methodIcons = [Compass, Route, CheckCircle2];
const detailIcons = [Sparkles, MessageSquare, CheckCircle2];

export function HomepageClient() {
  const { language } = useLanguage();
  const copy = language.pages.home;

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
                <PublicButton href="/#writing" variant="secondary">
                  {copy.hero.secondaryCta}
                </PublicButton>
              </>
            }
          />

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border/40 bg-background/70 p-4 backdrop-blur">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <PublicStatusPill>{copy.status.label}</PublicStatusPill>
              {copy.status.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            align="center"
            title={copy.branches.title}
            description={copy.branches.intro}
          />

          <div className="grid gap-5 md:grid-cols-2">
            {copy.branches.items.map((item, index) => {
              const Icon = branchIcons[index] ?? Layers;

              return (
                <PublicCard
                  key={item.title}
                  href={item.href}
                  icon={Icon}
                  eyebrow={item.eyebrow}
                  title={item.title}
                  description={item.desc}
                  className="p-8 sm:p-10"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    {item.action}
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </PublicCard>
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
            title={copy.method.title}
            description={copy.method.intro}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {copy.method.items.map((item, index) => {
              const Icon = methodIcons[index] ?? Compass;

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
          id="writing"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.publications.title}
            description={copy.publications.intro}
          />

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <PublicCard
              icon={BookOpen}
              eyebrow={copy.publications.feature.eyebrow}
              title={copy.publications.feature.title}
              description={copy.publications.feature.desc}
              className="p-8 sm:p-10"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.publications.feature.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-border/40 bg-background/50 px-4 py-3 text-sm text-muted-foreground"
                  >
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                    {item}
                  </div>
                ))}
              </div>
            </PublicCard>

            <div className="grid gap-5">
              {copy.publications.details.map((item, index) => {
                const Icon = detailIcons[index] ?? CheckCircle2;

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
