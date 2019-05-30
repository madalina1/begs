import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../mockData';
import RecommendationsCard from '../RecommendationsPage/RecommendationsCard/RecommendationsCard';

class Deals extends Component {
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
            <div className={this.props.customStyle} style={{ backgroundColor: '#ffffff' }}>
                <div className="">
                    <div className="smart-title">All Deals</div>
                    {
                        this.state.data.map((deal, key) =>
                            <div className="deal-card smart-card" key={key}>
                                <Link to={`/smartwatch/${deal.id}/details`} className="deal-link">
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
            </div>
        );
    }
}

export default Deals;