import React, {useState} from 'react'

/**
 * Back Button
 **/

function BackButton() {
    const backHandler = (e) => {
        e.preventDefault()
        window.history.back()
    }

    return (
        <div className='flex justify-center border-2 border-yellow-500 rounded-lg cursor-pointer
                        lg:ease-in lg:duration-200 hover:scale-105
                        p-4 h-12 w-16 ml-16 items-center' onClick={backHandler}>
            <div className='text-yellow-500'> &larr; </div>
        </div>
    )
}

export default BackButton