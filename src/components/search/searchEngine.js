import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons';

export default class SearchEngine extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        }

        this.openSearchInput = this.openSearchInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        alert('a search was submitted' + this.state.value);
        event.preventDefault();
    }

    openSearchInput = () => {
        let searchInput = document.getElementById('search-input');
        searchInput.classList.toggle('search-engine-input');
        return console.log('search engine:');

    }

    render() {
        return (
            <div onClick={() => this.openSearchInput()} className="search-bar" id='search-input'>
                <form onSubmit={this.handleSubmit}>
                    <div className='search-bar'>
                        <label>
                            <input type='text' value={this.state.value} onChange={this.handleChange} className='input-search' />
                        </label>
                        {/* <div className='search-icon'>
                            <FontAwesomeIcon icon={faSearch} />
                        </div> */}
                    </div>
                    {/* <input type='submit' value='Submit' /> */}
                </form>
            </div>

        )
    }

}
