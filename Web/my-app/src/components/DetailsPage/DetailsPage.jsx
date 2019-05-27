import React, { Component } from 'react';

import './DetailsPage.css';

class DetailsPage extends Component {
    photoName = "douglas";
    discount = "20% discount";
    description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ";

    render() {
        return (
            <div class="details-container">
                <div class="photoo">
                    <img src={"images/"+this.photoName+".png"} alt=""></img>
                </div>
                <div class="details">
                    <div class="discount">{this.discount}</div>
                    <div class="details-title">Hm</div>
                    <div class="details-description">{this.description}</div>
                    <div class="details-cards">
                        <div class="card">
                            <div class="card-icon">icon</div>
                            <div class="card-name">Open</div>
                            <div class="card-more">10am-10pm</div>
                        </div>
                        <div class="card">
                            <div class="card-icon">icon</div>
                            <div class="card-name">3 friends</div>
                            <div class="card-more">Interested</div>
                        </div>
                        <div class="card">
                            <div class="card-icon">icon</div>
                            <div class="card-name">89 m</div>
                            <div class="card-more">away</div>
                        </div>
                    </div>
                    <div class="details-send">send</div>
                </div>
            </div>
        );
    }
}

export default DetailsPage;