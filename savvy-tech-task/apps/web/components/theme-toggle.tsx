"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme ?? resolvedTheme ?? 'system';

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
        className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
        aria-label="Toggle theme"
      >
        {resolvedTheme === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
        <span className="hidden sm:inline">Toggle</span>
      </button>
      <select
        aria-label="Theme"
        className="rounded-md border bg-transparent px-2 py-2 text-sm"
        value={current}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </div>
  );
}

