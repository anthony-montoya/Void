import React from 'react'
import { Context } from '../../ContextAPI'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { logOutUser } from '../../ducks/reducer'

class Logout extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => {
          if (context.state.isLoggedIn) {
            context.logOutUser()
            return <Redirect to="/login" />
          } else return <Redirect to="/login" />
        }}
      </Context.Consumer>
    )
  }
}

export default Logout
