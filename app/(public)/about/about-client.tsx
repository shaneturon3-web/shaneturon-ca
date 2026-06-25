'use client';

import { motion } from 'framer-motion';
import {
  Layers, Brain, Shield, Globe, Cpu, Target,
  BookOpen, Zap, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  { icon: Layers, title: 'Systems Architecture', desc: 'Multi-layer modular systems (Spine → Wrapper → Interface) enabling scalable infrastructure across professional verticals.' },
  { icon: Cpu, title: 'AI Orchestration', desc: 'Formal protocols for multi-AI coordination with defined roles, boundaries, and accountability structures.' },
  { icon: Shield, title: 'Compliance-Aware Design', desc: 'Healthcare, legal, and financial regulatory navigation built into architecture, not bolted on after.' },
  { icon: Target, title: 'Execution Engineering', desc: 'PMO-grade orchestration frameworks with agent sequencing, phase gates, and mandatory verification.' },
  { icon: Brain, title: 'Knowledge Architecture', desc: 'Semantic compression methodologies that extract reusable, citable knowledge units from raw operational data.' },
  { icon: Globe, title: 'Multilingual Systems', desc: 'EN/FR/ES operational surfaces designed at the architecture level, not just the translation layer.' },
];

const principles = [
  'Operational coherence over feature expansion.',
  'Growth that collapses the operator is not scalable infrastructure.',
  'Clinical judgment always remains with the licensed professional.',
  'The public should never need to decode the internal ontology.',
  'Infrastructure that translates operational reality into deployable workflows.',
  'Buy the commodity, build the differentiator.',
];

export function AboutClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">About</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Operational Systems <span className="text-primary">Architect</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Building the operational infrastructure that professionals need but can’t articulate —
              the systems layer between “I have tools” and “my practice actually runs smoothly.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-6">Cognitive Approach</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Every problem decomposes into <strong className="text-foreground">layers</strong> (what goes where),{' '}
                <strong className="text-foreground">phases</strong> (what happens when),{' '}
                <strong className="text-foreground">authorities</strong> (who decides), and{' '}
                <strong className="text-foreground">boundaries</strong> (what must not cross).
              </p>
              <p>
                This isn’t “I use AI” — it’s “I architect systems where AI has governance.”
                Not theoretical. Grounded in operational reality. Every claim tagged NOW, PILOT, or FUTURE.
                Every deploy requires tunneled demo verification. Anti-vaporware by design.
              </p>
              <p>
                Systems built for cognitive clarity produce better outcomes for everyone.
                High signal-to-noise ratio. Information density over decorative padding.
                Status indicators over narrative explanations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-2">Capability Domains</h2>
            <p className="text-muted-foreground">What the systems actually do.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap: any, i: number) => {
              const Icon = cap?.icon ?? Zap;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-lg p-6 hover:bg-accent/30 transition-all duration-300"
                >
                  <Icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-display font-semibold mb-2">{cap?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap?.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Operating Principles</h2>
            <div className="space-y-4">
              {principles.map((p: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-md bg-background/50"
                >
                  <span className="font-mono text-xs text-primary mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">What Makes This Different</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Systems-first, not features-first', desc: 'Solves structural problems, not surface symptoms.' },
                { title: 'Built-in governance', desc: 'Handles regulated environments without bolting on compliance later.' },
                { title: 'AI as architecture', desc: 'Not \"uses AI\" — designed formal protocols for multi-AI coordination.' },
                { title: 'Operational realism', desc: 'NOW/PILOT/FUTURE honesty. Mandatory demo gates. Anti-vaporware.' },
              ].map((d: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-lg p-5"
                >
                  <h3 className="font-display font-semibold text-sm mb-1">{d?.title}</h3>
                  <p className="text-xs text-muted-foreground">{d?.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">The systems used to manage this work are the same caliber of systems offered to clients. The portfolio IS the proof.</p>
            <Link
              href="/systems"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore the Systems <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
