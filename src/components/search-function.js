"use client"
// Kode taget fra gennemgang af terminsprøven
import SearchInput from "@/components/search-input"
import SearchResults from "@/components/search-results"
import { createContext, useState } from "react"

export const SearchContext = createContext("")

export default function SearchFunction({activities}) {
    const [searchText, setSearchText] = useState("")
    return (
        <SearchContext.Provider value={{searchText, setSearchText}}>
            <SearchInput />
            <SearchResults activities={activities} />
        </SearchContext.Provider>
    )
}