import React from 'react'

// Create the Shareable Context
export const Context = React.createContext()

// Provider Component
class MyProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      isLoggedIn: false,
      selectedTab: [false, false, false, false, false],
      userData: {
        uplay: 'BrettlyC',
        vb_username: 'BrettlyClawfield'
      }
    }
  }

  logInUser = (userData, token) => {
    if (token) localStorage.setItem('auth_token', token)
    this.setState({
      isLoggedIn: true,
      userData
    })
  }

  logOutUser = () => {
    localStorage.removeItem('auth_token')
    this.setState({
      isLoggedIn: false,
      userData: {}
    })
  }

  setHeaderTab = tab => {
    const tempArray = this.state.selectedTab.slice(0)
    for (let i = 0; i < tempArray.length; i++) {
      if (tab === i) {
        tempArray[i] = true
      } else {
        tempArray[i] = false
      }
    }
    this.setState({
      selectedTab: tempArray
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          logInUser: this.logInUser,
          logOutUser: this.logOutUser,
          setHeaderTab: this.setHeaderTab
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default MyProvider
