import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { logOutUser } from '../../ducks/reducer'

class Logout extends React.Component {
    componentDidMount() {
        this.props.logOutUser()
    }
    render() {
        if(!this.props.loggedInStatus)
        return(
            <Redirect to='/login' />
        )
        else
        return (
            <h1>Loggin you out...</h1>
        )
    }
}

export default connect((state) => { return { loggedInStatus: state.loggedInStatus } }, { logOutUser })(Logout)