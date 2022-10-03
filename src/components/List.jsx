import React from 'react';
import Todo from "./Todo";

/*This component contains all todo items, it pass data to Todo component*/

const List = ({ todos, setTodos }) => {
    return (
        <div className="flex flex-col w-96">
            {todos.map((todo) =>(
                <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    )
}

export default List