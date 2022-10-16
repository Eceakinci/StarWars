import React from 'react'
import {Link} from "react-router-dom";

/**
 * Back Button
 **/

function BackButton() {

    return (
        <Link to={-1}>
            <div className='flex justify-center border-2 border-yellow-500 rounded-lg cursor-pointer
                        lg:ease-in lg:duration-200 hover:scale-105
                        p-4 h-12 w-16 ml-16 items-center' >
                <div className='text-yellow-500'> &larr; </div>
            </div>
        </Link>
    )
}

export default BackButton