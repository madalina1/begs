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
            selectedItem: true,
            categories: categoriesItems
        };

        this.handleNewData = this.handleNewData.bind(this);
    }

    deselectAllCategories = () => {
        this.setState({selectedItem: false});
    } 
    
    handleNewData(newData) {
        this.setState({
            categories: newData
        })
    }
       
    render() {
        return (
            <React.Fragment>
                <div className="notifications-container">
                    <Notifications />
                </div>
                <div className="search-bar-container">
                    <SearchBar handleNewData={this.handleNewData} data={categoriesItems}/>
                </div>
                <div className="deals-container categories-container">
                    <div className="categories-title">What would you like?</div>
                    <button className="deselect-button" onClick={this.deselectAllCategories}>Deselect all <i className="fas fa-times"></i></button>
                    <div className="categories">            
                        {this.state.categories.map((category, key) => <CategoryItem category={category} key={key} selectedItem={this.state.selectedItem}/>)}
                    </div>
                </div>
            </React.Fragment>
            )
    }
}

export default CategoriesPage;