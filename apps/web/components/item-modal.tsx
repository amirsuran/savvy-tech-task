"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ItemForm } from "@/components/item-form";
import type { ItemFormData } from "@/lib/schemas";

export function ItemModal({ isOpen, onClose, onSubmit, defaultValues }: { isOpen: boolean; onClose: () => void; onSubmit: (data: ItemFormData) => void; defaultValues?: ItemFormData; }) {
  const isEditing = Boolean(defaultValues);
  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Item" : "Create New Item"}</DialogTitle>
          <DialogDescription>
            {isEditing ? "Update the item details below." : "Fill in the details to create a new item."}
          </DialogDescription>
        </DialogHeader>
        <ItemForm onSubmit={onSubmit} defaultValues={defaultValues} />
      </DialogContent>
    </Dialog>
  );
}


