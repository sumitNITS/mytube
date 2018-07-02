import React,{ Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super();
        this.state = {term : ''};
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);

    }

	render(){
    return(
        <div className="search-bar">
        <input type="text" placeholder="Search" name="search" 
        onChange={(event) => this.onInputChange(event.target.value)} />
        <button type="submit"><i className="fa fa-search"></i></button>
    
        </div>
    );
    }   
    
        
}
export default SearchBar;