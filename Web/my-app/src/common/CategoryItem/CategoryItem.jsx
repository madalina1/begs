import React from 'react';

import './CategoryItem.css';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemId: !this.props.selectedItem
        };
    }

    toggleActiveItem = () => this.setState(prevState => ( this.props.selectedItem ? { activeItemId: !prevState.activeItemId } : { activeItemId: prevState.activeItemId }))
    
    render () {
        return (
            <div className="category-section">
                <button onClick={ this.toggleActiveItem }  
                    className={`category-svg ${this.state.activeItemId && 'active'}`} dangerouslySetInnerHTML={{ __html: this.props.category.path }}
                    style={{ backgroundColor: this.state.activeItemId ? this.props.category.color : '#e9e9e9' }}
                />
                <p className="category-title">{this.props.category.title}</p>
            </div>
        )};
};

export default CategoryItem;
