import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { HeaderContainer, NavContainer, NavOptions } from './HeaderStyles'
import { LogoContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'
import { logInUser, logOutUser } from '../../ducks/reducer'

class Header extends React.Component {
	constructor() {
		super()

		this.state = {
			selected: [false, false, false, false, false],
			headerLinks: [
				'/',
				'/vb-teams',
				'/players',
				'/register',
				'/login'
			],
			headerPages: [
				'HOME',
				'TEAMS',
				'PLAYERS',
				'REGISTER',
				'LOGIN'
			]
		}
	}

	componentDidMount() {
		// this.checkAuthToken()
		this.setLinks(this.props)
	}

	componentWillReceiveProps(nextProps) {
		this.setLinks(nextProps)
	}

	// checkAuthToken = () => {
	// 	if(localStorage.getItem('auth_token')) {
	// 		axios.get('http://localhost:4000/authenticateAuthToken/' + localStorage.getItem('auth_token')).then(response => {
	// 			console.log(response.data)
	// 			if(response.data.userData) this.props.logInUser(response.data.userData)
	// 		})
	// 	}
	// }

	setLinks = (props) => {
		let headerLinks = [
			'/compete',
			'/find-players',
			`/vb-teams/${props.userData.uplay}`,
			`/vb-profile/${props.userData.vb_username}`,
			'/logout'
		]
		let headerPages = [
			'COMPETE',
			'FIND PLAYERS',
			'MY TEAM',
			'MY PROFILE',
			'LOGOUT'
		]
		if (props.loggedInStatus) {
			this.setState({
				headerLinks,
				headerPages
			}, this.setHeader(headerLinks, headerPages))
		} else {
			this.setState({
				headerLinks: [
					'/',
					'/vb-teams',
					'/players',
					'/register',
					'/login'
				],
				headerPages: [
					'HOME',
					'TEAMS',
					'PLAYERS',
					'REGISTER',
					'LOGIN'
				]
			}, this.setHeader(this.state.headerLinks, this.state.headerPages))
		}
	}

	setHeader = (links, pages) => {
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
