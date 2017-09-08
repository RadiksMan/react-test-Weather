import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(){
        super();

        this.state = {term:''};

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event){
        console.log(event.target.value)
        this.setState({term:event.target.value})
    }

    render(){
        return(
            <form className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

export default SearchBar;