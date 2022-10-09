import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

/**
 * Search bar
 **/

function SearchBar() {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e) => {
        console.log('geldi')
        e.preventDefault()
        navigate('/search/' + search)
    }

    return (
        <div className='flex justify-center p-12'>
                <input className="w-72 h-8 outline-none indent-2 bg-neutral-900 border-2 border-yellow-500/50 text-xs
                                placeholder:text-yellow-500 placeholder:text-xs
                                focus:bg-stone-100 focus:duration-300"
                       type="text"
                       value={search}
                       placeholder="Search"
                       onChange={(e) => setSearch(e.target.value)}
                       onKeyPress={e => e.key === 'Enter' ? submitHandler(e) : ''}/>
        </div>
    )
}

export default SearchBar