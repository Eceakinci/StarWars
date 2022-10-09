import React, {useEffect, useState} from 'react'

function StarshipDetail() {
    const [detail, setDetail] = useState([])

    const getDetail = async () => {
        const data = await fetch('https://swapi.dev/api/starships/2')
        const jsonData = await data.json()
        setDetail(jsonData)
        console.log(jsonData)
    }

    useEffect(() => {
        getDetail().then(r => r)
    }, [])

    return (
        <div className='bg-neutral-900'>
            Holaaaa
        </div>
    )
}

export default StarshipDetail