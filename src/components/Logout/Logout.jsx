import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { logOutUser } from '../../ducks/reducer'

class Logout extends React.Component {
    componentDidMount() {
        console.log('hit')
        localStorage.setItem('auth_token', null)
        this.props.logOutUser()
    }
    render() {
        console.log(this.props.loggedInStatus)
        if (this.props.loggedInStatus) {
            return (
                <h1>Loggin you out...</h1>
            )
        } else {
            return (
                <Redirect to='/login' />
            )
        }
    }
}

export default connect((state) => { return { loggedInStatus: state.loggedInStatus } }, { logOutUser })(Logout)