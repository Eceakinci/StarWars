import {useEffect, useState} from 'react';
import StarshipCard from "../components/StarshipCard";
import SearchBar from "../components/SearchBar";
import LoadMoreButton from "../components/LoadMoreButton";

/**
 * Home page which contains all starships
**/

function Home() {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        getStarships().then(r => r)
    }, [])

    const getStarships = async () => {
        const api = await fetch('https://swapi.dev/api/starships')
        const data = await api.json()
        setStarships(data.results)
    }

    return (
        <>
            <SearchBar/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 w-11/12 m-auto'>
                {starships.map((starship) => {
                    return (
                        <StarshipCard key={starship.url} starship={starship}/>
                    )
                })}
            </div>
            <LoadMoreButton/>
        </>
    )
}

export default Home