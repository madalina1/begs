import React, { Component } from 'react';
import Card from '../../common/Card/Card';
import { Link } from 'react-router-dom';
// import notificationPath from '../../assets/notification.png';
import { data } from '../../mockData';
import './DealsPage.css';
import SearchBar from '../../common/SearchBar/SearchBar';

class DealsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="search-bar-container">
                    <SearchBar />
                </div>
                <div className="deals-container">
                    {/* <div className="notification">
                        <img src={notificationPath} alt=""></img>
                    </div> */}
                    <div className="deals-title">All Deals</div>
                    <div className="deals-subtitle">Today best deals</div>
                    {
                        data.map((deal, key) =>
                            <div className="deal-card" key={key}>
                                <Link to={`/${deal.id}/details`} className="deal-link">
                                    <Card
                                        title={deal.title}
                                        description={deal.description}
                                        discount={deal.discount}
                                        category={deal.category}
                                        photoName={deal.photoName}
                                    />
                                </Link>
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default DealsPage;