'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  ClipboardList,
  Database,
  FileText,
  Layers,
  Route,
  ShieldCheck,
  Users,
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

const groupIcons = [ClipboardList, ShieldCheck, Users];
const executionIcons = [Route, BriefcaseBusiness, Database, BookOpen];

export function SystemsClient() {
  const { language } = useLanguage();
  const copy = language.pages.systems;

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
                <PublicButton href="/publisher" variant="secondary">
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

      <PublicSection tone="muted">
        <motion.div
          id="psynova"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.psynova.title}
            description={copy.psynova.intro}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {copy.psynova.groups.map((group, index) => {
              const Icon = groupIcons[index] ?? Layers;

              return (
                <PublicCard key={group.title} icon={Icon} title={group.title} description={group.desc}>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <PublicStatusPill key={item} tone="muted">
                        {item}
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
          id="deployment"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.deployment.title}
            description={copy.deployment.intro}
          />

          <div className="grid gap-5 lg:grid-cols-2">
            <PublicCard icon={Database} title={copy.deployment.paths.title}>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.deployment.paths.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border/40 bg-background/50 p-4"
                  >
                    <h3 className="font-display text-sm font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </PublicCard>

            <PublicCard icon={FileText} title={copy.deployment.shapes.title}>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.deployment.shapes.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border/40 bg-background/50 p-4"
                  >
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </PublicCard>
          </div>
        </motion.div>
      </PublicSection>

      <PublicSection tone="muted">
        <motion.div
          id="execution"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.execution.title}
            description={copy.execution.intro}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {copy.execution.items.map((item, index) => {
              const Icon = executionIcons[index] ?? Layers;

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
