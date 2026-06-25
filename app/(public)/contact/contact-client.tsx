'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

export function ContactClient() {
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
        setErrorMsg(data?.error ?? 'Something went wrong.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-4">Connect</p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Engagement <span className="text-primary">Inquiry</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Operational architecture. Workflow intelligence. Systems consultation.
            </p>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-lg p-8 text-center border border-primary/30"
              >
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h2 className="font-display text-xl font-bold mb-2">Inquiry Received</h2>
                <p className="text-muted-foreground text-sm">Thank you. A response will follow within 48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={form?.name ?? ''}
                      onChange={(e: any) => setForm({ ...(form ?? {}), name: e?.target?.value ?? '' })}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={form?.email ?? ''}
                      onChange={(e: any) => setForm({ ...(form ?? {}), email: e?.target?.value ?? '' })}
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    value={form?.subject ?? ''}
                    onChange={(e: any) => setForm({ ...(form ?? {}), subject: e?.target?.value ?? '' })}
                    className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Engagement type (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={form?.message ?? ''}
                    onChange={(e: any) => setForm({ ...(form ?? {}), message: e?.target?.value ?? '' })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-md text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Describe the operational challenge or engagement scope..."
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
                    <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="h-4 w-4" /> Submit Inquiry</>
                  )}
                </button>

                <p className="text-xs text-muted-foreground mt-4">Inquiry data is stored securely. No data is shared with third parties.</p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
