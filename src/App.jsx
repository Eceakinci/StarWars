import React, { useState } from "react";
import Form from "./components/Form"
import List from "./components/List";
import Header from "./components/Header";
/*This is parent component*/

function App() {

    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState([])

    return (
        <div className="flex flex-col w-96 m-auto bg-gray-100">
            <Header/>
            <div className="bg-white rounded-lg drop-shadow-lg shadow-gray-400/50">
                <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
                <List todos={todos} setTodos={setTodos}/>
            </div>

        </div>
    )
}
export default App
