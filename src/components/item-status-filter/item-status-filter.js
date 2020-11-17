import React from "react";
import "./item-status-filter.css";

class ItemStatusFilter extends React.Component {

  state = {
    btnValue: ''
  }

  buttonHandler = (event) => {
    //console.log(event.target.value)  
    
    let currentBtnValue = event.target.value;
    this.props.setFilter(currentBtnValue)
    this.setState({btnValue: currentBtnValue})

    event.target.parentElement.childNodes.forEach(node => {
      if (node.value !== currentBtnValue){node.className = "btn btn-outline-secondary"}
      else {node.className = "btn btn-info"}
    })
  
  }

  render() {
    return (
      <div className="btn-group">
        <button className="btn btn-info" type="button" value='all' onClick={this.buttonHandler}>
          All
        </button>
        <button className="btn btn-outline-secondary" type="button" value='done' onClick={this.buttonHandler}>
          Done
        </button>
        <button className="btn btn-outline-secondary" type="button" value='undone' onClick={this.buttonHandler}>
          Undone
        </button>
      </div>
    );
  }
}

const ItemStatusFilterFunc = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-info" type="button">
        All
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Done
      </button>
      <button className="btn btn-outline-secondary" type="button">
        Undone
      </button>
    </div>
  );
};

export default ItemStatusFilter;
