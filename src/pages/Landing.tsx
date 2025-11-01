import { useNavigate } from 'react-router-dom';
import FatButton from '../components/Button';
import { Column } from "../components/FlexLayouter";
import { Sans, Serif } from '../components/Typograph';
import Scaffold from '../components/Scaffold';
import logoImg from "../assets/logo.png";

export default function Landing() {
    const navigate = useNavigate();
    return (
        <Scaffold hideHeader>
            <Column className="gap-2 text-center w-full">
                <img src={logoImg} className="w-24 h-24 md:w-32 md:h-32" draggable={false} loading="lazy" />
                <Serif className="font-playfair text-8xl md:text-9xl font-extrabold tracking-tight uppercase">
                    MORI
                </Serif>
                <Sans className="text-white/70 text-2xl md:text-3xl font-semibold uppercase mt-2">
                    YOU ARE ALREADY DYING
                </Sans>
                <Sans className="text-white/50 text-sm md:text-lg max-w-2xl mx-auto leading-snug mt-6 px-12 md:px-0">
                    Your time is finite. Watch it disappear.
                </Sans>
                <FatButton className="mt-10 w-full md:w-auto px-12 py-5 text-xl font-bold uppercase" onPress={() => navigate("/setup")}>
                    Continue
                </FatButton>
            </Column>
        </Scaffold >
    );
}
