import React, {useEffect, useState} from 'react'
import getData from "../api/getData"
import {useParams} from 'react-router-dom'
import StarshipCard from "../components/StarshipCard";

function Search() {

    const [searchResult, setSearchResult] = useState([])
    let searchItem = useParams()

    const getSearchedStarship = async (search) => {
        const data = await getData(`?search=${search}`)
        setSearchResult(data.results)
        console.log(data.results)
    }

    useEffect(() => {
        getSearchedStarship(searchItem.search)
    },[searchItem.search])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 w-11/12 m-auto'>
            {searchResult.map((starship) => {
                return (
                    <StarshipCard key={starship.url} starship={starship}/>
                )
            })}
        </div>
    )
}

export default Search