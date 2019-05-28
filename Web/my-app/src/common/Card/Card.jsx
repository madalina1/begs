import React, { Component } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="deal-container">
                <div className="category">{this.props.category}</div>
                <div className="photo">
                    <img src={"images/" + this.props.photoName + ".png"} alt=""></img>
                </div>
                <div className="info">
                    <div className="info-title">{this.props.title}</div>
                    <LinesEllipsis 
                        text={this.props.description}
                        className="info-description"
                        maxLine='2'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                    <button className="info-discount">{this.props.discount}
                        {this.props.discount != null ? "% DISCOUNT" : this.props.promotion}
                    </button> 
                </div>
            </div>
        );
    }
}

export default Card;