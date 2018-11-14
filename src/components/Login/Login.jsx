import React, { Component } from 'react';

class Login extends Component {

    state = {
        user: ''
    };

    render() {
        return (
            <div>
                <h3>Sign in</h3>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={this.handleChange} value={this.state.user} id="user" placeholder="Username"></input>
                    <button>SIGN IN</button>
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
    };
};

export default Login;