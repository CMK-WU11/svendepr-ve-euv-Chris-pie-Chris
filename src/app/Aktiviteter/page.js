import Link from "next/link"
import Image from "next/image"

export default async function Aktiviteter() {

    // Kode er taget fra Fitness verden terminsopgave og gennemgang af terminsopgaven
    const response = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await response.json()

    console.log(activities)

    return (
        <div className="bg-[#5E2E53]">
            <h1 className="text-white">Aktiviteter</h1>
            {activities.map((activity, i) => (
                <Link key={i} href={`/activity/${activity.id}`}>
                    <article>
                        <div className="flex grid relative items-center">
                            <Image 
                                src={activity.asset.url} 
                                width={250} 
                                height={200} 
                                alt="{activity.name}"
                                className="border-l"
                                />
                            <h1 className="bg-[#E1A1E9] absolute bg-opacity-50 bottom-8">{activity.name}</h1>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    )
}