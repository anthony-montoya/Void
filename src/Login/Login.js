import React, { Component } from 'react';
import './Login.css'
class Login extends Component {
    render() {
        return (
            <div className='login-wrapper'>
                <div className='login-box'>
                    <div className='sign-up'> SIGN UP </div>
                    <div className='username'><div className='input-id'> UserName* </div>   <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Email* </div>   <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Password* </div> <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Uplay UserName* </div> <input className='username-input' type='text' /> </div>


                </div>
            </div>
        );
    }
}

export default Login;