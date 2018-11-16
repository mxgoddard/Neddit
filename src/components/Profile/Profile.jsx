import React, { Component } from 'react';
import { navigate } from '@reach/router';
import * as api from '../../utils/api.js';
import './Profile.css';
import Loading from '../Loading/Loading.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faUser);

class Profile extends Component {

    state = {
        name: '',
        firstName: '',
        url: '',
        loading: true
    };

    render() {
        if (this.state.loading) return <Loading />
        return (
      
                <div className="ProfileInfo" >
                    {/* <div className="GreetingDiv" > */}
                        {this.props.username === localStorage.getItem("user") && <h2>Welcome home, { this.state.firstName }.</h2>}
                        {this.props.username !== localStorage.getItem("user") && <h2>Welcome to { this.state.firstName }'s Profile page.</h2>}
                    {/* </div> */}
                    {/* <FontAwesomeIcon className="userIcon" icon="user" /> */}
                    <br></br>
                    <button onClick={this.handleClick}>Logout</button>
                </div>
        );
    };

    componentDidMount(){
        this.fetchUser();
    };

    handleClick = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userID");
        this.props.login('Login');
        navigate('/');
    };

    fetchUser = () => {
        api.login(this.props.username).then(user => {
            this.setState({ name: user.name, url: user.avatar_url, firstName: user.name.split(' ')[0], loading: false});
        });
    };
};

export default Profile;