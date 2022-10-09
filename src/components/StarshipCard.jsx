import React from 'react'
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
/**
 * Starship Card that visible in home page
**/

const splitUrl = (url) => {
    return 'starships/' + url.match(/[0-9]+/)[0]
}

function StarshipCard({ starship }) {
    return (
        <Link className='flex flex-col items-center text-indigo-300 lg:ease-in lg:duration-200 hover:scale-105 bg-stone-100 rounded-lg cursor-pointer'
            to={splitUrl(starship.url)}>
            <h1 className='underline underline-offset-4 font-bold p-4'>{starship.name}</h1>
            <div className='p-4'>
                <img src='../../src/assets/eta2.jpg' alt={starship.name}
                     className='rounded-lg shadow-xl'/>
            </div>
            <div className='flex flex-col w-full p-4 text-sm'>
                <div className='flex ml-4'>
                    <p className='font-semibold pr-1'>Model:</p>
                    <p>{starship.model}</p>
                </div>
                <div className='flex ml-4'>
                    <p className='font-semibold pr-1'>Hyperdrive Rating:</p>
                    <p>{starship.hyperdrive_rating}</p>
                </div>

            </div>
        </Link>
    )
}

export default StarshipCard