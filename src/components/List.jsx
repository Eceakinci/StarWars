import React from 'react';
import Todo from "./Todo";

/*This component contains all todo items, it pass data to Todo component*/

const List = ({ todos }) => {
    return (
        <div className="flex flex-col w-96">
            {todos.map((todos) =>(
                <Todo key={todos.id} todo={todos.text}/>
            ))}
        </div>
    )
}

export default List