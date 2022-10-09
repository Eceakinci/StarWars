import React from 'react'
import Home from './Home';
import { Route, Routes} from 'react-router-dom'
import StarshipDetail from "./StarshipDetail";
import Search from "./Search";
/**
 * Function that call all pages
*bg-gradient-to-r from-slate-900 to-slate-500
 * */
function Pages() {

    return (
        <div className='bg-neutral-900'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/starships/:id' element={<StarshipDetail/>}/>
                <Route path='/search:search' element={<Search/>}/>
            </Routes>
        </div>
    )
}

export default Pages