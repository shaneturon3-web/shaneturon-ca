'use client';

import { motion } from 'framer-motion';
import { FlaskConical, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/language';

const statusColors: Record<string, string> = {
  ACTIVE: 'text-primary',
  EXPERIMENTAL: 'text-yellow-400',
  ARCHIVED: 'text-muted-foreground',
};

export function LabClient({ projects }: { projects: any[] }) {
  const { language } = useLanguage();
  const copy = language.pages.lab;
  const safe = projects ?? [];

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">{copy.hero.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              <span className="text-primary">{copy.hero.titlePrefix}</span> {copy.hero.titleSuffix}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-16">
              {copy.hero.intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {safe.map((project: any, i: number) => {
              const status = project?.status ?? copy.project.defaultStatus;

              return (
                <motion.div
                  key={project?.id ?? i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-lg p-6 border border-border/30 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FlaskConical className="h-5 w-5 text-primary" />
                    <span className={`text-xs font-mono ${statusColors[status] ?? 'text-muted-foreground'}`}>
                      {status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{project?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project?.description}</p>
                  {project?.techStack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(project.techStack as string)?.split?.(',')?.map?.((tech: string, ti: number) => (
                        <span key={ti} className="px-2 py-0.5 text-xs font-mono rounded bg-accent text-muted-foreground">
                          {tech?.trim?.()}
                        </span>
                      ))}
                    </div>
                  )}
                  {project?.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      {copy.project.viewDemo} <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>

          {safe.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <FlaskConical className="h-8 w-8 mx-auto mb-4 text-muted-foreground/50" />
              <p>{copy.empty.message}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
