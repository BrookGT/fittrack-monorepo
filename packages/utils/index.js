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

export function formatNumber(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) {
        return "0";
    }
    return number.toLocaleString("en-US");
}

export function capitalize(text) {
    if (typeof text !== "string" || text.length === 0) {
        return "";
    }
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function validateRequired(value) {
    if (value === null || value === undefined) {
        return false;
    }
    if (typeof value === "string") {
        return value.trim().length > 0;
    }
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    if (typeof value === "object") {
        return Object.keys(value).length > 0;
    }
    return true;
}

export function storageGet(key, fallback) {
    if (typeof window === "undefined" || !window.localStorage) {
        return fallback;
    }
    try {
        const raw = window.localStorage.getItem(key);
        if (raw === null) {
            return fallback;
        }
        return JSON.parse(raw);
    } catch (error) {
        return fallback;
    }
}

export function storageSet(key, value) {
    if (typeof window === "undefined" || !window.localStorage) {
        return;
    }
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        return;
    }
}
