import React, {useState} from 'react';
import {GrFormEdit, IoIosRemove, MdDone} from "react-icons/all";

/*This component contains one todo item*/

function Todo({ todo, todos, setTodos }) {

    const [completed, setCompleted] = useState('')

    const removeTodoHandler = () => {
        if (confirm("Are you sure to remove task?")) {
            setTodos(todos.filter(element => element.id !== todo.id))
        }
    }

    const editTodoHandler = () => {

    }

    const completedHandler = () => {
        todo.completed = !todo.completed;
        setCompleted(todo.completed)
    }

    return (
        <div className="flex justify-between items-center h-12 rounded-sm">
            <div className="pl-2">
                <p className={completed ? 'strike' : ''}>{todo.text}</p>
            </div>
            <div className="pr-2">
                <button onClick={removeTodoHandler}><IoIosRemove/></button>
                <button onClick={editTodoHandler}><GrFormEdit/></button>
                <button onClick={completedHandler}><MdDone/></button>
            </div>
        </div>
    )
}

export default Todo