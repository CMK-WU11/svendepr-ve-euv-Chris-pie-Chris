
import Link from "next/link"
// import Image from "next/image"
import ActivityList from "@/components/activitylist"

export default async function Aktiviteter() {
    const activitiesResponse = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await activitiesResponse.json()

    return (
        <div className="w-screen bg-[#5E2E53] m-auto">
            <Link 
                href="/Login" 
                style={{color: "black",
                    backgroundColor: "#EAEAEA",
                    border: "3px",
                    width: "8rem",
                    height: "3rem",
                    borderRadius: "6px",
                }}
            >Login</Link>
            <h1 className="text-white text-l">Aktiviteter</h1>
            <section>
                {activities.map(element => <ActivityList activities={element} key={element.name}/> )}
                {/* <ActivityList activities={activities}/> */}
            </section>
        </div>
    )
}