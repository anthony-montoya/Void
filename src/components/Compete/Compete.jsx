import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Context } from '../../ContextAPI'
import {
  CompeteTab,
  ComponentContainer,
  ButtonsContainer
} from './CompeteStyles'
import OpenScrims from './OpenScrims'
import OpenTournaments from './OpenTournaments'

class Compete extends React.Component {
  constructor() {
    super()

    this.state = {
      scrimSelected: true,
      tournamentSelected: false
    }
  }
  componentDidMount() {
    this.props.context.setHeaderTab(0)
  }

  updateButtons = button => {
    if (button === 'tournament' && this.state.tournamentSelected === false)
      this.setState({
        scrimSelected: false,
        tournamentSelected: true
      })
    else if (button === 'scrim' && this.state.scrimSelected === false)
      this.setState({
        scrimSelected: true,
        tournamentSelected: false
      })
  }

  render() {
    return (
      <ComponentContainer>
        <ButtonsContainer>
          <Link to="/compete/open-scrimmages">
            <CompeteTab selected={this.state.scrimSelected}>
              SCRIMMAGES
            </CompeteTab>
          </Link>

          <Link to="/compete/open-tournaments">
            <CompeteTab selected={this.state.tournamentSelected}>
              TOURNAMENTS
            </CompeteTab>
          </Link>
        </ButtonsContainer>

        <Switch>
          <Route
            path="/compete/open-scrimmages"
            component={() => <OpenScrims updateButtons={this.updateButtons} />}
          />
          <Route
            path="/compete/open-tournaments"
            component={() => (
              <OpenTournaments updateButtons={this.updateButtons} />
            )}
            updateButtons={this.updateButtons}
          />
        </Switch>
      </ComponentContainer>
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
