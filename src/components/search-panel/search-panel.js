import React from 'react';
import './search-panel.css'

class SearchPanel extends React.Component{

  state ={
    searchString: ''
  }

  searchEngine = (event) => {
    //console.log(this.state.todoData)
    this.setState({searchString: event.target.value})

    this.props.onSearch(event.target.value)
  }
  

  render(){
    //const {onSearch} = this.props;

    return <input className='search-input' placeholder="search" onChange={this.searchEngine}  />;
  }
}

const SearchPanelFunc = () => {
    return <input className='search-input' placeholder="search" />;
  };

  export default SearchPanel