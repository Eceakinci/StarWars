import React from "react";

function InfoComponent({ data }) {

    let newDataModel = [
        {key: 'Model:', value: data.model},
        {key: 'Crew:', value: data.crew},
        {key: 'Cargo Capacity:', value: data.cargo_capacity},
        {key: 'Passenger Capacity:', value: data.passengers},
        {key: 'Max Atmosphering Speed:', value: data.max_atmosphering_speed},
        {key: 'Manufacturer:', value: data.manufacturer}]

    return (
        <div className='flex flex-col justify-center w-full p-4 text-sm'>
            {newDataModel.map((element) => {
                return (
                    <div className='flex justify-between lg:ml-4' key={element.key}>
                        <p className='font-semibold pr-1'>{element.key}</p>
                        <p>{element.value}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default InfoComponent
