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
				'/find-teams',
				'/find-players',
				'/register',
				'/login'
			],
			headerPages: [
				'HOME',
				'FIND TEAMS',
				'FIND PLAYERS',
				'REGISTER',
				'LOGIN'
			]
		}
	}

	componentDidMount() {
		console.log(this.props)
		this.setHeader(this.props)
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		this.setHeader(nextProps)
	}

	setHeader = (props) => {
		console.log(props)
		if (props.loggedInStatus) {
			let updatedHeaderLinks = { ...this.state.headerLinks }
			let updatedHeaderPages = { ...this.state.headerPages }

			updatedHeaderLinks[4] = '/logout'
			updatedHeaderPages[4] = 'LOGOUT'
			this.setState({
				headerLinks: updatedHeaderLinks,
				headerPages: updatedHeaderPages
			})
		}
		for (let i = 0; i <= this.state.headerLinks.length; i++) {
			if (window.location.pathname === this.state.headerLinks[i]) this.alterOptions(i)
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
		for (let i = 0; i <= 5; i++) {
			headerOptions.push(
				<Link to={this.state.headerLinks[i]} style={{ height: '100%' }} key={i}>
					<NavOptions
						selected={this.state.selected[i]}
						onClick={() => this.alterOptions(i)}>
						{this.state.headerPages[i]}
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
	return { loggedInStatus: state.loggedInStatus }
}

export default connect(mapStateToProps)(Header)
