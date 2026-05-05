# FitTrack Monorepo System

A modular monorepo built for the FitTrack assignment. It uses npm workspaces with two Next.js feature apps and shared UI + utility packages.

## Structure

```
fittrack-monorepo/
  apps/
    feature-x/        # Workout Tracker (Next.js)
    feature-y/        # Nutrition Tracker (Next.js)
  packages/
    ui-components/    # Shared UI components (Tailwind / shadcn-style)
    utils/            # Shared utility functions
```

## Setup

```bash
npm install
```

## Run

```bash
npm run dev:x
npm run dev:y
```

## Build

```bash
npm run build:x
npm run build:y
```

## Notes

- Feature apps assemble screens only. UI components and shared logic come from packages.
- Shared components live in `@fittrack/ui-components` and are styled with Tailwind.
- Shared utilities live in `@fittrack/utils`.
