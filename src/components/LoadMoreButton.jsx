import React from 'react'

/**
 * Load More button on the bottom of the page
 **/

function LoadMoreButton() {
    return (
        <div className='flex justify-center p-8'>
            <div className='bg-stone-200 p-2 rounded-lg lg:ease-in lg:duration-200 hover:scale-110 rounded-lg cursor-pointer'>
                <span>Load More</span>
            </div>
        </div>
    )
}

export default LoadMoreButton