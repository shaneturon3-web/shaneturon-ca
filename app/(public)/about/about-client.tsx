'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  CheckCircle2,
  ClipboardList,
  Globe,
  Layers,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
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

const buildIcons = [Layers, Brain, ShieldCheck, Route, ClipboardList, Globe];
const differentiatorIcons = [Layers, ShieldCheck, Sparkles, CheckCircle2];

export function AboutClient() {
  const { language } = useLanguage();
  const copy = language.pages.about;

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

      <PublicSection tone="muted" container="default">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader title={copy.how.title} />
          <div className="grid gap-4">
            {copy.how.paragraphs.map((paragraph, index) => (
              <div
                key={paragraph}
                className="rounded-xl border border-border/40 bg-background/50 p-5"
              >
                <div className="flex gap-4">
                  <PublicStatusPill tone="muted">
                    {String(index + 1).padStart(2, '0')}
                  </PublicStatusPill>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {paragraph}
                  </p>
                </div>
              </div>
            ))}
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
            title={copy.build.title}
            description={copy.build.intro}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.build.items.map((item, index) => {
              const Icon = buildIcons[index] ?? CheckCircle2;

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
          <PublicSectionHeader title={copy.differentiators.title} />

          <div className="grid gap-5 sm:grid-cols-2">
            {copy.differentiators.items.map((item, index) => {
              const Icon = differentiatorIcons[index] ?? Users;

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
              <PublicButton href="/systems">
                {copy.cta.action} <ArrowRight className="ml-2 h-4 w-4" />
              </PublicButton>
            }
          />
        </motion.div>
      </PublicSection>
    </PublicPageShell>
  );
}
