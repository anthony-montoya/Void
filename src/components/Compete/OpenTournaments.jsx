import React from 'react'

class OpenTournaments extends React.Component {
  componentDidMount() {
    this.props.updateButtons('tournament')
  }

  render() {
    return <div>OPEN TOURNAMENTS</div>
  }
}

export default OpenTournaments
