import React from 'react'
import ScoreIcon from '../../resources/scoreboard.png'
import ClockIcon from '../../resources/clock.png'
import TrophyIcon from '../../resources/trophy.png'
import {
	MatchesContainer,
	ContainerTitle,
	MatchesContent,
	MatchContainer,
	TeamsContainer,
	TeamContainer,
	ScoreContainer,
	ScoreStamps,
	TimeContainer,
	TimeContent,
	TimeStamps,
	GameStatusContainer
} from '../Profile/ProfileStyles'

class TeamMatches extends React.Component {
	render() {
		return (
			<MatchesContainer>
				<ContainerTitle>SCRIMMAGES</ContainerTitle>

				<MatchesContent>
					<MatchContainer>
						<TeamsContainer>
							<h1>#2</h1>
							<TeamContainer>
								<img
									src="https://cdn-eslgaming.akamaized.net/play/eslgfx/gfx/logos/teams/12125000/12125408_medium.jpg"
									alt=""
								/>
								<h1>StaticVoid</h1>
							</TeamContainer>
							<h2>VS</h2>
							<TeamContainer>
								<img
									src="https://cdn-eslgaming.akamaized.net/play/eslgfx/gfx/logos/teams/12099000/12099610_medium.jpg"
									alt=""
								/>
								<h1>Cyclone E-Sports</h1>
							</TeamContainer>
						</TeamsContainer>

						<ScoreContainer>
							<img src={ScoreIcon} alt="" />
							<ScoreStamps color="#7ED321">5</ScoreStamps>&nbsp;-&nbsp;
							<ScoreStamps>3</ScoreStamps>
						</ScoreContainer>

						<TimeContainer>
							<img src={ClockIcon} alt="" />
							<TimeContent>
								<TimeStamps color="#A031FF" bold>
									01/12/32
								</TimeStamps>
								<TimeStamps>3:30 PM</TimeStamps>
								<TimeStamps color="rgba(255, 255, 255, 0.65)">
									Last Sunday
								</TimeStamps>
							</TimeContent>
						</TimeContainer>

						<GameStatusContainer gameStatus="win">
							<img src={TrophyIcon} alt="" />
							<h1>WIN</h1>
						</GameStatusContainer>
					</MatchContainer>

                    <MatchContainer>
						<TeamsContainer>
							<h1>#1</h1>
							<TeamContainer>
								<img
									src="https://cdn-eslgaming.akamaized.net/play/eslgfx/gfx/logos/teams/12045000/12045150_medium.jpg"
									alt=""
								/>
								<h1>Havoc eSports</h1>
							</TeamContainer>
							<h2>VS</h2>
							<TeamContainer>
								<img
									src="https://cdn-eslgaming.akamaized.net/play/eslgfx/gfx/logos/teams/12125000/12125408_medium.jpg"
									alt=""
								/>
								<h1>StaticVoid</h1>
							</TeamContainer>
						</TeamsContainer>

						<ScoreContainer>
							<img src={ScoreIcon} alt="" />
							<ScoreStamps>5</ScoreStamps>&nbsp;-&nbsp;
							<ScoreStamps color='#C20018'>3</ScoreStamps>
						</ScoreContainer>

						<TimeContainer>
							<img src={ClockIcon} alt="" />
							<TimeContent>
								<TimeStamps color="#A031FF" bold>
									01/12/32
								</TimeStamps>
								<TimeStamps>3:30 PM</TimeStamps>
								<TimeStamps color="rgba(255, 255, 255, 0.65)">
									Last Sunday
								</TimeStamps>
							</TimeContent>
						</TimeContainer>

						<GameStatusContainer gameStatus="loss">
							<img src={TrophyIcon} alt="" />
							<h1>LOSS</h1>
						</GameStatusContainer>
					</MatchContainer>
				</MatchesContent>
			</MatchesContainer>
		)
	}
}

export default TeamMatches
