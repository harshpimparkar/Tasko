import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar"
import { useState, useEffect } from "react";

function App() {
  const [singleTodo, setSingleTodo] = useState("");
  const [todos, setTodos] = useState([
    "Go to gym",
    "Drink water",
    "Read a book",
  ]);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDelete(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEdit(index) {
    const valueToBeEdited = todos[index];
    setSingleTodo(valueToBeEdited);
    handleDelete(index);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
    <Navbar />
      <TodoInput
        singleTodo={singleTodo}
        setSingleTodo={setSingleTodo}
        handleTodos={handleTodos}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
