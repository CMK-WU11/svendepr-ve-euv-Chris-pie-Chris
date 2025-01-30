import Image from "next/image"
import Link from "next/link"


export default function ActivityList( {activities} ) {

        // Kode er taget fra Fitness verden terminsopgave og gennemgang af terminsopgaven
    
        // console.log(activities)

    return (
        <>
                {/* gap mangler, kan ikke få til at fungere */}
                <article>
                <Link className="grid gap-12" href={`/activity/${activities.id}`}>
                    <div>
                        <Image 
                            priority
                            src={activities.asset.url} 
                            width="300" 
                            height="100"
                            alt="billede"
                            className="rounded-md"
                            />
                        <h1 className="bg-[#E1A1E9] absolute bg-opacity-50 text-start">{activities.name}</h1>
                    </div>
                </Link>
                </article>
        </>
    )
}