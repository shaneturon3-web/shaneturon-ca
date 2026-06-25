'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { getLanguage } from '@/lib/language';

export function StatusStrip() {
  const language = getLanguage();
  const statusItems = language.statusStrip.items;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="flex items-center gap-2 flex-wrap justify-center"
    >
      <Activity className="h-3.5 w-3.5 text-primary" />
      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mr-2">
        {language.statusStrip.label}
      </span>
      {statusItems.map((item, i) => (
        <span key={item.name} className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
          {item.name}
          {i < statusItems.length - 1 && <span className="mx-1 text-border">·</span>}
        </span>
      ))}
    </motion.div>
  );
}
