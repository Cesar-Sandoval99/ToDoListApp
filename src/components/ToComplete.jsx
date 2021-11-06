import React from "react";

// Styles

import "../styles/Todo.css"

const ToComplete = ({status, titleReset, id, handleReset, handleCompleteTodo}) => {
    return(
        <div className="todoCard">
        <div className="todoTitle">
            <h4>{titleReset} </h4>
        </div>

        <div className="todoActions">
            <button className={status ? "complete" : "reset"} 
                onClick={() => handleCompleteTodo(id)}
            >
                {status ? "Complete" : "To complete"}  </button>

        </div>

    </div>
    )
}

export default ToComplete;