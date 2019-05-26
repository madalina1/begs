import React, { Component } from 'react';
import './DealComponent.css';

class DealComponent extends Component {
    render() {
        return (
            <div class="deal-container">
                <div class="category">{this.props.category}</div>
                <div class="photo">
                    <img src={"images/"+this.props.photoName+".png"} alt=""></img>
                </div>
                <div class="info">
                    <div class="info-title">{this.props.title}</div>
                    <div class="info-description">{this.props.description}</div>
                    <div class="info-discount">{this.props.discount}
                        {this.props.discount != null ? "% DISCOUNT" : this.props.promotion}
                    </div> 
                </div>
            </div>
        );
    }
}

export default DealComponent;