# Feature X - Workout Tracker

This app demonstrates the workout tracking feature system. It composes shared UI components and shared utilities from the monorepo packages.

## Features

- Log a workout with name and minutes
- Track weekly total minutes
- Display recent workouts list

## Architecture

- UI components come from `@fittrack/ui-components` (Button, Card, Input, ProgressBar)
- Shared logic comes from `@fittrack/utils` (generateId, formatDate, calculateWorkoutStats)
- The page assembles components only; no reusable logic lives inside the feature app

## Run

From monorepo root:

```bash
npm run dev:x
```
