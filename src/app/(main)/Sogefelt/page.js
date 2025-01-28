import ActivityList from "@/components/activitylist";
import SearchFunction from "@/components/search-function";


export default async function Søgefelt() {
    const activitiesResponse = await fetch("http://localhost:4000/api/v1/activities")
    const activities = await activitiesResponse.json()

    return (
        <>
        {/* Søgefunktion */}
        <SearchFunction activities={activities} />
        <ActivityList />
        </>
    )
}