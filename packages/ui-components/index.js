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

export function Modal({ isOpen, onClose, title, children, className = "" }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />
            <div
                className={`relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ${className}`}
            >
                <div className="mb-4 flex items-center justify-between">
                    {title ? (
                        <h2 className="text-lg font-semibold text-zinc-900">
                            {title}
                        </h2>
                    ) : (
                        <div />
                    )}
                    <button
                        onClick={onClose}
                        className="ml-auto rounded-full p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
                    >
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

export function Badge({ text, tone = "default", className = "" }) {
    const tones = {
        default: "bg-zinc-100 text-zinc-700",
        success: "bg-green-100 text-green-700",
        warning: "bg-yellow-100 text-yellow-700",
        error: "bg-red-100 text-red-700",
        info: "bg-blue-100 text-blue-700",
    };

    return (
        <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${tones[tone] || tones.default} ${className}`}
        >
            {text}
        </span>
    );
}

export function Tabs({ tabs, activeTab, onChange, className = "" }) {
    return (
        <div className={`flex gap-1 rounded-xl bg-zinc-100 p-1 ${className}`}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => onChange(tab.value)}
                    className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                        activeTab === tab.value
                            ? "bg-white text-zinc-900 shadow-sm"
                            : "text-zinc-500 hover:text-zinc-700"
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}

export function Table({ columns, data, className = "" }) {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="border-b border-zinc-200">
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className="px-4 py-3 font-medium text-zinc-500"
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr
                            key={row.id ?? i}
                            className="border-b border-zinc-100 last:border-0"
                        >
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className="px-4 py-3 text-zinc-900"
                                >
                                    {col.render
                                        ? col.render(row[col.key], row)
                                        : row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function StatCard({ title, value, helper, className = "" }) {
    return (
        <div
            className={`rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm ${className}`}
        >
            <p className="text-sm font-medium text-zinc-500">{title}</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900">
                {value}
            </p>
            {helper ? (
                <p className="mt-3 text-xs font-medium text-zinc-500">
                    {helper}
                </p>
            ) : null}
        </div>
    );
}
