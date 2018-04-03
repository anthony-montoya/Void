import React from 'react'
import { Context } from '../../ContextAPI'
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

  componentDidMount() {
    this.props.context.setHeaderTab(0)
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
          <h1 onClick={() => this.updateState('scrimmage')}>SCRIMMAGES</h1>
          <h1 onClick={() => this.updateState('tournament')}>TOURNAMENTS</h1>
        </header>
        {this.state.showScrimmages && <OpenScrims />}
        {this.state.showTournaments && <OpenTournaments />}
      </div>
    )
  }
}

class ContextCompete extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => <Compete context={context} {...this.props} />}
      </Context.Consumer>
    )
  }
}

export default ContextCompete
