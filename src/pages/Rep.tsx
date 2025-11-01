import { useState, useMemo, useEffect } from "react";
import Scaffold from "../components/Scaffold";
import { useLocalStorage } from "../hooks/local.ts";
import MultiToggle from "../components/MultiToggleButton";
import { Column } from "../components/FlexLayouter.tsx";
import "../styles/Rep.css";

type ViewMode = "weeks" | "months" | "years";

export default function Rep() {
    const [username] = useLocalStorage("username", "");
    const [birthdate] = useLocalStorage("birthdate", "");
    const [gender] = useLocalStorage("gender", "");
    const [view, setView] = useState<ViewMode>("years");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);
    }, [view]);
    const lifeExpectancy =
        gender === "Male" ? 71 : gender === "Female" ? 76 : 74;
    const { total, elapsed, remaining } = useMemo(() => {
        if (!birthdate) {
            return { total: 0, elapsed: 0, remaining: 0 };
        }
        const birth = new Date(birthdate);
        const now = new Date();
        const death = new Date(birth);
        death.setFullYear(birth.getFullYear() + lifeExpectancy);

        if (view === "weeks") {
            const totalWeeks = Math.floor(
                (death.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 7)
            );
            const elapsedWeeks = Math.floor(
                (now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24 * 7)
            );
            return {
                total: totalWeeks,
                elapsed: elapsedWeeks,
                remaining: totalWeeks - elapsedWeeks,
            };
        } else if (view === "months") {
            const totalMonths = lifeExpectancy * 12;
            const elapsedMonths =
                (now.getFullYear() - birth.getFullYear()) * 12 +
                (now.getMonth() - birth.getMonth());
            return {
                total: totalMonths,
                elapsed: elapsedMonths,
                remaining: totalMonths - elapsedMonths,
            };
        } else {
            const totalYears = lifeExpectancy;
            const elapsedYears = now.getFullYear() - birth.getFullYear();
            return {
                total: totalYears,
                elapsed: elapsedYears,
                remaining: totalYears - elapsedYears,
            };
        }
    }, [birthdate, view, lifeExpectancy]);
    const cellSize = view === "weeks" ? 5 : view === "months" ? 12 : 50;
    const cellGap = view === "weeks" ? 1 : 1.5;
    return (
        <Scaffold>
            <Column gap={8}>
                <h1 className="text-2xl font-bold text-white">
                    {username
                        ? `${username}: The Remainder of Your Life`
                        : "The Remainder of Your Life"}
                </h1>

                <div className="flex gap-2">
                    <MultiToggle
                        options={["weeks", "months", "years"]}
                        value={view}
                        onChange={(v) => setView(v)}
                        className="gap-2"
                    />
                </div>

                <div className="relative w-full min-h-[200px]">
                    {/* Spinner layer */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                            loading
                                ? "opacity-100 pointer-events-auto translate-y-0"
                                : "opacity-0 pointer-events-none translate-y-3"
                        }`}
                    >
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span className="text-xs text-white/50">
                                Recalculating…
                            </span>
                        </div>
                    </div>

                    <div
                        className={`inset-0 flex items-center justify-center transition-opacity duration-500 ${
                            loading
                                ? "opacity-0 pointer-events-none"
                                : "opacity-100"
                        }`}
                    >
                        <div className="w-full">
                            <div
                                className={`grid max-w-[90dvw] gap-${cellGap}`}
                                style={{
                                    gridTemplateColumns: `repeat(auto-fill, minmax(${cellSize}px, 1fr))`,
                                    gridAutoRows: `${cellSize}px`,
                                }}
                            >
                                {Array.from({ length: total }).map((_, i) => {
                                    return (
                                        <div
                                            key={`cell-${view}-${i}`}
                                            className={`aspect-square transition-colors duration-150 cell-animate ${
                                                i < elapsed
                                                    ? "bg-white/20"
                                                    : "bg-white"
                                            }`}
                                            style={{
                                                animationDelay: `${i * 1.15}ms`,
                                            }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {!loading && (
                    <p className="text-white/60 text-sm">
                        {remaining} {view} left
                    </p>
                )}
            </Column>
        </Scaffold>
    );
}
