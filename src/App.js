import React from 'react';
import './App.css';

import NewTodo from './Components/newTodo';
import TodoList from './Components/toDoList';

function App(props) {
  return (
    <div className="App">
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
