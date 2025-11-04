"use client";

import * as React from 'react';

type AlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  cancelText?: string;
  actionText?: string;
  onAction?: () => void;
};

export function AlertDialog({ open, onOpenChange, title, description, cancelText = 'Cancel', actionText = 'Continue', onAction }: AlertDialogProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={() => onOpenChange(false)} />
      <div className="relative z-10 w-full max-w-md rounded-lg border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-slate-900">
        {title ? <h2 className="text-lg font-semibold">{title}</h2> : null}
        {description ? <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{description}</p> : null}
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="rounded-md border border-slate-300 px-3 py-2 text-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            onClick={() => onOpenChange(false)}
          >
            {cancelText}
          </button>
          <button
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
            onClick={() => {
              onOpenChange(false);
              onAction?.();
            }}
          >
            {actionText}
          </button>
        </div>
      </div>
    </div>
  );
}

