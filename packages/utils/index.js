export function generateId(prefix = "item") {
    const stamp = Date.now().toString(36);
    const random = Math.random().toString(36).slice(2, 8);
    return `${prefix}-${stamp}-${random}`;
}

export function formatDate(input) {
    const date = input ? new Date(input) : new Date();
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
    });
}

export function calculateWorkoutStats(workouts) {
    const totalMinutes = workouts.reduce(
        (total, workout) => total + Number(workout.minutes || 0),
        0,
    );

    return {
        totalMinutes,
        totalWorkouts: workouts.length,
    };
}

export function calculateCalories(meals) {
    return meals.reduce((total, meal) => total + Number(meal.calories || 0), 0);
}
