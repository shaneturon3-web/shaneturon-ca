'use client';

import { motion } from 'framer-motion';
import {
  Layers, Network, Brain, Cpu, Hexagon, Zap, ChevronDown, ChevronUp,
  Server, Shield, LayoutDashboard, Globe, ArrowRight, Box
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { getLanguage } from '@/lib/language';

const iconMap: Record<string, any> = {
  'Operational Platform': Layers,
  'Orchestration Framework': Network,
  'Knowledge Architecture': Brain,
  'AI Governance': Cpu,
};

/* ── PsyNova Architecture Visual ── */
function PsyNovaArchitecture() {
  const language = getLanguage();
  const layerVisuals = [
    {
      icon: LayoutDashboard,
      color: 'from-primary/20 to-primary/5',
      border: 'border-primary/30',
    },
    {
      icon: Shield,
      color: 'from-primary/12 to-primary/3',
      border: 'border-primary/20',
    },
    {
      icon: Server,
      color: 'from-primary/8 to-primary/2',
      border: 'border-primary/15',
    },
  ] as const;

  const layers = language.pages.systems.psynova.architecture.layers.map((layer, index) => {
    const visual = layerVisuals[index] ?? layerVisuals[0];

    return {
      ...layer,
      ...visual,
    };
  });

  return (
    <div className="space-y-3">
      {layers.map((layer, i) => {
        const Icon = layer.icon;
        return (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.12 }}
            className={`relative rounded-lg border ${layer.border} bg-gradient-to-r ${layer.color} p-5`}
          >
            <div className="flex items-start gap-3 mb-3">
              <Icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{layer.label}</p>
                <p className="text-xs text-muted-foreground">{layer.sublabel}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 ml-8">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded text-[11px] font-mono bg-background/60 text-muted-foreground border border-border/30"
                >
                  {item}
                </span>
              ))}
            </div>
            {i < layers.length - 1 && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
                <div className="h-3 w-px bg-primary/30" />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── PsyNova Hero Card ── */
function PsyNovaHero({ sys }: { sys: any }) {
  const language = getLanguage();
  const copy = language.pages.systems.psynova;
  const deploymentModes = copy.deploymentModes.items;
  const scalePath = copy.scalePath.items;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20">
          <Layers className="h-7 w-7 text-primary" />
        </div>
        <div>
          <div className="flex items-center gap-3">
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">{sys?.name}</h2>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
              {sys?.status}
            </span>
          </div>
          <p className="text-sm font-mono text-muted-foreground/60 mt-0.5">{sys?.category}</p>
        </div>
      </div>

      <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mt-4 mb-10">
        {sys?.tagline}
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            {copy.architecture.heading}
          </h3>
          <PsyNovaArchitecture />

          <div className="mt-8">
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              {copy.scalePath.heading}
            </h3>
            <div className="flex items-center gap-2">
              {scalePath.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="text-center">
                    <p className="text-xs font-mono font-medium text-foreground">{step.label}</p>
                    <p className="text-[10px] text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < scalePath.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-primary/40 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              {copy.overview.heading}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{sys?.description}</p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              {copy.deploymentModes.heading}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {deploymentModes.map((mode) => (
                <div key={mode.label} className="p-4 rounded-lg bg-card border border-border/30">
                  <p className="text-sm font-semibold text-foreground mb-1">{mode.label}</p>
                  <p className="text-xs text-muted-foreground">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              {copy.languageModules.heading}
            </h3>
            <div className="flex gap-2">
              {copy.languageModules.items.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 rounded text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ── Secondary System Card ── */
function SystemCard({ sys, index }: { sys: any; index: number }) {
  const [isExpanded, setExpanded] = useState(false);
  const Icon = iconMap[sys?.category] ?? Hexagon;
  const language = getLanguage();
  const copy = language.pages.systems.card;
  let features: string[] = [];
  try {
    features = JSON.parse(sys?.features ?? '[]') ?? [];
  } catch {
    features = [];
  }

  return (
    <motion.div
      id={sys?.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-lg border border-border/30 overflow-hidden"
    >
      <div
        className="p-6 sm:p-8 cursor-pointer hover:bg-accent/20 transition-colors"
        onClick={() => setExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="font-display text-xl font-bold">{sys?.name}</h2>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
                  {sys?.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{sys?.tagline}</p>
              <span className="text-xs font-mono text-muted-foreground/60 mt-1 inline-block">{sys?.category}</span>
            </div>
          </div>
          <button className="text-muted-foreground">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 sm:px-8 pb-8 border-t border-border/20"
        >
          <div className="pt-6 space-y-6">
            <div>
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{copy.overview}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{sys?.description}</p>
            </div>

            {features.length > 0 && (
              <div>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{copy.capabilities}</h3>
                <div className="space-y-2">
                  {features.map((f: string, fi: number) => (
                    <div key={fi} className="flex items-start gap-3 p-3 rounded-md bg-background/50">
                      <Zap className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{f}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {sys?.architecture && (
              <div>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">{copy.architecture}</h3>
                <div className="p-4 rounded-md bg-background/50 font-mono text-xs text-muted-foreground leading-relaxed">
                  {sys.architecture}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ── Main Page ── */
export function SystemsClient({ systems }: { systems: any[] }) {
  const language = getLanguage();
  const copy = language.pages.systems;
  const safe = systems ?? [];
  const psynova = safe.find((s) => s?.slug === 'psynova');
  const others = safe.filter((s) => s?.slug !== 'psynova');

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">{copy.hero.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {copy.hero.titlePrefix} <span className="text-primary">{copy.hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-16">
              {copy.hero.intro}
            </p>
          </motion.div>

          {/* PsyNova Hero */}
          {psynova && (
            <div id="psynova">
              <PsyNovaHero sys={psynova} />
            </div>
          )}

          {/* Divider */}
          {others.length > 0 && psynova && (
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-border/30" />
              <span className="text-xs font-mono text-muted-foreground/50 uppercase tracking-widest">{copy.sections.otherSystems}</span>
              <div className="h-px flex-1 bg-border/30" />
            </div>
          )}

          {/* Other Systems */}
          <div className="space-y-6">
            {others.map((sys: any, i: number) => (
              <SystemCard key={sys?.id ?? i} sys={sys} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
