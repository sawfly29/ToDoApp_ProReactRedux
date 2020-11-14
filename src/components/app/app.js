import React from "react";
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter'
import './app.css'






const App = () => {

const todoData = [
  {label: 'Learn React!', important: true, id: 1},
  {label: 'Learn JS!', important: true, id: 2},
  {label: 'eat, sleep, play!', important: false, id: 3},
]

  return (
    <div className="todo-app">
    <AppHeader toDo={1} done={3} />
    <div className="top-panel d-flex">
      <SearchPanel />
      <ItemStatusFilter />
    </div>

    <TodoList todos={todoData} />
  </div>
  )
}
export default App