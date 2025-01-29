import Link from "next/link"
// import Image from "next/image"
import ActivityList from "@/components/activitylist"

export default async function Aktiviteter() {

    return (
        <div className="bg-[#5E2E53]">
            <Link href="/Login" className="text-white">Login</Link>
            <h1 className="text-white">Aktiviteter</h1>
            <ActivityList />
        </div>
    )
}