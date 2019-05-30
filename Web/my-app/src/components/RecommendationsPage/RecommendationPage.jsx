import React, { Component } from 'react';
import SearchBar from '../../common/SearchBar/SearchBar';
import Notifications from '../../common/Notifications/Notifications';
import { recommendations } from '../../mockData';
import { Link } from 'react-router-dom';

import './RecommendationPage.css';
import RecommendationsCard from './RecommendationsCard/RecommendationsCard';

class RecommendationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: recommendations
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
                    <SearchBar handleNewData={this.handleNewData} data={recommendations}/>
                </div>
                <div className="deals-container">
                    <div className="deals-title">For you</div>
                    <div className="deals-subtitle">Today best deals</div>
                        {
                            this.state.data.map((deal, key) =>
                                <div className="deal-card" key={key}>
                                    <Link to={`/${deal.id}/details`} className="deal-link">
                                        <RecommendationsCard 
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

export default RecommendationPage;