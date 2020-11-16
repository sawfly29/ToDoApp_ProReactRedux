import React from "react";
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddTodo from '../add-todo'
import './app.css'


class App extends React.Component{
  id = 0;
state = {
  todoData: [
    this.createTodoItem('Learn React!'),
    this.createTodoItem('Learn JS!'),
    this.createTodoItem('eat, sleep, play!')
]
}

toggleProperty(arr, id, property){
  const indx = arr.findIndex((el) =>  el.id === id)// нашли индекс в массиве интересующего жлемента по индексу
    let newItem = {...arr[indx], [property]: !arr[indx][property]}

     return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)] //нельзя стейт напрямую менять!
    
}

onToggleDone = (id) => {
  this.setState((state) => { 

    return {todoData: this.toggleProperty(state.todoData, id, 'done')}
  })
}

onToggleImportant = (id) => {
  this.setState(({todoData}) => { 
    return {todoData: this.toggleProperty(todoData, id, 'important')}
  })
}

deleteItem = (id) => {
  this.setState((state) => { 
    const indx = state.todoData.findIndex((el) =>  el.id === id)
    let newArray = [...state.todoData.slice(0, indx), ...state.todoData.slice(indx + 1)] //нельзя стейт напрямую менять!
    return {todoData: newArray}
  })
}



createTodoItem (label) {
  return {
    label, 
    done: false,
    important: false,
    id: this.id++
  }
}

addItem = (text) =>{
  //generate ID
  const newItem = this.createTodoItem(text)
//add item
this.setState(({todoData}) => {
  const newArray = [...todoData, newItem]

return {todoData: newArray}
})
}

  render () {
    const doneItemsCount = this.state.todoData.filter(el => el.done).length
    const toDoItemsCount = this.state.todoData.filter(el => !el.done).length
    
    
    return (
    <div className="todo-app">
    <AppHeader toDo={toDoItemsCount} done={doneItemsCount} />
    <div className="top-panel d-flex">
      <SearchPanel />
      <ItemStatusFilter />
    </div>

    <TodoList todos={this.state.todoData} onDeleted = {this.deleteItem} onToggleImportant = {this.onToggleImportant} onToggleDone = {this.onToggleDone} />
    <AddTodo onAdding = {this.addItem} />
  </div>
  )}  
}



const AppFunc = () => {

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

    <TodoList todos={todoData} onDeleted = {(id) => {console.log(id)}} />
  </div>
  )
}
export default App