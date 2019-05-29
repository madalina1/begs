import React, { Component } from 'react';
import Card from '../../common/Card/Card';

import { data } from '../../mockData';
import { Link } from 'react-router-dom';
import './ProfilePage.css';

class ProfilePage extends Component {
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

    changePage(a){
        a = !a;
        console.log(a);
    }

    render() {
        const firstPage = true;
        return(
            <React.Fragment>
            <div>
                <div className="profile-back">
                    <div className="profile-photo">
                        <img src={"/images/profile.png"} alt=""></img>
                        <p>Mike Pence</p>
                    </div>
                    <nav className="slidemenu">
    
                        <input type="radio" name="slideItem" id="slide-item-1" className="slide-toggle"/>
                        <label htmlFor="slide-item-1" checked={this.firstPage}><span>Interests</span></label>
                        
                        <input type="radio" name="slideItem" id="slide-item-2" className="slide-toggle"/>
                        <label htmlFor="slide-item-2" checked={!this.firstPage}><span>Settings</span></label>
                        
                        <div className="clear"></div>
                        
                        <div className="slider">
                            <div className="bar"></div>
                        </div>
                        
                    </nav>
                </div>
                <div className="interests">
                {
                    !firstPage ? (
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
                    ) : (
                        <div  className="settings">
                            <div className="item">
                                <p>Change account registration<i class=" icon fas fa-arrow-right"></i>
                                </p>
                            </div>
                            <div className="item">
                                <p>Lorem Ipsum<i class="icon fas fa-arrow-right"></i>
                                </p>
                            </div>
                        </div>
                    )
                   
                }
               
                </div>
            </div>
            </React.Fragment>
           
        );
    }
}

export default ProfilePage;