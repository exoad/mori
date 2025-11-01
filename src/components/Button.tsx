import React from "react";

export default function FatButton({
    children,
    className = "",
    onPress,
    onClick,
    ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
    onPress?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
    return (
        <button
            {...rest}
            type={rest.type ?? "button"}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                if (onPress) onPress(e);
                if (onClick) onClick(e);
            }}
            className={`inline-flex items-center justify-center
        bg-transparent text-white font-extrabold uppercase tracking-wide
        px-10 py-5 border-2 border-white
        transition-colors duration-150
        hover:bg-white hover:text-black
        active:bg-white active:text-black
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}`}
        >
            {children}
        </button>
    );
}
