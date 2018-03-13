import React, { Component } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {registerUser, login } from '.././ducks/reducer'

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
        this.register = this.register.bind(this)
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

    register(){
        this.props.registerUser(this.state)
        this.setState({
            username: '',
            email: '',
            password: '',
            uplay: '',
        })
    }

    render() {
        if (this.state.login) {
            return (
                <div className='login-wrapper'>
                    <div className='login-box'>
                        <div className='sign-up'>
                            <span className='selected-option'>LOGIN </span>  /  <span className='login-options'  onClick={this.handleLogin}> SIGNUP </span> 
                        </div>
                        <div className='username'>
                            <div className='input-id'> UserName* </div>
                            <input onChange={(e) => this.handleState('username', e.target.value)} className='username-input' type='text' />
                        </div>
                        <div className='username'>
                            <div className='input-id'> Password* </div> 
                            <input onChange={(e) => this.handleState('password', e.target.value)}  className='username-input' type='text' />
                        </div>

                        <button className='confirm-button' onClick={() => this.props.login(this.state)}> Login </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='login-wrapper'>
                    <div className='login-box'>
                        <div className='sign-up'> 
                            <span className='login-options' onClick={this.handleLogin}> LOGIN </span>   /   <span className='selected-option' > SIGNUP </span>
                        </div>
                        <div className='username'>
                            <div className='input-id'> UserName* </div>   
                            <input required value={this.state.username} onChange={(e) => this.handleState('username', e.target.value)} className='username-input'  /> 
                        </div>
                        <div className='username'>
                            <div className='input-id'> Email* </div>
                            <input required value={this.state.email} onChange={(e) => this.handleState('email', e.target.value)} className='username-input' />
                        </div>
                        <div className='username'>
                            <div className='input-id'> Password* </div> 
                            <input required value={this.state.password} onChange={(e) => this.handleState('password', e.target.value)} className='username-input'  />
                        </div>
                        <div className='username'>
                            <div className='input-id'> Uplay UserName* </div> 
                            <input required value={this.state.uplay} onChange={(e) => this.handleState('uplay', e.target.value)} className='username-input' /> 
                        </div>
                        <button disabled={this.state.username && this.state.email && this.state.password && this.state.uplay !== '' ? false : true }
                        className='confirm-button' onClick={() => this.register()}> Signup 
                        </button>
                    </div>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ registerUser, login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
