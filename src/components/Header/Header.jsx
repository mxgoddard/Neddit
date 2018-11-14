import React, { Component } from 'react';
import { Link } from '@reach/router'; 
import './Header.css'

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
                    {/*  */}
                    <div  className="li" style={{float: 'right'}}>
                        <Link id="HeaderTitleLink" to="/">
                            <p className="aLinks">Hot</p>      {/* Highest rated articles */}
                        </Link>
                    </div>
                    <div  className="li" style={{float: 'right'}}>
                        <Link id="HeaderTitleLink" to="/">
                            <p className="aLinks">Controversial</p>    {/* Most comments */}
                        </Link>
                    </div>
                    <div  className="li" style={{float: 'right'}}>
                        <Link id="HeaderTitleLink" to="/">
                            <p className="aLinks"></p>
                        </Link>
                    </div>
                    {/*  */}
                    <div  className="li" style={{float: 'right'}}>
                        <Link id="HeaderTitleLink" to="/login">
                            <p className="aLinks">Login</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };
}

export default Header;