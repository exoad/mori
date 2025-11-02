import { Column } from "../components/FlexLayouter";
import Scaffold from "../components/Scaffold";
import { Sans, Serif } from "../components/Typograph";
import Divider from "../components/Divider";
import "../styles/Setup.css";
import { useLocalStorage } from "../hooks/local.ts";
import FatButton from "../components/Button.tsx";
import MultiToggle from "../components/MultiToggleButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Setup() {
    const [username, setUsername] = useLocalStorage("username", "");
    const [birthdate, setBirthdate] = useLocalStorage("birthdate", "");
    const [gender, setGender] = useLocalStorage("gender", "");
    const navigate = useNavigate();
    const [errors, setErrors] = useState<{
        username?: string;
        birthdate?: string;
    }>({});
    return (
        <Scaffold>
            <Column className="gap-4">
                <Serif className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
                    Who Are You?
                </Serif>
                <Sans className="text-white/50 text-xs md:text-sm leading-relaxed text-center italic max-w-md mx-auto px-4">
                    This application only saves data locally on your device and
                    is only used for the purpose of your experience.
                </Sans>
                <Divider className="my-8" />
                <form className="w-full max-w-md mx-auto flex flex-col gap-8">
                    <label className="flex flex-col text-white text-lg">
                        <Serif className="font-bold">Your Name</Serif>
                        <Sans className="text-xs text-white/70">
                            Just something humanizing.
                        </Sans>
                        <input
                            type="text"
                            placeholder="..."
                            className={`mt-1 p-2 bg-transparent border-b ${
                                errors.username
                                    ? "border-red-400"
                                    : "border-white/70"
                            } text-white font-montserrat focus:border-white focus:outline-none`}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {errors.username ? (
                            <span className="mt-1 text-sm text-red-400">
                                {errors.username}
                            </span>
                        ) : null}
                    </label>
                    <label className="flex flex-col text-white text-lg">
                        <Serif className="font-bold">Your Birth Date</Serif>
                        <input
                            type="date"
                            className={`birthdate-picker mt-1 p-2 bg-transparent border-b ${
                                errors.birthdate
                                    ? "border-red-400"
                                    : "border-white/70"
                            } text-white font-montserrat focus:border-white focus:outline-none`}
                            value={birthdate}
                            onChange={(e) => setBirthdate(e.target.value)}
                        />
                        {errors.birthdate ? (
                            <span className="mt-1 text-sm text-red-400">
                                {errors.birthdate}
                            </span>
                        ) : null}
                    </label>
                    <label className="flex flex-col items-start text-white text-lg">
                        <Serif className="font-bold">Gender</Serif>
                        <div className="mt-3">
                            <MultiToggle
                                options={["Male", "Female"]}
                                value={(gender as "Male" | "Female") ?? "Male"}
                                onChange={(v) => setGender(v)}
                                className="gap-3"
                            />
                        </div>
                    </label>
                </form>
                <FatButton
                    className="mt-4 w-full md:w-auto px-12 py-5 text-xl font-bold uppercase"
                    onPress={() => {
                        if (
                            (() => {
                                const next: {
                                    username?: string;
                                    birthdate?: string;
                                } = {};
                                if (!username || username.trim().length === 0)
                                    next.username = "Please enter your name.";
                                if (!birthdate)
                                    next.birthdate =
                                        "Please enter your birth date.";
                                setErrors(next);
                                return Object.keys(next).length === 0;
                            })()
                        ) {
                            navigate("/rep");
                        }
                    }}
                >
                    Continue
                </FatButton>
            </Column>
        </Scaffold>
    );
}
