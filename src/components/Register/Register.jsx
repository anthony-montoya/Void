import React from 'react'
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

export default class Register extends React.Component {
	constructor() {
		super()

		this.state = {
			usernameError: ''
		}
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
							<Input />
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>UPLAY NICKNAME</InputTitle>
							<Input />
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>EMAIL</InputTitle>
							<Input />
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>PASSWORD</InputTitle>
							<Input type="password" />
							<InputError>{this.state.passwordError}</InputError>
						</InputContainer>

						<ButtonContainer>
							<HeroButton width="60%">CREATE ACCOUNT</HeroButton>
							<InputError>{this.state.loginError}</InputError>
						</ButtonContainer>
					</Contents>
				</RegisterContainer>
			</PageContainer>
		)
	}
}
