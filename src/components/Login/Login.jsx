import React, { Component } from 'react'
import LogoIcon from '../../resources/VBLogov2.png'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logInUser } from '../.././ducks/reducer'
import {
	LoginContainer,
	Logo,
	Contents,
	InputContainer,
	InputTitle,
	InputError,
	Input,
	ButtonContainer
} from './LoginStyles'
import {
	PageContainer,
	Header,
	PurpleText,
	HeroButton
} from '../../GlobalStyles'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			vb_username: 'BrettlyClawfield',
			password: 'test',
			usernameError: '',
			passwordError: '',
			loginError: ''
		}
	}

	getUserLoginInput(property, value) {
		this.setState({
			[property]: value
		})
	}

	loginAndClearState = () => {
		axios.get(`http://localhost:4000/login_user/${this.state.vb_username}/${this.state.password}`).then(response => {
			if (response.data.token) {
				localStorage.setItem('auth_token', response.data.token)
				this.props.logInUser(response.data.userData)
			} else if (response.data.error) {
				this.setState({ loginError: response.data.error })
			}
		})

		// this.setState({
		// 	vb_username: '',
		// 	password: '',
		// 	usernameError: '',
		// 	passwordError: '',
		// 	loginError: ''
		// })
	}

	render() {
		if (this.props.loggedInStatus) {
			return <Redirect to={`/vb-profile/${this.props.userData.vb_username}`} />
		} else
			return (
				<PageContainer>
					<LoginContainer>
						<Logo src={LogoIcon} alt="" />

						<Contents>
							<Header>
								<PurpleText>COMPETITION</PurpleText> AWAITS
							</Header>

							<InputContainer>
								<InputTitle>
									<PurpleText>VOID_</PurpleText>BATTLES USERNAME
								</InputTitle>
								<Input
									value={this.state.vb_username}
									onChange={e =>
										this.getUserLoginInput('vb_username', e.target.value)
									}
								/>
								<InputError>{this.state.usernameError}</InputError>
							</InputContainer>

							<InputContainer>
								<InputTitle>PASSWORD</InputTitle>
								<Input
									value={this.state.password}
									type="password"
									onChange={e =>
										this.getUserLoginInput('password', e.target.value)
									}
								/>
								<InputError>{this.state.passwordError}</InputError>
							</InputContainer>

							<ButtonContainer>
								<HeroButton
									width="60%"
									onClick={this.loginAndClearState}>
									LOGIN
								</HeroButton>
								<InputError>{this.state.loginError}</InputError>
							</ButtonContainer>
						</Contents>
					</LoginContainer>
				</PageContainer>
			)
	}
}

function mapStateToProps(state) {
	return { loggedInStatus: state.loggedInStatus, userData: state.userData }
}

export default connect(mapStateToProps, { logInUser })(Login)
