import React, { Component } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

class Login extends Component {
    render() {
    if (this.props.login){
        return (
            <div className='login-wrapper'>
                <div className='login-box'>
                    <div className='sign-up'> LOGIN </div>
                    <div className='username'><div className='input-id'> UserName* </div>   <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Password* </div>   <input className='username-input' type='text' /> </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className='login-wrapper'>
                <div className='login-box'>
                    <div className='sign-up'> SIGN UP </div>
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
    return bindActionCreators({ }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(mapStateToProps, mapDispatchToProps)(Instructions);