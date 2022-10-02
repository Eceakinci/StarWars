import React from "react";

function TaskComponent ({ inputData }) {
//tek bir task ve onun sonradan eklenecek fonksiyonlari

    return (
        <div className="flex ">
            {inputData}
        </div>
    );
}

export default TaskComponent