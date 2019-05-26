import React, { Component } from 'react';
import photoPath from '../../assets/douglas.png'
import './DealComponent.css';

class DealComponent extends Component {
    title = 'Douglas';
    description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard. '
    discount = 5;
    category = 'Beauty';

    render() {
        return (
            <div class="deal-container">
                <div class="category">{this.category}</div>
                <div class="photo">
                    <img src={photoPath}></img>
                </div>
                <div class="info">
                    <div class="info-title">{this.title}</div>
                    <div class="info-description">{this.description}</div>
                    <div class="info-discount">{this.discount}% DISCOUNT</div>
                </div>
            </div>
        );
    }
}

export default DealComponent;