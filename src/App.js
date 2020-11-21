import React, { useState, useEffect } from "react";
import Form from "./component/Form";
import TodoList from "./component/TodoList";
import Todo from "./component/Todo";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHanler();
  }, [todos, status]);

  const filterHanler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todos) => todos.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todos) => todos.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };


  
  return (
    <div className="App">
      <header>
        <h1>Linh's Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
