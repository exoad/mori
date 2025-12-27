import { Column } from "../components/FlexLayouter";
import Scaffold from "../components/Scaffold";
import { Sans, Serif } from "../components/Typograph";
import Divider from "../components/Divider";
import "../styles/Setup.css";
import { useLocalStorage } from "../hooks/local.ts";
import FatButton from "../components/Button.tsx";
import MultiToggle from "../components/MultiToggleButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { mortalityStats, getAllCountryNames, getCountryLifeExpectancy } from "../chronos.ts";

export default function Setup() {
    const [username, setUsername] = useLocalStorage("username", "");
    const [birthdate, setBirthdate] = useLocalStorage("birthdate", "");
    const [gender, setGender] = useLocalStorage("gender", "");
    const [regionType, setRegionType] = useLocalStorage("regionType", "world");
    const [country, setCountry] = useLocalStorage("country", "");

    const navigate = useNavigate();
    const [errors, setErrors] = useState<{
        username?: string;
        birthdate?: string;
        country?: string;
    }>({});
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update current time every second to handle edge cases like midnight transitions
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const isEditMode = username && birthdate && (regionType === "world" ? gender : country);

    // Get all country names for the dropdown
    const countryNames = useMemo(() => getAllCountryNames(), []);

    // Calculate life expectancy based on selection
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

    // Calculate the maximum allowed birthdate (earliest birth date that wouldn't make them statistically dead)
    const maxAllowedBirthdate = useMemo(() => {
        const maxDate = new Date(currentTime);
        maxDate.setFullYear(maxDate.getFullYear() - lifeExpectancy);

        // Format as YYYY-MM-DD for the date input's max attribute
        return maxDate.toISOString().split('T')[0];
    }, [lifeExpectancy, currentTime]);

    return (
        <Scaffold>
            <Column className="gap-2 max-w-2xl mx-auto">
                <div className="text-center mb-0">
                    <Serif className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-2">
                        {isEditMode ? "Edit Your Information" : "Who Are You?"}
                    </Serif>
                    <Sans className="text-white/50 text-sm md:text-base leading-relaxed italic max-w-lg mx-auto px-6">
                        This application only saves data locally on your device and
                        is only used for the purpose of your experience.
                    </Sans>
                </div>
                <Divider className="my-4" />
                <form className="w-full max-w-lg mx-auto flex flex-col gap-6 px-4">
                    <label className="flex flex-col text-white">
                        <Serif className="text-xl font-bold mb-1">Your Name</Serif>
                        <Sans className="text-sm text-white/60 mb-2 font-light">
                            Just something humanizing.
                        </Sans>
                        <input
                            type="text"
                            placeholder="Enter your name..."
                            className={`mt-1 p-2 bg-transparent border-b-2 ${
                                errors.username
                                    ? "border-red-400"
                                    : "border-white/40"
                            } text-base md:text-lg font-montserrat focus:border-white focus:outline-none transition-colors duration-200`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username ? (
                            <span className="mt-1 text-sm text-red-400">
                                {errors.username}
                            </span>
                        ) : null}
                    </label>
                    <label className="flex flex-col text-white">
                        <Serif className="text-xl font-bold mb-1">Your Birth Date</Serif>
                        <Sans className="text-sm text-white/60 mb-2 font-light">
                            When did your countdown begin?
                        </Sans>
                        <input
                            type="date"
                            max={maxAllowedBirthdate}
                            className={`birthdate-picker mt-1 p-2 bg-transparent border-b-2 ${
                                errors.birthdate
                                    ? "border-red-400"
                                    : "border-white/40"
                            } text-base md:text-lg font-montserrat focus:border-white focus:outline-none transition-colors duration-200`}
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                        {errors.birthdate ? (
                            <span className="mt-1 text-sm text-red-400">
                                {errors.birthdate}
                            </span>
                        ) : null}
                    </label>

                    <label className="flex flex-col text-white">
                        <Serif className="text-xl font-bold mb-1">Gender</Serif>
                        <Sans className="text-sm text-white/60 mb-2 font-light">
                            Life expectancy varies significantly by gender.
                        </Sans>
                        <div className="mt-0">
                            <MultiToggle
                                options={["Male", "Female"]}
                                value={(gender as "Male" | "Female") ?? "Male"}
                                onChange={(v) => setGender(v)}
                                className="gap-3"
                            />
                        </div>
                    </label>

                    <label className="flex flex-col text-white">
                        <Serif className="text-xl font-bold mb-1">Calculation Method</Serif>
                        <Sans className="text-sm text-white/60 mb-2 font-light">
                            Compare yourself to the global average or your specific country.
                        </Sans>
                        <div className="mt-0">
                            <MultiToggle
                                options={["World", "Country"]}
                                value={regionType}
                                onChange={(v) => {
                                    setRegionType(v);
                                    // Clear errors when changing type
                                    if (v === "World") {
                                        setErrors(prev => ({ ...prev, country: undefined }));
                                    }
                                }}
                                className="gap-3"
                            />
                        </div>
                    </label>

                    {regionType === "Country" && (
                        <label className="flex flex-col text-white">
                            <Serif className="text-xl font-bold mb-1">Country/Region</Serif>
                            <Sans className="text-sm text-white/60 mb-2 font-light">
                                Select your country for personalized WHO data (2021).
                            </Sans>
                            <select
                                className={`mt-1 p-3 bg-black border-2 ${
                                    errors.country
                                        ? "border-red-400"
                                        : "border-white/40"
                                } text-base md:text-lg text-white font-montserrat focus:border-white focus:outline-none transition-colors duration-200 cursor-pointer`}
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            >
                                <option value="" className="bg-black text-white/60">
                                    Select a country...
                                </option>
                                {countryNames.map((name) => (
                                    <option key={name} value={name} className="bg-black text-white">
                                        {name}
                                    </option>
                                ))}
                            </select>
                            {errors.country ? (
                                <span className="mt-1 text-sm text-red-400">
                                    {errors.country}
                                </span>
                            ) : null}
                        </label>
                    )}
                </form>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 px-4">
                    {isEditMode && (
                        <FatButton
                            className="px-8 py-3 text-lg font-bold uppercase"
                            onPress={() => navigate("/mori/rep")}
                        >
                            Cancel
                        </FatButton>
                    )}
                    <FatButton
                        className="w-full sm:w-auto px-12 py-4 text-xl font-bold uppercase tracking-wide"
                        onPress={() => {
                            if (
                                (() => {
                                    const next: {
                                        username?: string;
                                        birthdate?: string;
                                        country?: string;
                                    } = {};
                                    if (!username || username.trim().length === 0)
                                        next.username = "Please enter your name.";
                                    if (!birthdate) {
                                        next.birthdate =
                                            "Please enter your birth date.";
                                    } else if (birthdate < maxAllowedBirthdate) {
                                        // Check if the birthdate would make them statistically dead
                                        next.birthdate = `Based on life expectancy (${lifeExpectancy} years), this birthdate is not valid.`;
                                    }
                                    if (regionType === "country" && !country) {
                                        next.country = "Please select a country.";
                                    }
                                    setErrors(next);
                                    return Object.keys(next).length === 0;
                                })()
                            ) {
                                navigate("/mori/rep");
                            }
                        }}
                    >
                        {isEditMode ? "Update" : "Continue"}
                    </FatButton>
                </div>
            </Column>
        </Scaffold>
    );
}
