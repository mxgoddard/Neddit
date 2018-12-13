import React, { Component } from 'react';
import * as api from '../../utils/api.js';
import './Login.css';
import { Link, navigate } from '@reach/router';

class Login extends Component {

    state = {
        user: '',
        valid: true
    };

    render() {
        return (
            <div className="Login" >
                <form id="LoginForm">
                    <h3>Sign in</h3>
                    <input onChange={this.handleChange} value={this.state.user} id="user" placeholder="Username" className={this.state.valid ? "defaultInput" : "wrongInput"}></input>
                    {!this.state.valid && <h4 id="RedErr">Please enter a valid username.</h4>}
                    <div className="LoginButton" onClick={this.handleSubmit}>
                        <Link to="#" id="CreateLoginBox">Login</Link>
                    </div>
                </form>
            </div>
        );
    };

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ user: value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        api.login(this.state.user).then(user => {
            if (user) {
                console.log(user);
                console.log('^^^');
                this.setState({ valid: true });
                localStorage.setItem('userObj', user);
                localStorage.getItem('userObj');
                localStorage.setItem('user', user.username);
                localStorage.setItem('userID', user._id);
                this.props.login(user.username);
                navigate('/');
            } else {
                console.log(':(');
                this.setState({ valid: false });
            }
        });
        // this.setState({ user: '' });
    };
};

export default Login;