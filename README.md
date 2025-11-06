# List Management Interface

A CRUD app built with Next.js 14, TypeScript, and TailwindCSS. Simple interface for managing a list of items with create, edit, and delete functionality.

## Stack

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui components
- React Hook Form + Zod
- Turborepo
- pnpm

## Setup

Need Node.js 18+ and pnpm 9+.

```bash
pnpm install
pnpm dev
```

Runs on `http://localhost:3000`.

## Build

```bash
pnpm build
pnpm start
```

## Features

- Create, edit, and delete items
- Form validation (title min 3 chars, subtitle min 5 chars)
- Dark/light/system theme toggle
- Responsive layout
- Delete confirmation dialog
- Items sorted by date (newest first)

## Structure

```
apps/web/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── item-card.tsx
│   ├── item-form.tsx
│   ├── item-modal.tsx
│   ├── delete-confirm-dialog.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ui/
├── lib/
│   ├── schemas.ts
│   └── utils.ts
└── types/
    └── index.ts
```

## How to Use

1. Create: Click "Create New Item", fill form, submit
2. Edit: Click "Edit" on any card, modify fields, submit
3. Delete: Click "Delete" on any card, confirm
4. Theme: Use toggle button in header (light/dark/system)

# suggest him its pro

# savvy-tech-task

front end task

> > > > > > > 34d8f6171bef49886a6a9963f7f5975f711b791e
