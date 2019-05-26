import React, { Component } from 'react';
import DealComponent from '../DealComponent/DealComponent';
import './DealsPage.css';

class DealsPage extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Deals Page!</h2>
                <div>
                    <DealComponent/>
                </div>
            </div>
        );
    }
}

export default DealsPage;