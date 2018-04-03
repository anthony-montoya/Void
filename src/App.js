import React, { Component } from 'react'
import './App.css'
import MyProvider from './ContextAPI'
import router from './router.js'
import ContextHeader from './components/Header/Header'
import Footer from './components/Footer/Footer'
import styled from 'styled-components'

let RouterContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 80px;
`

export default class App extends Component {
  render() {
    return (
      <div>
        <MyProvider>
          <ContextHeader />
          <RouterContainer onChange={window.scrollTo(0, 0)}>
            {router}
          </RouterContainer>
          <Footer />
        </MyProvider>
      </div>
    )
  }
}
