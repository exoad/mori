import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/local";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import CustomCheckbox from "./CustomCheckbox";

interface SettingsMenuProps {
    className?: string;
}

export default function SettingsMenu({ className }: SettingsMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [accessibilityMode, setAccessibilityMode] = useLocalStorage("accessibilityMode", "false");
    const isAccessibilityMode = accessibilityMode === "true";
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.toggle("accessibility-mode", isAccessibilityMode);
    }, [isAccessibilityMode]);

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const modalContent = isOpen ? (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className={`${isAccessibilityMode ? 'bg-black' : 'bg-black/90'} border-2 border-white shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md mx-auto`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-bold text-lg">Settings</h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:text-white/80 p-1"
                        aria-label="Close"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="sm:w-7 sm:h-7">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="space-y-4">
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            navigate("/mori/setup");
                        }}
                        className="w-full text-left p-3 bg-white hover:bg-white/90 text-black font-medium transition-colors"
                    >
                        Edit Profile
                    </button>
                    <div className="space-y-2">
                        <div className="p-3">
                            <CustomCheckbox
                                checked={isAccessibilityMode}
                                onChange={(checked) => setAccessibilityMode(checked ? "true" : "false")}
                                label="Accessibility Mode"
                            />
                        </div>
                        <p className="text-white/70 text-xs px-3">
                            Makes dark gray colors brighter for better visibility.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className={`p-2 bg-white/10 hover:bg-white/20 text-white transition-colors ${className}`}
                aria-label="Settings"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            </button>
            {createPortal(modalContent, document.body)}
        </>
    );
}