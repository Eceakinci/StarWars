import React from 'react';
import {GrFormEdit, IoIosRemove} from "react-icons/all";

/*This component contains one todo item*/

function Todo({ todo }) {
    return (
        <div className="flex justify-between items-center h-12 rounded-sm">
            <div>
                <p>{todo}</p>
            </div>
            <div>
                <button><IoIosRemove/></button>
                <button><GrFormEdit/></button>
            </div>

        </div>
    )
}

export default Todo