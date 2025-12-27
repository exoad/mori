import { useNavigate } from "react-router-dom";
import FatButton from "../components/Button";
import { Column } from "../components/FlexLayouter";
import { Sans, Serif } from "../components/Typograph";
import Scaffold from "../components/Scaffold";
import logoImg from "../assets/logo.png";

export default function Landing() {
    const navigate = useNavigate();
    return (
        <Scaffold hideHeader>
            <Column className="gap-4 text-center w-full max-w-4xl mx-auto py-8">
                <div className="mb-2">
                    <img
                        alt="Mori Logo"
                        src={logoImg}
                        className="w-24 h-24 md:w-32 md:h-32 mx-auto opacity-90"
                        draggable={false}
                        loading="lazy"
                    />
                </div>
                <Serif className="font-playfair text-7xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tight uppercase leading-none">
                    MORI
                </Serif>
                <div className="w-24 h-px bg-white/30 mx-auto my-1"></div>
                <Sans className="text-white/80 text-xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-wide mt-2">
                    YOU ARE ALREADY DYING
                </Sans>
                <Sans className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mt-4 px-8 md:px-0 font-light">
                    Your time is finite. Watch it disappear.
                </Sans>
                <div className="mt-6">
                    <FatButton
                        className="w-full md:w-auto px-16 py-6 text-xl md:text-2xl font-bold uppercase tracking-wider"
                        onPress={() => navigate("/mori/setup")}
                    >
                        Continue
                    </FatButton>
                </div>
            </Column>
        </Scaffold>
    );
}
