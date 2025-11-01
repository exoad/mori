import { useNavigate } from "react-router-dom";
import { Column } from "../components/FlexLayouter";
import FatButton from "../components/Button.tsx";
import { Serif, Sans } from "../components/Typograph";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="bg-black min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16">
            <Column className="gap-6 text-center">
                <Serif className="font-playfair text-6xl font-bold">404</Serif>
                <Sans className="text-white/70 md:text-xl">
                    Page not found.
                </Sans>
                <FatButton
                    onPress={() => navigate("/")}
                    className="mt-4 px-10 py-4"
                >
                    Go home
                </FatButton>
            </Column>
        </div>
    );
}
