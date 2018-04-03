import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Context } from '../ContextAPI'
import { logInUser, logOutUser } from '.././ducks/reducer'
import axios from 'axios'
import styled from 'styled-components'

let AuthenticatingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #383838;
`

export function Authentication(Component) {
  class ContextAuthenticate extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {context => (
            <Authenticate
              context={context}
              {...this.props}
              component={Component}
            />
          )}
        </Context.Consumer>
      )
    }
  }
  return ContextAuthenticate
}

class Authenticate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      AuthenticateJSX: <AuthenticatingContainer />
    }
  }

  componentWillMount() {
    let context = this.props.context
    if (localStorage.getItem('auth_token')) {
      axios
        .get(
          `http://localhost:4000/authenticateAuthToken/${localStorage.getItem(
            'auth_token'
          )}`
        )
        .then(response => {
          if (response.data.error) {
            this.logOutUser(context)
          } else {
            context.logInUser(response.data.userData)
          }
        })
    } else this.logOutUser(context)
  }

  logOutUser = context => {
    context.logOutUser()
    alert('You must be signed in!')
    this.setState({
      AuthenticateJSX: <Redirect to="/login" />
    })
  }

  render() {
    return (
      <Context.Consumer>
        {context => {
          if (context.state.isLoggedIn === true) {
            let Component = this.props.component
            return <Component {...this.props} />
          } else if (context.state.isLoggedIn === false) {
            return this.state.AuthenticateJSX
          } else return <Redirect to="/" />
        }}
      </Context.Consumer>
    )
  }
}
