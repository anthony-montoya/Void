import React, { Component } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { toggleLogin, toggleSignup, registerUser } from '.././ducks/reducer'

class Login extends Component {
    constructor(){
        super();
    this.state={
        userinfo : {
            username: '',
            email: '',
            password: '',
            uplay: ''
         }
    }
}

    userNameSignup(e){
        let username = {...this.state.userinfo}
        username.username = e.target.value
            this.setState({
                userinfo : username
            })
            
            console.log(this.state.userinfo)
    }

    emailSignup(e){
        let email = {...this.state.userinfo}
        email.email = e.target.value
            this.setState({
                userinfo : email
            })
            
            console.log(this.state.userinfo)
    }

    passwordSignup(e){
        let password = {...this.state.userinfo}
        password.password = e.target.value
            this.setState({
                userinfo : password
            })
            
            console.log(this.state.userinfo)
    }

    uplaySignup(e){
        let uplay = {...this.state.userinfo}
        uplay.uplay = e.target.value
            this.setState({
                userinfo : uplay
            })
            
            console.log(this.state.userinfo)
    }

    render() {
    if (this.props.login){
        return (
            <div className='login-wrapper'>
                <div className='login-box'>
                    <div className='sign-up'> <span className='selected-option'>LOGIN </span>  /  <span className='login-options' onClick={this.props.toggleLogin}> SIGNUP </span> </div>
                    <div className='username'><div className='input-id'> UserName* </div>   <input className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Password* </div>   <input className='username-input' type='text' /> </div>
                </div>
            </div>
        );
    } else {
        return(
            <div className='login-wrapper'>
                <div className='login-box'>
                    <div className='sign-up'> <span className='login-options' onClick={this.props.toggleSignup}> LOGIN </span>   /   <span className='selected-option'> SIGNUP </span> </div>
                    <div className='username'><div className='input-id'> UserName* </div>   <input onChange={(e) => this.userNameSignup(e)} className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Email* </div>   <input onChange={(e) => this.emailSignup(e)} className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Password* </div> <input onChange={(e) => this.passwordSignup(e)} className='username-input' type='text' /> </div>
                    <div className='username'><div className='input-id'> Uplay UserName* </div> <input onChange={(e) => this.uplaySignup(e)} className='username-input' type='text' /> </div>
                    <button className='confirm-button' onClick={() => registerUser(this.state.userinfo)}> Signup </button>
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
    return bindActionCreators({ toggleLogin, toggleSignup, registerUser }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default connect(mapStateToProps, mapDispatchToProps)(Instructions);