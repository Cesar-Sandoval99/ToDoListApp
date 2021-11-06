import React from "react";


//Styles KAKA
import "../styles/HeaderStyle.css"

const Header = ({handleAllList, id, handleComplete, handleReset, status}) => {

    return (

        <header>
            <h1 className="Logo">To-Do List</h1>
            <div className="buttons">
                <button className="all" onClick={() => handleAllList()}>All list</button>
                <button className="complete"
                onClick={() => handleComplete(id)} >Complete</button>
                <button className="reset" onClick={() => handleReset()} >To complete</button>
            </div>
        </header>
    );
};

export default Header; 