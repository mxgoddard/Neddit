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
                        {this.props.username === 'Login' &&
                        <Link id="HeaderTitleLink" to="/login">
                            <p className="aLinks">Login</p>
                        </Link>}
                        {this.props.username !== 'Login' &&
                        <Link id="HeaderTitleLink" to={`/users/${this.props.username}`}> {/* Link to profile page */}
                            <p className="aLinks">{ `Hello, ${localStorage.user}` }</p>
                        </Link>}
                    </div>
                </div>
            </div>
        );
    };

    componentDidMount(){
        // Find user
        console.log(localStorage.user);
        if (localStorage.user){
            this.props.login(localStorage.user);
        } else {
            this.props.login('Login');
        }
    };
};

export default Header;