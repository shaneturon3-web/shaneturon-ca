'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/language';

export function ContactClient() {
  const { language } = useLanguage();
  const copy = language.pages.contact;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    if (!form?.name || !form?.email || !form?.message) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res?.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await res?.json?.().catch(() => ({}));
        setErrorMsg(data?.error ?? copy.form.errorGeneric);
        setStatus('error');
      }
    } catch {
      setErrorMsg(copy.form.errorNetwork);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">{copy.hero.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              {copy.hero.titlePrefix} <span className="text-primary">{copy.hero.titleAccent}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              {copy.hero.intro}
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-lg p-8 text-center border border-primary/30"
              >
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-display text-xl font-bold mb-2">{copy.success.title}</h2>
                <p className="text-muted-foreground text-sm">{copy.success.body}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{copy.form.labels.name}</label>
                    <input
                      type="text"
                      value={form?.name ?? ''}
                      onChange={(e: any) => setForm({ ...(form ?? {}), name: e?.target?.value ?? '' })}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder={copy.form.placeholders.name}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{copy.form.labels.email}</label>
                    <input
                      type="email"
                      value={form?.email ?? ''}
                      onChange={(e: any) => setForm({ ...(form ?? {}), email: e?.target?.value ?? '' })}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder={copy.form.placeholders.email}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{copy.form.labels.subject}</label>
                  <input
                    type="text"
                    value={form?.subject ?? ''}
                    onChange={(e: any) => setForm({ ...(form ?? {}), subject: e?.target?.value ?? '' })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder={copy.form.placeholders.subject}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{copy.form.labels.message}</label>
                  <textarea
                    value={form?.message ?? ''}
                    onChange={(e: any) => setForm({ ...(form ?? {}), message: e?.target?.value ?? '' })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder={copy.form.placeholders.message}
                  />
                </div>

                {status === 'error' && errorMsg && (
                  <p className="text-sm text-destructive">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> {copy.form.sending}</>
                  ) : (
                    <><Send className="h-4 w-4" /> {copy.form.submit}</>
                  )}
                </button>

                <p className="text-xs text-muted-foreground mt-4">{copy.form.privacy}</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
