import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Landing.css'
import { PageContainer } from './LandingStyles'


class Landing extends Component {
    render() {
        return (
            <PageContainer>
                <div className='Left-side-nav-bar'>
                    <div className='logo-wrapper'>   
                        <div className='logo'> <span className='void-white'>VOID-</span><span className='void-red'>BATTLES</span> </div>
                    </div> 
                    <div className='signup-login-wrapper'>   
                    <Link to='/login'> <div className='nav-links'> Login/Sign-Up </div> </Link>
                </div>
                    <Link to='/profile'> <div className='nav-links'> Profile </div> </Link>
                    <div className='nav-links'> Dashboard </div>
                </div>
                <div className='landing-page-content' >
                <div className='landing-ad' >
                        <h1 className='section-heading'> Upload Clips </h1>
                        <iframe className='i-frame-ad' src="https://www.youtube.com/embed/6G-J9Jk0-bQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
                </div>
                
                </div>
            </PageContainer>
        );
    }
}

export default Landing;