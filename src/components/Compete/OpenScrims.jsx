import React from 'react'
import {
  ScrimsContainer,
  Title,
  MatchesContainer,
  Match,
  ImageContainer,
  Icon,
  TeamRepContainer,
  ReputationMeter,
  MapContainer
} from './CompeteStyles'

class OpenScrims extends React.Component {
  componentDidMount() {
    this.props.updateButtons('scrim')
  }

  renderMatches() {
    return new Array(10).fill().map((match, index) => (
      <Match key={index}>
        <ImageContainer>
          <Icon
            src="https://cdn-eslgaming.akamaized.net/play/eslgfx/gfx/logos/teams/12125000/12125408_medium.jpg"
            alt=""
          />
          <h1>Team Name</h1>
        </ImageContainer>

        <Icon src="https://siegrs.gg/images/rank_badges/rank20.svg" alt="" />

        <TeamRepContainer>
          <ReputationMeter width={'90%'} />
          <h1>90%</h1>
        </TeamRepContainer>

        <Title small>US</Title>

        <MapContainer>
          <Title>HOUSE</Title>
        </MapContainer>
      </Match>
    ))
  }

  render() {
    return (
      <ScrimsContainer>
        <Title>OPEN SCRIMS</Title>
        <MatchesContainer>{this.renderMatches()}</MatchesContainer>
      </ScrimsContainer>
    )
  }
}

export default OpenScrims
