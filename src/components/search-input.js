"use client"
// Kode taget fra gennemgang af terminsopgave
import { useContext } from "react"
import { LuSearch } from "react-icons/lu"
import { SearchContext } from "./search-function"

export default function SearchInput() {
    const { searchText, setSearchText } = useContext(SearchContext)

    return (
        <>
            <label className="flex text-center">
                <input 
                    type="search" 
                    defaultValue={searchText} 
                    onChange={event => setSearchText(event.target.value)} 
                    placeholder="" 
                    className="bg-transparent outline-none bg-[#EAEAEA] bg-opacity-50"
                    />
                <LuSearch />
            </label>
        </>
    )
}