"use client";

import * as React from 'react';
import cn from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'destructive';
};

export function Button({ className, variant = 'default', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200',
    outline: 'border border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800',
    destructive: 'bg-red-600 text-white hover:bg-red-700'
  } as const;
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export default Button;

