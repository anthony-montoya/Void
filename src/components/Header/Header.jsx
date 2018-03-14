import React from 'react'
import { HeaderContainer, NavContainer, NavOptions } from './HeaderStyles'
import { LogoContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
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
            ]
		}
	}

	componentDidMount() {
		this.setHeader()
	}

	componentWillReceiveProps() {
		this.setHeader()
	}

	setHeader = () => {
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
		const headerPages = [
			'HOME',
			'FIND TEAMS',
			'FIND PLAYERS',
			'REGISTER',
			'LOGIN'
		]
		for (let i = 0; i <= 5; i++) {
			headerOptions.push(
				<Link to={this.state.headerLinks[i]} style={{ height: '100%' }} key={i}>
					<NavOptions
						selected={this.state.selected[i]}
						onClick={() => this.alterOptions(i)}>
						{headerPages[i]}
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
