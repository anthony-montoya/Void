import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Landing.css'
import { PageContainer, HeroContainer, HeroButtonsContainer, HeroButton } from './LandingStyles'
import { LogoContainer } from '../Header/HeaderStyles'

let Landing = () => {
    return (
        <PageContainer>
            <HeroContainer>
                <LogoContainer fromLanding>
                    <h1>VOID_</h1><h2>BATTLES</h2>
                </LogoContainer>
                <h2 style={{ color: 'white', padding: '20px 0 50px 0', letterSpacing: '2px', fontWeight: 'lighter' }}>fair competitive e-sports</h2>

                <HeroButtonsContainer>
                    <HeroButton>REGISTER</HeroButton>
                    <HeroButton>FIND A TEAM</HeroButton>
                </HeroButtonsContainer>
            </HeroContainer>
        </PageContainer>
    )
}

export default Landing;