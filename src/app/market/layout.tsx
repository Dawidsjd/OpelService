export default function MarketDetailsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <div className="min-h-screen relative bg-[#14181f] bg-grid-white/[0.1]">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#14181f] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,#14181f)]"></div>
        <div className="relative z-20">
        {children}
        </div>
        </div>
        </>
    );
}