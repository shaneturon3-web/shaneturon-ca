'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileText,
  Layers,
  Newspaper,
  PenLine,
  ScrollText,
  Smile,
  StickyNote,
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

const catalogueIcons = [BookOpen, Newspaper, ClipboardList, FileText, ScrollText, PenLine];
const formatIcons = [BookOpen, Newspaper, FileText, ClipboardList, ScrollText, PenLine, Smile, Layers, StickyNote];

export function WritingClient() {
  const { language } = useLanguage();
  const copy = language.pages.writing;

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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.catalogue.title}
            description={copy.catalogue.intro}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {copy.catalogue.items.map((item, index) => {
              const Icon = catalogueIcons[index] ?? FileText;

              return (
                <PublicCard
                  key={item.title}
                  icon={Icon}
                  eyebrow={item.kind}
                  title={item.title}
                  description={item.desc}
                >
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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PublicSectionHeader
            title={copy.formats.title}
            description={copy.formats.intro}
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.formats.items.map((item, index) => {
              const Icon = formatIcons[index] ?? FileText;

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
