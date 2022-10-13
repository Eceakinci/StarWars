import React, {useEffect, useState} from 'react'
import getData from '../functions/getData';
import {useParams} from 'react-router-dom';
import InfoComponent from "../components/InfoComponent";
import images from "../data/images.json";
import BackButton from "../components/BackButton";

function StarshipDetail() {
    const [detail, setDetail] = useState([])
    let params = useParams()

    useEffect(() => {
        getDetail().then(r => r)
    }, [])

    const getDetail = async () => {
        const data = await getData(`${params.id}`)
        setDetail(data)
    }

    return (
        <>
            <BackButton/>
            <div className='grid grid-cols-6'>
                <div className='col-start-2 col-end-6 items-center text-indigo-300 bg-stone-100 rounded-lg text-neutral-800'>
                    <h1 className='font-bold p-4 text-center'>{detail.name}</h1>
                    <div className='flex '>
                        <div className='p-4'>
                            <img src={images.find(img => img.url === 'starships/' + params.id).imageUrl} alt={detail.name}
                                 className='rounded-lg shadow-xl'/>
                        </div>
                        <InfoComponent key={detail.url} data={detail}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StarshipDetail