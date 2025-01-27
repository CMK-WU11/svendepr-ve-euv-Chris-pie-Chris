import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { LuSearch } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";

export default function Navigation() {
    return (
        <div className="sticky bottom-0 left-0 w-full bg-white flex justify-between items-center p-4 shadow-[0_-4px_4px_rgba(0,0,0,0.1)] border-t border-gray-200">
            <Link href="/Aktiviteter" className="border"><LuHouse /></Link>
            <Link href="/Sogefelt" className="border"><LuSearch /></Link>
            <Link href="/" className="border"><LuCalendar /></Link>
        </div>
    )
}