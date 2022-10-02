import React, {useState} from "react";
import TaskComponent from "./taskComponent";

function ListComponent({ inputData }) {
//Her taskin listelendigi component, icine task alcak
    const [inputList, setInputList] = useState([]);

    const addTaskOnClick = e => {
        setInputList(inputList.concat(<TaskComponent inputData={inputData}/>))
    }
    return (
        <TaskComponent inputData={inputData}/>
    );
}

export default ListComponent