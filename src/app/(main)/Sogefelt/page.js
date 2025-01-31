// import ActivityList from "@/components/activitylist";
import SearchFunction from "@/components/search-function";

export default async function Søgefelt() {
    const activitiesResponse = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await activitiesResponse.json()

    return (
        <div className="h-screen bg-[##5E2E53]">
        {/* Søgefunktion */}
        <h1 className="font-bold">Søg</h1>
        <SearchFunction activities={activities} />
        {/* <ActivityList activities={activities} /> */}
        </div>
    )
}