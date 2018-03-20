import React from 'react'
import OpenScrims from './OpenScrims'
import OpenTournaments from './OpenTournaments'

class Compete extends React.Component {
	constructor() {
		super()

		this.state = {
            showScrimmages: true,
            showTournaments: false
		}
	}

	updateState(state) {
		if (state === 'scrimmage')
			this.setState({
				showScrimmages: true,
				showTournaments: false
			})
		else
			this.setState({
				showScrimmages: false,
				showTournaments: true
			})
	}

	render() {
		return (
			<div>
				<header>
					<h1 onClick={_ => this.updateState('scrimmage')}>SCRIMMAGES</h1>
					<h1 onClick={_ => this.updateState('tournament')}>TOURNAMENTS</h1>
				</header>
				{this.state.showScrimmages && <OpenScrims />}
				{this.state.showTournaments && <OpenTournaments />}
			</div>
		)
	}
}

export default Compete
