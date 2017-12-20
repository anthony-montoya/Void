import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Landing.css'


class Landing extends Component {
    render() {
        return (
            <div className='landing-page-main-wrapper'>
                <div className='Left-side-nav-bar'>
                    <div className='logo-wrapper'>   
                        <div className='logo'> <span className='void-white'>VOID-</span><span className='void-red'>BATTLES</span> </div>
                    </div> 
                    <div className='signup-login-wrapper'>   
                    <Link to='/login'> <div className='nav-links'> Login/Sign-Up </div> </Link>
                    </div>
                    <div className='nav-links'> Profile </div>
                    <div className='nav-links'> Dashboard </div>
                </div>
                <div className='landing-page-content' >
                    <div className='landing-ad' > </div>

                
                </div>
            </div>
        );
    }
}

export default Landing;