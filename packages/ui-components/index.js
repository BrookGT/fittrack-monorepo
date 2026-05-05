export function Button({ children, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 ${className}`}
        >
            {children}
        </button>
    );
}

export function Card({ title, children, className = "" }) {
    return (
        <section
            className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`}
        >
            {title ? (
                <h2 className="mb-4 text-lg font-semibold text-zinc-900">
                    {title}
                </h2>
            ) : null}
            {children}
        </section>
    );
}

export function Input({
    id,
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    className = "",
}) {
    return (
        <label className="flex w-full flex-col gap-2 text-sm font-medium text-zinc-700">
            {label}
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 outline-none transition focus:border-zinc-400 ${className}`}
            />
        </label>
    );
}

export function ProgressBar({ value, max = 100, label, className = "" }) {
    const safeMax = max <= 0 ? 100 : max;
    const percent = Math.min(100, Math.round((value / safeMax) * 100));

    return (
        <div className={`w-full ${className}`}>
            {label ? (
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-zinc-600">
                    <span>{label}</span>
                    <span>{percent}%</span>
                </div>
            ) : null}
            <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-100">
                <div
                    className="h-full rounded-full bg-zinc-900 transition-all"
                    style={{ width: `${percent}%` }}
                />
            </div>
        </div>
    );
}
