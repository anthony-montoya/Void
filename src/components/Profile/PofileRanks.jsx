import React from 'react'

import {
	RankContainer,
	RankContent,
	TeamRepContainer,
  ViewRatingsButton,
  TeamRepContent
} from './ProfileStyles'

class ProfileRanks extends React.Component {
	render() {
		return (
			<RankContainer>
				<RankContent>
					<h1>PLAYER RANK</h1>
					<section>
						<img src="https://siegrs.gg/images/rank_badges/rank20.svg" alt="" />
					</section>
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

export default ProfileRanks
