import InputComponent from "./inputComponent";
import React, { useState } from "react";
import TaskComponent from "./taskComponent";
import ListComponent from "./listComponent";

function App() {
    const [childData, setChildData] = useState("")
    //Burada tudu componentlerini cagir
  return (
    <div className="flex flex-col items-center justify-center p-24">
        <InputComponent addTask={setChildData}/>
        <ListComponent inputData={childData}/>
    </div>
  )
}
export default App
