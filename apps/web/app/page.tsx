"use client";

import { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ItemModal } from "@/components/item-modal";
import { DeleteConfirmDialog } from "@/components/delete-confirm-dialog";
import { ItemCard } from "@/components/item-card";
import type { Item } from "@/types";
import type { ItemFormData } from "@/lib/schemas";

export default function Page() {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }, [items]);

  const handleFormSubmit = useCallback((data: ItemFormData) => {
    if (editingItem == null) {
      const newItem: Item = {
        id: crypto.randomUUID(),
        title: data.title,
        subtitle: data.subtitle,
        createdAt: new Date(),
      };
      setItems((prev) => [newItem, ...prev]);
    } else {
      setItems((prev) =>
        prev.map((it) => (it.id === editingItem.id ? { ...it, title: data.title, subtitle: data.subtitle } : it))
      );
    }
    setIsModalOpen(false);
    setEditingItem(null);
  }, [editingItem]);

  const handleEditClick = useCallback((item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  }, []);

  const handleDeleteClick = useCallback((id: string) => {
    setDeletingItemId(id);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (deletingItemId) {
      setItems((prev) => prev.filter((it) => it.id !== deletingItemId));
      setDeletingItemId(null);
    }
  }, [deletingItemId]);

  return (
    <main className="min-h-dvh">
      <header className="border-b">
        <div className="container flex items-center justify-between py-6">
          <h1 className="text-2xl font-semibold">List Management Interface</h1>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setEditingItem(null); setIsModalOpen(true); }}>Create New Item</Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container py-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sortedItems.length === 0 ? (
          <p className="text-muted-foreground">No items yet. Create one to get started.</p>
        ) : (
          sortedItems.map((item) => (
            <ItemCard key={item.id} item={item} onEdit={handleEditClick} onDelete={handleDeleteClick} />
          ))
        )}
      </div>

      <ItemModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingItem(null); }}
        onSubmit={handleFormSubmit}
        defaultValues={editingItem ? { title: editingItem.title, subtitle: editingItem.subtitle } : undefined}
      />

      <DeleteConfirmDialog
        isOpen={deletingItemId != null}
        onClose={() => setDeletingItemId(null)}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
}


