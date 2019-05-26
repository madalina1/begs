import React, { Component } from 'react';
import DealComponent from '../DealComponent/DealComponent';
import notificationPath from '../../assets/notification.png'
import './DealsPage.css';

class DealsPage extends Component {
    render() {
        return (
            <div class="deals-container">
                <div class="notification">
                    <img src={notificationPath} alt=""></img>
                </div>
                <div class="search-bar">
                    <div class="search">
                        <form class="search-form">
                            <input type="text" placeholder="Type a deal.."/>
                            <input type="submit" value="Search"/>
                        </form>
                    </div>
                </div>
                <div class="deals-title">All Deals</div>
                <div class="deals-subtitle">Today best deals</div>
                <div class="deal-card">
                    <DealComponent 
                        title={"Douglas"}
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard."}
                        discount={5}
                        category={"Beauty"}
                        photoName={"douglas"}/>
                </div>
                <div class="deal-card">
                    <DealComponent 
                        title={"H&M"}
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard."}
                        discount={20}
                        category={"Fashion"}
                        photoName={"hm"}/>
                </div>
                <div class="deal-card">
                    <DealComponent 
                        title={"McDonald's"}
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard."}
                        promotion={"2+1 FREE"}
                        category={"Food"}
                        photoName={"mc"}/>
                </div>
            </div>
        );
    }
}

export default DealsPage;