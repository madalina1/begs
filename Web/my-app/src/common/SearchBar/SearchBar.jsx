import React, { Component } from 'react';
import search from '../../assets/images/search.svg';
import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="search-bar">
                    <img src={search} alt="Search" className="search-icon" />
                    <input type="text" className="search-bar-input" placeholder="Search" />
                    <button className="dropdown-location">
                        <i className="location-icon fas fa-map-marker-alt"></i>
                        <span className="location">Palas</span>
                        <div className="dropdown-arrow"><i className="fas fa-angle-down"></i></div>
                    </button>
                </div>
                <div className="search-location-list">
                    <ul>
                        <li>Carrefour Felicia</li>
                        <li>Iulius Mall</li>
                        <li>Baneasa Shopping City</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;