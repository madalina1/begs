import React, { Component } from 'react';
import notificationsIcon from '../../assets/images/notification.png';
import { Link } from 'react-router-dom';
import { data } from '../../mockData';

import './Notifications.css';

const removeElementFromArray = (element, array) => {
    let index = array.indexOf(element);

    if(index > -1) array.splice(index, 1);

    return array;
}

class Notifications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeNotification: data.map(element => element.notification && element.id).filter(item => item),
            dropdownIsOpen: false
        }

        this.handleNotification = this.handleNotification.bind(this);
        this.toggleNotificationDropdown = this.toggleNotificationDropdown.bind(this);
    }

    handleNotification(id) {
        this.setState({
            activeNotification: removeElementFromArray(id)
        })
    }

    toggleNotificationDropdown() {
        this.setState({
            dropdownIsOpen: !this.state.dropdownIsOpen
        })
    }

    render() {
        const { activeNotification, dropdownIsOpen } = this.state;

        return(
            <React.Fragment>
                <button className="notification-button" onClick={this.toggleNotificationDropdown}>
                    <img src={notificationsIcon} alt="notification" />
                    <div className="notification-badge">{activeNotification.length}</div>
                </button>
                <div className={`notifications-dropdown ${dropdownIsOpen && "active"}`}>
                    <ul>
                        {
                            data.map(element =>  
                                element.notification &&
                                <li className={activeNotification.includes(element.id) && 'active'} key={element.id}>
                                    <Link to={`/${element.id}/details`} onClick={this.handleNotification.bind(this, element.id)}>
                                        <div className="notifications-title">{element.title} DISCOUNT {element.discount}%</div>{element.notification}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Notifications;