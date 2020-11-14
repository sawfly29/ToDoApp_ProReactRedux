import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';//css сборщик автоматом подключает к страничке, где мы этот файл подключили.
//важно, чтобы имена совпадали с именем компонента

const TodoList = ({todos}) => {

   
   const elements = todos.map((item) => {
    const {id, ...itemProps} = item
       return <li key = {id} className='list-group-item'>
       <TodoListItem {...itemProps} />
   </li>});
//    const elements = todos.map((item) => {return <li>
//        <TodoListItem label = {item.label} important={item.important} /> - проспредили компоненты
//    </li>});

//в бутстрапе есть стиль list-group, но нет todo-list
    return (
      <ul className='list-group todo-list' >
          {elements}
      </ul>
    );
  };

export default TodoList