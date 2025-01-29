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
                <Link className="grid gap-4" key={i} href={`/activity/${activity.id}`}>
                    {/* gap mangler, kan ikke få til at fungere */}
                    <article>
                        <div>
                            <Image 
                                priority
                                src={activity.asset.url} 
                                width="300" 
                                height="100"
                                alt="{activity.name}"
                                className="rounded-md"
                                />
                            <h1 className="bg-[#E1A1E9] absolute bg-opacity-50 text-start">{activity.name}</h1>
                        </div>
                    </article>
                </Link>
            ))}
        </>
    )
}