import {useEffect, useState} from 'react';
import StarshipCard from "../components/StarshipCard";
import LoadMoreButton from "../components/LoadMoreButton";
import getData from "../api/getData";

/**
 * Home page which contains all starships
**/

function Home() {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        getStarships().then(r => r)
    }, [])

    const getStarships = async () => {
        const data = await getData('')
        setStarships(data.results)
    }

    return (
        <>
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