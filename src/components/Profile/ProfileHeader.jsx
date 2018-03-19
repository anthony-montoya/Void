import React from 'react'
import { Link } from 'react-router-dom'
import UplayLogo from '../../resources/uplay-logo.png'
import AddFriendIcon from '../../resources/GreenAddFriend.png'
import MessageIcon from '../../resources/BlueMessage.png'
import InviteIcon from '../../resources/PurpleInvite.png'
import {
	ProfileBackgroundContainer,
	ProfileContentsContainer,
	ProfilePicture,
	ProfileContent,
	UsernameContainer,
	ProfileButtonsContainer,
	ProfileButton,
	TeamIconContainer,
	TeamIcon
} from './ProfileStyles'

class ProfileHeader extends React.Component {
	render() {
		return (
			<ProfileBackgroundContainer>
				<ProfileContentsContainer>
					<div style={{ display: 'flex' }}>
						<ProfilePicture
							src={
								'https://yt3.ggpht.com/a-/AJLlDp1LiubffewpzsMU9HycThcMirYgcoXIglT3hw=s900-mo-c-c0xffffffff-rj-k-no'
							}
							alt=""
						/>
						<ProfileContent>
							<UsernameContainer>
								<img
									src={
										'http://flaticons.net/gd/makefg.php?i=icons/Application/User-Profile.png&r=255&g=255&b=255'
									}
									alt=""
								/>
								<h1>BRETTLY CLAWFIELD</h1>
							</UsernameContainer>

							<UsernameContainer>
								<img src={UplayLogo} alt="" />
								<h2>BRETTLYC</h2>
							</UsernameContainer>

							<ProfileButtonsContainer>
								<ProfileButton color="#7ED321">
									<img src={AddFriendIcon} alt="" />
									<h1>ADD FRIEND</h1>
								</ProfileButton>

								<ProfileButton color="#4A90E2">
									<img src={MessageIcon} alt="" />
									<h1>MESSAGE</h1>
								</ProfileButton>

								<ProfileButton color="#A031FF">
									<img src={InviteIcon} alt="" />
									<h1>TEAM INVITE</h1>
								</ProfileButton>
							</ProfileButtonsContainer>
						</ProfileContent>
					</div>
					<Link to="/vb-teams/BrettlyC">
						<TeamIconContainer>
							<TeamIcon
								src={
									'https://cdn-eslgaming.akamaized.net/play/eslgfx/gfx/logos/teams/12125000/12125408_medium.jpg'
								}
								alt=""
							/>
							<h1>StaticVoid</h1>
						</TeamIconContainer>
					</Link>
				</ProfileContentsContainer>
			</ProfileBackgroundContainer>
		)
	}
}

export default ProfileHeader
