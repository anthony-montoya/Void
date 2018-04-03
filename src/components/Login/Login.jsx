import React, { Component } from 'react'
import { Context } from '../../ContextAPI'
import LogoIcon from '../../resources/VBLogov2.png'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
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

  componentDidMount() {
    this.props.context.setHeaderTab(4)
  }

  getUserLoginInput(property, value) {
    this.setState({
      [property]: value
    })
  }

  Login = () => {
    axios
      .get(
        `http://localhost:4000/login_user/${this.state.vb_username}/${
          this.state.password
        }`
      )
      .then(response => {
        if (response.data.token) {
          this.props.context.logInUser(
            response.data.userData,
            response.data.token
          )
        } else if (response.data.error) {
          this.setState({ loginError: response.data.error })
        }
      })
  }

  render() {
    if (this.props.context.state.isLoggedIn) {
      return (
        <Redirect
          to={`/vb-profile/${this.props.context.state.userData.vb_username}`}
        />
      )
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
                <HeroButton width="60%" onClick={this.Login}>
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

class ContextLogin extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => <Login context={context} {...this.props} />}
      </Context.Consumer>
    )
  }
}

export default ContextLogin
