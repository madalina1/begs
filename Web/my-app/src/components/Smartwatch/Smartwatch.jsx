import React, { Component } from 'react';

import './Smartwatch.css';
import Deals from './Deals';
import Details from './Details';
import Notification from './Notification';

class Smartwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
        };
    }

    render() {
        return (
            <div className="watch-container">
                <div className="watch">
                    <div className="top_band"></div>
                    <div className="watch_face">
                        <div className="watch_display"></div>
                        {
                            this.state.url === "smartwatch" &&
                            <Deals customStyle="screen_image" />
                        }
                        {
                            this.state.url === "details" &&
                            <Details customStyle="screen_image" />
                        }
                        {
                            this.state.url === "notification" &&
                            <Notification customStyle="screen_image" />
                        }
                        <div className="watch_button"></div>
                    </div>
                    <div className="bottom_band"></div>
                </div>
            </div>
        );
    }


}

export default Smartwatch;