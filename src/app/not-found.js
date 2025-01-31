import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h1>Fejl!</h1>
            <p>Siden findes ikke!</p>
            <Link href="/Aktiviteter">Gå tilbage til aktiviteter</Link>
            <Link href="/Sogefelt">Eller søg efter et hold</Link>
        </>
    )
}