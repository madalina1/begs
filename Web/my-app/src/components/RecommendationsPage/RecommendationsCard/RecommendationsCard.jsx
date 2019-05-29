import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

import './RecommendationsCard.css';

class RecommendationsCard extends Component {
    render() {
        return (
            <div className="recommendations-card">
                <div className="category">{this.props.category}</div>
                <div className="card-image">
                    <img src={"images/" + this.props.photoName + ".png"} alt=""></img>
                </div>
                <div className="info recommendations">
                    <div className="recommendation-title">{this.props.title}</div>
                    <LinesEllipsis 
                        text={this.props.description}
                        className="recommendation-description"
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                    <button className="recommendation-discount">{this.props.discount}
                        {this.props.discount != null ? "% DISCOUNT" : this.props.promotion}
                    </button> 
                </div>
            </div>
        );
    }
}

export default RecommendationsCard;