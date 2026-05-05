# Feature Y - Nutrition Tracker

This app demonstrates the nutrition tracking feature system. It composes shared UI components and shared utilities from the monorepo packages.

## Features

- Log meals with calories
- Track daily calories toward a goal
- Display recent meals list

## Architecture

- UI components come from `@fittrack/ui-components` (Button, Card, Input, ProgressBar)
- Shared logic comes from `@fittrack/utils` (generateId, formatDate, calculateCalories)
- The page assembles components only; no reusable logic lives inside the feature app

## Run

From monorepo root:

```bash
npm run dev:y
```
