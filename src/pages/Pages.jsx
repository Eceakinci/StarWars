import React from 'react'
import Home from './Home';
import { Route, Routes} from 'react-router-dom'
import StarshipDetail from "./StarshipDetail";
import Search from "./Search";
import SearchBar from "../components/SearchBar";

function Pages() {

    return (
        <div className='bg-neutral-900'>
            <SearchBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/starships/:id' element={<StarshipDetail/>}/>
                <Route path='/search/:search' element={<Search/>}/>
            </Routes>
        </div>
    )
}

export default Pages