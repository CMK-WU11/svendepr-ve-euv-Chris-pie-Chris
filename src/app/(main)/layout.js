import Navigation from "@/components/navigation";

export default function NavLayout({ children }) {
    return (
        <>
            <main>
                {children}
            </main>
            <Navigation />
        </>
    )
}