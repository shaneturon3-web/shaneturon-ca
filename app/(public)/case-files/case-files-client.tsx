'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';

export function CaseFilesClient({ caseFiles }: { caseFiles: any[] }) {
  const safe = caseFiles ?? [];

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Analysis</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Case <span className="text-primary">Files</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-16">
              Structured operational analysis. Each case follows the format:
              Problem → Constraints → Analysis → Design → Results → Lessons.
            </p>
          </motion.div>

          <div className="space-y-6">
            {safe.map((cf: any, i: number) => (
              <motion.div
                key={cf?.id ?? i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/case-files/${cf?.slug ?? cf?.id}`}
                  className="block bg-card rounded-lg p-6 sm:p-8 border border-border/30 hover:border-primary/30 hover:bg-accent/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span className="text-xs font-mono text-muted-foreground uppercase">{cf?.category ?? 'Case File'}</span>
                      </div>
                      <h2 className="font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {cf?.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">{cf?.subtitle}</p>
                      <p className="text-sm text-muted-foreground/70 line-clamp-2">{cf?.problem}</p>

                      {cf?.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {(cf.tags as string)?.split?.(',')?.map?.((tag: string, ti: number) => (
                            <span key={ti} className="px-2 py-0.5 text-xs font-mono rounded-md bg-accent text-muted-foreground">
                              {tag?.trim?.()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {safe.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <BookOpen className="h-8 w-8 mx-auto mb-4 text-muted-foreground/50" />
              <p>Case files are being compiled. Check back soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
