import { useState, useMemo, useEffect } from "react";
import Scaffold from "../components/Scaffold";
import { useLocalStorage } from "../hooks/local.ts";
import MultiToggle from "../components/MultiToggleButton";
import { Column } from "../components/FlexLayouter.tsx";
import "../styles/Rep.css";
import Divider from "../components/Divider";
import { mortalityStats, getCountryLifeExpectancy } from "../chronos.ts";
import { expectations } from "../expectations.ts";
export default function Rep() {
    const [username] = useLocalStorage("username", "");
    const [birthdate] = useLocalStorage("birthdate", "");
    const [gender] = useLocalStorage("gender", "");
    const [regionType] = useLocalStorage("regionType", "world");
    const [country] = useLocalStorage("country", "");

    const [view, setView] = useState<
        "weeks" | "months" | "years" | "days" | "countdown"
    >("countdown");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, [view]);

    const lifeExpectancy = useMemo(() => {
        if (regionType === "world") {
            // Use gender-based world average
            return gender === "Male"
                ? mortalityStats.male
                : gender === "Female"
                ? mortalityStats.female
                : Math.ceil((mortalityStats.male + mortalityStats.female) / 2);
        } else {
            // Use country-specific data
            if (!country || !gender) {
                // Fallback to global average if country or gender not selected
                return gender === "Male"
                    ? mortalityStats.male
                    : gender === "Female"
                    ? mortalityStats.female
                    : Math.ceil((mortalityStats.male + mortalityStats.female) / 2);
            }
            const genderType = gender as "Male" | "Female";
            return getCountryLifeExpectancy(country, genderType) ||
                (gender === "Male" ? mortalityStats.male : mortalityStats.female);
        }
    }, [regionType, gender, country]);
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
            let elapsedMonths = (now.getFullYear() - birth.getFullYear()) * 12;
            elapsedMonths -= birth.getMonth();
            elapsedMonths += now.getMonth();
            if (now.getDate() < birth.getDate()) {
                elapsedMonths--;
            }
            return {
                total: totalMonths,
                elapsed: elapsedMonths,
                remaining: totalMonths - elapsedMonths,
                deathDate: death,
            };
        } else {
            const totalYears = lifeExpectancy;
            let elapsedYears = now.getFullYear() - birth.getFullYear();
            if (
                now.getMonth() < birth.getMonth() ||
                (now.getMonth() === birth.getMonth() &&
                    now.getDate() < birth.getDate())
            ) {
                elapsedYears--;
            }
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
        globalThis.window === undefined ? 1024 : window.innerWidth
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
        <Scaffold showSettings={true}>
            <Column gap={2} className="mb-8 max-w-7xl mx-auto w-full">
                <div className="text-center space-y-1 mb-4">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        {username
                            ? `${username}'s Life Calendar`
                            : "This Is Your Life Calendar"}
                    </h1>

                    <Column className="text-white/60 text-center space-y-0 mt-2">
                        <span className="text-xs md:text-sm">
                            {regionType === "world"
                                ? (gender === "Male"
                                    ? `Based on world average, males are statistically expected to live for ${mortalityStats.male} years.`
                                    : `Based on world average, females typically live around ${mortalityStats.female} years.`)
                                : `In ${country}, life expectancy is approximately ${lifeExpectancy} years.`}
                        </span>
                        <span className="italic text-[10px] md:text-xs text-white/40">
                            (Source: World Health Organization, 2021)
                        </span>
                    </Column>
                </div>

                <div className="w-full max-w-2xl mx-auto mb-2">
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
                        className="font-montserrat scale-90"
                    />
                </div>

                <Divider className="my-2" />

                {/* Content Section */}
                <div className="relative w-full">
                    {/* Stats and Progress (Always rendered to avoid layout shift) */}
                    <div className="w-full flex flex-col gap-4 mt-2">
                        <div className="text-center">
                            <Column mainAxisAlignment="start" className="space-y-2">
                                {view === "countdown" ? (
                                    <></>
                                ) : (
                                    <>
                                        <div className="flex items-baseline justify-center gap-2 mb-2">
                                            <div className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-none">
                                                {remaining.toLocaleString()}
                                            </div>
                                            <div className="text-lg md:text-xl text-white/80 font-light pb-2">
                                                {view} left
                                            </div>
                                        </div>

                                        <div className="text-sm md:text-base text-white/60 font-light">
                                            Until{" "}
                                            <time
                                                dateTime={deathDate.toISOString()}
                                                className="font-medium text-white/80"
                                            >
                                                {deathDate.toLocaleDateString()}
                                            </time>
                                        </div>
                                    </>
                                )}
                            </Column>

                            <div className="py-6 md:py-8 flame-container max-w-3xl mx-auto">
                                <div className="h-3 bg-white/10 flame-track">
                                    <div
                                        className="flame-wrapper"
                                        style={{ width: `${percent}%` }}
                                    >
                                        <div
                                            aria-hidden
                                            className="flame-bar bg-gradient-to-r from-[#0A0403] via-[#3A1E1E] to-amber-500 shadow-inner shadow-black/50"
                                        />
                                        <div className="flame-tip" />
                                        <div className="embers" />
                                    </div>
                                </div>
                                <div className="mt-2 text-sm md:text-base italic text-white/60 font-light">
                                    {percent}% of the way there
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visualization Section */}
                    <div className="relative min-h-[200px] mt-4">
                        {view === "months" ||
                        view === "years" ||
                        view === "weeks" ? (
                            <div className="w-full px-4">
                                <div
                                    className="grid max-w-[90dvw] mx-auto gap-1.5 md:gap-2"
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
                        ) : view === "days" ? (
                            <DailyProgress />
                        ) : view === "countdown" ? (
                            <CountdownProgress deathDate={deathDate} />
                        ) : (
                            <></>
                        )}
                    </div>

                    {/* Artificial Loading Overlay (Covers everything above) */}
                    <div
                        className={`absolute -inset-4 z-40 bg-black/60 backdrop-blur-xl flex items-center justify-center transition-all duration-300 ${
                            loading
                                ? "opacity-100 pointer-events-auto"
                                : "opacity-0 pointer-events-none"
                        }`}
                    >
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-white animate-spin"></div>
                            <span className="text-sm text-white/50 font-bold uppercase tracking-widest">
                                Recalculating
                            </span>
                        </div>
                    </div>
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
        const t = setInterval(tick, 1000);
        return () => clearInterval(t);
    }, [deathDate]);
    const total = Math.max(0, secondsLeft);
    const seconds = Math.floor(total % 60);
    const two = (n: number) => String(n).padStart(2, "0");

    return (
        <div className="flex flex-col gap-6 md:gap-8 w-full text-center text-white max-w-5xl mx-auto px-4">
            <div className="text-4xl md:text-6xl lg:text-8xl font-mono font-bold tracking-tight">
                {Math.floor(total / 3600)}:
                {two(Math.floor((total % 3600) / 60))}:{two(seconds)}
            </div>

            <div className="w-16 h-px bg-white/20 mx-auto"></div>

            <div className="text-white/60 text-base md:text-lg font-normal font-montserrat uppercase tracking-wide">
                That Is:
            </div>

            <Column className="text-center space-y-6 md:space-y-8 font-mono text-base md:text-lg">
                {expectations.map((m) => {
                    const value = (m.calc?.(total) ??
                        (m.check?.(deathDate) ? "Yes" : "No"))!!;
                    const answer = (
                        <span className="text-xl md:text-2xl lg:text-3xl font-bold">
                            {value.toLocaleString()}
                        </span>
                    );
                    const label = (
                        <span className="font-playfair font-semibold ml-2 text-white/70 text-lg md:text-xl">
                            {m.label}
                        </span>
                    );
                    return (
                        <Column key={m.label} className="space-y-1">
                            {m.calc ? (
                                <>
                                    {answer}
                                    {label}
                                </>
                            ) : (
                                <>
                                    {label}
                                    {answer}
                                </>
                            )}
                            <div className="text-white/40 text-[10px] md:text-xs max-w-md mx-auto leading-relaxed">
                                {m.comment}
                            </div>
                        </Column>
                    );
                })}
            </Column>
        </div>
    );
}

export function DailyProgress() {
    const [remainingPercent, setRemainingPercent] = useState(0);
    const [totalMsInDay, setTotalMsInDay] = useState(86400000);
    const calculateDailyMetrics = () => {
        const now = new Date();
        const startOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            0,
            0,
            0,
            0
        );
        const endOfDay = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1,
            0,
            0,
            0,
            0
        );
        const totalMs = endOfDay.getTime() - startOfDay.getTime();
        const msRemaining = endOfDay.getTime() - now.getTime();
        setTotalMsInDay(totalMs);
        setRemainingPercent((msRemaining / totalMs) * 100);
    };
    useEffect(() => {
        calculateDailyMetrics();
        const fx = setInterval(calculateDailyMetrics, 1000);
        return () => clearInterval(fx);
    }, []);
    const totalHoursInDay = totalMsInDay / 3600000;
    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-1 text-sm md:text-base font-medium text-white/80">
                <span className="text-lg md:text-xl font-playfair font-bold">Today</span>
                <span className="font-montserrat text-base md:text-lg text-white/70">
                    {remainingPercent.toFixed(6)}% remaining
                </span>
            </div>
            <div className="w-full h-6 md:h-10 overflow-hidden bg-white/10">
                <div
                    className="h-full bg-white transition-all duration-1000 linear"
                    style={{
                        width: `${remainingPercent}%`,
                    }}
                />
            </div>
            <div className="text-[10px] md:text-xs text-white/50 text-left mt-2 font-light">
                Day ends in{" "}
                <span className="font-medium text-white/70">
                    {(remainingPercent * (totalHoursInDay / 100)).toFixed(2)} hours
                </span>
            </div>
        </div>
    );
}
