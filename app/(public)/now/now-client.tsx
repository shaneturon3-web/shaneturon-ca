'use client';

import { motion } from 'framer-motion';
import { Clock, Activity } from 'lucide-react';
import { StatusStrip } from '@/components/status-strip';

const categoryColors: Record<string, string> = {
  Engineering: 'text-blue-400',
  Product: 'text-primary',
  Architecture: 'text-purple-400',
  Operations: 'text-yellow-400',
  Documentation: 'text-orange-400',
};

export function NowClient({ items }: { items: any[] }) {
  const safe = items ?? [];

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 text-primary" />
              <p className="text-sm font-mono text-primary uppercase tracking-widest">/now</p>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Current <span className="text-primary">Focus</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Real-time operational focus. What the systems are doing right now.
            </p>

            <div className="mb-16">
              <StatusStrip />
            </div>
          </motion.div>

          <div className="space-y-4">
            {safe.map((item: any, i: number) => (
              <motion.div
                key={item?.id ?? i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border/30"
              >
                <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0 status-pulse" />
                <div className="flex-1">
                  <span className={`text-xs font-mono uppercase tracking-widest ${categoryColors[item?.category] ?? 'text-muted-foreground'}`}>
                    {item?.category}
                  </span>
                  <p className="text-sm text-foreground mt-1 leading-relaxed">{item?.content}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground/40">{String(i + 1).padStart(2, '0')}</span>
              </motion.div>
            ))}
          </div>

          {safe.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Activity className="h-8 w-8 mx-auto mb-4 text-muted-foreground/50" />
              <p>Status updates loading...</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-6 rounded-lg bg-card/50 text-center"
          >
            <p className="text-xs font-mono text-muted-foreground">
              This page is updated regularly through the private intelligence dashboard.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
