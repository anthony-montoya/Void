import styled from 'styled-components'
import Bank from '../resources/VB_Background.png'

export let PageContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: white;
`

export let HeroContainer = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${Bank}) -25px;
    background-size: 120%;
    width: 100%;
    height: 400px;

    h2 {
        font-weight: lighter;
        font-size: 40px;
    }
`

export let HeroButtonsContainer = styled.section `
    display: flex;
    justify-content: space-between;
    width: 400px;
`

export let HeroButton = styled.button `
    width: 160px;
    height: 40px;
    border: 2px solid #9c32f7;
    border-radius: 4px;
    background-color: rgba(0,0,0,0.3);
    color: white;
    font-size: 14px;
    font-weight: lighter;

`
