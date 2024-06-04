import React, {useEffect, useState} from "react";
import {useFilterStore} from "../hooks/filter-store.tsx";

type Props = {
    className?: string
}

function SearchBar({className}: Props) {
    const [search, setSearch] = useState("")

    const filters = useFilterStore()

    useEffect(() => {
        filters.onSearchChange(search)
    }, [search]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
    return (
        <div className={"p-4 bg-[#fdfdf8] rounded-lg" + " " + className}>
            <input placeholder={"Search..."} className={"w-full p-4"} onChange={handleSearchChange}/>
        </div>
    );
}

export default SearchBar;
