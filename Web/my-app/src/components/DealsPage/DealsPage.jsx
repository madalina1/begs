import React, { Component } from 'react';
import Card from '../../common/Card/Card';
import { Link } from 'react-router-dom';
import { data } from '../../mockData';
import './DealsPage.css';
import SearchBar from '../../common/SearchBar/SearchBar';
import Notifications from '../../common/Notifications/Notifications';

class DealsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data
        }

        this.handleNewData = this.handleNewData.bind(this);
    }

    handleNewData(newData) {
        this.setState({
            data: newData
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="notifications-container">
                    <Notifications />
                </div>
                <div className="search-bar-container">
                    <SearchBar handleNewData={this.handleNewData} />
                </div>
                <div className="deals-container">
                    <div className="deals-title">All Deals</div>
                    <div className="deals-subtitle">Today best deals</div>
                    {
                        this.state.data.map((deal, key) =>
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