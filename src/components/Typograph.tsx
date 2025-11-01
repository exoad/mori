export function Sans(props: Readonly<{ children: React.ReactNode; className?: string; }>) {
    return (
        <div
            className={`font-montserrat ${props.className ?? ""}`}
        >
            {props.children}
        </div>
    );
}

export function Serif(props: Readonly<{ children: React.ReactNode; className?: string; }>) {
    return (
        <div
            className={`font-playfair ${props.className ?? ""}`}
        >
            {props.children}
        </div>
    );
}