'use client';

import { motion } from 'framer-motion';
import { Layers, Network, Brain, Cpu, Shield, Globe, Server, ArrowDown, ArrowRight, Database } from 'lucide-react';

const layers = [
  {
    id: 'institutional',
    label: 'Institutional Layer',
    desc: 'Public identity, portfolio surface, credibility architecture. Progressive disclosure from Trust → Capability → Depth → Doctrine.',
    icon: Globe,
    systems: ['shaneturon.ca', 'Portfolio OS', 'Analytics'],
  },
  {
    id: 'operational',
    label: 'Operational Systems Layer',
    desc: 'Flagship products and execution infrastructure. PsyNova, Control Tower, and AI Orchestration running in production.',
    icon: Layers,
    systems: ['PsyNova CoreSpine', 'Control Tower (10 subsystems)', 'AI Orchestration Stack'],
  },
  {
    id: 'orchestration',
    label: 'Orchestration Layer',
    desc: 'Multi-AI coordination, agent pipeline sequencing, context handshake protocols. Architect → TechnicalSpecialist → Closer → TacticalTranslator.',
    icon: Network,
    systems: ['Agent Registry', 'Escaleta Engine', 'Handoff Protocols', 'State-Sync'],
  },
  {
    id: 'knowledge',
    label: 'Knowledge Architecture Layer',
    desc: 'Semantic compression pipeline. Raw sessions → Grains → Cubes → Promoted Doctrine. Versioned, never-destructive, evidence-gated.',
    icon: Brain,
    systems: ['Canon', 'Source of Truth', 'Grains Engine', 'Promotion Pipeline'],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure Layer',
    desc: 'Cloud-native deployment, edge distribution, asset storage, database systems. Multi-machine operations with zero-alternation guarantees.',
    icon: Server,
    systems: ['Edge Runtime', 'Object Storage', 'Database', 'Sync Engine'],
  },
];

const governance = [
  { level: '01', name: 'Shane', role: 'Executive authority. All strategic decisions.' },
  { level: '02', name: 'SuperNova', role: 'AI coordination layer. Operational delegation.' },
  { level: '03', name: 'Control Tower', role: 'Execution orchestration. 10-subsystem framework.' },
  { level: '04', name: 'ShipYard', role: 'Build zone. Experimental runtime environment.' },
  { level: '05', name: 'PsyNova', role: 'Flagship product. Professional operational infrastructure.' },
  { level: '06', name: 'Institute', role: 'Knowledge systems. Doctrine and research.' },
];

export function ArchitectureClient() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Infrastructure</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              System <span className="text-primary">Architecture</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              How the systems connect. Visual-first, layered architecture with explicit boundaries and governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Layered Architecture */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Layered Architecture</h2>
          <div className="space-y-4">
            {layers.map((layer: any, i: number) => {
              const Icon = layer?.icon ?? Layers;
              return (
                <motion.div
                  key={layer?.id ?? i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="bg-card rounded-lg p-6 border border-border/30">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-xs text-primary/60">L{i}</span>
                          <h3 className="font-display font-semibold">{layer?.label}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{layer?.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {(layer?.systems ?? []).map((sys: string, si: number) => (
                            <span key={si} className="px-2.5 py-1 text-xs font-mono rounded-md bg-background/50 text-muted-foreground">
                              {sys}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {i < layers.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowDown className="h-4 w-4 text-border" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance Hierarchy */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-2">Authority Hierarchy</h2>
            <p className="text-muted-foreground mb-8">6-level institutional governance with formal delegation and scope boundaries.</p>

            <div className="space-y-3">
              {governance.map((g: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-md bg-background/50"
                >
                  <span className="font-mono text-lg font-bold text-primary w-8">{g?.level}</span>
                  <div className="flex-1">
                    <span className="font-display font-semibold text-sm">{g?.name}</span>
                    <p className="text-xs text-muted-foreground">{g?.role}</p>
                  </div>
                  {i < governance.length - 1 && (
                    <ArrowDown className="h-3 w-3 text-border flex-shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PsyNova Architecture Detail */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">PsyNova Architecture</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  layer: 'Layer 1',
                  name: 'CoreSpine',
                  desc: 'Headless administrative engine. Intake, scheduling, billing, CRM/memory, orchestration.',
                  icon: Database,
                },
                {
                  layer: 'Layer 2',
                  name: 'Compliance Wrapper',
                  desc: 'Sector-specific regulatory shields. Thick (healthcare/Law 25), Light (accounting), Wellness (coaching).',
                  icon: Shield,
                },
                {
                  layer: 'Layer 3',
                  name: 'Operator Interface',
                  desc: 'Role-based dashboards. Admin, Professional, Patient, Supervisor views.',
                  icon: Layers,
                },
              ].map((item: any, i: number) => {
                const Icon = item?.icon ?? Layers;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-card rounded-lg p-6 border border-border/30"
                  >
                    <span className="text-xs font-mono text-primary">{item?.layer}</span>
                    <div className="flex items-center gap-2 mt-2 mb-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="font-display font-semibold">{item?.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent Pipeline */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">Agent Pipeline</h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 justify-center">
              {[
                { role: 'Architect', desc: 'Strategic structure' },
                { role: 'Technical Specialist', desc: 'Implementation depth' },
                { role: 'Closer', desc: 'Execution delivery' },
                { role: 'Tactical Translator', desc: 'External communication' },
              ].map((agent: any, i: number) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-card rounded-lg p-4 border border-border/30 text-center min-w-[140px]">
                    <Cpu className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="font-mono text-xs font-semibold">{agent?.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{agent?.desc}</p>
                  </div>
                  {i < 3 && <ArrowRight className="h-4 w-4 text-primary hidden sm:block" />}
                  {i < 3 && <ArrowDown className="h-4 w-4 text-primary sm:hidden" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
