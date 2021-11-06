import React from "react";

//Styles
import "../styles/Todo.css"

const Complete = ({ titleComplete, status, handleComplete, id, handleCompleteTodo }) => {
    return (


            <div className={"todoCard"}>
                <div className="todoTitle">
                    <h4>{titleComplete} </h4>
                </div>

                <div className="todoActions">
                    <button className={status ? "complete" : "reset"} 
                        onClick={() => handleCompleteTodo(id)}
                    >
                        {status ? "Complete" : "To complete"}  </button>

                </div>

            </div>

    );
};

export default Complete;