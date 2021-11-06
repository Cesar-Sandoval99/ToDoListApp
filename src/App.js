import React, { useState, useEffect } from "react";
/* 
importaciones react
import {BrowserRouter, Switch, Route} from "react-router-dom"
*/
// Components
import Header from "./components/Header";
import LoaderStyle from "./components/LoaderStyle";
import Todo from "./components/Todo";
import Complete from "./components/Complete";
import ToComplete from "./components/ToComplete";

//Styles 
import "./styles/App.css"



function App() {

  //State
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [completed, setIsCompleted] = useState(false)
  const [reset, setIsReset] = useState(false)
  const [all, setIsAll] = useState(false)


  //Effect

  useEffect(() => {
    const handleTodoList = async () => {
      setIsLoading(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const result = await response.json()
      const todoList = result.slice(0, 20);
      setTodoList(todoList)
      setIsLoading(false)
    }

    handleTodoList();
  }, [])

  //Functions


  const handleCompleteTodo = id => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  const handleAllList = () => {
    setIsAll(true)
    setIsReset(false)
    setIsCompleted(false)
  }
  const handleComplete = (id) => {
    setIsCompleted(true)
    setIsAll(false)
    setIsReset(false)
  }
  const handleReset = () => {
    setIsReset(true)
    setIsCompleted(false)
    setIsAll(false)
  }

  return (
    <div className="">

      <Header
        handleAllList={handleAllList}
        handleComplete={handleComplete}
        handleReset={handleReset}
      />
      {isLoading && <LoaderStyle />}

      <div className="todoContainer1">
        {todoList ?
          todoList.map(singleTodo => (
            all && (<Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompleteTodo}
              id={singleTodo.id}
            />)
       
          )) : null}


      </div>
      <div className="todoContainer1">
        {
          todoList ?
            todoList.map(completeTodo => !completeTodo.completed ? completeTodo.completed : (
              completed && (<Complete onClick={() => handleComplete()}
              key={completeTodo.id}
              handleComplete={handleComplete}
              status={completeTodo.completed}
              titleComplete={completeTodo.title}
              id={completeTodo.id}
              handleCompleteTodo={handleCompleteTodo}

            />)
              
            )) : null
        }
      </div>
      <div className="todoContainer1">
        {
          todoList ?
            todoList.map(resetTodo => resetTodo.completed ? resetTodo.completed : (
              reset && (<ToComplete
                key={resetTodo.id}
                handleReset={handleReset}
                status={resetTodo.completed}
                titleReset={resetTodo.title}
                id={resetTodo.id}
                handleCompleteTodo={handleCompleteTodo}

              />)
     
            )) : null
        }
      </div>
    </div>
  );
};

export default App;
