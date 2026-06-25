'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, BookOpen, AlertTriangle, Search, Lightbulb, Hammer, CheckCircle, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/lib/language';

const sectionIcons = [AlertTriangle, Search, Lightbulb, Hammer, CheckCircle, GraduationCap];

export function CaseFileDetailClient({ caseFile }: { caseFile: any }) {
  const { language } = useLanguage();
  const copy = language.pages.caseFiles;
  const cf = caseFile ?? {};

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/case-files"
              prefetch={false}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> {copy.detail.back}
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-xs font-mono text-muted-foreground uppercase">{cf?.category ?? copy.detail.defaultCategory}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-2">{cf?.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{cf?.subtitle}</p>

            {cf?.tags && (
              <div className="flex flex-wrap gap-2 mb-12">
                {(cf.tags as string)?.split?.(',')?.map?.((tag: string, i: number) => (
                  <span key={i} className="px-2.5 py-1 text-xs font-mono rounded-md bg-accent text-muted-foreground">
                    {tag?.trim?.()}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          <div className="space-y-8">
            {copy.detail.sections.map((section, i) => {
              const Icon = sectionIcons[i] ?? BookOpen;
              const content = cf?.[section.key];
              if (!content) return null;

              return (
                <motion.div
                  key={section.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-lg p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-1.5 rounded-md bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <h2 className="font-mono text-xs text-primary uppercase tracking-widest">{section.label}</h2>
                    <span className="font-mono text-xs text-muted-foreground/40">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
