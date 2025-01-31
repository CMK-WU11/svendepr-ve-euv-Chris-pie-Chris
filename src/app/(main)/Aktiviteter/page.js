
import Link from "next/link"
// import Image from "next/image"
import ActivityList from "@/components/activitylist"

export default async function Aktiviteter() {
    const activitiesResponse = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await activitiesResponse.json()

    return (
        <div className="w-screen bg-[#5E2E53]">
            <div className="flex place-content-between mr-2 ml-2">
            <h1 className="text-white text-l">Aktiviteter</h1>
                <Link 
                    href="/Login" 
                    style={{color: "black",
                        display: "flex",
                        backgroundColor: "#EAEAEA",
                        border: "3px",
                        width: "5rem",
                        height: "2rem",
                        borderRadius: "6px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "1em"
                    }}
                >Login</Link>
            </div>
            <section>
                {activities.map(element => <ActivityList activities={element} key={element.name}/> )}
                {/* <ActivityList activities={activities}/> */}
            </section>
        </div>
    )
}