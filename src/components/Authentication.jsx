import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logInUser, logOutUser } from '.././ducks/reducer'
import Login from './Login/Login'
import PageNotFound from './PageNotFound/PageNotFound'
import axios from 'axios'
import styled from 'styled-components'

let AuthenticatingContainer = styled.div `
	width: 100vw;
	height: 100vh;
	background-color: #383838;
`

export function Authentication(Component) {
	class Authenticate extends Component {
		constructor() {
			super()
			this.state = {
				AuthenticateJSX: <AuthenticatingContainer />
			}
		}

		componentWillMount() {
			if (localStorage.getItem('auth_token')) {
				axios.get(`http://localhost:4000/authenticateAuthToken/${localStorage.getItem('auth_token')}`).then(response => {
					if (response.data.error) {
						this.setState({
							AuthenticateJSX: <Redirect to='/login' />
						})
						this.props.logOutUser()
						alert('You must be signed in!')
					} else if (response.data.userData) {
						this.props.logInUser(response.data.userData)
					}
				})
			}
		}

		render() {
			if (this.props.loggedInStatus) {
				return <Component {...this.props} />
			} else if (!this.props.loggedInStatus) {
				return this.state.AuthenticateJSX
			} else return <Redirect to='/' />
		}
	}
	function mapStateToProps(state) {
		return {
			loggedInStatus: state.loggedInStatus
		}
	}

	return connect(mapStateToProps, { logInUser, logOutUser })(Authenticate)
}
