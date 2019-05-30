import React, { Component } from 'react';
import { data, interests } from '../../mockData';
import { Link } from 'react-router-dom';

import './DetailsPage.css';

class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: window.location.pathname.split('/')[1],
            interest: false
        }

        this.toggleInterest = this.toggleInterest.bind(this);
    }

    toggleInterest() {
        this.setState({
            interest: !this.state.interest 
        })
    }

    componentDidMount() {
        let newArray = []
        data.map(element => interests.map(interest => element.id === interest.id && newArray.push(interest)))

        newArray.map(element => element.id === this.state.url && this.setState({ interest: true }))
    }

    render() {
        const { url, interest } = this.state;

        return (
            data.map(deal =>
                deal.id === url &&
                <div key={deal.id} className="details-container">
                    <div className="details-image">
                        <Link to="/" className="back-button"><i className="fas fa-arrow-left"></i></Link>
                        <img src={"/images/" + deal.photoName + ".png"} alt={deal.photoName}></img>
                        <button className="interest-button" onClick={this.toggleInterest}><i className={`${interest ? 'fas' : 'far'} fa-heart`}></i></button>
                        <div className="overlay"></div>
                    </div>
                    <div className="details">
                        <div className="discount">{deal.discount} % discount</div>
                        <div className="details-title">{deal.title}</div>
                        <div className="details-description">{deal.description}</div>
                        <div className="details-cards">
                            <div className="card">
                                <i className="far fa-clock"></i>
                                <div className="card-name">Open</div>
                                <div className="card-more">10am-10pm</div>
                            </div>
                            <div className="card">
                                <i className="far fa-heart"></i>
                                <div className="card-name">3 friends</div>
                                <div className="card-more">Interested</div>
                            </div>
                            <div className="card">
                                <a href={`http://maps.google.com/?q=${deal.address}`} style={{ textDecoration: 'none', textAlign: 'center', WebkitTapHighlightColor: 'transparent' }}>
                                    <i className="fas fa-street-view"></i>
                                    <div className="card-name">89 m</div>
                                    <div className="card-more">Away</div>
                                </a>
                            </div>
                        </div>
                        <button className="details-send">Send the offer to a friend <i className="fab fa-telegram-plane"></i></button>
                    </div>
                </div>
            )
        );
    }
}

export default DetailsPage;