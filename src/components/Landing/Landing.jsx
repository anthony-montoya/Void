import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
	PageContainer,
	HeroContainer,
	HeroButtonsContainer,
	HeroButton,
	WhatIsVoidBattlesContainer,
	SectionHeader,
	Paragraph,
	DescriptionContainer,
	InfoContainer,
	SignUpButton
} from './LandingStyles'
import { LogoContainer, SubHeader } from '../../GlobalStyles'

import EqualSign from '../../resources/equal-sign.png'
import Chat from '../../resources/chat.png'
import Feedback from '../../resources/feedback.png'
import Cup from '../../resources/cup.png'
import LevelUp from '../../resources/level-up.png'

let Landing = () => {
	return (
		<PageContainer>
			<HeroContainer>
				<LogoContainer fromLanding>
					<h1>VOID_</h1>
					<h2>BATTLES</h2>
				</LogoContainer>
				<h2
					style={{
						color: 'white',
						padding: '20px 0 50px 0',
						letterSpacing: '1.4px',
						fontWeight: 'lighter'
					}}>
					fair competitive e-sports
				</h2>

				<HeroButtonsContainer>
					<HeroButton>REGISTER</HeroButton>
					-
					<HeroButton>FIND A TEAM</HeroButton>
				</HeroButtonsContainer>
			</HeroContainer>

			<WhatIsVoidBattlesContainer>
				<SectionHeader>
					What is <span>VOID_</span>BATTLES?
				</SectionHeader>
				<Paragraph width="600px">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat
					leo quis lorem blandit faucibus. Aliquam erat volutpat. Suspendisse
					tincidunt, ante ut elementum laoreet, est nisl malesuada urna, quis
					vulputate augue lorem vehicula arcu. Nullam lacinia pellentesque ex,
					sit amet cursus ipsum mattis nec. Donec in orci vel arcu semper
					interdum.
				</Paragraph>

				<DescriptionContainer>
					<InfoContainer>
						<img src={EqualSign} alt="" />
						<SubHeader primary>FAIR GAME</SubHeader>
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
						</Paragraph>
					</InfoContainer>

					<InfoContainer>
						<img src={Chat} alt="" />
						<SubHeader primary>ADMIN SUPPORT</SubHeader>
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
						</Paragraph>
					</InfoContainer>

					<InfoContainer>
						<img src={Feedback} alt="" />
						<SubHeader primary>PLAYER FEEDBACK</SubHeader>
						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
						</Paragraph>
					</InfoContainer>
				</DescriptionContainer>
			</WhatIsVoidBattlesContainer>

			<WhatIsVoidBattlesContainer secondary>
				<SubHeader secondary>FIND TEAMS AND PLAYERS EASILY</SubHeader>
				<Paragraph secondary width={'100%'}>
					Nunc volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
				</Paragraph>

				<DescriptionContainer width="40%" margin={'60px'}>
					<InfoContainer>
						<img src={Cup} alt="" />
						<SubHeader primary>PLAY IN TOURNAMENTS</SubHeader>
					</InfoContainer>

					<InfoContainer>
						<img src={LevelUp} alt="" />
						<SubHeader primary>RANK UP YOUR TEAM</SubHeader>
					</InfoContainer>
				</DescriptionContainer>
			</WhatIsVoidBattlesContainer>

			<WhatIsVoidBattlesContainer>
				<SectionHeader>READY TO OWN THE BATTLEFIELD?</SectionHeader>
				<SignUpButton>REGISTER</SignUpButton>
			</WhatIsVoidBattlesContainer>
		</PageContainer>
	)
}

export default Landing
