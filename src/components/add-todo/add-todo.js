import React from "react";
import "./add-todo.css";

class AddTodo extends React.Component {
  state= {
      label: ''
  }    
  onLabelChange = (event) =>{
    
    this.setState({label: event.target.value})
    
    }

    onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onAdding(this.state.label)
      this.setState({label: ''})
    }

  render() {
    const {onAdding} = this.props;

    return (
      <form className="item-add-form d-flex" onSubmit = {this.onFormSubmit}>
        <input className='form-control' type='text' onChange={this.onLabelChange} placeholder='what needs to be done' value={this.state.label} />
        <button
          onClick = {() => {onAdding(this.state.label)}}
          type="button"
          className="btn btn-outline-secondary btn-sm float-right">
          <i className="fa fa-plus-square-o" />
        </button>
      </form>
    );
  }
}

const AddTodoFunc = ({ toDo, done }) => {
  return (
    <div className="button d-flex">
      {/* <button type='button' className='btn btn-outline-danger btn-sm float-right'>
      <i className='glyphicon glyphicon-plus-sign' />
    </button> */}

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
      >
        <i className="fa fa-plus-square-o" />
      </button>
    </div>
  );
};

export default AddTodo;
