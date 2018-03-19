import React from 'react'
import { Link } from 'react-router-dom'
import {
	RankContainer,
	RankContent,
	TeamRepContainer,
  ViewRatingsButton,
  TeamRepContent
} from '../Profile/ProfileStyles'

class TeamRanks extends React.Component {
	render() {
		return (
			<RankContainer>
				<RankContent>
					<h1>TEAM LEADER</h1>
					<Link to='/vb-profile/BrettlyClawfield'>
					<section>
						<img src="https://yt3.ggpht.com/a-/AJLlDp1LiubffewpzsMU9HycThcMirYgcoXIglT3hw=s900-mo-c-c0xffffffff-rj-k-no" alt="" />
						<h1>BrettlyC</h1>
					</section>
					</Link>
				</RankContent>

				<RankContent>
					<h1>TEAM RANK</h1>
					<section>
						<img src="https://rbgboost.net/wp-content/uploads/2017/10/gold4.png" alt="" />
					</section>
				</RankContent>

				<TeamRepContainer>
					<h1>TEAM REPUTATION</h1>
					<TeamRepContent rep='90%'>
						<section>
							<h1>90%</h1>
							<div />
						</section>
						<ViewRatingsButton>VIEW RATINGS</ViewRatingsButton>
					</TeamRepContent>
				</TeamRepContainer>
			</RankContainer>
		)
	}
}

export default TeamRanks
