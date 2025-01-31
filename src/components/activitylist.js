import Image from "next/image"
import Link from "next/link"


export default function ActivityList( {activities} ) {

        // Kode er taget fra Fitness verden terminsopgave og gennemgang af terminsopgaven
    
        // console.log(activities)

    return (
        <>
            <article className="">
                <Link 
                    href={`/activity/${activities.id}`}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                    }}>
                        <Image 
                            priority
                            src={activities.asset.url} 
                            width="300" 
                            height="100"
                            alt="billede"
                            className="rounded-md"
                            />
                        <div className="bg-[#E1A1E9] absolute bg-opacity-75 bottom-1 left-10 w-[50%] h-12 p-2">{activities.name}</div>
                </Link>
                </article>
        </>
    )
}