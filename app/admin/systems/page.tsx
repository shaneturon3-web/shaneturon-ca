'use client';

import { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, Loader2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminSystemsPage() {
  const [systems, setSystems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [toggling, setToggling] = useState<string | null>(null);

  const load = async () => {
    try {
      const res = await fetch('/api/systems?all=true');
      const data = await res?.json?.() ?? [];
      setSystems(data);
    } catch { /* silent */ }
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const togglePublished = async (item: any) => {
    setToggling(item.id);
    try {
      const res = await fetch(`/api/systems/${item.id}`, {
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
      const url = isNew ? '/api/systems' : `/api/systems/${editing.id}`;
      const method = isNew ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res?.ok) {
        toast?.success?.(isNew ? 'System created' : 'System updated');
        setEditing(null);
        load();
      } else {
        toast?.error?.('Failed to save');
      }
    } catch { toast?.error?.('Error saving'); }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this system?')) return;
    try {
      await fetch(`/api/systems/${id}`, { method: 'DELETE' });
      toast?.success?.('Deleted');
      load();
    } catch { toast?.error?.('Failed to delete'); }
  };

  const newSystem = () => setEditing({
    name: '', slug: '', tagline: '', description: '', status: 'ACTIVE',
    category: '', features: '[]', architecture: '', sortOrder: 0, isPublished: true,
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">Systems</h1>
          <p className="text-sm text-muted-foreground">Manage flagship systems and products.</p>
        </div>
        <button onClick={newSystem} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90">
          <Plus className="h-4 w-4" /> Add System
        </button>
      </div>

      {/* Editor Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-card rounded-lg border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg font-bold">{editing?.id ? 'Edit System' : 'New System'}</h2>
              <button onClick={() => setEditing(null)} className="text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4">
              {['name', 'slug', 'tagline', 'category', 'status'].map((field: string) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                  <input
                    value={editing?.[field] ?? ''}
                    onChange={(e: any) => setEditing({ ...(editing ?? {}), [field]: e?.target?.value ?? '' })}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              ))}
              {['description', 'architecture'].map((field: string) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                  <textarea
                    value={editing?.[field] ?? ''}
                    onChange={(e: any) => setEditing({ ...(editing ?? {}), [field]: e?.target?.value ?? '' })}
                    rows={3}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1">Features (JSON array)</label>
                <textarea
                  value={editing?.features ?? '[]'}
                  onChange={(e: any) => setEditing({ ...(editing ?? {}), features: e?.target?.value ?? '[]' })}
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={editing?.isPublished ?? false} onChange={(e: any) => setEditing({ ...(editing ?? {}), isPublished: e?.target?.checked })} />
                  Published
                </label>
                <div>
                  <label className="text-sm mr-2">Sort Order:</label>
                  <input
                    type="number"
                    value={editing?.sortOrder ?? 0}
                    onChange={(e: any) => setEditing({ ...(editing ?? {}), sortOrder: parseInt(e?.target?.value ?? '0') || 0 })}
                    className="w-20 px-2 py-1 bg-background border border-border rounded text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button onClick={() => setEditing(null)} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">Cancel</button>
              <button onClick={handleSave} disabled={saving} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90 disabled:opacity-50">
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />} Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-16"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>
      ) : (
        <div className="space-y-3">
          {(systems ?? []).map((sys: any) => (
            <div key={sys?.id} className={`bg-card rounded-lg p-4 border flex items-center justify-between ${sys?.isPublished ? 'border-border/30' : 'border-border/30 opacity-60'}`}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-sm">{sys?.name}</h3>
                  <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${sys?.isPublished ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-500/10 text-zinc-500'}`}>
                    {sys?.isPublished ? 'LIVE' : 'OFF'}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground truncate">{sys?.tagline}</p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                {/* Inline Toggle Switch */}
                <button
                  onClick={() => togglePublished(sys)}
                  disabled={toggling === sys.id}
                  className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                  style={{ backgroundColor: sys?.isPublished ? '#34d399' : '#3f3f46' }}
                  title={sys?.isPublished ? 'Click to switch OFF' : 'Click to switch ON'}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${sys?.isPublished ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </button>
                <button onClick={() => setEditing(sys)} className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button onClick={() => handleDelete(sys?.id)} className="p-2 text-muted-foreground hover:text-destructive rounded-md hover:bg-accent">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
