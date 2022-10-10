import React, {useEffect, useState} from 'react'
import getData from "../api/getData";

function StarshipDetail() {
    const [detail, setDetail] = useState([])

    const getDetail = async () => {
        /**todo: detailurl comes here**/
        const data = await getData('2')
        setDetail(data)
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