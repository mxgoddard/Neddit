import React, { Component } from 'react';
import { Link } from '@reach/router'; 

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
                                <p className="aLinks">Not Neddit</p>
                            </Link>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Header;