
import Link from "next/link"
// import Image from "next/image"
import ActivityList from "@/components/activitylist"

export default async function Aktiviteter() {
    const activitiesResponse = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await activitiesResponse.json()

    return (
        <div className="bg-[#5E2E53]">
            <Link href="/Login" className="text-white">Login</Link>
            <h1 className="text-white">Aktiviteter</h1>
            {activities.map(element => <ActivityList activities={element} key={element.name}/> )}
            {/* <ActivityList activities={activities}/> */}
        </div>
    )
}