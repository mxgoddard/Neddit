import React, { Component } from 'react';
import { navigate } from '@reach/router';

class Profile extends Component {
    render() {
        return (
            <div>
                <h2>Profile Page!</h2>
                <button onClick={this.handleClick}>Logout</button>
            </div>
        );
    };

    handleClick = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userID");
        this.props.login('Login');
        navigate('/');
    }
};

export default Profile;