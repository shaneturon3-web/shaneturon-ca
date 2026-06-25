'use client';

import { useEffect, useState } from 'react';
import { Plus, Edit2, Trash2, Loader2, Save, X } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminNowPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<any>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    try {
      const res = await fetch('/api/now');
      setItems(await res?.json?.() ?? []);
    } catch {}
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const isNew = !editing?.id;
      const url = isNew ? '/api/now' : `/api/now/${editing.id}`;
      const res = await fetch(url, {
        method: isNew ? 'POST' : 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editing),
      });
      if (res?.ok) { toast?.success?.('Saved'); setEditing(null); load(); }
      else toast?.error?.('Failed');
    } catch { toast?.error?.('Error'); }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete?')) return;
    try { await fetch(`/api/now/${id}`, { method: 'DELETE' }); toast?.success?.('Deleted'); load(); } catch {}
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">Now Items</h1>
          <p className="text-sm text-muted-foreground">Current focus items shown on /now page.</p>
        </div>
        <button onClick={() => setEditing({ content: '', category: '', isActive: true, sortOrder: 0 })} className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md hover:bg-primary/90">
          <Plus className="h-4 w-4" /> Add Item
        </button>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-card rounded-lg border border-border w-full max-w-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-lg font-bold">{editing?.id ? 'Edit' : 'New'} Item</h2>
              <button onClick={() => setEditing(null)}><X className="h-5 w-5 text-muted-foreground" /></button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea value={editing?.content ?? ''} onChange={(e: any) => setEditing({ ...(editing ?? {}), content: e?.target?.value ?? '' })} rows={3} className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <input value={editing?.category ?? ''} onChange={(e: any) => setEditing({ ...(editing ?? {}), category: e?.target?.value ?? '' })} className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary" />
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={editing?.isActive ?? true} onChange={(e: any) => setEditing({ ...(editing ?? {}), isActive: e?.target?.checked })} /> Active
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
          {(items ?? []).map((item: any) => (
            <div key={item?.id} className="bg-card rounded-lg p-4 border border-border/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-primary">{item?.category}</span>
                <p className="text-sm">{item?.content}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setEditing(item)} className="p-2 text-muted-foreground hover:text-foreground rounded-md hover:bg-accent"><Edit2 className="h-4 w-4" /></button>
                <button onClick={() => handleDelete(item?.id)} className="p-2 text-muted-foreground hover:text-destructive rounded-md hover:bg-accent"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
