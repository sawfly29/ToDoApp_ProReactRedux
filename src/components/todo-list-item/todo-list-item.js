import React from 'react'
import './todo-list-item.css'

class TodoListItem extends React.Component{ 
    // state = {
    //     done: false,
    //     important: false
    // }
    // onLabelClick =() =>{
    //         this.setState(({done}) => {return {
    //             done: !done
    //         }})
    //     }

    // onMarkImportant = () => {
    //     this.setState((state) => {
    //         return{
    //             important: !state.important
    //         }
    //     })
    // }
    render (){
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props; 
        // const {done, important} = this.state;
        let classNames = 'todo-list-item'
        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal',
        }
        if (done){
            classNames += ' done'
        }
        if (important){
            classNames += ' important'
        }
       
        return ( <span className={classNames}> 
        <span className='todo-list-item-label' style = {style} onClick={onToggleDone}>{label}</span>
        <button type='button' onClick={onToggleImportant} className='btn btn-outline-success btn-sm float-right'> 
        <i className='fa fa-exclamation' />
        </button> 
        <button type='button' onClick = {onDeleted} className='btn btn-outline-danger btn-sm float-right'> 
        <i className='fa fa-trash-o' />
        </button></span>  )}
}

const TodoListItemFunc = ({ label, important = false}) => {

    const style = {
        color: important ? 'tomato' : 'black'
    }
    return ( <span className='todo-list-item'> 
    <span className='todo-list-item-label' style = {style}>{label}</span>
    <button type='button' className='btn btn-outline-success btn-sm float-right'> 
    <i className='fa fa-exclamation' />
    </button> 
    <button type='button' className='btn btn-outline-danger btn-sm float-right'> 
    <i className='fa fa-trash-o' />
    </button></span>  )

}

export default TodoListItem