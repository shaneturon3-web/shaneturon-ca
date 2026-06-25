'use client';

import { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, Loader2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

const fields = ['title', 'slug', 'subtitle', 'category', 'tags', 'status'];
const textareas = ['problem', 'constraints', 'analysis', 'design', 'results', 'lessons'];

export default function AdminCaseFilesPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    try {
      const res = await fetch('/api/case-files?all=true');
      const data = await res?.json?.() ?? [];
      setItems(data);
    } catch { /* silent */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const togglePublished = async (item: any) => {
    setToggling(item.id);
    try {
      const res = await fetch(`/api/case-files/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isPublished: !item.isPublished }),
      });
      if (res?.ok) {
        toast?.success?.(item.isPublished ? 'Switched OFF — now draft' : 'Switched ON — now live');
        load();
      } else { toast?.error?.('Toggle failed'); }
    } catch { toast?.error?.('Toggle error'); }
    setToggling(null);
  };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const isNew = !editing?.id;
      const url = isNew ? '/api/case-files' : `/api/case-files/${editing.id}`;
      const res = await fetch(url, {
        method: isNew ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res?.ok) {
        toast?.success?.(isNew ? 'Created' : 'Updated');
        setEditing(null);
        load();
      } else { toast?.error?.('Failed'); }
    } catch { toast?.error?.('Error'); }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this case file?')) return;
    try { await fetch(`/api/case-files/${id}`, { method: 'DELETE' }); toast?.success?.('Deleted'); load(); } catch {}
  };

  const newItem = () => setEditing({
    title: '', slug: '', subtitle: '', problem: '', constraints: '', analysis: '',
    design: '', results: '', lessons: '', status: 'DRAFT', category: '', tags: '',
    isPublished: false, sortOrder: 0,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">Case Files</h1>
          <p className="text-sm text-muted-foreground">Structured operational case studies.</p>
        </div>
        <button onClick={newItem} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90">
          <Plus className="h-4 w-4" /> New Case File
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-card rounded-lg border border-border w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-bold">{editing?.id ? 'Edit' : 'New'} Case File</h2>
              <button onClick={() => setEditing(null)}><X className="h-5 w-5 text-muted-foreground" /></button>
            </div>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {fields.map((f: string) => (
                  <div key={f}>
                    <label className="block text-sm font-medium mb-1 capitalize">{f}</label>
                    <input
                      value={editing?.[f] ?? ''}
                      onChange={(e: any) => setEditing({ ...(editing ?? {}), [f]: e?.target?.value ?? '' })}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
              {textareas.map((f: string) => (
                <div key={f}>
                  <label className="block text-sm font-medium mb-1 capitalize">{f}</label>
                  <textarea
                    value={editing?.[f] ?? ''}
                    onChange={(e: any) => setEditing({ ...(editing ?? {}), [f]: e?.target?.value ?? '' })}
                    rows={3}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
              ))}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={editing?.isPublished ?? false} onChange={(e: any) => setEditing({ ...(editing ?? {}), isPublished: e?.target?.checked })} />
                  Published
                </label>
                <div>
                  <label className="text-sm mr-2">Sort:</label>
                  <input type="number" value={editing?.sortOrder ?? 0} onChange={(e: any) => setEditing({ ...(editing ?? {}), sortOrder: parseInt(e?.target?.value ?? '0') || 0 })} className="w-20 px-2 py-1 bg-background border border-border rounded text-sm" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setEditing(null)} className="px-4 py-2 text-sm text-muted-foreground">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md disabled:opacity-50">
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />} Save
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-16"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
      ) : (
        <div className="space-y-3">
          {(items ?? []).map((cf: any) => (
            <div key={cf?.id} className={`bg-card rounded-lg p-4 border flex items-center justify-between ${cf?.isPublished ? 'border-border/30' : 'border-border/30 opacity-60'}`}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-sm">{cf?.title}</h3>
                  <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${cf?.isPublished ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-500/10 text-zinc-500'}`}>
                    {cf?.isPublished ? 'LIVE' : 'OFF'}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{cf?.subtitle ?? cf?.category}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                {/* Inline Toggle Switch */}
                <button
                  onClick={() => togglePublished(cf)}
                  disabled={toggling === cf.id}
                  className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ backgroundColor: cf?.isPublished ? '#34d399' : '#3f3f46' }}
                  title={cf?.isPublished ? 'Click to switch OFF' : 'Click to switch ON'}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${cf?.isPublished ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
                <button onClick={() => setEditing(cf)} className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"><Edit2 className="h-4 w-4" /></button>
                <button onClick={() => handleDelete(cf?.id)} className="p-2 text-muted-foreground hover:text-destructive rounded-md hover:bg-accent"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
