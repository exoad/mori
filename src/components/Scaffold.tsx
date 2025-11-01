export default function Scaffold({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16">
            {children}
        </div>
    );
}