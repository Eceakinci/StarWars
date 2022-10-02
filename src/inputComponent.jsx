import React, { useState } from "react";

function InputComponent({ addTask }) {

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) {
            console.log('selam')
        }else {
            addTask(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="w-96 border-b-2 border-gray-200 outline-none focus:border-b-indigo-500 focus:duration-300"
                   type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Enter task"/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default InputComponent