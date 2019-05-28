import React, { Component } from 'react';
import Card from '../../common/Card/Card';
// import notificationPath from '../../assets/notification.png';
import { data } from '../../mockData';
import './DealsPage.css';

class DealsPage extends Component {
    render() {
        return (
            <div className="deals-container">
                {/* <div className="notification">
                    <img src={notificationPath} alt=""></img>
                </div> */}
                {/* <div className="search-bar">
                    <div className="search">
                        <form className="search-form">
                            <input type="text" placeholder="Type a deal.."/>
                            <input type="submit" value="Search"/>
                        </form>
                    </div>
                </div> */}
                <div className="deals-title">All Deals</div>
                <div className="deals-subtitle">Today best deals</div>
                {
                    data.map((deal, key) => 
                        <div className="deal-card" key={key}>
                            <Card 
                                title={deal.title}
                                description={deal.description}
                                discount={deal.discount}
                                category={deal.category}
                                photoName={deal.photoName}
                            />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default DealsPage;