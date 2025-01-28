import Image from "next/image"
import Link from "next/link"


export default async function ActivityList() {

        // Kode er taget fra Fitness verden terminsopgave og gennemgang af terminsopgaven
        const response = await fetch("http://localhost:4000/api/v1/activities")
        const activities = await response.json()
    
        console.log(activities)

    return (
        <>
            {activities.map((activity, i) => (
                <Link key={i} href={`/activity/${activity.id}`}>
                    {/* gap mangler, kan ikke få til at fungere */}
                    <article className="grid gap">
                        <div className="flex relative items-center">
                            <Image 
                                priority
                                src={activity.asset.url} 
                                width={250} 
                                height={200} 
                                alt="{activity.name}"
                                className="border-l"
                                />
                            <h1 className="bg-[#E1A1E9] absolute bg-opacity-50 bottom-0 text-start">{activity.name}</h1>
                        </div>
                    </article>
                </Link>
            ))}
        </>
    )
}