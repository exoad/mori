import Footer from "./Footer";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import SettingsMenu from "./SettingsMenu";

export default function Scaffold({
    hideHeader,
    showSettings,
    children,
}: Readonly<{ hideHeader?: any; showSettings?: boolean; children: React.ReactNode }>) {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
            {!hideHeader ? (
                <nav className="w-full py-4 flex items-center justify-between">
                    {showSettings && <SettingsMenu />}
                    <Link to="/" aria-label="Home" className="inline-block mx-auto">
                        <img
                            src={logoImg}
                            alt="MORI"
                            className="w-10 h-10 md:w-12 md:h-12"
                            draggable={false}
                        />
                    </Link>
                    <div className="w-10"></div> {/* Spacer for balance */}
                </nav>
            ) : (
                <></>
            )}
            <div className="flex-1 w-full flex items-center justify-center">
                {children}
            </div>
            <Footer />
        </div>
    );
}
