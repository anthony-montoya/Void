import React from 'react'
import { connect } from 'react-redux'
import { HeaderContainer, NavContainer, NavOptions } from './HeaderStyles'
import { LogoContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'
import { logInUser, logOutUser } from '../../ducks/reducer'
import axios from 'axios'

class Header extends React.Component {
	constructor() {
		super()

		this.state = {
			selected: [true, false, false, false, false],
			headerLinks: [
				'/',
				'/about_us',
				'/faq',
				'/register',
				'/login'
			],
			headerPages: [
				'HOME',
				'ABOUT US',
				'FAQ',
				'REGISTER',
				'LOGIN'
			]
		}
	}

	componentDidMount() {
		this.checkAuthToken()
	}

	componentWillReceiveProps(nextProps) {
		this.checkAuthToken()
	}

	checkAuthToken = () => {
		if (localStorage.getItem('auth_token')) {
			axios.get(`http://localhost:4000/authenticateAuthToken/${localStorage.getItem('auth_token')}`).then(response => {
				if (response.data.userData) {
					this.setState({
						headerLinks: [
							'/',
							'/find-players',
							`/vb-team/${response.data.userData.uplay}`,
							`/vb-profile/${response.data.userData.vb_username}`,
							'/logout'
						],
						headerPages: [
							'HOME',
							'FIND PLAYERS',
							'MY TEAM',
							'MY PROFILE',
							'LOGOUT'
						]
					})
				} else if (response.data.error) {
					this.setState({
						headerLinks: [
							'/',
							'/about_us',
							'/faq',
							'/register',
							'/login'
						],
						headerPages: [
							'HOME',
							'ABOUT US',
							'FAQ',
							'REGISTER',
							'LOGIN'
						]
					})
				}
				this.setHeader()
			})
		}
	}

	setHeader = () => {
		let links = this.state.headerLinks
		let pages = this.state.headerPages

		for (let i = 0; i <= links.length; i++) {
			if (window.location.pathname === links[i]) this.alterOptions(i)
		}
	}

	alterOptions = index => {
		const tempArray = this.state.selected.slice(0)
		for (let i = 0; i < tempArray.length; i++) {
			if (index === i) {
				tempArray[i] = true
			} else {
				tempArray[i] = false
			}
		}
		this.setState({
			selected: tempArray
		})
	}

	renderTabs = () => {
		const headerOptions = []
		let links = this.state.headerLinks
		let pages = this.state.headerPages

		for (let i = 0; i <= 5; i++) {
			headerOptions.push(
				<Link to={links[i]} style={{ height: '100%' }} key={i}>
					<NavOptions
						selected={this.state.selected[i]}
						onClick={() => this.alterOptions(i)}>
						{pages[i]}
					</NavOptions>
				</Link>
			)
			if (headerOptions.length === 5) {
				return headerOptions.map(option => {
					return option
				})
			}
		}
	}

	render() {
		return (
			<HeaderContainer>
				<LogoContainer>
					<h1>VOID_</h1>
					<h2>BATTLES</h2>
				</LogoContainer>

				<NavContainer>{this.renderTabs()}</NavContainer>
			</HeaderContainer>
		)
	}
}

function mapStateToProps(state) {
	return { loggedInStatus: state.loggedInStatus, userData: state.userData }
}

export default connect(mapStateToProps, { logInUser, logOutUser })(Header)
