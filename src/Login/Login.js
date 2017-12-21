import React, { Component } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { toggleLogin, toggleSignup } from '.././ducks/reducer'

class Login extends Component {
    render() {
        console.log(this.props.login)
    if (this.props.login){
        return (
            <div className='login-wrapper'>
                <div className='login-box'>
                    <div className='sign-up'> <span>LOGIN </span>  /  <span onClick={this.props.toggleLogin}> SIGNUP </span> </div>
                    <div className='username'><div className='input-id'> UserName* </div>   <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Password* </div>   <input className='username-input' type='text' /> </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className='login-wrapper'>
                <div className='login-box'>
                    <div className='sign-up'> <span onClick={this.props.toggleSignup}> LOGIN </span>   /   <span> SIGN UP </span> </div>
                    <div className='username'><div className='input-id'> UserName* </div>   <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Email* </div>   <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Password* </div> <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Uplay UserName* </div> <input className='username-input' type='text' /> </div>
                </div>
            </div>
        )
    }
    }
}

function mapStateToProps(state){
    return {
        login: state.login
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ toggleLogin, toggleSignup }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(mapStateToProps, mapDispatchToProps)(Instructions);