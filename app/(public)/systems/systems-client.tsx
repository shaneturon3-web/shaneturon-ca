'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  BriefcaseBusiness,
  ClipboardList,
  Database,
  FileText,
  Layers,
  MessageSquare,
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
const executionIcons = [Route, BriefcaseBusiness, Brain, Bot];

export function SystemsClient() {
  const { language } = useLanguage();
  const copy = language.pages.systems;

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
                <PublicCard key={group.title} icon={Icon} title={group.title}>
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

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <PublicCard icon={Database} title={copy.psynova.deployment.title}>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.psynova.deployment.items.map((item) => (
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

            <PublicCard icon={FileText} title={copy.psynova.scale.title}>
              <div className="grid gap-3 sm:grid-cols-2">
                {copy.psynova.scale.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-border/40 bg-background/50 p-4"
                  >
                    <h3 className="font-mono text-xs text-primary">
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

      <PublicSection>
        <motion.div
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
