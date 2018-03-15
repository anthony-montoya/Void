import React from 'react'
import { connect } from 'react-redux'
import { HeaderContainer, NavContainer, NavOptions } from './HeaderStyles'
import { LogoContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'

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
			],
			loggedInLinks: [],
			loggedInPages: []
		}
	}

	componentDidMount() {
		this.setHeader(this.props)
	}

	componentWillReceiveProps(nextProps) {
		this.setHeader(nextProps)
	}

	setHeader = (props) => {
		let links = this.state.headerLinks
		let pages = this.state.headerPages

		if (false) {
			this.setState({
				loggedInLinks: [
					'/',
					'/about_us',
					`/my-team/${props.userData.team_id}`,
					`/my-profile/${props.userData.profile_id}`,
					'/logout'
				],
				loggedInPages: [
					'HOME',
					'ABOUT US',
					'MY TEAM',
					'MY PROFILE',
					'LOGOUT'
				]
			})
			links = this.state.loggedInLinks
			pages = this.state.loggedInPages
		}
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
		let links = this.state.loggedInLinks.length ? this.state.loggedInLinks : this.state.headerLinks
		let pages = this.state.loggedInPages.length ? this.state.loggedInPages : this.state.headerPages

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
		console.log(this.props)
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

export default connect(mapStateToProps)(Header)
