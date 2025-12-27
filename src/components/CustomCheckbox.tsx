interface CustomCheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    className?: string;
}

export default function CustomCheckbox({
    checked,
    onChange,
    label,
    className,
}: CustomCheckboxProps) {
    return (
        <label className={`flex items-center space-x-3 cursor-pointer ${className}`}>
            <div className="relative w-5 h-5">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => onChange(e.target.checked)}
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    aria-label={label}
                />
                <div
                    className={`w-5 h-5 border border-white transition-colors ${
                        checked ? "bg-white" : "bg-transparent"
                    }`}
                >
                    {checked && (
                        <svg
                            className="w-full h-full text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    )}
                </div>
            </div>
            {label && <span className="text-white text-sm">{label}</span>}
        </label>
    );
}
