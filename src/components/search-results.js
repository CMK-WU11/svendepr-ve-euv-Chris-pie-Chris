"use client"

// kode taget fra gennemgang af terminsopgaven
import { useContext } from "react"
import { SearchContext } from "./search-function"
import dynamic from "next/dynamic"
import { HashLoader } from "react-spinners"

const ActivityList = dynamic(() => import("./activitylist"), {
    loading: () => <HashLoader />
})

export default function SearchResults({ activities }) {
    const { searchText } = useContext(SearchContext)

    const results = activities.filter(function (element) {
        if (element.name.toLowercase().includes(searchText.toLowercase())) return element
        if (element.description.toLowercase().includes(searchText.toLowercase())) return element
        if (element.weekday.toLowercase().includes(searchText.toLowercase())) return element
    })

    return (
        <>
            <section>
                {results.length > 0 ? results.map(element => (
                    <div key={element.createdAt}>
                        <ActivityList element={element} />
                    </div>
                )) : <li>Kunne ikke finde noget fra din søgning.</li>}
            </section>
        </>
    )


}