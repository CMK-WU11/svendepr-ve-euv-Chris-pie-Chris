"use client"
// Kode taget fra gennemgang af terminsopgave
import { useContext } from "react"
import { LuSearch } from "react-icons/lu"
import { SearchContext } from "./search-function"

export default function SearchInput() {
    const { searchText, setSearchText } = useContext(SearchContext)

    return (
        <>
            <label className="flex text-center justify-center">
                <div className="flex ">
                    <input 
                        type="search" 
                        defaultValue={searchText} 
                        onChange={event => setSearchText(event.target.value)} 
                        placeholder="" 
                        className="bg-[#EAEAEA]"
                        />

                </div>
                <LuSearch />
            </label>
        </>
    )
}