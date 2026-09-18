'use client';

import { motion } from 'framer-motion';
import { Layers, Globe, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/lib/language';

const layerIcons = [Globe, Layers, Layers];

export function ArchitectureClient() {
  const { language } = useLanguage();
  const copy = language.pages.architecture;

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">{copy.hero.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {copy.hero.titlePrefix} <span className="text-primary">{copy.hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {copy.hero.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl font-bold tracking-tight mb-8">{copy.layers.title}</h2>
          <div className="space-y-4">
            {copy.layers.items.map((layer, i) => {
              const Icon = layerIcons[i] ?? Layers;
              return (
                <motion.div
                  key={layer.id}
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
                          <h3 className="font-display font-semibold">{layer.label}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{layer.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {layer.systems.map((sys) => (
                            <span key={sys} className="px-2.5 py-1 text-xs font-mono rounded-md bg-background/50 text-muted-foreground">
                              {sys}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {i < copy.layers.items.length - 1 && (
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

    </div>
  );
}
