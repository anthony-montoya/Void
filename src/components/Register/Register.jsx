import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { logInUser } from '../../ducks/reducer'
import LogoIcon from '../../resources/VBLogov2.png'
import {
	RegisterContainer,
	Logo,
	Contents,
	InputContainer,
	InputTitle,
	InputError,
	Input,
	ButtonContainer
} from './RegisterStyles'
import {
	PageContainer,
	Header,
	PurpleText,
	HeroButton
} from '../../GlobalStyles'

class Register extends React.Component {
	constructor() {
		super()

		this.state = {
			vb_username: '',
			uplay: '',
			email: '',
			password: '',
			usernameError: '',
			passwordError: '',
			registerError: ''
		}
	}

	register() {
		let userInfo = {
			vb_username: this.state.vb_username,
			uplay: this.state.uplay,
			email: this.state.email,
			password: this.state.password
		}
		let successFullRegistration = axios.post(`http://localhost:4000/register_user`, userInfo).then(response => {
			if (response.data.userData) {
				console.log(response.data.userData)
				this.props.logInUser(response.data.userData)
			}
			else if (response.data.error) {
				this.setState({ registerError: response.data.error })
			}
		})

		this.setState({
			vb_username: '',
			uplay: '',
			email: '',
			password: '',
			usernameError: '',
			passwordError: '',
			registerError: ''
		})
	}

	updateUserRegistration(property, value) {
		this.setState({
			[property]: value
		})
	}

	render() {
		return (
			<PageContainer>
				<RegisterContainer>
					<Logo src={LogoIcon} alt="" />

					<Contents>
						<Header style={{ letterSpacing: '2px' }}>
							START <PurpleText>COMPETING</PurpleText>
						</Header>

						<InputContainer>
							<InputTitle>
								<PurpleText>VOID_</PurpleText>BATTLES USERNAME
							</InputTitle>
							<Input value={this.state.vb_username} onChange={(e) => this.updateUserRegistration('vb_username', e.target.value)} />
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>UPLAY NICKNAME</InputTitle>
							<Input value={this.state.uplay} onChange={(e) => this.updateUserRegistration('uplay', e.target.value)} />
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>EMAIL</InputTitle>
							<Input value={this.state.email} onChange={(e) => this.updateUserRegistration('email', e.target.value)} />
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>PASSWORD</InputTitle>
							<Input type="password" value={this.state.password} onChange={(e) => this.updateUserRegistration('password', e.target.value)} />
							<InputError>{this.state.passwordError}</InputError>
						</InputContainer>

						<ButtonContainer>
							<HeroButton onClick={() => this.register()} width="60%">CREATE ACCOUNT</HeroButton>
							<InputError>{this.state.registerError}</InputError>
						</ButtonContainer>
					</Contents>
				</RegisterContainer>
			</PageContainer>
		)
	}
}

function mapStateToProps(state) {
	return { loggedInStatus: state.loggedInStatus }
}

export default connect(mapStateToProps, { logInUser })(Register)
