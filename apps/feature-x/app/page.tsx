"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { Button, Card, Input, ProgressBar } from "@fittrack/ui-components";
import { calculateWorkoutStats, formatDate, generateId } from "@fittrack/utils";

const weeklyGoal = 180;

export default function Home() {
    const [workouts, setWorkouts] = useState([
        {
            id: generateId("workout"),
            name: "Strength training",
            minutes: 45,
            date: formatDate(),
        },
    ]);
    const [form, setForm] = useState({ name: "", minutes: "" });

    const stats = useMemo(() => calculateWorkoutStats(workouts), [workouts]);
    const progressValue = Math.min(stats.totalMinutes, weeklyGoal);

    const handleAdd = () => {
        const minutes = Number(form.minutes);
        if (!form.name.trim() || Number.isNaN(minutes) || minutes <= 0) {
            return;
        }

        setWorkouts((current) => [
            {
                id: generateId("workout"),
                name: form.name.trim(),
                minutes,
                date: formatDate(),
            },
            ...current,
        ]);
        setForm({ name: "", minutes: "" });
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
                <header className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                        FitTrack / Feature X
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900">
                        Workout Tracker
                    </h1>
                    <p className="max-w-2xl text-base text-zinc-600">
                        Log workouts, track weekly minutes, and see your
                        progress at a glance.
                    </p>
                </header>

                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <Card title="Add a workout">
                        <div className="flex flex-col gap-4">
                            <Input
                                id="workout-name"
                                label="Workout name"
                                value={form.name}
                                placeholder="Cardio, yoga, strength..."
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>,
                                ) =>
                                    setForm((current) => ({
                                        ...current,
                                        name: event.target.value,
                                    }))
                                }
                            />
                            <Input
                                id="workout-minutes"
                                label="Minutes"
                                type="number"
                                value={form.minutes}
                                placeholder="30"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>,
                                ) =>
                                    setForm((current) => ({
                                        ...current,
                                        minutes: event.target.value,
                                    }))
                                }
                            />
                            <div className="flex justify-end">
                                <Button onClick={handleAdd}>Add workout</Button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Weekly summary">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between text-sm text-zinc-600">
                                <span>Total workouts</span>
                                <span className="text-lg font-semibold text-zinc-900">
                                    {stats.totalWorkouts}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-zinc-600">
                                <span>Total minutes</span>
                                <span className="text-lg font-semibold text-zinc-900">
                                    {stats.totalMinutes}
                                </span>
                            </div>
                            <ProgressBar
                                value={progressValue}
                                max={weeklyGoal}
                                label={`Goal: ${weeklyGoal} min`}
                            />
                        </div>
                    </Card>
                </section>

                <Card title="Recent workouts">
                    <div className="flex flex-col gap-3">
                        {workouts.map((workout) => (
                            <div
                                key={workout.id}
                                className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-zinc-900">
                                        {workout.name}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {workout.date}
                                    </p>
                                </div>
                                <span className="text-sm font-semibold text-zinc-800">
                                    {workout.minutes} min
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </main>
        </div>
    );
}
