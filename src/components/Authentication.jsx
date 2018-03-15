import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLoginStatus } from '.././ducks/reducer'
import Login from './Login/Login'
import PageNotFound from './PageNotFound/PageNotFound'
import axios from 'axios'

export function Authentication(Component) {
	class Authenticate extends Component {
		constructor() {
			super()
			this.state = {
				AuthenticateJSX: <PageNotFound />
			}
		}
		componentWillMount() {
			if (localStorage.getItem('authToken')) {
				axios.get(`http://localhost:4000/authenticateAuthToken/${localStorage.getItem('authToken')}`)
					.then(
						res => {
						if (res.data.err) {
							this.props.userLoginStatus(false)
							alert('You must be signed in!')
							this.setState({
								AuthenticateJSX: <Redirect to='/login' />
							})
						} else if (res.data.success) {
							this.props.userLoginStatus(true)
						}
					})
			}
		}

		render() {
			if (this.props.loggedInStatus) {
				return <Component {...this.props} />
			} else if (!this.props.loggedInStatus){
				return this.state.AuthenticateJSX
			} else return <Redirect to='/' />
		}
	}
	function mapStateToProps(state) {
		return {
			loggedInStatus: state.loggedInStatus
		}
	}

	function mapDispatchToProps(dispatch) {
		return bindActionCreators({ userLoginStatus }, dispatch)
	}

	return connect(mapStateToProps, mapDispatchToProps)(Authenticate)
}
