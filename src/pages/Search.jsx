import React, {useEffect, useState} from 'react'
import getData from '../functions/getData'
import {useParams} from 'react-router-dom'
import StarshipCard from '../components/StarshipCard';
import SearchBar from "../components/SearchBar";

function Search() {

    const [searchResult, setSearchResult] = useState([])
    const [notFound, setNotFound] = useState(false)
    let searchItem = useParams()

    const getSearchedStarship = async (search) => {
        const data = await getData(`?search=${search}`)
        setSearchResult(data.results)

        if (!data.count) {
            setNotFound(true)
        } else{
            setNotFound(false)
        }
    }

    useEffect(() => {
        getSearchedStarship(searchItem.search)
    },[searchItem.search])

    return (
        <>
            <SearchBar/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 w-11/12 m-auto'>
                {searchResult.map((starship) => {
                    return (
                        <StarshipCard key={starship.url} starship={starship}/>
                    )
                })}
            </div>
            <div className={notFound ? 'text-center text-stone-200' : 'hidden'}>Dark side couldn't find <span className='text-yellow-500'>&quot;{searchItem.search}&quot;</span></div>
        </>

    )
}

export default Search