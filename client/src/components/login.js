import React, { Component } from 'react';
import axios from 'axios';
import "./login.css";



class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            user: null,
            signupFormVisible: false,
        };
    }
    render() {
        return (
        <div>
            {this.state.user ? (
                <div className="container formVertCenter">
                    <div className="row text-center">
                        <h5 className="text-center">Hope you have a safe journey,</h5>
                    </div>
                    <div>
                        <h3 className="text-center text-primary mb-3">{this.state.user.username}</h3>
                    </div>
                    <button type="button" className="btn btn-block btn-light" onClick={this.logout}>Log Out</button>
                </div>
            ) : (
                <div className="container-fluid formVertCenter">
                    <div className="btn-group btn-group-justified mb-4" role="group" aria-label="Basic example">
                        <div className="btn-group">
                        <button type="button" className="btn btn-light" onClick={this.showSignupForm} disabled={this.state.signupFormVisible}>Login</button>
                        </div>
                        <div className="btn-group">
                        <button type="button" className="btn btn-light" onClick={this.showLoginForm} disabled={!this.state.signupFormVisible}>Register</button>
                        </div>
                    </div>

                {this.state.signupFormVisible ? (
                    <form id="registerForm" onSubmit={this.register}>
                        <div className="form-row">
                            <div className="col-12">
                                <input name="registerUsername" type="text"  className="form-control" placeholder="User Name" required />
                            </div>
                            <div className="col-12">
                                <input name="registerPassword" type="password" className="form-control" placeholder="Password" required />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-light btn-block mt-4">Register</button>
                    </form>
                    ) : (
                        <form id="loginForm" onSubmit={this.login}>
                            <div className="form-row">
                                <div className="col-12">
                                <input name="username" type="text"  className="form-control" placeholder="User Name" required />
                                </div>
                                <div className="col-12">
                                <input name="password" type="password" className="form-control" placeholder="Password" required />
                                </div>
                                </div>
                            <button type="submit" className="btn btn-light btn-block mt-4">Login</button>
                        </form>
                    )}
                </div>
            )
            }
        </div>
        );
    }

    showLoginForm = (event) => {
        this.setState({
            signupFormVisible: false,
        })
    }

    showSignupForm = (event) => {
        this.setState({
            signupFormVisible: true,
        })
    }

    register = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/signup',
            data: {
                username: event.target.registerUsername.value,
                password: event.target.registerPassword.value,
            }
        })
            .then((res) => {
                this.showLoginForm();
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            });
    }

    login = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/auth/login',
            data: {
                username: event.target.username.value,
                password: event.target.password.value,
            }
        })
        .then((res) => {
            this.setState({
                user: res.data.user,
                showSignupForm: false,
            })
            console.log(res);
        })
        .then((res) => {
            this.showLoginForm();
            console.log(res);
        })
        .catch((res) => {
            console.log(res);
        });
    }

    logout = () => {
        axios({
            method: 'get',
            url: '/auth/logout'
        })
        .then(() => {
            this.setState({
                user: null,
            })
        })
        .catch((res) => {
            console.log(res);
        });
    }
}

export default Login;