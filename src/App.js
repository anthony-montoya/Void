import React, { Component } from 'react';
import './App.css';
import router from './router.js'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import styled from 'styled-components'

let RouterContainer = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 80px;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RouterContainer>
          {router}
        </RouterContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
