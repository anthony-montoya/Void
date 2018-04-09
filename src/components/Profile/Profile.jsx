import React, { Component } from 'react'
import { PageContainer } from '../../GlobalStyles'
import ProfileHeader from './ProfileHeader'
import ProfileRanks from './PofileRanks'
import ProfileMatches from './ProfileMatches'
import ProfileTournaments from './ProfileTournaments'

class Profile extends Component {
  componentDidMount() {
    this.props.context.setHeaderTab(3)
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
