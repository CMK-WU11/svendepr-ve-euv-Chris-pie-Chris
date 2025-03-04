import Image from "next/image"

export default async function activity({ params }) {
    const { id } = await params

    // Kode taget af gennemgang af terminsprøve
    const activityResponse = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const data = await activityResponse.json()

    return (
        <div className="h-screen w-screen bg-[#5E2E53]">
            <section className="h-[100%] text-white">
                <Image 
                    className="w-[100%] h-[50%] bg-cover bg-center" 
                    src={data.asset.url} 
                    width="100" 
                    height="100" 
                    alt=""/>
                <div className="ml-3">
                    <h1 className="text-base">{data.name}</h1>
                    <p>{data.minAge}-{data.maxAge} år</p>
                    <p>{data.description}</p>
                    <p>{data.weekday}</p>
                    <p>{data.time}</p>
                </div>
            </section>
        </div>
    )

}