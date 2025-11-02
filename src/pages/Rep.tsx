import { useState, useMemo, useEffect } from "react";
import Scaffold from "../components/Scaffold";
import { useLocalStorage } from "../hooks/local.ts";
import MultiToggle from "../components/MultiToggleButton";
import { Column } from "../components/FlexLayouter.tsx";
import "../styles/Rep.css";
import Divider from "../components/Divider";
import { mortalityStats } from "../chronos.ts";
export default function Rep() {
    const [username] = useLocalStorage("username", "");
    const [birthdate] = useLocalStorage("birthdate", "");
    const [gender] = useLocalStorage("gender", "");
    const [view, setView] = useState<
        "weeks" | "months" | "years" | "days" | "countdown"
    >("years");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);
    }, [view]);
    const lifeExpectancy =
        gender === "Male"
            ? mortalityStats.male
            : gender === "Female"
            ? mortalityStats.female
            : Math.ceil((mortalityStats.male + mortalityStats.female) / 2);
    const { total, elapsed, remaining, deathDate } = useMemo(() => {
        if (!birthdate) {
            return {
                total: 0,
                elapsed: 0,
                remaining: 0,
                deathDate: new Date(),
            };
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
                deathDate: death,
            };
        } else if (view === "days") {
            const totalDays = Math.floor(
                (death.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
            );
            const elapsedDays = Math.floor(
                (now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24)
            );
            return {
                total: totalDays,
                elapsed: elapsedDays,
                remaining: totalDays - elapsedDays,
                deathDate: death,
            };
        } else if (view === "countdown") {
            const totalSeconds = Math.floor(
                (death.getTime() - birth.getTime()) / 1000
            );
            const elapsedSeconds = Math.floor(
                (now.getTime() - birth.getTime()) / 1000
            );
            return {
                total: totalSeconds,
                elapsed: elapsedSeconds,
                remaining: totalSeconds - elapsedSeconds,
                deathDate: death,
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
                deathDate: death,
            };
        } else {
            const totalYears = lifeExpectancy;
            const elapsedYears = now.getFullYear() - birth.getFullYear();
            return {
                total: totalYears,
                elapsed: elapsedYears,
                remaining: totalYears - elapsedYears,
                deathDate: death,
            };
        }
    }, [birthdate, view, lifeExpectancy]);
    const cellSize = view === "weeks" ? 5 : view === "months" ? 12 : 50;
    const percent =
        total > 0
            ? Math.max(0, Math.min(100, Math.round((elapsed / total) * 100)))
            : 0;

    const [winWidth, setWinWidth] = useState<number>(
        typeof window !== "undefined" ? window.innerWidth : 1024
    );
    useEffect(() => {
        const onResize = () => setWinWidth(window.innerWidth);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const effectiveCellSize = useMemo(() => {
        if (winWidth < 420)
            return view === "weeks" ? 4 : view === "months" ? 8 : cellSize;
        if (winWidth < 640)
            return view === "weeks" ? 5 : view === "months" ? 10 : cellSize;
        return cellSize;
    }, [winWidth, view, cellSize]);

    const sizeForGrid =
        view === "weeks" || view === "months" ? effectiveCellSize : cellSize;
    return (
        <Scaffold>
            <Column gap={8} className="mb-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
                    {username
                        ? `${username}'s Life Calendar`
                        : "This Your is Your Life Calendar"}
                </h1>
                <Column className="text-white/70 text-center">
                    <span className="md:text-base text-sm">
                        {gender === "Male"
                            ? `As a male, you are statistically expected to live for ${mortalityStats.male} years.`
                            : `As a female, you typically live around ${mortalityStats.female} years.`}{" "}
                    </span>
                    <span className="italic text-sm">
                        (Source: {mortalityStats.source})
                    </span>
                </Column>
                <div className="w-full">
                    <MultiToggle
                        options={[
                            "countdown",
                            "days",
                            "weeks",
                            "months",
                            "years",
                        ]}
                        value={view}
                        onChange={(v) => setView(v)}
                        className="font-montserrat"
                    />
                </div>
                <Divider />
                {!loading && (
                    <div className="w-full flex flex-col gap-4">
                        <div className="text-center">
                            <Column mainAxisAlignment="start">
                                {view !== "countdown" ? (
                                    <>
                                        <div className="mt-1 flex items-end justify-center sm:justify-start gap-3">
                                            <div className="text-5xl font-playfair font-bold text-white leading-none">
                                                {remaining}
                                            </div>
                                            <div className="text-lg text-white mb-1">
                                                {view} left
                                            </div>
                                        </div>
                                        <div className="mt-2 text-md text-white/70">
                                            Until{" "}
                                            <time
                                                dateTime={deathDate.toISOString()}
                                                className="font-medium"
                                            >
                                                {deathDate.toLocaleDateString()}
                                            </time>
                                        </div>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </Column>
                            <div className="mt-3">
                                <div className="h-3 bg-white/10">
                                    <div
                                        aria-hidden
                                        className={`h-full bg-gradient-to-r from-rose-800 via-amber-400 to-amber-100`}
                                        style={{ width: `${percent}%` }}
                                    />
                                </div>
                                <div className="mt-1 text-sm italic text-white/70">
                                    {percent}% of the way there
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="relative w-full min-h-[200px]">
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
                    {view === "months" ||
                    view === "years" ||
                    view === "weeks" ? (
                        <div
                            className={`inset-0 flex items-center justify-center transition-opacity duration-500 ${
                                loading
                                    ? "opacity-0 pointer-events-none"
                                    : "opacity-100"
                            }`}
                        >
                            <div className="w-full">
                                <div
                                    className="grid max-w-[90dvw] gap-1.5"
                                    style={{
                                        gridTemplateColumns: `repeat(auto-fill, minmax(${sizeForGrid}px, 1fr))`,
                                        gridAutoRows: `${sizeForGrid}px`,
                                    }}
                                >
                                    {Array.from({ length: total }).map(
                                        (_, i) => {
                                            return (
                                                <div
                                                    key={`cell-${view}-${i}`}
                                                    className={`aspect-square transition-colors duration-150 cell-animate ${
                                                        i < elapsed
                                                            ? "bg-white/20"
                                                            : "bg-white"
                                                    }`}
                                                    style={{
                                                        animationDelay: `${
                                                            i * 1.15
                                                        }ms`,
                                                    }}
                                                />
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : view === "days" ? (
                        <DailyProgress />
                    ) : view === "countdown" ? (
                        <CountdownProgress deathDate={deathDate} />
                    ) : (
                        <></>
                    )}
                </div>
            </Column>
        </Scaffold>
    );
}

export function CountdownProgress({
    deathDate,
}: Readonly<{ deathDate: Date }>) {
    const [secondsLeft, setSecondsLeft] = useState<number>(() => {
        const now = new Date();
        return (deathDate.getTime() - now.getTime()) / 1000;
    });
    useEffect(() => {
        const tick = () => {
            const now = new Date();
            setSecondsLeft((deathDate.getTime() - now.getTime()) / 1000);
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [deathDate]);
    return (
        <div className="flex flex-col gap-4 w-full text-center text-4xl md:text-6xl lg:text-8xl font-mono font-bold text-white">
            {(() => {
                const total = Math.floor(Math.max(0, secondsLeft));
                const two = (n: number) => String(n).padStart(2, "0");
                return `${Math.floor(total / 3600)}:${two(
                    Math.floor((total % 3600) / 60)
                )}:${two(total % 60)}`;
            })()}
            <div className="text-white/70 text-base md:text-sm italic font-normal font-montserrat">
                Tick Tock...
            </div>
        </div>
    );
}

export function DailyProgress() {
    const [remainingPercent, setRemainingPercent] = useState(0);
    const calculateRemainingPercent = () => {
        const now = new Date();
        return (
            ((new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate() + 1,
                0,
                0,
                0,
                0
            ).getTime() -
                now.getTime()) /
                86400000) *
            100
        );
    };
    useEffect(() => {
        setRemainingPercent(calculateRemainingPercent());
        const fx = setInterval(() => {
            setRemainingPercent(calculateRemainingPercent());
        }, 1000);
        return () => clearInterval(fx);
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2 text-sm font-medium text-white/80">
                <span className="text-lg">Today</span>
                <span className="font-montserrat text-md">
                    {remainingPercent.toFixed(6)}% remaining
                </span>
            </div>
            <div className="w-full h-10 overflow-hidden bg-white/10">
                <div
                    className="h-full bg-white transition-all duration-1500 linear"
                    style={{
                        width: `${remainingPercent}%`,
                    }}
                />
            </div>
            <div className="text-sm text-white/50 text-left mt-1">
                Day ends in {(remainingPercent * 0.24).toFixed(2)} hours
            </div>
        </div>
    );
}
