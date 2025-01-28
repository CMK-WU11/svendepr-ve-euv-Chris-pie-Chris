import Image from "next/image"

export default async function activity({ params }) {
    const { id } = await params

    // Kode taget af gennemgang af terminsprøve
    const activityResponse = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const data = await activityResponse.json()

    return (
        <div className="h-screen w-screen">
            <section className="">
                <Image className="w-[50%] h-[50%]" src={data.asset.url} width="100" height="100" alt=""/>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <p>{data.minAge}-{data.maxAge} år</p>
                <p>{data.weekday}</p>
                <p>{data.time}</p>
            </section>
        </div>
    )

}