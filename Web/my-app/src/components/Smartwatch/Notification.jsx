import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../mockData';

const removeElementFromArray = (element, array) => {
    let index = array.indexOf(element);

    if(index > -1) array.splice(index, 1);

    return array;
}

class Notification extends Component {
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
        const { activeNotification } = this.state;

        return(
            <div className={this.props.customStyle + " smartwatch-background"}>
                <div className="smartwatch-notification">
                    <ul>
                        {
                            data.map(element =>  
                                element.notification &&
                                <li className={activeNotification.includes(element.id) && 'active'} key={element.id}>
                                    <Link to={`/smartwatch/${element.id}/details`} onClick={this.handleNotification.bind(this, element.id)}>
                                        <div className="notifications-title">{element.title} DISCOUNT {element.discount}%</div>{element.notification}
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Notification;