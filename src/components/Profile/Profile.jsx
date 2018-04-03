import React, { Component } from 'react'
import { Context } from '../../ContextAPI'
import { PageContainer } from '../../GlobalStyles'
import ProfileHeader from './ProfileHeader'
import ProfileRanks from './PofileRanks'
import ProfileMatches from './ProfileMatches'
import ProfileTournaments from './ProfileTournaments'

let stateContext = null
class Profile extends Component {
  componentDidMount() {
    console.log(this.props.match.params)
    stateContext.setHeaderTab(3)
  }
  render() {
    return (
      <Context.Consumer>
        {context => {
          stateContext = context
          return (
            <PageContainer>
              <ProfileHeader />

              <ProfileRanks />

              <ProfileMatches />

              <ProfileTournaments />
            </PageContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Profile
