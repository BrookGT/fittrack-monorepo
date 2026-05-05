"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { Button, Card, Input, ProgressBar } from "@fittrack/ui-components";
import { calculateCalories, formatDate, generateId } from "@fittrack/utils";

const dailyGoal = 2000;

export default function Home() {
    const [meals, setMeals] = useState([
        {
            id: generateId("meal"),
            name: "Overnight oats",
            calories: 420,
            date: formatDate(),
        },
    ]);
    const [form, setForm] = useState({ name: "", calories: "" });

    const totalCalories = useMemo(() => calculateCalories(meals), [meals]);
    const progressValue = Math.min(totalCalories, dailyGoal);

    const handleAdd = () => {
        const calories = Number(form.calories);
        if (!form.name.trim() || Number.isNaN(calories) || calories <= 0) {
            return;
        }

        setMeals((current) => [
            {
                id: generateId("meal"),
                name: form.name.trim(),
                calories,
                date: formatDate(),
            },
            ...current,
        ]);
        setForm({ name: "", calories: "" });
    };

    return (
        <div className="min-h-screen bg-zinc-50">
            <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-12">
                <header className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                        FitTrack / Feature Y
                    </p>
                    <h1 className="text-3xl font-semibold text-zinc-900">
                        Nutrition Tracker
                    </h1>
                    <p className="max-w-2xl text-base text-zinc-600">
                        Track meals, monitor calories, and stay within your
                        daily goal.
                    </p>
                </header>

                <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <Card title="Log a meal">
                        <div className="flex flex-col gap-4">
                            <Input
                                id="meal-name"
                                label="Meal name"
                                value={form.name}
                                placeholder="Chicken salad, smoothie..."
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
                                id="meal-calories"
                                label="Calories"
                                type="number"
                                value={form.calories}
                                placeholder="350"
                                onChange={(
                                    event: ChangeEvent<HTMLInputElement>,
                                ) =>
                                    setForm((current) => ({
                                        ...current,
                                        calories: event.target.value,
                                    }))
                                }
                            />
                            <div className="flex justify-end">
                                <Button onClick={handleAdd}>Add meal</Button>
                            </div>
                        </div>
                    </Card>

                    <Card title="Daily summary">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between text-sm text-zinc-600">
                                <span>Total calories</span>
                                <span className="text-lg font-semibold text-zinc-900">
                                    {totalCalories}
                                </span>
                            </div>
                            <ProgressBar
                                value={progressValue}
                                max={dailyGoal}
                                label={`Goal: ${dailyGoal} kcal`}
                            />
                        </div>
                    </Card>
                </section>

                <Card title="Recent meals">
                    <div className="flex flex-col gap-3">
                        {meals.map((meal) => (
                            <div
                                key={meal.id}
                                className="flex items-center justify-between rounded-xl border border-zinc-100 bg-zinc-50 px-4 py-3"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-zinc-900">
                                        {meal.name}
                                    </p>
                                    <p className="text-xs text-zinc-500">
                                        {meal.date}
                                    </p>
                                </div>
                                <span className="text-sm font-semibold text-zinc-800">
                                    {meal.calories} kcal
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </main>
        </div>
    );
}
