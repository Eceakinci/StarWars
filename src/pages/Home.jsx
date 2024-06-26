import React, {useEffect, useState} from 'react';
import StarshipCard from '../components/StarshipCard';
import LoadMoreButton from '../components/LoadMoreButton';
import getData from '../functions/getData';
import SearchBar from "../components/SearchBar";

/**
 * Home page which contains all starships
**/

function Home() {

    const [starships, setStarships] = useState([])
    const [pageIdx, setPageIdx] = useState(2)
    const [isVisible, setIsVisible] = useState(true)
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        getStarships().then(r => r)
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position)
    }

    const getStarships = async () => {
        const data = await getData('')
        setStarships(data.results)
        window.scrollTo(0, Math.round(scrollPosition))
    }

    const loadMore = async () => {
        setPageIdx(pageIdx + 1)
        let data = []

        try {
            data = await getData(`?page=${pageIdx}`)
            setStarships([...starships, ...data.results])
            if(data.next == null) {
                setIsVisible(false)
            }
        } catch (e) {
            throw e;
        }
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
            <div onClick={loadMore} className={isVisible ? '' : 'hidden'}>
                <LoadMoreButton/>
            </div>
        </>
    )
}

export default Home