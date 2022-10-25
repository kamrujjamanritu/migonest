import { useState } from "react";

import { BsSearch } from "react-icons/bs";
import searchUniversity from "../../../pages/api/universityData.json";
import Link from "next/link";
import { MdClose } from "react-icons/md";

const SearchForm = () => {

    const [filterSearchData, setFilterSearchData] = useState([]);

    const [searchEnter, setSearchEnter] = useState("");

    const handleFilter = (event) => {
        const desiredUniversity = event.target.value;
        setSearchEnter(desiredUniversity);
        const newDesiredUniversity = searchUniversity.filter((value) => {
            return value.name.toLowerCase().includes(desiredUniversity.toLowerCase());
        })

        if (desiredUniversity === "") {
            setFilterSearchData([]);
        } else {
            setFilterSearchData(newDesiredUniversity);
        }


    }

    const clearInput = () => {
        setFilterSearchData([]);
        setSearchEnter("");
    }

    return (
        <div className="search-form">
            <form action="admission.js">
                <div className="search-form__group">
                    <input type="text" name="search__form" id="searchForm" placeholder="Search universities..." value={searchEnter} onChange={handleFilter} />
                    <button type="submit" disabled="disabled"><BsSearch /></button>
                    
                    {filterSearchData.length === 0 ? "" : <a id="closeSearch" onClick={clearInput}><MdClose /></a>}
                </div>
            </form>

            {filterSearchData.length != 0 && (
                <div className="dataResult">
                    <div>
                        {
                            filterSearchData.slice(0, 10).map((value) => {
                                return (
                                    <h3 key={value.id}>
                                        <Link href={`/${value.name}`}>
                                            <a>{value.name}</a>
                                        </Link>
                                    </h3>
                                )
                            })
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default SearchForm;
