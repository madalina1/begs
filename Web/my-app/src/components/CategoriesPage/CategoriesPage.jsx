import React, { Component } from 'react';
import CategoryItem from '../../common/CategoryItem/CategoryItem';
import { categoriesItems } from '../../common/CategoryItem/mockImgs';
import Notifications from '../../common/Notifications/Notifications';
import SearchBar from '../../common/SearchBar/SearchBar';

import './CategoriesPage.css';

class CategoriesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: true
        };
    }

    deselectAllCategories = () => {
        this.setState({selectedItem: false});
    }   
       
    render() {
        return (
            <React.Fragment>
                <div className="notifications-container">
                    <Notifications />
                </div>
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <div className="deals-container">
                    <div className="categories-title">What would you like?</div>
                    <button className="deselect-button" onClick={this.deselectAllCategories}>Deselect all <i className="fas fa-times"></i></button>
                    <div className="categories">            
                        {categoriesItems.map((category, key) => <CategoryItem category={category} key={key} selectedItem={this.state.selectedItem}/>)}
                    </div>
                </div>
            </React.Fragment>
            )
    }
}

export default CategoriesPage;