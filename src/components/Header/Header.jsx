import React, { Component } from 'react';
import { Link } from '@reach/router'; 
import './Header.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faAlignRight, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faFire, faAlignRight, faUser, faTimes);

class Header extends Component {

    render() {
        return (
            <div className="HeaderContainer">
                <div id="ul">
                    <div  className="li">
                        <Link id="HeaderTitleLink" to="/">
                            <p className="aLinks">Neddit</p>
                        </Link>
                    </div>
                    <div  className="li">
                        <Link id="HeaderTitleLink" to="/notneddit">
                            <p className="aLinks">Not Neddit
                            <FontAwesomeIcon className="icons" icon="times" /></p>
                        </Link>
                    </div>
                    {/*  */}
                    <div  className="li" style={{float: 'right'}}>
                        <Link id="HeaderTitleLink" to="/">
                            <p className="aLinks">Hot 
                            <FontAwesomeIcon className="icons" icon="fire" /></p>
                        </Link>
                    </div>
                    <div  className="li" style={{float: 'right'}}>
                        <Link id="HeaderTitleLink" to="/">
                            <p className="aLinks">Controversial
                            <FontAwesomeIcon className="icons" icon="align-right" /></p>
                        </Link>
                    </div>
                    <div  className="li" style={{float: 'right'}}>
                        <Link id="HeaderTitleLink" to="/">
                            <p className="aLinks"></p>
                        </Link>
                    </div>
                    {/*  */}
                    <div  className="li" style={{float: 'right'}}>
                        {this.props.username === 'Login' &&
                        <Link id="HeaderTitleLink" to="/login">
                            <p className="aLinks">Login</p>
                        </Link>}
                        {this.props.username !== 'Login' &&
                        <Link id="HeaderTitleLink" to={`/users/${this.props.username}`}> {/* Link to profile page */}
                            <p className="aLinks">{ `Hello, ${localStorage.user}` } <FontAwesomeIcon className="icons" icon="user" /></p>
                        </Link>}
                    </div>
                </div>
            </div>
        );
    };

    componentDidMount(){
        if (localStorage.user){
            this.props.login(localStorage.user);
        } else {
            this.props.login('Login');
        }
    };
};

export default Header;