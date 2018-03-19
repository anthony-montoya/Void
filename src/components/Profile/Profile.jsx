import React, { Component } from 'react'
import { PageContainer } from '../../GlobalStyles'
import ProfileHeader from './ProfileHeader'
import ProfileRanks from './PofileRanks'
import ProfileMatches from './ProfileMatches'
import ProfileTournaments from './ProfileTournaments'

class Profile extends Component {
  componentDidMount() {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <PageContainer>
        <ProfileHeader />

        <ProfileRanks />

        <ProfileMatches />

        <ProfileTournaments />
      </PageContainer>
    )
  }
}

export default Profile
