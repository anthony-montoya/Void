import React, { Component } from 'react'
import './Login.css'
import LogoIcon from '../../resources/VBLogov2.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../.././ducks/reducer'
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
			vb_username: '',
			password: '',
			usernameError: '',
			passwordError: '',
			loginError: ''
		}
		
	}


	getUserLoginInput(property, value){
		this.setState({
			[property] : value
		})
	}

	loginAndClearState(){
		this.props.login(this.state)
		
		this.setState({
			vb_username: '',
			password: '',
			usernameError: '',
			passwordError: '',
			loginError: ''
		})
	}

	

	render() {
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
							<Input value={this.state.vb_username} onChange={(e) => this.getUserLoginInput('vb_username', e.target.value)}/>
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>PASSWORD</InputTitle>
							<Input value={this.state.password} type="password" onChange={(e) => this.getUserLoginInput('password', e.target.value)} />
							<InputError>{this.state.passwordError}</InputError>
						</InputContainer>

						<ButtonContainer>
							<HeroButton width="60%" onClick={() => this.loginAndClearState()}  >LOGIN</HeroButton>
							<InputError>{this.state.loginError}</InputError>
						</ButtonContainer>
					</Contents>
				</LoginContainer>
			</PageContainer>
		)
	}

}

function mapStateToProps(state) {
	return {}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
