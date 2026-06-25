'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import {
  Hexagon, ArrowRight, Activity, Layers, Network, Brain,
  Shield, BookOpen, Cpu, Clock, ChevronRight, Zap
} from 'lucide-react';
import { StatusStrip } from '@/components/status-strip';

const iconMap: Record<string, any> = {
  'Operational Platform': Layers,
  'Orchestration Framework': Network,
  'Knowledge Architecture': Brain,
  'AI Governance': Cpu,
};

function CountUp({ target, suffix }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      className="font-mono text-4xl font-bold text-primary"
    >
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {target}{suffix ?? ''}
        </motion.span>
      ) : '0'}
    </motion.span>
  );
}

export function HomepageClient({
  systems,
  caseFiles,
  nowItems,
}: {
  systems: any[];
  caseFiles: any[];
  nowItems: any[];
}) {
  const safeS = systems ?? [];
  const safeCF = caseFiles ?? [];
  const safeNow = nowItems ?? [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-card/50 mb-8">
              <span className="h-2 w-2 rounded-full bg-primary status-pulse" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Systems Operational</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              Operational Systems{' '}
              <span className="text-primary">Architect</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Designing AI-assisted execution environments, workflow intelligence systems,
              and operational architectures for complex organizations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/systems"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Explore Systems <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/case-files"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent transition-colors"
              >
                View Case Files
              </Link>
            </div>

            <StatusStrip />
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">Structured Execution Under Complexity</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Evidence-driven infrastructure that recovers lost operational capacity.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Operational Recovery',
                desc: 'Professionals lose ~6 hours per week to administrative fragmentation. Infrastructure that gives it back.',
                metric: '6',
                metricLabel: 'hours/week recovered',
              },
              {
                icon: Network,
                title: 'Structured Execution',
                desc: 'Complex projects fail from coordination collapse, not lack of talent. Execution architectures with built-in governance.',
                metric: '10',
                metricLabel: 'orchestration subsystems',
              },
              {
                icon: Cpu,
                title: 'AI-Augmented Operations',
                desc: 'AI without architecture is noise. Orchestration systems where AI agents have defined roles, boundaries, and accountability.',
                metric: '14',
                metricLabel: 'coordinated AI agents',
              },
            ].map((item: any, i: number) => {
              const Icon = item?.icon ?? Zap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card rounded-lg p-8 hover:bg-accent/50 transition-all duration-300"
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <div className="mb-4">
                    <CountUp target={Number(item?.metric ?? 0)} suffix="+" />
                    <p className="text-xs font-mono text-muted-foreground mt-1">{item?.metricLabel}</p>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{item?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flagship Systems */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight mb-2">Active Systems</h2>
              <p className="text-muted-foreground">Operational infrastructure currently running.</p>
            </div>
            <Link
              href="/systems"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {(() => {
            const psynova = safeS.find((s: any) => s?.slug === 'psynova');
            const others = safeS.filter((s: any) => s?.slug !== 'psynova');
            return (
              <div className="space-y-6">
                {/* PsyNova — Featured */}
                {psynova && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="/systems#psynova"
                      className="block bg-card rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden"
                    >
                      <div className="p-8 sm:p-10">
                        <div className="flex items-start justify-between mb-5">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
                              <Layers className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                                {psynova?.name}
                              </h3>
                              <p className="text-xs font-mono text-muted-foreground/60 mt-0.5">{psynova?.category}</p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
                            {psynova?.status ?? 'ACTIVE'}
                          </span>
                        </div>
                        <p className="text-base text-muted-foreground mb-6 max-w-2xl">{psynova?.tagline}</p>
                        <div className="flex flex-wrap gap-2 mb-5">
                          {['CoreSpine', 'Compliance Wrapper', 'Operator Interface'].map((layer) => (
                            <span key={layer} className="px-3 py-1.5 rounded text-xs font-mono bg-primary/8 text-primary/80 border border-primary/15">
                              {layer}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground/70 line-clamp-2">{psynova?.description}</p>
                        <div className="flex items-center gap-1.5 mt-5 text-sm text-primary font-medium">
                          <span>Explore architecture</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {/* Other Systems */}
                <div className="grid md:grid-cols-2 gap-6">
                  {others.map((sys: any, i: number) => {
                    const Icon = iconMap[sys?.category] ?? Hexagon;
                    return (
                      <motion.div
                        key={sys?.id ?? i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={`/systems#${sys?.slug ?? ''}`}
                          className="block bg-card rounded-lg p-6 border border-border/30 hover:border-primary/30 hover:bg-accent/30 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <Icon className="h-6 w-6 text-primary" />
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
                              {sys?.status ?? 'ACTIVE'}
                            </span>
                          </div>
                          <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                            {sys?.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">{sys?.tagline}</p>
                          <p className="text-xs text-muted-foreground/70 line-clamp-2">{sys?.description}</p>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Case Files Preview */}
      {safeCF.length > 0 && (
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight mb-2">Case Files</h2>
                <p className="text-muted-foreground">Structured operational analysis. Problem → Design → Results.</p>
              </div>
              <Link
                href="/case-files"
                className="hidden sm:inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {safeCF.map((cf: any, i: number) => (
                <motion.div
                  key={cf?.id ?? i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/case-files/${cf?.slug ?? cf?.id}`}
                    className="block bg-card rounded-lg p-6 border border-border/30 hover:border-primary/30 hover:bg-accent/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-xs font-mono text-muted-foreground uppercase">{cf?.category ?? 'Case File'}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {cf?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{cf?.subtitle}</p>
                    <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground/60">
                      <span>Problem → Analysis → Design → Results</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Now Strip */}
      {safeNow.length > 0 && (
        <section className="py-16 px-4 bg-card/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Clock className="h-5 w-5 text-primary" />
                <h2 className="font-display text-xl font-bold tracking-tight">Current Focus</h2>
                <Link href="/now" className="ml-auto text-xs text-primary hover:underline">View /now →</Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {safeNow.map((item: any, i: number) => (
                  <div key={item?.id ?? i} className="flex items-start gap-3 p-3 rounded-md bg-background/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-xs font-mono text-primary/70 uppercase">{item?.category}</span>
                      <p className="text-sm text-muted-foreground">{item?.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight mb-4">
              Structured Operational Intelligence
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Infrastructure that translates operational reality into deployable workflows.
              Not theoretical — grounded in how work actually happens.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Engagement Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
