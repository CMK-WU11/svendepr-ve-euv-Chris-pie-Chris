"use client"

// kode taget fra gennemgang af terminsopgaven
import { useContext } from "react"
import { SearchContext } from "./search-function"
// import dynamic from "next/dynamic"
// import { HashLoader } from "react-spinners"
import ActivityList from "./activitylist"

// const ActivityList = dynamic(() => import("./activitylist"), {
//     loading: () => <HashLoader />
// })

export default function SearchResults({ activities }) {
    const { searchText } = useContext(SearchContext)

    const results = activities.filter(function (element) {
        if (element.name.toLowerCase().includes(searchText.toLowerCase())) return element
    })

    return (
        <>
            <section>
                {results.length > 0 ? results.map(activities => (
                    <div key={activities.createdAt}>
                        <ActivityList activities={activities} />
                    </div>
                )) : <li>Kunne ikke finde noget fra din søgning.</li>}
            </section>
        </>
    )


}