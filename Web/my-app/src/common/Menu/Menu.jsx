import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import './Menu.css';

const menuItems = [
    {
        name: "For you",
        image: "far fa-thumbs-up",
        link: "/recommendations"
    },
    {
        name: "Categories",
        image: "fas fa-tags",
        link: "/categoriesPage"
    },
    {
        name: <React.Fragment>
                <div className="home-logo"></div>
                <img className="logo-image" src={logo} alt="Logo" />
              </React.Fragment>,
        image: "",
        link: "/"
    },
    {
        name: "Profile",
        image: "far fa-user",
        link: "/profile"
    },
    {
        name: "QR Scan",
        image: "fas fa-qrcode",
        link: "/qr"
    },
]

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "/" + this.props.url
        }
    }

    handleActiveState(menuItem) {
        this.setState({ active: menuItem })
    }

    render() {
        return (
            <nav className="menu-container">
                {
                    menuItems.map(menuItem => 
                        <Link 
                            key={menuItem.name}
                            to={menuItem.link}
                            className={`menu-item ${this.state.active === menuItem.link ? "menu-active" : ""}`} 
                            onClick={this.handleActiveState.bind(this, menuItem.link)}
                        > 
                        {
                            typeof menuItem.name === "string" &&
                                <i className={menuItem.image}></i>
                        }
                            { menuItem.name }
                        </Link>
                    )
                }
            </nav>
        )
    }
} 

export default Menu