import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {registerUser } from '.././ducks/reducer'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            uplay: '',
            login: true
        }
    }

    handleLogin = () => {
        this.setState({
            login: !this.state.login
        })
    }

    handleState(property, value) {
        this.setState({
            [property]: value
        })
    }

    render() {
        if (this.state.login) {
            return (
                <div className='login-wrapper'>
                    <div className='login-box'>
                        <div className='sign-up'> <span className='selected-option' onClick={this.handleLogin}>LOGIN </span>  /  <span className='login-options' onClick={this.props.toggleLogin} onClick={this.handleLogin}> SIGNUP </span> </div>
                        <div className='username'><div className='input-id'> UserName* </div>   <input className='username-input' type='text' /> </div>
                        <div className='username'><div className='input-id'> Password* </div>   <input className='username-input' type='text' /> </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='login-wrapper'>
                    <div className='login-box'>
                        <div className='sign-up'> <span className='login-options' onClick={this.handleLogin}> LOGIN </span>   /   <span className='selected-option' onClick={this.handleLogin}> SIGNUP </span> </div>
                        <div className='username'>
                        <div className='input-id'> UserName* </div>   
                        <input onChange={(e) => this.handleState('username', e.target.value)} className='username-input' type='text' /> 
                        </div>
                        <div className='username'><div className='input-id'> Email* </div>   <input onChange={(e) => this.handleState('email', e.target.value)} className='username-input' type='text' /> </div>
                        <div className='username'><div className='input-id'> Password* </div> <input onChange={(e) => this.handleState('password', e.target.value)} className='username-input' type='text' /> </div>
                        <div className='username'><div className='input-id'> Uplay UserName* </div> <input onChange={(e) => this.handleState('uplay', e.target.value)} className='username-input' type='text' /> </div>
                        <button className='confirm-button' onClick={() => registerUser(this.state.userinfo)}> Signup </button>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        login: state.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ registerUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(mapStateToProps, mapDispatchToProps)(Instructions);