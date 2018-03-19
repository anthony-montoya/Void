import React, { Component } from 'react'
import { PageContainer } from '../../GlobalStyles'
import ProfileHeader from './ProfileHeader'
import ProfileRanks from './PofileRanks'

class Profile extends Component {
  componentDidMount() {
    console.log(this.props.match.params)
  }
  render() {
    return (
      <PageContainer>
        <ProfileHeader />

        <ProfileRanks />
      </PageContainer>
    )
  }
}

export default Profile
