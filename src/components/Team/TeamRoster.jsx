import React from 'react'
import { Link } from 'react-router-dom'
import { RosterContainer, RosterContent, PlayerContainer } from './TeamStyles'
import { ContainerTitle } from '../Profile/ProfileStyles'

class TeamRoster extends React.Component {
	render() {
		return (
			<RosterContainer>
				<ContainerTitle>ROSTER</ContainerTitle>

				<RosterContent>
					<Link to="/vb-profile/BrettlyClawfield">
						<PlayerContainer>
							<img
								src="https://yt3.ggpht.com/a-/AJLlDp1LiubffewpzsMU9HycThcMirYgcoXIglT3hw=s900-mo-c-c0xffffffff-rj-k-no"
								alt=""
							/>
							<h1>BrettlyC</h1>
						</PlayerContainer>
					</Link>

                    <Link to="/vb-profile/BrettlyClawfield">
						<PlayerContainer>
							<img
								src="https://image.shutterstock.com/display_pic_with_logo/2839468/484599637/stock-vector-grim-reaper-death-firing-m-assault-rifle-484599637.jpg"
								alt=""
							/>
							<h1>Grimm</h1>
						</PlayerContainer>
					</Link>

                    <Link to="/vb-profile/BrettlyClawfield">
						<PlayerContainer>
							<img
								src="https://i.pinimg.com/originals/f9/77/67/f97767b7a3294695cdf1f14b47f040d4.png"
								alt=""
							/>
							<h1>Chogen</h1>
						</PlayerContainer>
					</Link>

                    <Link to="/vb-profile/BrettlyClawfield">
						<PlayerContainer>
							<img
								src="https://png.pngtree.com/element_origin_min_pic/17/06/22/59e2e89ee3217665ec12406fd4730ad7.jpg"
								alt=""
							/>
							<h1>Jack--.</h1>
						</PlayerContainer>
					</Link>

                    <Link to="/vb-profile/BrettlyClawfield">
						<PlayerContainer>
							<img
								src="https://dyn0.media.forbiddenplanet.com/products/200305b.jpg.jpg"
								alt=""
							/>
							<h1>Jololio</h1>
						</PlayerContainer>
					</Link>
				</RosterContent>
			</RosterContainer>
		)
	}
}

export default TeamRoster
