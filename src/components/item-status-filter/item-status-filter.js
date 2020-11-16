import React from "react";
import "./item-status-filter.css";

class ItemStatusFilter extends React.Component {
  render() {
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
