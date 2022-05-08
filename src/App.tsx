import UserInputTodo from './components/UserInputTodo'
import Todos from './components/Todos'
import Todo from './models/todo'
import './App.css';
import React from 'react';

const App = () => {
  const [todos, setTodos] = React.useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo] // prevTodos.concat(newTodo)
    })
  }

  return (
    <>
      <UserInputTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} />
    </>
  );
}

export default App;
