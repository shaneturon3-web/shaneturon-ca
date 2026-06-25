'use client';

import { motion } from 'framer-motion';
import {
  Layers, Brain, Shield, Globe, Cpu, Target,
  Zap, ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language';

const capabilityIcons = [Layers, Cpu, Shield, Target, Brain, Globe];

export function AboutClient() {
  const { language } = useLanguage();
  const copy = language.pages.about;

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">{copy.hero.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {copy.hero.titlePrefix} <span className="text-primary">{copy.hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {copy.hero.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-6">{copy.cognitive.title}</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {copy.cognitive.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-2">{copy.capabilities.title}</h2>
            <p className="text-muted-foreground">{copy.capabilities.intro}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copy.capabilities.items.map((cap, i) => {
              const Icon = capabilityIcons[i] ?? Zap;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-lg p-6 hover:bg-accent/30 transition-all duration-300"
                >
                  <Icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="font-display font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">{copy.principles.title}</h2>
            <div className="space-y-4">
              {copy.principles.items.map((principle, i) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-md bg-background/50"
                >
                  <span className="font-mono text-xs text-primary mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{principle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl font-bold tracking-tight mb-8">{copy.differentiators.title}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {copy.differentiators.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-lg p-5"
                >
                  <h3 className="font-display font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-6">{copy.cta.body}</p>
            <Link
              href="/systems"
              prefetch={false}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              {copy.cta.action} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
