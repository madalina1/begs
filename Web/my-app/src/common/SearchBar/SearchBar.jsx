import React, { Component } from 'react';
import search from '../../assets/images/search.svg';
import { shoppingLocations } from '../../mockData';

import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedLocation: shoppingLocations[0] || '',
            isDropdownOpen: false,
            newData: this.props.data
        }

        this.toogleDropdown = this.toogleDropdown.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toogleDropdown() {
        this.setState({ isDropdownOpen: !this.state.isDropdownOpen })
    }

    changeLocation(item) {
        this.setState({ selectedLocation: item, isDropdownOpen: false })
    }

    handleInputChange(e) {
        let filterData = this.state.newData;
        let newData = []

        if(e.target.value !== '' && e.target.value.length > 2) {
            filterData.filter(item => 
                Object.keys(item).map(element => {
                    let searchText = String(item[element]).toLowerCase();

                    return element !== 'id' && element !== 'photoName' && element !== 'notification' && element !== 'address'
                        && searchText.includes(e.target.value) && 
                        this.state.newData.filter(x => x.id === item['id'] && newData.push(x))
                    } 
                )
            )
        } else {
            newData = this.state.newData;
        }
        const result = [];
        const map = new Map();
        for (const item of newData) {
            if(!map.has(item.id)){
                map.set(item.id, true);    // set any value to Map
                result.push(item);
            }
        }
        this.props.handleNewData(result)
    }

    render() {
        const { selectedLocation, isDropdownOpen } = this.state;

        return (
            <React.Fragment>
                <div className="search-bar">
                    <img src={search} alt="Search" className="search-icon" />
                    <input type="text" className="search-bar-input" placeholder="Search" onChange={this.handleInputChange} />
                    <button className="dropdown-location" onClick={this.toogleDropdown}>
                        <i className="location-icon fas fa-map-marker-alt"></i>
                        <span className="location">{selectedLocation}</span>
                        <div className="dropdown-arrow"><i className="fas fa-angle-down"></i></div>
                    </button>
                </div>
                <div className={`${isDropdownOpen && 'search-dropdown-active'} search-location-list`}>
                    <ul>
                        {
                            shoppingLocations.map(item => <li key={item} onClick={this.changeLocation.bind(this, item)}>{item}</li>)
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBar;